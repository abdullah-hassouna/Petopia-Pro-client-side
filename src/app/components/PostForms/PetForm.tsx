'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

const PetForm = ({ title }: { title: string }) => {
  const formSchema = z.object({
    petName: z.string().nonempty('Pet name is required'),
    type: z.string().nonempty('Pet type is required'),
    petImage: z.array(z.instanceof(File)).max(1, "you can't upload more than one image.").optional(),
    dob: z.string().nonempty('Pet date of birth is required'),
    healthStatus: z.string().nonempty('Pet health status is required'),
    adoptionStatus: z.string().nonempty('Pet adoption status is required'),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = (data) => {
    console.log(data)
  }
  const petTypes = [
    { id: '1', name: 'Dog' },
    { id: '2', name: 'Cat' },
  ]
  const AdoptionStatus = [
    { id: '1', name: 'Available' },
    { id: '2', name: 'Adopted' },
  ]
  return (
    <div className="min-h-screen bg-background py-8 px-0 md:px-4 ">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-foreground text-whity border border-background">
          <CardHeader>
            <CardTitle className="text-whity"> {title} Pet</CardTitle>
            <CardDescription className="text-whity">{title} your pet information here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-2" onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row w-full gap-2 justify-between">
                  <FormField
                    control={form.control}
                    name="petName"
                    render={({ field }) => (
                      <FormItem className="mt-auto">
                        <FormLabel className="capitalize">Pet Name</FormLabel>
                        <FormControl className="font-light">
                          <Input placeholder={'Pet Name'} {...field} />
                        </FormControl>
                        <FormDescription>What your lovely pet name goes here? </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row gap-2">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem className="w-full m-0 p-0 ring-0 outline-none focus-visible:ring-0 mt-auto">
                          <FormLabel className="capitalize"> Pet Type</FormLabel>
                          <FormControl className="font-light">
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="outline-none shadow-sm focus:outline-none focus-visible:ring-0 font-light hide-scrollbar ">
                                  <SelectValue placeholder="Type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-foreground text-whity border border-background">
                                {petTypes.map((type) => (
                                  <SelectItem key={type.id} value={type.id}>
                                    {type.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormDescription>What is your pet type. </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row w-full gap-2 justify-between">
                  <div className="flex flex-row gap-2">
                    <FormField
                      control={form.control}
                      name="healthStatus"
                      render={({ field }) => (
                        <FormItem className="w-full m-0 p-0 ring-0 outline-none focus-visible:ring-0 mt-auto">
                          <FormLabel className="capitalize">Health Status</FormLabel>
                          <FormControl>
                            <Input placeholder={'Your pet health status'} {...field} />
                          </FormControl>
                          <FormDescription>How is your pet's health?</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <FormField
                      control={form.control}
                      name="adoptionStatus"
                      render={({ field }) => (
                        <FormItem className="w-full m-0 p-0 ring-0 outline-none focus-visible:ring-0 mt-auto ">
                          <FormLabel className="capitalize">Adoption Status</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="outline-none shadow-sm focus:outline-none focus-visible:ring-0 font-light hide-scrollbar ">
                                  <SelectValue placeholder="Your pet adoption status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-foreground text-whity border border-background">
                                {AdoptionStatus.map((status) => (
                                  <SelectItem key={status.id} value={status.id}>
                                    {status.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormDescription>Is your pet up for adoption?</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row w-full gap-2 justify-between">
                  <div className="flex flex-row gap-2">
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="w-full m-0 p-0 ring-0 outline-none focus-visible:ring-0 mt-auto flex flex-col">
                          <FormLabel className="capitalize">Date of Birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl className="font-light">
                                <Button
                                  variant={'ghost'}
                                  className={cn(
                                    'pl-3 text-left font-normal border border-background text-whity',
                                    !field.value && 'text-muted-foreground'
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, 'PPP')
                                  ) : (
                                    <span className="text-whity">Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50 text-whity" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 border border-background rounded-xl" align="start">
                              <Calendar
                                className="bg-foreground text-whity border border-background rounded-lg"
                                mode="single"
                                selected={field.value ? new Date(field.value) : undefined}
                                onSelect={field.onChange}
                                disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>When was your pet born?</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <FormField
                      control={form.control}
                      name="petImage"
                      render={({ field }) => (
                        <FormItem className="w-full m-0 p-0 ring-0 outline-none focus-visible:ring-0 mt-auto">
                          <FormLabel className="capitalize">Pet Image</FormLabel>
                          <FormControl>
                            <Input
                              className="border border-background text-whity font-light whity-input"
                              type="file"
                              accept="image/*"
                              onChange={(e) => field.onChange(Array.from(e.target.files))}
                            />
                          </FormControl>
                          <FormDescription>Would you like to upload more than one image?</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Button type="submit">{title}</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default PetForm
