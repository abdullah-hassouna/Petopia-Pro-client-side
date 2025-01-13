import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCardContent } from '@/components/ui/hover-card'
import { useState } from 'react'
interface User {
  userImage: string
  fullName: string
  username: string
}
interface InteractionsProps {
  tag: string
  users: User[]
}
const InteractionsHover = (props: InteractionsProps) => {
  const { tag, users } = props
  const viaColorClass = `via-${tag.toLowerCase()}`
  const [followStatus, setFollowStatus] = useState(users.map(() => false))
  const handleFollowClick = (index: number) => {
    setFollowStatus((prevStatus) => prevStatus.map((status, i) => (i === index ? !status : status)))
  }
  return (
    <HoverCardContent
      className={`flex flex-col gap-2 bg-foreground bg-gradient-to-b from-foreground ${viaColorClass} to-foreground w-72 max-h-40 overflow-y-auto custom-scrollbar`}
    >
      {users.map((u, i) => (
        <div className="flex h-10 items-center justify-between rounded-md hover:bg-foreground p-2" key={i}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={u.userImage} />
            <AvatarFallback>
              {u.fullName
                .split(' ')
                .map((word) => word[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center ml-2 mt-1 p-0 gap-1 h-8">
            <h1 className="text-header-color font-medium text-xs line-clamp-1 w-28"> {u.fullName} </h1>
            <h2 className="text-sub-header-color font-light text-xs line-clamp-1">{u.username}</h2>
          </div>
          <Button className="h-7 w-16 font-light" onClick={() => handleFollowClick(i)}>
            {followStatus[i] ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      ))}
    </HoverCardContent>
  )
}
export default InteractionsHover
