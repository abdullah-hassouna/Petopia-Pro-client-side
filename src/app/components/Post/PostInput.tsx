import { Textarea } from '@/components/ui/textarea'
import { Send } from 'iconsax-react'

const PostInput = ({ value }: { value: string }) => {
  return (
    <div className="flex items-center px-5 py-1 gap-3 min-h-10 w-full bg-foreground rounded-full border border-zinc-200  shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300">
      <Textarea
        placeholder="Write your comment.."
        value={value}
        readOnly
        className="resize-none border-none outline-none shadow-none min-h-3 max-h-10 focus:outline-none focus-visible:ring-0 font-light px-0 py-2 hide-scrollbar text-xs sm:text-base"
      />

      <div className="hover:bg-discuss hover:-rotate-45 transition-all duration-300  hover:text-whity p-2 rounded-full w-fit h-fit">
        <Send size="20" color="var(--sub-header-font-color)" />
      </div>
    </div>
  )
}
export default PostInput
