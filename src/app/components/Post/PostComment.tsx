import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import PostInput from './PostInput'

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
    <div className="flex gap-2 w-full px-5 pb-5 pt-2 items-center">
      <Avatar className="h-12 w-12">
        <AvatarImage src={userImage} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <PostInput value="" />
    </div>
  )
}
export default PostComment
