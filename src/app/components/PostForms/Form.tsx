import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, ZodSchema } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'

const FormComponent = ({ tag }: { tag: { title: string; id: number } }) => {
  const [formSchema, setFormSchema] = useState<ZodSchema>(
    z.object({
      postContent: z.string().nonempty(),
      images: z.array(z.instanceof(File)).optional(),
    })
  )

  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (tag.title.toLowerCase() === 'adoption' || tag.title.toLowerCase() === 'breeding') {
      setFormSchema(
        z.object({
          postContent: z.string().nonempty('Post content is required'),
          images: z.array(z.instanceof(File)).optional(),
          petId: z.string().nonempty('Pet is required'),
        })
      )
    } else if (tag.title.toLowerCase() === 'product') {
      setFormSchema(
        z.object({
          postContent: z.string().nonempty('Post content is required'),
          images: z.array(z.instanceof(File)).optional(),
          productId: z.string().nonempty('Product is required'),
        })
      )
    } else {
      setFormSchema(
        z.object({
          postContent: z.string().nonempty('Post content is required'),
          images: z.array(z.instanceof(File)).optional(),
        })
      )
    }
  }, [tag])

  const pets = [
    { id: '1', name: 'Pet 1' },
    { id: '2', name: 'Pet 2' },
  ]

  const products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
  ]

  const onSubmit = (data) => {
    console.log(data)
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
              <FormDescription>Upload images to your post.</FormDescription>
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  <Link href={''} target="_blank" className="text-primary-90 hover:underline">
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  <Link href={''} target="_blank" className="text-primary-90 hover:underline">
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
          Add
        </Button>
      </form>
    </Form>
  )
}

export default FormComponent
