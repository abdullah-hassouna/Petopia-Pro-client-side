"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Add, ArrowLeft, Paperclip, Send2, Smileys, UserSearch } from "iconsax-react"
import clsx from "clsx"
import SelectUser from "../../components/SelectUser"
import { useRouter } from "next/navigation"
import NewChatButton from "@/app/components/messageRoom/NewChatBtn"
import UsersList from "@/app/components/messageRoom/UsersList"
import ShowContacts from "@/app/components/messageRoom/ShowContacts"


export default function ChatPage({ params }) {

  const router = useRouter();
  const { messageRoomId } = React.use<{ messageRoomId: string }>(params); // Update this line


  const [selectedContact, setSelectedContact] = React.useState<string | undefined>("")
  const [showContactsSidebar, setShowContactsSidebar] = React.useState(false)

  React.useEffect(() => { setSelectedContact(messageRoomId), setShowContactsSidebar(false) }, [])

  function selectMessageRoom(roomId: string, contactName: string) {

    router.push(`/messages/${roomId}`)
  }

  return (
    <>
      {/* Sidebar */}
      <UsersList showContactsSidebar={showContactsSidebar} selectMessageRoom={selectMessageRoom} selectedContact={selectedContact} />
      {/* Main Chat Area */}
      <div className={clsx("flex-1 overflow-hidden min-h-[60vh] h-100% rounded-md bg-foreground m-2 flex flex-col", {})}>
        {/* Chat Header */}
        <div className="h-16 border-b bg-discuss-70 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ShowContacts onClick={() => setShowContactsSidebar(prev => !prev)} />
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocIDQnhN8UQv7HN49c04_oqWoUYVea9An7FZZffSlFItZeugkn-A=s288-c-no" alt={selectedContact} />
              <AvatarFallback className="text-4xl text-whity ">{selectedContact[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{selectedContact}</div>
              <div className="text-xs text-green-500 flex gap-1 items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Active now
              </div>
            </div>
          </div>
        </div>

        {/* MESSAGES Area */}
        <ScrollArea className="flex-1 relative p-4">

          <div className="min-w-[97%] absolute z-20 h-5 bg-gradient-to-b from-foreground to-transparent"></div>
          <div className="space-y-4 mt-6">
            {MESSAGES.map((message, index) => (
              <div
                key={index}
                className={cn("flex", {
                  "justify-end": message.sender === "me",
                })}
              >
                {message.sender !== "me" && (
                  <Avatar className="w-8 h-8 mr-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={selectedContact} />
                    <AvatarFallback className="bg-icon-color text-white">{selectedContact[0]}</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn("rounded-lg px-4 py-2 max-w-[70%] shadow-sm", {
                    "bg-icon-color text-white": message.sender === "me",
                    "bg-background": message.sender !== "me",
                  })}
                >
                  {message.content}
                  <div
                    className={cn("text-xs mt-1", {
                      "text-blue-100": message.sender === "me",
                      "text-gray-400": message.sender !== "me",
                    })}
                  >
                    {message.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 bg-foreground border-t">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center space-x-2"
          >
            <Button type="button" size="icon" variant="ghost">
              <Paperclip color="gray" className="h-5 w-5" />
            </Button>
            <Input
              className="flex-1 bg-foreground border-0"
              placeholder="Type a message..."
              type="text"
            />
            <Button type="button" size="icon" variant="ghost">
              <Smileys color="orange" className="h-5 w-5" />
            </Button>
            <Button type="submit" size="icon" className="bg-blue-500 hover:bg-blue-600">
              <Send2 color="var(--background)" className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

    </>
  )
}

// Sample data
const MESSAGES = [
  {
    sender: "them",
    content: "Hey, how's the new project coming along?",
    time: "10:00 AM",
  },
  {
    sender: "me",
    content: "It's going well! We're making good progress on the frontend.",
    time: "10:05 AM",
  },
  {
    sender: "them",
    content: "That's great to hear! Any challenges you're facing?",
    time: "10:07 AM",
  },
  {
    sender: "me",
    content: "We had some issues with responsive design, but we've mostly sorted them out now.",
    time: "10:10 AM",
  },
  {
    sender: "them",
    content: "Good job! Let me know if you need any help with the backend integration.",
    time: "10:12 AM",
  },
  {
    sender: "me",
    content: "Thanks, I appreciate that. We might need some assistance with the API endpoints next week.",
    time: "10:15 AM",
  },
  {
    sender: "them",
    content: "No problem, I'd be happy to help. Shall we schedule a call to discuss it?",
    time: "10:17 AM",
  },
  {
    sender: "me",
    content: "That would be great. How about tomorrow at 2 PM?",
    time: "10:20 AM",
  },
  {
    sender: "them",
    content: "Perfect, I'll send out a calendar invite. Looking forward to it!",
    time: "10:22 AM",
  },
  {
    sender: "me",
    content: "Sounds good. Thanks for your support!",
    time: "10:25 AM",
  },
]