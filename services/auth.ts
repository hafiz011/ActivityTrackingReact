// services/auth.ts
export interface LoginResponse {
  Token: string; // Use exact casing from your backend
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}

export interface LogoutResponse {
  success: boolean;
}

export interface AccountDetails {
  id: string;
  email: string;
  name: string;
  // Add fields as returned by your backend
}
