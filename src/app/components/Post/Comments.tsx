import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import clsx from 'clsx'
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ScrollArea } from '@/components/ui/scroll-area'

interface CommentsProps {
  userImage: string
  fullName: string
  username: string
  commentContent: string
  commentId: string
  createdAt: string
}

const timeAgo = (timestamp: string) => {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
}

const Comments = ({ comments, show, tag }: { comments: CommentsProps[]; show: boolean; tag: string }) => {
  const [showRestContent, setShowRestContent] = useState<boolean>(false)

  return (
    <ScrollArea
      className={clsx('bg-foreground px-2 sm:px-5 box-border rounded-md mx-5 gap-4 transition-all duration-500', {
        'h-56 overflow-y-auto pt-5': show,
        'h-0 overflow-hidden': !show,
      })}
    >
      {comments.map((comment, index) => (
        <div className={`bg-${tag} min-h-16 rounded-md mb-2 sm:mb-4 items-center p-2 sm:p-4`} key={index}>
          <div className="flex h-10 items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src={comment.userImage} />
              <AvatarFallback>
                {comment.fullName
                  .split(' ')
                  .map((word) => word[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center ml-2 mt-1 p-0 gap-1 h-8 min-w-8 line-clamp-1">
              <h1 className="text-header-color font-medium text-xs"> {comment.fullName} </h1>
              <h2 className="text-sub-header-color font-light text-xs">{comment.username}</h2>
            </div>
            <div className="ml-auto h-full ">
              <small className="ml-3 text-[10px] text-gray-500">{timeAgo(comment.createdAt)}</small>
            </div>
          </div>
          <div className="ml-3">
            <p className={clsx('my-2 mr-2 text-xs line-clamp-2', { 'line-clamp-none': showRestContent })}>
              {comment.commentContent}
            </p>

            <p
              className="text-xs text-gray-400 cursor-pointer w-fit"
              onClick={() => setShowRestContent((prev) => !prev)}
            >
              show more
            </p>
          </div>
        </div>
      ))}
    </ScrollArea>
  )
}
export default Comments
