import { LikeProps } from '@/app/interfaces/postInterface'
import { HoverCardContent } from '@/components/ui/hover-card'
import Liker from './Liker'
import { UserSkeleton } from '@/app/skeleton/UserSkeleton'

interface InteractionsProps {
  ex: boolean
  tag: string
  isLoading: boolean
  likes: LikeProps[]
}
const InteractionsHover = (props: InteractionsProps) => {
  const { ex, tag, isLoading, likes } = props
  const viaColorClass = `via-${tag.toLowerCase()}`

  return (
    <HoverCardContent
      className={`flex flex-col gap-2 bg-foreground bg-gradient-to-b from-foreground ${viaColorClass} to-foreground w-72 max-h-40 overflow-y-auto custom-scrollbar`}
    >
      {
        isLoading ?
          ((typeof likes === "undefined") && [... new Array(5)].map((_, i) => <UserSkeleton key={i} />))
          : ((typeof likes !== "undefined") && (likes.map(({ user }, i) => <Liker user={user} ex={ex} key={i} />)))
      }
    </HoverCardContent>
  )
}
export default InteractionsHover
