'use client'
import React from 'react'
import ResetPasswordForm from '../components/auth/resetPasswordForm'
import Image from 'next/image'
import ThemeToggle from '../components/auth/ThemeToggle'

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
                  <h1 className="text-4xl font-bold">Invalid or Missing Token</h1>
                  <ThemeToggle />
                </div>
                <p className="text-whity mb-6">
                The reset password link is invalid or missing. Please ensure you have the correct link or request a new one.
              </p>
              </div>
              
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
