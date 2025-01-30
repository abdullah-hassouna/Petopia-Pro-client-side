'use client'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, ZodSchema } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { useToast } from '@/hooks/use-toast'
import { PostDetails } from '@/app/interfaces/postInterface'

const FormComponent = ({ tag, postData }: { tag: { title: string; id: number }; postData?: PostDetails }) => {
  const { toast } = useToast()
  const [formSchema, setFormSchema] = useState<ZodSchema>(
    z.object({
      postContent: z.string().nonempty("Post content can't be empty."),
      images: z.array(z.instanceof(File)).max(5, "you can't upload more than 5 images.").optional(),
    })
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postContent: postData?.postContent || '',
      images: [],
      petId: postData?.pet?.id || '',
      productId: postData?.product?.id || '',
    },
  })

  useEffect(() => {
    let newSchema = z.object({
      postContent: z.string().nonempty("Post content can't be empty."),
      images: z.array(z.instanceof(File)).max(5, "you can't upload more than 5 images.").optional(),
    })

    if (tag.title.toLowerCase() === 'adoption' || tag.title.toLowerCase() === 'breeding') {
      newSchema = newSchema.extend({
        petId: z.string().nonempty('Pet is required'),
      })
    } else if (tag.title.toLowerCase() === 'product') {
      newSchema = newSchema.extend({
        productId: z.string().nonempty('Product is required'),
      })
    }

    setFormSchema(newSchema)
    form.reset({ resolver: zodResolver(newSchema) })
  }, [tag, form])

  const pets = [
    { id: '1', name: 'Pet 1' },
    { id: '2', name: 'Pet 2' },
  ]

  const products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
  ]

  const onSubmit = (data) => {
    const initialValue = {
      postContent: postData?.postContent || '',
      images: [],
      petId: postData?.pet?.id || '',
      productId: postData?.product?.id || '',
    }
    const changedData = Object.keys(data).reduce((acc, key) => {
      if (key === 'images') {
        console.log(data[key].length > 0)
        if (data[key].length > 0) {
          acc[key] = data[key]
        }
      } else if (data[key] != initialValue[key]) {
        acc[key] = data[key]
      }
      return acc
    }, {})
    Object.keys(changedData).length === 0
      ? toast({
          title: 'No changes.',
          description: 'No changes detected, skipping submission.',
        })
      : toast({
          title: 'Submitted',
          description: `Your ${tag.title.toLowerCase()} post information has been submitted successfully`,
        })
    console.log('submit', changedData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="postContent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post Content</FormLabel>
              <FormControl>
                <Textarea
                  className="border border-background font-light"
                  {...field}
                  placeholder="Write your post content here..."
                />
              </FormControl>
              <FormDescription>Write the content of your post.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input
                  className="border border-background text-whity font-light whity-input"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => field.onChange(Array.from(e.target.files))}
                />
              </FormControl>
              <FormDescription>Upload images to your post, up to 5 images per post.</FormDescription>
              <div className="flex flex-wrap gap-2">
                {field.value &&
                  field.value.map((image, index) => (
                    <div key={index} className="w-20 h-20 relative my-2">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {(tag.title.toLowerCase() === 'adoption' || tag.title.toLowerCase() === 'breeding') && (
          <FormField
            control={form.control}
            name="petId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pet</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <FormControl>
                      <SelectTrigger className="outline-none shadow-sm focus:outline-none focus-visible:ring-0 font-light hide-scrollbar ">
                        <SelectValue placeholder="Your pet" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-foreground text-whity border border-background">
                      {pets.map((pet) => (
                        <SelectItem key={pet.id} value={pet.id}>
                          {pet.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>Choose the pet that you want to make an adoption post about.</FormDescription>
                <p className="text-[0.8rem]">
                  You don't have a pet yet?{' '}
                  <Link href={'/pet/add'} target="_blank" className="text-primary-90 hover:underline">
                    {' '}
                    Add new pet
                  </Link>
                </p>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {tag.title.toLowerCase() === 'product' && (
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <FormControl>
                      <SelectTrigger className="outline-none shadow-sm focus:outline-none focus-visible:ring-0 font-light hide-scrollbar">
                        <SelectValue placeholder="Your product" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-foreground text-whity border border-background">
                      {products.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>Choose the product that you want to make a post about.</FormDescription>
                <p className="text-[0.8rem]">
                  You don't have a product yet?{' '}
                  <Link href={'/product/add'} target="_blank" className="text-primary-90 hover:underline">
                    {' '}
                    Add new Product
                  </Link>
                </p>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button className="mt-4" type="submit">
          {postData ? 'Edit' : 'Add'}
        </Button>
      </form>
    </Form>
  )
}

export default FormComponent
