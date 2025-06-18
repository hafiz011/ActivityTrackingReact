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

// --------- API Calls ---------

// Login
export const loginApi = async (email: string, password: string): Promise<{ token: string; user: User }> => {
  const response = await axios.post<LoginResponse>("/auth/login", { email, password });

  // Ensure correct structure
  const data = response.data;

  if (!data.Token || !data.User) {
    throw new Error("Login response is missing token or user information.");
  }

  return {
    token: data.Token,
    user: data.User,
  };
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
