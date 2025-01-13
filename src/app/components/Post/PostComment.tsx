import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'iconsax-react'
import { Textarea } from '@/components/ui/textarea'

interface PostCommentProps {
  postId: string
  userImage: string
  fullName: string
}
const PostComment = (props: PostCommentProps) => {
  const { postId, userImage, fullName } = props
  const initials = fullName
    .split(' ')
    .map((word) => word[0])
    .join('')
  return (
    <div className="flex gap-2 w-full px-5 pb-5 items-center">
      <Avatar className="h-12 w-12">
        <AvatarImage src={userImage} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex items-center px-5 py-1 gap-3 min-h-10 w-full rounded-full border border-zinc-200 bg-transparent  text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300">
        <Textarea
          placeholder="Write your comment.."
          className="resize-none border-none outline-none shadow-none min-h-3 max-h-10 focus:outline-none focus-visible:ring-0 font-light px-0 py-2 hide-scrollbar"
        />

        <div className="hover:bg-discuss hover:-rotate-45 transition-all duration-300  hover:text-whity p-2 rounded-full w-fit h-fit">
          <Send size="20" color="var(--sub-header-font-color)" />
        </div>
      </div>
    </div>
  )
}
export default PostComment
