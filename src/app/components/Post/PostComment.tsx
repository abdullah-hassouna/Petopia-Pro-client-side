import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import PostInput from './PostInput'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/reduxStore/store'


const PostComment = ({ postId }: { postId: string }) => {
  const { userProfileImage, fullName } = useSelector((state: RootState) => state.userInfo)
  const initials = (fullName || "")
    .split(' ')
    .map((word) => word[0])
    .join('')
  return (
    <div className="flex gap-2 w-full px-5 pb-5 pt-2 items-center">
      <Avatar className="h-12 w-12">
        <AvatarImage src={userProfileImage} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <PostInput />
    </div>
  )
}
export default PostComment
