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
    const userInfo = response.data.user;
    const oldState = localStorage.getItem('reduxState')
    localStorage.setItem('reduxState', JSON.stringify({ ...JSON.parse(oldState), userInfo: userInfo }))
  },

  logout() {
    Cookies.remove('token')
    const oldState = localStorage.getItem('reduxState')
    localStorage.setItem('reduxState', JSON.stringify({
      ...JSON.parse(oldState), userInfo: {
        bio: "user bio",
        email: "",
        followerCount: 0,
        followingCount: 0,
        isAdmin: false,
        phone: "",
        profileImage: "",
        userImage: "https://i.imgur.com/E0TQFoe.png",
        userName: "user"
      }
    }))
  },
};