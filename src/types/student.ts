// Student types based on actual API response
export interface Student {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  nim: string;
  name: string;
  email: string;
}

export interface CreateStudentRequest {
  name: string;
  email: string;
  nim: string;
}

export interface UpdateStudentRequest {
  name?: string;
  email?: string;
  nim?: string;
}

// API returns array directly, no wrapper
export type StudentsResponse = Student[];



// Form validation types
export interface StudentFormData {
  name: string;
  email: string;
  nim: string;
}

export interface StudentFormErrors {
  name?: string;
  email?: string;
  nim?: string;
}