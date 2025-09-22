// Student types based on technical architecture
export interface Student {
  id: string;
  name: string;
  email: string;
  nim: string;
  phone?: string;
  enrollmentDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStudentRequest {
  name: string;
  email: string;
  nim: string;
  phone?: string;
  enrollmentDate: string;
}

export interface UpdateStudentRequest {
  name?: string;
  email?: string;
  phone?: string;
}

export interface StudentsResponse {
  students: Student[];
  total: number;
  page: number;
  limit: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code: string;
  details?: any;
}

// Form validation types
export interface StudentFormData {
  name: string;
  email: string;
  nim: string;
  phone: string;
  enrollmentDate: string;
}

export interface StudentFormErrors {
  name?: string;
  email?: string;
  nim?: string;
  phone?: string;
  enrollmentDate?: string;
}