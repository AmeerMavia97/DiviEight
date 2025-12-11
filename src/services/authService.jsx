import api from "@/lib/axios";

// REGISTER USER
export const registerUser = async (data) => {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
