import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { UserSearch } from 'iconsax-react'
import React from 'react'
import NewChatButton from './NewChatBtn'

function UsersList({ showContactsSidebar, selectMessageRoom, selectedContact }: { showContactsSidebar: boolean, selectMessageRoom: Function, selectedContact: string }) {
    return (
        <Card className={cn(
            "absolute bg-foreground w-[98%] lg:relative lg:bg-transparent lg:w-80 z-40 h-[98%] top-2 border-none mx-2 shadow-none ",
            showContactsSidebar ? "block" : "hidden"
        )}>
            <div className="p-4">
                <div className="relative">
                    <UserSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 "
                        color="gray" />
                    <Input className="pl-9" placeholder="Search conversations..." />
                </div>
            </div>
            <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full text-whity justify-start px-4 py-2 bg-transparent">
                    <TabsTrigger value="all" className="data-[state=active]:text-icon-color">All</TabsTrigger>
                    <TabsTrigger value="unread" className="data-[state=active]:text-icon-color">Unread</TabsTrigger>
                    <TabsTrigger value="archived" className="data-[state=active]:text-icon-color">Archived</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="m-0">
                    <ScrollArea className="h-[calc(100vh-140px)] max-h-[90vh] overflow-x-auto">
                        {CONTACTS.map((contact) => (
                            <button
                                key={contact.name}
                                onClick={() => selectMessageRoom(contact.name, contact.roomId)}
                                className={cn(
                                    "flex items-center space-x-4 p-4 w-full text-icon-color rounded-md my-1 hover:bg-foreground transition-colors",
                                    {
                                        "bg-foreground": selectedContact === contact.roomId,
                                    }
                                )}
                            >
                                <Avatar className="h-8 w-8 lg:h-12 lg:w-12">
                                    <AvatarImage src={contact.avatar} alt={contact.name} />
                                    <AvatarFallback className="bg-icon-color text-white">{contact.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 text-left">
                                    <div className="font-medium text-lg lg:text-sm">{contact.name}</div>
                                    <div className="text-base lg:text-xs line-clamp-1 text-gray-400">{contact.lastMessage}</div>
                                </div>
                                {contact.unread && (
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                )}
                            </button>
                        ))}
                        <div className="absolute bottom-5 right-5 translate-x-[0] translate-y-[-50%]">
                            <NewChatButton text="Start new Chat" />
                        </div>
                    </ScrollArea>
                </TabsContent>
            </Tabs>
        </Card>
    )
}

export default UsersList





const CONTACTS = [
    {
        name: "Sarah Wilson",
        roomId: "SarahWilsonRoomId",
        avatar: "/placeholder.svg?height=32&width=32",
        lastMessage: "Sure, let's meet at 3 PM tomorrow",
        unread: true,
    },
    {
        name: "Michael Chen",
        roomId: "MichaelChenRoomId",
        avatar: "/placeholder.svg?height=32&width=32",
        lastMessage: "The project files have been updated",
        unread: false,
    },
    {
        name: "Emily Davis",
        roomId: "EmilyDavisRoomId",
        avatar: "/placeholder.svg?height=32&width=32",
        lastMessage: "Thanks for your help!",
        unread: true,
    },
    {
        name: "Alex Turner",
        roomId: "AlexTurnerRoomId",
        avatar: "/placeholder.svg?height=32&width=32",
        lastMessage: "When can we schedule the meeting?",
        unread: false,
    },
    {
        name: "Jessica Lee",
        roomId: "JessicaLeeRoomId",
        avatar: "/placeholder.svg?height=32&width=32",
        lastMessage: "The presentation looks great!",
        unread: false,
    },
]
