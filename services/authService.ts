import axios from "axios";

const API_BASE_URL = "https://localhost:5011";

type User = {
  id: string;
  email: string;
  fullName: string;
};

type LoginResponse = {
  Token?: string;
  token?: string;
  User?: User;
  user?: User;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post<LoginResponse>(`${API_BASE_URL}/api/auth/login`, {
    email,
    password,
  });
  const data = response.data;

  return {
    token: data.Token || data.token,
    user: data.User || data.user,
  };
};

