import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import PostInput from './PostInput'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { CommentsProps } from '@/app/interfaces/postInterface'


const timeAgo = (timestamp: string) => {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
}

const Comment = ({ comment, tag }: { comment: CommentsProps; tag: string }) => {
  const [showRestContent, setShowRestContent] = useState<boolean>(false)
  const [showEditInput, setShowEditInput] = useState<boolean>(false)
  const handleShowEdit = () => setShowEditInput((prev) => !prev)
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false)
  const commentRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (commentRef.current) {
      setIsOverflowing(commentRef.current.scrollHeight > commentRef.current.clientHeight)
    }
  }, [comment.commentText])

  const [menuOpen, setMenuOpen] = useState(false)

  const handleOpen = () => {
    setMenuOpen(false)
    setShowEditInput((prev) => !prev)
  }

  return (
    <div className={`bg-${tag} min-h-16 rounded-md mb-2 sm:mb-4 items-center p-2 sm:p-4`}>
      <div className="flex h-10 items-center">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.user.userImage} />
          <AvatarFallback>
            {comment.user.fullName
              .split(' ')
              .map((word) => word[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center ml-2 mt-1 px-0 py-auto gap-1  min-w-8 line-clamp-1">
          <h1 className="text-header-color font-medium text-xs"> {comment.user.fullName} </h1>
          <h2 className="text-sub-header-color font-light text-xs">{comment.user.username}</h2>
        </div>
        <div className="ml-auto h-full flex flex-col-reverse items-end">
          <small className="ml-3 text-[10px] text-gray-500">
            {timeAgo(comment.createdAt) === 'less than a minute ago' ? 'Just now' : timeAgo(comment.createdAt)}
          </small>

          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger className="bg-transparent border-none p-0 shadow-none outline-none cursor-pointer relative w-6 h-6">
              <div className="flex items-center justify-center w-full h-full text-[#FF8A65]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute right-30 left-0 shadow-md rounded-md w-32">
              <DropdownMenuItem onClick={handleOpen}>Edit</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {showEditInput ? (
        <div className="pt-3">
          <PostInput value={comment.commentText} setShow={setShowEditInput} />
        </div>
      ) : (
        <div className="ml-3">
          <p
            ref={commentRef}
            className={clsx('my-1 sm:my-2 mr-1 sm:mr-2 text-xs', {
              'line-clamp-2': !showRestContent,
              'line-clamp-none': showRestContent,
            })}
          >
            {comment.commentText}
          </p>
          {isOverflowing && (
            <p
              className="text-xs text-gray-400 cursor-pointer w-fit"
              onClick={() => setShowRestContent((prev) => !prev)}
            >
              {showRestContent ? 'show less' : 'show more'}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
export default Comment
