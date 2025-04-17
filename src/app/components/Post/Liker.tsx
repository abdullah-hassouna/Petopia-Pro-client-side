import { UserProps } from "@/app/interfaces/postInterface"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const Liker = ({ user, ex }: { user: UserProps, ex: boolean }) => {
    const [followStatus, setFollowStatus] = useState<boolean>(false)
    const handleFollowClick = () => {
        // setFollowStatus((prevStatus) => prevStatus.map((status, i) => (i === index ? !status : status)))
    }

    return <div className="flex h-10 items-center justify-between rounded-md hover:bg-foreground p-2">
        <Avatar className="h-9 w-9">
            <AvatarImage src={user.userImage} />
            <AvatarFallback>
                {user.fullName
                    .split(' ')
                    .map((word) => word[0])
                    .join('')}
            </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center ml-2 mt-1 p-0 gap-1 h-8">
            <h1 className="text-header-color font-medium text-xs line-clamp-1 w-28"> {user.fullName} </h1>
            <h2 className="text-sub-header-color font-light text-xs line-clamp-1">{user.username}</h2>
        </div>

        {!ex && <Button className="h-7 w-16 font-light" onClick={handleFollowClick}>
            {followStatus ? 'Unfollow' : 'Follow'}
        </Button>}
    </div>
}

export default Liker