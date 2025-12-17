import api from "@/lib/axios";

// REGISTER USER
export const registerUser = async (data) => {
  try {
    const response = await api.post("/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// VERIFY EMAIL OTP
export const verifyEmailOtp = async (data) => {
  try {
    const response = await api.post("/verify-email-otp", data , {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// RESEND EMAIL OTP
export const resendEmailOtp = async (data) => {
  try {
    const response = await api.post("/resend-email-otp", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// LOGIN USER
export const loginUser = async (data) => {
  try {
    const response = await api.post("/login", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// LOGOUT USER
export const logoutUser = async () => {
  try {
    const response = await api.post("/logout");
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// FORGOT PASSWORD (SEND OTP)
export const forgotPassword = async (data) => {
  try {
    const response = await api.post("/forgot-password", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// RESEND RESET PASSWORD OTP
export const verifyResetPassOtp = async (data) => {
  try {
    const response = await api.post("/verify-reset-otp", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// RESET PASSWORD
export const resendResetOtp = async (data) => {
  try {
    const response = await api.post("/resend-reset-otp", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};


// SetNewPass PASSWORD
export const setNewPassword = async (data) => {
  try {
    const response = await api.post("/set-new-password", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};