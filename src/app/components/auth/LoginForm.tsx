'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const LoginForm = () => {
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const formSchema = z.object({
    email: z.string().nonempty('Email is required').email('Invalid email').min(6),
    password: z.string().nonempty('Password is required').min(6, { message: 'Password must be at least 6 characters' }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const handelSubmit = async (data) => {
    setLoading(true)
    try {
      console.log(data)
      // await login(data)
      toast({
        title: 'Login success',
        description: 'You have successfully logged in',
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-auto">
              <FormLabel className="capitalize">
                <div className="flex justify-between ">
                  Password
                  <a href="/forget-password" className="text-primary">
                    forget password
                  </a>
                </div>
              </FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" className="w-full p-2 text-white" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
