import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { 
  Student, 
  StudentsResponse, 
  CreateStudentRequest, 
  UpdateStudentRequest
} from '@/types/student';

const API_BASE_URL = 'http://localhost:8080/api';

// API functions
const studentApi = {
  // Get all students - API returns array directly
  getStudents: async (): Promise<StudentsResponse> => {
    const response = await fetch(`${API_BASE_URL}/students`);
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    return response.json();
  },

  // Get single student by ID
  getStudent: async (id: number): Promise<Student> => {
    const response = await fetch(`${API_BASE_URL}/students/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch student');
    }
    return response.json();
  },

  // Create new student
  createStudent: async (data: CreateStudentRequest): Promise<Student> => {
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
  updateStudent: async ({ id, data }: { id: number; data: UpdateStudentRequest }): Promise<Student> => {
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
  deleteStudent: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/students/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete student');
    }
  },
};

// React Query hooks
export const useStudents = () => {
  return useQuery({
    queryKey: ['students'],
    queryFn: () => studentApi.getStudents(),
    placeholderData: (previousData) => previousData,
  });
};

export const useStudent = (id: number) => {
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