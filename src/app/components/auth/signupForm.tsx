'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const signupForm = () => {
  const { toast } = useToast()
  //   const [email, setEmail] = useState('')
  //   const [password, setPassword] = useState('')
  //   const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const formSchema = z.object({
    email: z.string().nonempty('Email is required').email('Invalid email').min(6),
    password: z.string().nonempty('Password is required').min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z
      .string()
      .nonempty('Confirm password is required')
      .min(6, { message: 'Password must be at least 6 characters' })
      .refine((data) => data === formSchema.password, { message: 'Passwords do not match' }),
    fullName: z
      .string()
      .nonempty('Full name is required')
      .min(6, { message: 'Full name must be at least 6 characters' }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      confirmPassword: '',
    },
  })
  const handelSubmit = async (data) => {
    setLoading(true)
    try {
      console.log(data)
      // await signup(data)
      toast({
        title: 'signup success',
        description: 'You have successfully signup',
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
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(handelSubmit)}>
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="mt-auto">
              <FormLabel className="capitalize">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-auto">
              <FormLabel className="capitalize">Email address</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-auto">
              <FormLabel className="capitalize">Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="mt-auto">
              <FormLabel className="capitalize">confirm password</FormLabel>
              <FormControl>
                <Input placeholder="Enter password again..." {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="default" className="w-full p-2 text-white" disabled={loading}>
          {loading ? 'Loading...' : 'signup'}
        </Button>
      </form>
    </Form>
  )
}

export default signupForm
