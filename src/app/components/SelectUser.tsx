import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { UserSearch } from "iconsax-react"

function SelectUser({ children: ButtonTrigger, onSelectUser: onClick }: { children: React.ReactNode, onSelectUser: Function }) {
    return (
        <Dialog>
            <DialogTrigger>{ButtonTrigger}</DialogTrigger>
            <DialogContent className="h-[60%] p-4 bg-foreground">
                <DialogHeader>
                    <DialogTitle className="text-whity">
                        <h3 className="mb-2 mt-4">
                            Start new Chat
                        </h3>
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <div className="relative">
                        <UserSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 " color="gray" />
                        <Input className="pl-9" placeholder="Search conversations..." />
                    </div>
                    <ScrollArea className="h-72 pt-4 overflow-x-auto">
                        {CONTACTS.map(contact => <button
                            key={contact.name}
                            onClick={() => onClick("messageRoomId")}
                            className={
                                "flex items-center space-x-4 p-1 w-full text-icon-color rounded-md my-1 hover:bg-background transition-colors"}
                        >
                            <Avatar>
                                <AvatarImage src={contact.avatar} alt={contact.name} />
                                <AvatarFallback className="bg-icon-color text-white">{contact.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 text-left">
                                <div className="font-medium">{contact.name}</div>
                            </div>
                        </button>
                        )}
                    </ScrollArea>
                </div>
                <DialogFooter>
                    <Button className="bg-icon-color">
                        Start Chatting
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default SelectUser


const CONTACTS = [
    {
        name: "Sarah Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Sarah-Wilson-Message-Room-Id",
        unread: true,
    },
    {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Michael-Chen-Message-Room-Id",
        unread: false,
    },
    {
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Emily-Davis-Message-Room-Id",
        unread: true,
    },
    {
        name: "Alex Turner",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Alex-Turner-Message-Room-Id",
        unread: false,
    },
    {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Jessica-Lee-Message-Room-Id",
        unread: false,
    },
    {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Jessica-Lee-Message-Room-Id",
        unread: false,
    },
    {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Jessica-Lee-Message-Room-Id",
        unread: false,
    },
    {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Jessica-Lee-Message-Room-Id",
        unread: false,
    },
    {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Jessica-Lee-Message-Room-Id",
        unread: false,
    },
    {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Jessica-Lee-Message-Room-Id",
        unread: false,
    },
    {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Jessica-Lee-Message-Room-Id",
        unread: false,
    },
    {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        messageRoomId: "Jessica-Lee-Message-Room-Id",
        unread: false,
    },
]