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
import { passwords } from '@/lib/services/auth/passwordReset'

const ForgetPasswordForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

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
      await passwords.forget(data)
      toast({
        title: 'submitted successfully',
        description: 'Check your email for reset link',
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
            {loading ? 'Loading...' : 'Send'}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ForgetPasswordForm
