import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import clsx from 'clsx'
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import PostInput from './PostInput'
import Comment from './SingleComment'

interface CommentsProps {
  userImage: string
  fullName: string
  username: string
  commentContent: string
  commentId: string
  createdAt: string
}

const Comments = ({ comments, show, tag }: { comments: CommentsProps[]; show: boolean; tag: string }) => {
  return (
    <ScrollArea
      className={clsx('bg-foreground px-2 sm:px-5 box-border rounded-md mx-5 gap-4 transition-all duration-500 ', {
        'h-56 overflow-y-auto pt-5': show,
        'h-0 overflow-hidden': !show,
      })}
    >
      {comments.map((comment, index) => (
        <Comment comment={comment} tag={tag} key={index} />
      ))}
    </ScrollArea>
  )
}
export default Comments
