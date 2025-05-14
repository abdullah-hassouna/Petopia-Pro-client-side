import axios from 'axios'

const axiosCall = axios.create({
    baseURL: process.env.NEXT_PUBLIC_V1_API_ROUTE,
})

export default axiosCall