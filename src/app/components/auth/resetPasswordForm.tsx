'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const ResetPasswordForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const formSchema = z.object({
    password: z.string().nonempty('Password is required').min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z
      .string()
      .nonempty('Confirm password is required')
      .min(6, { message: 'Password must be at least 6 characters' })
      .refine((data) => data === formSchema.password, { message: 'Passwords do not match' }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })
  const handelSubmit = async (data) => {
    setLoading(true)
    try {
      console.log(data)

      toast({
        title: 'reset successfully',
        description: 'Go to the login page',
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
          name="password"
          render={({ field }) => (
            <FormItem className="mt-auto">
              <FormLabel className="capitalize">New password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your new password" {...field} type="password" />
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
                <Input placeholder="Enter the new password again..." {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" className="w-full p-2 text-white" disabled={loading}>
          {loading ? 'Loading...' : 'Reset password'}
        </Button>
      </form>
    </Form>
  )
}

export default ResetPasswordForm
