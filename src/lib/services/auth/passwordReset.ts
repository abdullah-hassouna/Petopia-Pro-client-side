import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/';
const authApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export interface forgetCredentials {
    email: string;
}

export interface resetCredentials {
    token: string
    password: string
}

export const passwords = {
    async forget(userData: forgetCredentials) {
        try {
            await authApi.post('/auth/forgot-password', userData);
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Failed to send reset password link.';
            throw new Error(errorMessage);
        }
    },
    async reset(data: resetCredentials) {
        const { password, token } = data
        try {
            await authApi.post(`/auth/reset-password/${token}`, { password })
        } catch (error: any) {
            throw new Error(error.response?.data?.message || 'Failed to reset to a new password.')
        }
    }

};
