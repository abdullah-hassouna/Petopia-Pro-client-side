'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Plus } from 'lucide-react'
import { type buttonVariant } from '@/app/interfaces/buttonVariantInterface'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const PostFormCreation = ({ userInfo }: { userInfo: { fullName: string; userImage: string } }) => {
  const [selectedTag, setSelectedTag] = useState('')
  const tags = [{ name: 'Adoption' }, { name: 'Product' }, { name: 'Discuss' }, { name: 'Sale' }, { name: 'Help' }]
  const initials = userInfo.fullName
    .split(' ')
    .map((word) => word[0])
    .join('')
  const firstName = userInfo.fullName.split(' ')[0]
  return (
    <Card className="w-full max-w-2xl border-none rounded-xl shadow-sm bg-foreground mx-4 sm:mx-6 md:mx-8 lg:mx-auto">
      <CardContent className="p-5">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={userInfo.userImage} alt={`${firstName}'s profile`} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <div className="flex items-center justify-between border rounded-2xl p-2 mb-3">
                <Textarea
                  placeholder={`What's on your mind, ${firstName}`}
                  className="resize-none border-none outline-none shadow-none min-h-3 max-h-10 focus:outline-none focus-visible:ring-0 font-light px-0 py-2 hide-scrollbar text-xs sm:text-base"
                />
                <Button variant="ghost" size="icon" className="ml-2 hover:bg-transparent">
                  <Plus className="h-5 w-5 text-body-font-color" />
                </Button>
              </div>
            </div>
          </div>
          <ScrollArea className="flex overflow-x-auto items-center whitespace-nowrap w-full">
            {tags.map((tag) => (
              <Button
                key={tag.name}
                variant={tag.name.toLowerCase() as buttonVariant}
                onClick={() => setSelectedTag(tag.name)}
                className={`
                px-6
                mx-1
                py-2
                text-sm
                transition-colors
                font-light
                ${selectedTag === tag.name ? 'ring-2 ring-offset-2' : ''}
              `}
              >
                {tag.name}
              </Button>
            ))}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}
export default PostFormCreation
