import axios from 'axios'

const authedAxios = axios.create({
    baseURL: '/api',
    withCredentials: true,
})

export default authedAxios
