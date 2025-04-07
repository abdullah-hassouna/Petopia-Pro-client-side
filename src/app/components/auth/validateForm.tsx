'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { useSearchParams } from 'next/navigation'
import { validateUser, resendOTP } from '@/lib/services/auth/validate'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const validateForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [timer, setTimer] = useState(180)
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const router = useRouter()
  const formSchema = z.object({
    otp: z.string().min(6, {
      message: 'Your one-time password must be 6 characters.',
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: '',
    },
  })
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  const handelSubmit = async (data) => {
    setLoading(true)
    try {
      const response = await validateUser.validate({ ...data, email })

      toast({
        title: 'submitted successfully',
        description: 'user validated successfully',
      })
      const token = Cookies.get('token')
      if (token) {
        router.push('/')
      }
    } catch (error) {
      toast({
        title: 'something went wrong',
        description: error.message,
      })
    }
    setLoading(false)
  }
  const handleResendOTP = async () => {
    setResendLoading(true)
    try {
      await resendOTP({ email }) // Call the resend OTP service
      toast({
        title: 'OTP Resent',
        description: 'A new OTP has been sent to your email.',
      })
      setTimer(180) // Reset the timer to 3 minutes
    } catch (error) {
      toast({
        title: 'Failed to resend OTP',
        description: error.message,
      })
    }
    setResendLoading(false)
  }

  return (
    <div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(handelSubmit)}>
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="mt-auto">
                <FormLabel className="capitalize">One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>Please enter the one-time password that has been sent to your Email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="default" className="w-full p-2 text-white" disabled={loading}>
            {loading ? 'Loading...' : 'validate'}
          </Button>
        </form>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Resend OTP in: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
          </p>
          <Button variant="outline" className="text-sm" onClick={handleResendOTP} disabled={timer > 0 || resendLoading}>
            {resendLoading ? 'Resending...' : 'Resend OTP'}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default validateForm
