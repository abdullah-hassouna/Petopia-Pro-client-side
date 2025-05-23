'use client'
import React from 'react'
import SignupForm from '../components/auth/signupForm'
import GoogleButton from '../components/auth/GoogleButton'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ThemeToggle from '../components/auth/ThemeToggle'

const SignupPage = () => {
  const router = useRouter()
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background p-0">
      <div className="h-full w-full flex overflow-hidden bg-foreground text-whity">
        {/* left side - form */}
        <div className="w-full md:w-1/2 p-4 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="bg-foreground/30 p-6">
              <div className="mb-10">
                <div className="flex gap-3 items-center justify-start">
                  <h1 className="text-4xl font-bold">Get Started Now </h1>
                  <ThemeToggle />
                </div>
              </div>
              <SignupForm />

              <div className="relative flex items-center justify-center my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-background"></div>
                </div>
                <div className="relative px-4 text-sm font-medium bg-foreground text-whity">OR</div>
              </div>

              <div className="mt-4">
                <GoogleButton />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <p className="text-whity">
                Have an account?{' '}
                <button onClick={() => router.push('/login')} className="text-primary font-medium hover:underline">
                  Login here
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* right side - Pet Image */}
        <div className="hidden md:block w-1/2 relative">
          <div className="h-full w-full overflow-hidden rounded-l-lg">
            <Image
              src="/assets/pet-login-3.jpg"
              alt="Cute pet"
              fill
              className="object-cover rounded-l-[36px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
