import axios from 'axios';
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:5000/api/v1/';

const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export interface validateCredentials {
  email: string;
  otp: string;
}

export interface AuthResponse {
  token: string;
  message?: string;
}

export const validateUser = {
  async validate(userData: validateCredentials): Promise<AuthResponse> {
    try {
      const response = await authApi.post('/auth/verify', userData);

      if (response.data?.token) {

        Cookies.set('token', response.data?.token, {
          expires: 1,
          // secure: process.env.NODE_ENV === 'production'  , // Use secure cookies in production
          sameSite: 'strict', // Prevent CSRF
        })
      }
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Validate failed';
      throw new Error(errorMessage);
    }
  },

};

export const resendOTP = async ({ email }: { email: string }) => {
  try {
    const response = await authApi.post('/auth/new-otp', { email })
    return response.data
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to resend OTP')
  }
}