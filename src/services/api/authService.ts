import axios from "@/lib/axios";

export const authService = {
  login: async (credentials: { email: string; password: string }) => {
    const response = await axios.post("/users/login", credentials);
    return response.data;
  },
  signup: async (userData: { email: string; password: string }) => {
    const response = await axios.post("/users", userData);
    return response.data;
  },
  logout: () => {
    localStorage.removeItem("token");
  },
};
