import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import PostLabel from './PostLabel'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
interface PostHeaderProps {
  userImage: string
  fullName: string
  username: string
  labelTag: string
}

const PostHeader = (props: PostHeaderProps) => {
  const { userImage, fullName, username, labelTag } = props
  const initials = fullName
    .split(' ')
    .map((word) => word[0])
    .join('')
  return (
    <div className="flex w-full px-4 py-5 relative">
      <div className="flex h-10 items-center">
        <Avatar className="h-12 w-12">
          <AvatarImage src={userImage} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center ml-2 mt-1 p-0 gap-1 max-w-[7.8rem]  sm:max-w-full custom:max-w-48 ">
          <h1 className="text-header-color font-medium text-xs sm:text-base truncate">{fullName}</h1>
          <h2 className="text-sub-header-color font-light text-xs truncate">{username}</h2>
        </div>
      </div>
      <PostLabel title={labelTag} />
     
    </div>
  )
}
export default PostHeader
