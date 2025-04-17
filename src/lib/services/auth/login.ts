import axios from 'axios';
import Cookies from 'js-cookie'
import { AppDispatch } from '@/lib/reduxStore/store';
import { setUser, clearUser } from '@/lib/reduxStore/store';


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
  async login(credentials: LoginCredentials, dispatch: AppDispatch) {
    const response = await authApi.post('/auth/login', credentials);
    const userInfo = response.data.user;
    // const oldState = localStorage.getItem('reduxState')
    const data = {
      fullName: userInfo.fullName,
      userName: userInfo.userName || userInfo.fullName,
      userEmail: userInfo.email,
      userBio: userInfo.bio,
      userPhoneNumber: { phoneNumber: userInfo.phone, countryNumber: "+970" },
      userProfileImage: userInfo.userImage,
      userCoverImage: userInfo.profileImage,
      followingCount: userInfo.followingCount,
      followerCount: userInfo.followerCount,
    }
    // localStorage.setItem('reduxState', JSON.stringify({ ...JSON.parse(oldState), userInfo: data }))
    dispatch(setUser(data));
  },

  logout(dispatch: AppDispatch) {
    Cookies.remove('token')
    dispatch(clearUser());
    // const oldState = localStorage.getItem('reduxState')
    // localStorage.setItem('reduxState', JSON.stringify({
    //   ...JSON.parse(oldState), userInfo: {
    //     fullName: "",
    //     userBio: "",
    //     userEmail: "",
    //     followerCount: 0,
    //     followingCount: 0,
    //     userPhoneNumber: "",
    //     userProfileImage: "",
    //     userCoverImage: "",
    //     userName: ""
    //   }
    // }))
  },
};