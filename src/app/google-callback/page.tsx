'use client'
import Cookies from 'js-cookie'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const AuthCallback = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      // Store the token in local storage
       if (token) {
            Cookies.set('token', token, {
              expires: 1, // Expires in 7 days
              // secure: process.env.NODE_ENV === 'production'  , // Use secure cookies in production
              sameSite: 'strict', // Prevent CSRF
            })
           
          }
      router.push('/') 
    }
  }, [searchParams, router])

  return <div>Redirecting...</div>
}

export default AuthCallback
