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
  phoneNumber: string
  address: Address
  imageFile?: File // For file upload
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

export const updateProfile = async (
  profile: UpdateProfileRequest,
): Promise<{ message: string; imagePath?: string }> => {
  const formData = new FormData()

  // Add text fields
  formData.append("FirstName", profile.firstName)
  formData.append("LastName", profile.lastName)
  formData.append("Phone", profile.phoneNumber || "")

  // Add address fields
  if (profile.address) {
    formData.append("Address.address", profile.address.address || "")
    formData.append("Address.City", profile.address.City || "")
    formData.append("Address.Country", profile.address.Country || "")
  }

  // Add image file if provided
  if (profile.imageFile) {
    formData.append("ImagePath", profile.imageFile)
  }

  const response = await axios.put<{ message: string; imagePath?: string }>("/auth/account", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

  return response.data
}

export const changePassword = async (request: ChangePasswordRequest): Promise<void> => {
  await axios.post("/auth/change-password", request)
}

