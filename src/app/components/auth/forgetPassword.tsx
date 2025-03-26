'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

const ForgetPasswordForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const formSchema = z.object({
    email: z.string().nonempty('Email is required').email('Invalid email').min(6),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })
  const handelSubmit = async (data) => {
    setLoading(true)
    try {
      console.log(data)
      setSent(true)
      toast({
        title: 'submitted successfully',
        description: 'Enter the OTP sent to your email',
      })
    } catch (error) {
      toast({
        title: 'something went wrong',
        description: error.message,
      })
    }
    setLoading(false)
  }

  const OTPFormSchema = z.object({
    otp: z.string().min(6, {
      message: 'Your one-time password must be 6 characters.',
    }),
  })

  const otpForm = useForm<z.infer<typeof OTPFormSchema>>({
    resolver: zodResolver(OTPFormSchema),
    defaultValues: {
      otp: '',
    },
  })
  const handelOTPSubmit = async (data) => {
    setLoading(true)
    try {
      console.log(data)
      toast({
        title: 'Submitted successfully',
        description: 'check your email for password reset link',
      })
    } catch (error) {
      toast({
        title: 'something went wrong',
        description: error.message,
      })
    }
    setLoading(false)
  }

  return (
    <div>
      {!sent && (
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(handelSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-auto">
                  <FormLabel className="capitalize">Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="default" className="w-full p-2 text-white" disabled={loading}>
              {loading ? 'Loading...' : 'Send OTP'}
            </Button>
          </form>
        </Form>
      )}
      {sent && (
        <Form {...otpForm}>
          <form className="space-y-4" onSubmit={form.handleSubmit(handelOTPSubmit)}>
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
                  <FormDescription>Please enter the one-time password sent to your Email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="default" className="w-full p-2 text-white" disabled={loading}>
              {loading ? 'Loading...' : 'submit'}
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}

export default ForgetPasswordForm
