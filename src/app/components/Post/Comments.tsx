import clsx from 'clsx'
import { ScrollArea } from '@/components/ui/scroll-area'
import Comment from './SingleComment'
import { CommentsProps } from '@/app/interfaces/postInterface'
import { CommentSkeleton } from '@/app/skeleton/CommentSkeleton'



const Comments = ({ isLoading, comments, show, tag }: { isLoading: boolean, comments: CommentsProps[]; show: boolean; tag: string }) => {
  return (
    <ScrollArea
      className={clsx('bg-foreground px-2 sm:px-5 box-border rounded-md mx-5 gap-4 transition-all duration-500 ', {
        'h-56 overflow-y-auto pt-5': show,
        'h-0 overflow-hidden': !show,
      })}
    >
      {isLoading ?
        (typeof comments === "undefined" && ([...(new Array(5))]).map((_, index) => <CommentSkeleton className='mb-3' key={index} />))
        : (typeof comments !== "undefined" && comments.map((comment, index) => (
          <Comment comment={comment} tag={tag} key={index} />
        )))}
    </ScrollArea>
  )
}
export default Comments
