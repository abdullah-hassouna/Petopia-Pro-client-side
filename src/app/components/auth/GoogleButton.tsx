import { Button } from '@/components/ui/button'
import React from 'react'
import { useToast } from '@/hooks/use-toast'
import { signupService } from '@/lib/services/auth/signup'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const GoogleButton = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleGoogleAuth = async () => {
    setLoading(true)
    try {
      //  await signupService.googleAuth()
      window.location.href = 'http://localhost:5000/api/v1/auth/google'
      // If the API returns a URL to redirect to
      //  if (response.url) {
      //   window.location.href = response.url;
      //   return;
      // }
      // console.log(response)
      toast({
        title: 'Login successful',
        description: 'You have successfully signed in with Google',
      })
      router.push('/')
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Google Sign In Error',
        description: error.message || 'There was a problem signing in with Google',
      })
    }
    setLoading(false)
  }

  return (
    <Button
      onClick={handleGoogleAuth}
      variant="ghost"
      className="flex items-center justify-center w-full p-2 mt-4 text-whity font-normal rounded border border-background  hover:bg-opacity-80"
    >
      <img src="/assets/google-icon-logo.svg" alt="Google Icon" className="mr-1 w-6 h-6" />
      Sign in with Google
    </Button>
  )
}

export default GoogleButton
