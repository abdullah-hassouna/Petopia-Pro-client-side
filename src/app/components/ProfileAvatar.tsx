import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { RootState } from '@/lib/reduxStore/store';
import React from 'react'
import { useSelector } from 'react-redux';

export default function ProfileAvatar() {
    const userInfo = useSelector((state: RootState) => state.user);

    return (
        <div className="flex flex-col items-center mb-4">
            <Avatar className="w-16 h-16 mb-4">
                <AvatarImage className='object-cover bg-background' src={userInfo.userProfile} alt={userInfo.userName} />
                <AvatarFallback>{userInfo.userName[0]}</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-lg">{userInfo.userName}</span>
            <small className="text-gray-600 text-sm font-thin" >{userInfo.userEmail}</small>
        </div>
    )
}
