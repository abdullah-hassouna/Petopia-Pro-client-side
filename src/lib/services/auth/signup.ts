import axios from 'axios';
import Cookies from 'js-cookie'
// import { useRouter } from 'next/navigation'

const API_URL = 'http://localhost:5000/api/v1/';

const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string; // Optional for validation only
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    [key: string]: any; // For any additional user properties
  };
  token: string;
  message?: string;
}

export const signupService = {
  async signup(userData: SignupCredentials) {
    try {
      const response = await authApi.post('/auth/signup', userData);

      // Store auth data if signup is successful
      // console.log('token', response.data);

      // if (response.data?.token) {
      //   // localStorage.setItem('token', response.data.token);
      //   // localStorage.setItem('user', JSON.stringify(response.data.user));
      //   Cookies.set('token', response.data?.token, {
      //     expires: 7, // Expires in 7 days
      //     // secure: process.env.NODE_ENV === 'production'  , // Use secure cookies in production
      //     sameSite: 'strict', // Prevent CSRF
      //   })
      //   Cookies.set('user', JSON.stringify(response.data.user), {
      //     expires: 7, // Expires in 7 days
      //     // secure: process.env.NODE_ENV === 'production'  , // Use secure cookies in production
      //     sameSite: 'strict', // Prevent CSRF
      //   })
      // }
      if (response.status !== 201) {

        console.log(response.status);
        throw new Error('Signup failed');
      }
      return response.data;
    } catch (error: any) {
      const errorMessage = error.message || 'Signup failed';
      throw new Error(errorMessage);
    }
  },

  async googleAuth() {
    try {
      // If token is provided, send it to the backend
      const response = await authApi.get('auth/google'); // Get URL for redirection

      // If this returns directly with a token (one-step process)
      // if (response.data?.token) {
      //   localStorage.setItem('token', response.data.token);
      //   localStorage.setItem('user', JSON.stringify(response.data.user));
      // }

      return response;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Google authentication failed';
      throw new Error(errorMessage);
    }
  }
};