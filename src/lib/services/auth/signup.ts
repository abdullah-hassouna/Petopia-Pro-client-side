import { AppDispatch, setUser } from '@/lib/reduxStore/store';
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
  async signup(userData: SignupCredentials, dispatch: AppDispatch) {
    try {

      const response = await authApi.post('/auth/signup', { ...userData });
      if (response.status !== 201) {
        throw new Error('Signup failed');
      }
      console.log('response', response);
      const userInfo = response.data.data;
      const data = {
        fullName: userInfo.fullName,
        userName: userInfo.userName ,
        userEmail: userInfo.email,
        userBio: userInfo.bio,
        userPhoneNumber: { phoneNumber: userInfo.phone, countryNumber: "+970" },
        userProfileImage: userInfo.userImage,
        userCoverImage: userInfo.profileImage,
        followingCount: userInfo.followingCount,
        followerCount: userInfo.followerCount,
      }
      dispatch(setUser(data));

    } catch (error: any) {
      const errorMessage = error.message || 'Signup failed';
      throw new Error(errorMessage);
    }
  },

  async googleAuth() {
    window.location.href = 'http://localhost:5000/api/v1/auth/google'
  }
};