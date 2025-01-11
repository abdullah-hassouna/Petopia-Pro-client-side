"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { ArrowLeft, Paperclip, Search, Send, Smile } from 'lucide-react'

export default function ModernChat() {
  const [selectedContact, setSelectedContact] = React.useState("Sarah Wilson")
  const [showMobileSidebar, setShowMobileSidebar] = React.useState(false)

  return (
    <div className="flex h-[90vh] gap-2">
      {/* Sidebar */}
      <Card className={cn(
        "w-80 border-r bg-foreground",
        showMobileSidebar ? "block" : "hidden md:block"
      )}>
        <div className="p-4 border-b">
          <h2 className="text-2xl text-whity font-bold mb-4">Chats</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
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
            <ScrollArea className="h-[calc(85vh-140px)] overflow-x-auto">
              {CONTACTS.map((contact) => (
                <button
                  key={contact.name}
                  onClick={() => {
                    setSelectedContact(contact.name)
                    setShowMobileSidebar(false)
                  }}
                  className={cn(
                    "flex items-center space-x-4 p-4 w-full text-icon-color hover:text-foreground hover:bg-icon-color transition-colors",
                    {
                      "bg-foreground": selectedContact === contact.name,
                    }
                  )}
                >
                  <Avatar>
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>{contact.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-sm line-clamp-1 text-gray-400">{contact.lastMessage}</div>
                  </div>
                  {contact.unread && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Main Chat Area */}
      <div className="flex-1 bg-foreground flex flex-col">
        {/* Chat Header */}
        <div className="h-16 border-b bg-icon-color px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setShowMobileSidebar(true)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={selectedContact} />
              <AvatarFallback>{selectedContact[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{selectedContact}</div>
              <div className="text-xs">Active now</div>
            </div>
          </div>
        </div>

        {/* MESSAGES Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
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
                    <AvatarFallback>{selectedContact[0]}</AvatarFallback>
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
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              className="flex-1 bg-foreground border-0"
              placeholder="Type a message..."
              type="text"
            />
            <Button type="button" size="icon" variant="ghost">
              <Smile className="h-5 w-5" />
            </Button>
            <Button type="submit" size="icon" className="bg-blue-500 hover:bg-blue-600">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

// Sample data
const CONTACTS = [
  {
    name: "Sarah Wilson",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "Sure, let's meet at 3 PM tomorrow",
    unread: true,
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "The project files have been updated",
    unread: false,
  },
  {
    name: "Emily Davis",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "Thanks for your help!",
    unread: true,
  },
  {
    name: "Alex Turner",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "When can we schedule the meeting?",
    unread: false,
  },
  {
    name: "Jessica Lee",
    avatar: "/placeholder.svg?height=32&width=32",
    lastMessage: "The presentation looks great!",
    unread: false,
  },
]

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