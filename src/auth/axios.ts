import axios from 'axios'

const unAuthedAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_V1_API_ROUTE,
})

export default unAuthedAxios