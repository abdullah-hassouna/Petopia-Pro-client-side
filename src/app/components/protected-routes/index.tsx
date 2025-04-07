// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'

// const index = async ({ children }) => {
//   const router = useRouter()

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (!token) {
//       // Redirect to login if no token is found
//       router.push('/login')
//     }
//   }, [router])
//   return <>{children}</>
// }
// export default index
'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const withAuth = async (WrappedComponent: React.ComponentType) => {
  return (props) => {
    const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem('token')
      if (!token) {
        // Redirect to login if no token is found
        router.push('/login')
      }
    }, [router])

    // Render the wrapped component only if the token exists
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!token) {
      return null // Render nothing while redirecting
    }

    return <WrappedComponent {...props} />
  }
}

export default withAuth
