'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { loginService, LoginCredentials } from '@/lib/services/auth/login'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
const LoginForm = () => {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const router = useRouter()
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
      await loginService.login(data, dispatch)

      toast({
        title: 'Login success',
        description: 'You have successfully logged in',
      })
      router.push('/')
    } catch (error) {
      let errorMessage = error.response.data.message || 'something went wrong, please try again'

      if (error.response.data.data?.message === 'data and hash arguments required') {
        errorMessage =
          'you seems that logged in before with google, try asking for new password, or login with google instead.'
      }
      toast({
        variant: 'destructive',
        title: 'Login failed.',
        description: errorMessage,
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
                  {/* <a href="/forget-password" className="text-primary">
                    forget password
                  </a> */}
                  <button type="button" className="text-primary" onClick={() => router.push('/forget-password')}>
                    Forget password
                  </button>
                </div>
              </FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
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
