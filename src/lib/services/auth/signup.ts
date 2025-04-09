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
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string; // Optional for validation only
  username: string;
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
      const username = `${userData.fullName.split(' ').join('').toLowerCase()}${Math.floor(1000 + Math.random() * 9000)}`;
      const response = await authApi.post('/auth/signup', { ...userData, username });
      if (response.status !== 201) {

        console.log(response.status);
        throw new Error('Signup failed');
      }
      const userInfo = response.data.user;
      const oldState = localStorage.getItem('reduxState')
      localStorage.setItem('reduxState', JSON.stringify({ ...JSON.parse(oldState), userInfo: userInfo }))
    } catch (error: any) {
      const errorMessage = error.message || 'Signup failed';
      throw new Error(errorMessage);
    }
  },

  async googleAuth() {
    window.location.href = 'http://localhost:5000/api/v1/auth/google'
  }
};