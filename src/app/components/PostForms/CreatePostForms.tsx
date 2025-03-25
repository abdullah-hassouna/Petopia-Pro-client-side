'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Plus } from 'lucide-react'
import { type buttonVariant } from '@/app/interfaces/buttonVariantInterface'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import FormDialog from './FormDialog'
import { useToast } from '@/hooks/use-toast'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const PostFormCreation = ({ userInfo }: { userInfo: { fullName: string; userImage: string } }) => {
  const [selectedTag, setSelectedTag] = useState<{ title: string; id: number }>({ title: '', id: 0 })
  const [dialogOpen, setDialogOpen] = useState(false)
  const tags = [
    { title: 'Adoption', id: 0 },
    { title: 'Product', id: 2 },
    { title: 'Discuss', id: 3 },
    { title: 'Sale', id: 4 },
    { title: 'Help', id: 5 },
    { title: 'Other', id: 6 },
  ]
  const initials = userInfo.fullName
    .split(' ')
    .map((word) => word[0])
    .join('')
  const firstName = userInfo.fullName.split(' ')[0]
  const handleOpenDialog = () => setDialogOpen(true)
  const handleCloseDialog = () => setDialogOpen(false)
  const { toast } = useToast()
  const formSchema = z.object({
    postContent: z.string().nonempty('Content is required.'),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postContent: '',
    },
  })
  const handleSubmit = (data) => {
    toast({
      title: 'submitted',
      description: 'your post has been submitted successfully!',
    })
    form.resetField('postContent')
    
    console.log(data)
  }
  return (
    <>
      <Card className="w-full max-w-2xl border-none rounded-xl shadow-sm bg-foreground mx-4 sm:mx-6 md:mx-8 lg:mx-auto mt-5">
        <CardContent className="p-5">
          <div className="flex flex-col space-y-4 mb-1">
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={userInfo.userImage} alt={`${firstName}'s profile`} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)}>
                    {/* */}
                    <FormField
                      control={form.control}
                      name="postContent"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl className="font-light">
                            <div className="w-full  flex items-center justify-between border shadow-md rounded-2xl p-2 border-background">
                              <Textarea
                                {...field}
                                placeholder={`What's on your mind, ${firstName}`}
                                className="resize-none border-none outline-none shadow-none min-h-3 max-h-10 focus:outline-none focus-visible:ring-0 font-light px-0 py-2 hide-scrollbar text-xs sm:text-base"
                              />
                              <Button variant="ghost" size="icon" type="submit" className="ml-2 hover:bg-transparent">
                                <Plus className="h-5 w-5 text-body-font-color" />
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </div>
            </div>
            <ScrollArea className="flex overflow-x-auto items-center whitespace-nowrap w-full">
              {tags.map((tag) => (
                <Button
                  key={tag.title}
                  variant={tag.title.toLowerCase() as buttonVariant}
                  onClick={() => {
                    setSelectedTag(() => tag)
                    handleOpenDialog()
                  }}
                  className={`
                px-6
                mx-1
                py-2
                text-sm
                transition-colors
                font-light
              `}
                >
                  {tag.title}
                </Button>
              ))}
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
      <FormDialog open={dialogOpen} handleClose={handleCloseDialog} tag={selectedTag} />
    </>
  )
}
export default PostFormCreation
