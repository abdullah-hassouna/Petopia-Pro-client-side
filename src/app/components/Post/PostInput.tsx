import { Textarea } from '@/components/ui/textarea'
import { Send } from 'iconsax-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { toast } from '@/hooks/use-toast'
import { IoSend } from 'react-icons/io5'

const PostInput = ({ value, setShow }: { value?: string; setShow?: (arg0: boolean) => void }) => {
  const formSchema = z.object({
    comment: z.string().nonempty('Your comment cant be empty.'),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: value || '',
    },
  })
  const handleSubmit = (data) => {
    const initialValue = {
      comment: value || '',
    }
    const changedData = Object.keys(data).reduce((acc, key) => {
      if (data[key] !== initialValue[key]) {
        acc[key] = data[key]
      }
      return acc
    }, {})
    if (Object.keys(changedData).length === 0) {
      toast({
        title: 'No changes.',
        description: 'No changes detected, skipping submission.',
      })
    } else {
      toast({
        title: 'submitted',
        description: 'Your comment has been submitted successfully.',
      })
    }
    form.resetField('comment')
    value ? setShow(false) : null
    console.log(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-row w-full">
        <div className="flex items-center px-5 py-1 gap-3 min-h-10 w-full bg-foreground rounded-full border border-background  shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300">
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Write your comment.."
                    className="text-whity resize-none border-none outline-none shadow-none min-h-3 max-h-10 focus:outline-none focus-visible:ring-0 font-light px-0 py-2 hide-scrollbar text-xs sm:text-base"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div
            onClick={form.handleSubmit(handleSubmit)}
            className="hover:bg-discuss hover:-rotate-45 transition-all duration-300  hover:text-whity p-2 rounded-full w-fit h-fit "
          >
            {/* <Send size="20" color="var(--sub-header-font-color)" /> */}
            <IoSend className="w-5 h-5 text-whity"></IoSend> 
          </div>
        </div>
        <FormMessage />
      </form>
    </Form>
  )
}
export default PostInput
