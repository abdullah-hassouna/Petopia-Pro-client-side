import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { RootState } from '@/lib/reduxStore/store'
import { cn } from '@/lib/utils'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfileAvatar() {
  // const { userInfo, userSidebar } = useSelector((state: RootState) => state)
  const userInfo = useSelector((state: RootState) => state.userInfo);
  const userSidebar = useSelector((state: RootState) => state.userSidebar)
  return (
    <div
      className={cn('flex flex-col items-center mb-4', {
        'opacity-100 h-auto': userSidebar.isOpen,
        'opacity-0 h-0': !userSidebar.isOpen,
      })}
    >
      <Avatar className="w-16 h-16 mb-4">
        <AvatarImage className="object-cover bg-background" src={userInfo.userProfileImage} alt={userInfo.userName} />
        <AvatarFallback>{userInfo.userName}</AvatarFallback>
      </Avatar>
      <span className="font-semibold text-lg">{userInfo.userName}</span>
      <small className="text-whity text-sm font-thin">{userInfo.userEmail}</small>
    </div>
  )
}
