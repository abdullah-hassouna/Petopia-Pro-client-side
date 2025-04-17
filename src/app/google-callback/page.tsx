'use client'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const AuthCallback = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const API_URL = 'http://localhost:5000/api/v1/'

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      // Store the token in cookies
      Cookies.set('token', token, {
        expires: 1, // Expires in 1 day
        sameSite: 'strict', // Prevent CSRF
      })

      // Fetch googleUser data from the backend using axios
      axios
        .get(`${API_URL}auth/google-user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data
          console.log('Google User Data:', data);
          // Store googleUser in local storage for Redux caching
          const oldState = localStorage.getItem('reduxState')
          localStorage.setItem('reduxState', JSON.stringify({ ...JSON.parse(oldState), userInfo: data.googleUser }))
       
          // Optionally, dispatch to Redux store if needed
          // dispatch({ type: 'SET_GOOGLE_USER', payload: data.googleUser });

          router.push('/')
        })
        .catch((error) => {
          console.error('Error fetching googleUser:', error)
        })
    } else {
      router.push('/login')
    }
  }, [searchParams, router])

  return <div>Redirecting...</div>
}

export default AuthCallback
