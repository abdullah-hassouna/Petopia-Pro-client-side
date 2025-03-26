import { Button } from '@/components/ui/button'
import React from 'react'

const GoogleButton = () => {
  const handleGoogleSignIn = () => {
    console.log('Sign in with Google')
    // Logic for signing in with Google
  }

  return (
    <Button
      onClick={handleGoogleSignIn}
       variant="ghost"
      className="flex items-center justify-center w-full p-2 mt-4 text-whity font-normal rounded border border-background  hover:bg-opacity-80"
    >
      <img src="/assets/google-icon-logo.svg" alt="Google Icon" className="mr-1 w-6 h-6" />
      Sign in with Google
    </Button>
  )
}

export default GoogleButton
