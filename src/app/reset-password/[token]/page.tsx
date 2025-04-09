'use client'
import React from 'react'
import ResetPasswordForm from '@/app/components/auth/resetPasswordForm'
import Image from 'next/image'
import ThemeToggle from '@/app/components/auth/ThemeToggle'

const RestPasswordPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background p-0">
      <div className="h-full w-full flex overflow-hidden bg-foreground text-whity">
        {/* left side - form */}
        <div className="w-full md:w-1/2 p-4 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="bg-foreground/30 p-6">
              <div className="mb-10">
                <div className="flex gap-3 items-center justify-start">
                  <h1 className="text-4xl font-bold">Reset Password </h1>
                  <ThemeToggle />
                </div>
                <p className="mt-3 text-whity">Here you can reset your password.</p>
              </div>
              <ResetPasswordForm />
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

export default RestPasswordPage
