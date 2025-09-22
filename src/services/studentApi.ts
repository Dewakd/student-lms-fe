import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { 
  Student, 
  StudentsResponse, 
  CreateStudentRequest, 
  UpdateStudentRequest, 
  ApiResponse 
} from '@/types/student';

const API_BASE_URL = '/api';

// API functions
const studentApi = {
  // Get all students with pagination and filters
  getStudents: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
  }): Promise<StudentsResponse> => {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.search) searchParams.append('search', params.search);
    if (params?.status) searchParams.append('status', params.status);

    const response = await fetch(`${API_BASE_URL}/students?${searchParams}`);
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    return response.json();
  },

  // Get single student by ID
  getStudent: async (id: string): Promise<ApiResponse<Student>> => {
    const response = await fetch(`${API_BASE_URL}/students/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch student');
    }
    return response.json();
  },

  // Create new student
  createStudent: async (data: CreateStudentRequest): Promise<ApiResponse<Student>> => {
    const response = await fetch(`${API_BASE_URL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create student');
    }
    return response.json();
  },

  // Update student
  updateStudent: async ({ id, data }: { id: string; data: UpdateStudentRequest }): Promise<ApiResponse<Student>> => {
    const response = await fetch(`${API_BASE_URL}/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to update student');
    }
    return response.json();
  },

  // Delete student
  deleteStudent: async (id: string): Promise<ApiResponse<null>> => {
    const response = await fetch(`${API_BASE_URL}/students/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete student');
    }
    return response.json();
  },
};

// React Query hooks
export const useStudents = (params?: {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
}) => {
  return useQuery({
    queryKey: ['students', params],
    queryFn: () => studentApi.getStudents(params),
    placeholderData: (previousData) => previousData,
  });
};

export const useStudent = (id: string) => {
  return useQuery({
    queryKey: ['student', id],
    queryFn: () => studentApi.getStudent(id),
    enabled: !!id,
  });
};

export const useCreateStudent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: studentApi.createStudent,
    onSuccess: () => {
      // Invalidate and refetch students list
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: studentApi.updateStudent,
    onSuccess: (data, variables) => {
      // Invalidate and refetch students list
      queryClient.invalidateQueries({ queryKey: ['students'] });
      // Update the specific student in cache
      queryClient.invalidateQueries({ queryKey: ['student', variables.id] });
    },
  });
};

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: studentApi.deleteStudent,
    onSuccess: () => {
      // Invalidate and refetch students list
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
};