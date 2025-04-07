import axios from 'axios';
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:5000/api/v1/';
// const API_URL = 'https://your-production-url.com/api/v1/';

const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export interface LoginCredentials {
  email: string;
  password: string;
}

export const loginService = {
  async login(credentials: LoginCredentials) {
    const response = await authApi.post('/auth/login', credentials);
    console.log("response login", response);
    if (response.data?.token) {
      Cookies.set('token', response.data?.token, {
        expires: 1, // Expires in 7 days
        // secure: process.env.NODE_ENV === 'production'  , // Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF
      })
      Cookies.set('user', JSON.stringify(response.data.user), {
        expires: 1, // Expires in 7 days
        // secure: process.env.NODE_ENV === 'production'  , // Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF
      })
    }

    return response.data;
  },

  logout() {
    Cookies.remove('token')
    Cookies.remove('user')
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
  },
};