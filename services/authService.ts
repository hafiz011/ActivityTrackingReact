import axios from "@/lib/axios"; // কাস্টম axios instance

// --------- Type Definitions ---------
type User = {
  id: string;
  email: string;
  fullName: string;
};

type LoginResponse = {
  Token: string;
  User: User;
};

type Address = {
  address: string;
  City: string;
  Country: string;
};

type RegisterModel = {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Address: Address;
  Password: string;
};

type ConfirmEmailRequest = {
  UserId: string;
  Token: string;
};

// Profile types
export type UserProfile = {
  firstName: string
  lastName: string
  email: string
  emailConfirmed: boolean
  phoneNumber: string
  phoneNumberConfirmed: boolean
  address: Address
  imagePath?: string
}

export type UpdateProfileRequest = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: Address
}

export type ChangePasswordRequest = {
  currentPassword: string
  newPassword: string
}


// --------- API Calls ---------

export const loginApi = async (
  email: string,
  password: string
): Promise<{ token: string; user: User }> => {
  const response = await axios.post<LoginResponse>("/auth/login", { email, password });

  const data = response.data;

  const token = data.Token || data.token;
  const user = data.User || data.user;

  if (!token || !user) {
    throw new Error("Login response is missing token or user information.");
  }

  return { token, user };
};


// Register
export const register = async (model: RegisterModel): Promise<any> => {
  const response = await axios.post("/auth/register", model);
  return response.data;
};

// Confirm Email
export const confirmEmail = async (request: ConfirmEmailRequest): Promise<any> => {
  const response = await axios.post("/auth/confirm-email", request);
  return response.data;
};

// Profile service functions
export const getAccountDetails = async (): Promise<UserProfile> => {
  const response = await axios.get<UserProfile>("/auth/account")
  return response.data
}

export const updateProfile = async (profile: UpdateProfileRequest): Promise<UserProfile> => {
  const response = await axios.put<UserProfile>("/auth/account", profile)
  return response.data
}

export const changePassword = async (request: ChangePasswordRequest): Promise<void> => {
  await axios.post("/auth/change-password", request)
}

// Additional utility functions
export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken")
  }
}

export const getStoredToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authToken")
  }
  return null
}

export const isAuthenticated = (): boolean => {
  return !!getStoredToken()
}

