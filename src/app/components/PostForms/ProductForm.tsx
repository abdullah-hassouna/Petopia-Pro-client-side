'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Product } from '@/app/interfaces/postInterface'
import { useToast } from '@/hooks/use-toast'
import { Textarea } from '@/components/ui/textarea'

const ProductForm = ({ title, productData }: { title: string; productData?: Product }) => {
  const { toast } = useToast()
  //   id: string
  //   userId: string
  //   title: string
  //   stock: number
  //   price: number
  //   details: string
  //   rating: number
  //productImage?: []string
  const formSchema = z.object({
    title: z.string().nonempty('Product name is required.'),
    stock: z
      .number({
        required_error: 'Stock is required.',
        invalid_type_error: 'Stock must be a number.',
      })
      .min(1, 'Stock must be at least 1.')
      .positive('Stock must be a positive number'),
    price: z
      .number({
        required_error: 'Price is required.',
        invalid_type_error: 'Price must be a number.',
      })
      .min(1, 'Price must be at least 1.')
      .positive('Price must be a positive number'),
    details: z.string().nonempty('Details is required.'),
    productImage: z.array(z.instanceof(File)).max(5, "you can't upload more than 5 image.").optional(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: productData?.title || '',
      stock: productData?.stock || 0,
      price: productData?.price || 0,
      details: productData?.details || '',
    },
  })

  const handleSubmit = (data) => {
    const initialValues = {
      title: productData?.title || '',
      stock: productData?.stock || 0,
      price: productData?.price || 0,
      details: productData?.details || '',
    }

    const changedData = Object.keys(data).reduce((acc, key) => {
      if (data[key] !== initialValues[key]) {
        acc[key] = data[key]
      }
      return acc
    }, {})

    if (Object.keys(changedData).length === 0) {
      toast({
        title: 'No changes.',
        description: 'No changes detected, skipping submission.',
      })
      return
    }

    toast({
      title: 'Submitted',
      description: 'Your product information has been submitted successfully.',
    })
    console.log('Changed data:', changedData)
  }

  return (
    <div className="min-h-screen bg-background py-8 px-0 md:px-4 ">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-foreground text-whity border border-background">
          <CardHeader>
            <CardTitle className="text-whity"> {title} Product</CardTitle>
            <CardDescription className="text-whity">{title} your product information here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form className="space-y-2" onSubmit={form.handleSubmit(handleSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row w-full gap-2 justify-between items-start">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="capitalize">Product Name</FormLabel>
                        <FormControl className="font-light">
                          <Input placeholder={'Name'} {...field} />
                        </FormControl>
                        <FormDescription>What's your product name? </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row gap-2">
                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem className="w-full m-0 p-0 ring-0 outline-none focus-visible:ring-0 mt-auto">
                          <FormLabel className="capitalize"> Product details</FormLabel>
                          <FormControl className="font-light">
                            <Textarea placeholder={'Details'} {...field} className="border border-background" />
                          </FormControl>
                          <FormDescription>Tell us more about your product.</FormDescription>
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
                      name="stock"
                      render={({ field }) => (
                        <FormItem className="w-full m-0 p-0 ring-0 outline-none focus-visible:ring-0 mt-auto">
                          <FormLabel className="capitalize">Product Stocks</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'Stock'}
                              type="number"
                              {...field}
                              min={0}
                              value={field.value || ''}
                              onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                            />
                          </FormControl>
                          <FormDescription>How many items of this product you have?</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-row gap-2">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem className="w-full m-0 p-0 ring-0 outline-none focus-visible:ring-0 mt-auto ">
                          <FormLabel className="capitalize">Price</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={'Price'}
                              type="number"
                              {...field}
                              min={0}
                              value={field.value || ''}
                              onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                            />
                          </FormControl>
                          <FormDescription>How much is your product?</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <FormField
                    control={form.control}
                    name="productImage"
                    render={({ field }) => (
                      <FormItem className="w-full m-0 p-0 ring-0 outline-none focus-visible:ring-0 mt-auto">
                        <FormLabel className="capitalize">Product Image</FormLabel>
                        <FormControl>
                          <Input
                            className="border border-background text-whity font-light whity-input"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => field.onChange(Array.from(e.target.files))}
                          />
                        </FormControl>
                        <FormDescription>Would you like to upload an images of you product?</FormDescription>
                        <div className="flex flex-wrap gap-2">
                          {field.value &&
                            field.value.map((image, index) => (
                              <div key={index} className="w-20 h-20 relative my-2">
                                <img
                                  src={URL.createObjectURL(image)}
                                  alt={`Preview ${index}`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row w-full gap-2 justify-center items-center">
                  <div className="col-span-1 md:col-span-2 flex justify-center">
                    <Button type="submit" className="w-full md:w-1/2 lg:w-1/3">
                      {title}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default ProductForm
