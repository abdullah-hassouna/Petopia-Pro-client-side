"use client"

import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart, Share2, MoreHorizontal } from 'lucide-react'
import { AddCircle, Cake, Calendar1, HeartRemove, Message, Setting2, } from "iconsax-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import ProductCard from "@/app/components/ProductCard"
import { useRouter } from "next/navigation"


function OptionMenu({ children, className }: { children: React.ReactNode, className: string }) {
    const Router = useRouter();


    return <DropdownMenu>
        <DropdownMenuTrigger className={className}>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background border-primary">
            <DropdownMenuItem className="text-whity cursor-pointer" onClick={()=>Router.push('/profile-edit')}>
                Edit Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-whity cursor-pointer">Account Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><span className="text-red-700 cursor-pointer">Report</span></DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

}


export default function SocialProfilePage({ params, searchParams }) {
    const { userId } = React.use<{ userId: string }>(params);
    const [follow, setFollow] = React.useState<boolean>(false)
    const Router = useRouter();

    let tab = React.use<{ tab: string }>(searchParams).tab;
    let defaultTab = ["posts", "products"].includes(tab) ? tab : "posts";

    function followToggle() {
        setFollow(prev => !prev)
    }

    function redirect(productId: string) {
        Router.push(`/products/${productId}`,)
    }

    function replaceSearchParams(newTab: string) {
        window.history.pushState(null, "", `?tab=${newTab.toLocaleLowerCase()}`)
    }


    return (
        <div className="w-full mx-auto px-4 mb-14 md:mb-0 relative">
            <div className="max-w-4xl mx-auto bg-foreground p-3 my-2 rounded-md">
                {/* Cover Image */}
                <div className="relative h-64 md:h-80 bg-gray-200 mb-16 rounded-md">
                    <img
                        src="https://img.freepik.com/free-photo/pet-accessories-still-life-with-chew-bone-toys_23-2148949561.jpg?uid=R182640973&ga=GA1.1.399268851.1736679694&semt=ais_hybrid"
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />
                    <Avatar className="absolute border border-primary-75 -translate-x-[50%] -bottom-16 md:left-20 left-[50%] w-32 h-32 bg-foreground">
                        <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocIDQnhN8UQv7HN49c04_oqWoUYVea9An7FZZffSlFItZeugkn-A=s288-c-no" alt="Abdullah Hassouna" />
                        <AvatarFallback className="text-3xl">JD</AvatarFallback>
                    </Avatar>
                </div>

                {/* User Info Section */}
                <div className="px-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-bold">Abdullah Hassouna</h1>
                                <Heart color="var(--prime-color)" />
                                {/* <Badge>Admin</Badge> */}
                            </div>
                            <p className="text-xl text-muted-foreground">abdullah@outlook.com</p>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0 space-x-2">
                            <Button onClick={followToggle} className="transition-all duration-300" variant={follow ? "outline" : "default"}>
                                {
                                    follow ?
                                        <><HeartRemove color="white" />Followed</> :
                                        <><AddCircle color="white" />Follow</>
                                }
                            </Button>
                            <Button variant="outline" className="hover:bg-primary-50">
                                <Message color="var(--prime-color)" />
                                Message
                            </Button>
                            <OptionMenu className="ml-5 hover:bg-primary-50 rounded-md p-2">
                                <Setting2 className="h-6 w-h-6 m-auto" color="var(--prime-color)" />
                                {/* Settings */}
                            </OptionMenu>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="bg-background text-whity"><Cake color="var(--whity)" className="w-4 h-4 mr-2" />25 Years old</Badge>
                        <Badge variant="secondary" className="bg-background text-whity"><Calendar1 color="var(--whity)" className="w-4 h-4 mr-2" />Joined March 2020</Badge>
                    </div>
                    <p className="mb-4 max-w-2xl">
                        Digital nomad | Travel enthusiast | Photographer 📸 Sharing my adventures around the world! 🌍✈️
                    </p>
                    <Button variant="ghost" className="flex space-x-4 text-muted-foreground hover:bg-primary mb-6">
                        <span className="text-base"><strong className="text-whity">1,234</strong> Following</span>
                        <span className="text-base"><strong className="text-whity">5,678</strong> Followers</span>
                    </Button>
                </div>

                {/* Tabs Section */}
                <Tabs defaultValue={defaultTab} className="w-full px-4 bg-background rounded-md" >
                    <TabsList className="w-full bg-background justify-around md:justify-start px-4 py-0 gap-2">
                        <TabsTrigger onClick={(e) => replaceSearchParams(e.target["innerText"])} style={{ boxShadow: 'none' }} className="my-0 h-[120%] text-lg flex-grow md:flex-grow-0 rounded-b-none shadow-none mt-6" value="posts">Posts</TabsTrigger>
                        <hr className="w-[30px] rotate-90 bg-primary block md:hidden " />
                        <TabsTrigger onClick={(e) => replaceSearchParams(e.target["innerText"])} style={{ boxShadow: 'none' }} className="my-0 h-[120%] text-lg flex-grow md:flex-grow-0 rounded-b-none shadow-none mt-6" value="products">Products</TabsTrigger>
                    </TabsList>
                    <TabsContent value={"posts"} className="pt-1 bg-foreground p-2 rounded-t-md rounded-b-none md:pt-6">
                        <ScrollArea className="h-[80vh] py-10 md:h-[92vh]">
                            {posts.map((post, index) => (
                                <Card key={index}>
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <p className="font-semibold">John Doe</p>
                                            <p className="text-sm text-muted-foreground">{post.date}</p>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </Button>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{post.content}</p>
                                        {post.image && (
                                            <img src={post.image || "/placeholder.svg"} alt="Post content" className="pt-4 rounded-md w-full" />
                                        )}
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <div className="flex space-x-4">
                                            <Button variant="ghost" size="sm">
                                                <Heart className="w-4 h-4 mr-2" />
                                                {post.likes}
                                            </Button>
                                            <Button variant="ghost" size="sm">
                                                <MessageCircle className="w-4 h-4 mr-2" />
                                                {post.comments}
                                            </Button>
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Share
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value={"products"} className="pt-1 bg-foreground p-2 rounded-t-md rounded-b-none md:pt-6">
                        <div className="grid gap-4 px-2 py-4 h-[92vh] custom-scrollbar hide-scrollbar overflow-y-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {products.map((product, key) => (
                                <ProductCard redirect={redirect} key={key} product={product} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

// Sample data
const posts = [
    {
        date: "2 hours ago",
        content: "Just arrived in Bali! The sunset here is absolutely breathtaking. Can't wait to explore more tomorrow! 🌅🏝️ #TravelDiary #Bali",
        likes: 128,
        comments: 32,
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        date: "Yesterday",
        content: "Pro tip: Always pack a reusable water bottle when traveling. It's eco-friendly and saves you money! 💧🌍 #SustainableTravel #TravelTips",
        likes: 95,
        comments: 18,
    },
    {
        date: "3 days ago",
        content: "Throwback to my amazing trek in Nepal last month. The Himalayas are truly majestic! 🏔️ #Nepal #Himalayas #Adventure",
        likes: 210,
        comments: 45,
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        date: "2 hours ago",
        content: "Just arrived in Bali! The sunset here is absolutely breathtaking. Can't wait to explore more tomorrow! 🌅🏝️ #TravelDiary #Bali",
        likes: 128,
        comments: 32,
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        date: "Yesterday",
        content: "Pro tip: Always pack a reusable water bottle when traveling. It's eco-friendly and saves you money! 💧🌍 #SustainableTravel #TravelTips",
        likes: 95,
        comments: 18,
    },
    {
        date: "3 days ago",
        content: "Throwback to my amazing trek in Nepal last month. The Himalayas are truly majestic! 🏔️ #Nepal #Himalayas #Adventure",
        likes: 210,
        comments: 45,
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        date: "2 hours ago",
        content: "Just arrived in Bali! The sunset here is absolutely breathtaking. Can't wait to explore more tomorrow! 🌅🏝️ #TravelDiary #Bali",
        likes: 128,
        comments: 32,
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        date: "Yesterday",
        content: "Pro tip: Always pack a reusable water bottle when traveling. It's eco-friendly and saves you money! 💧🌍 #SustainableTravel #TravelTips",
        likes: 95,
        comments: 18,
    },
    {
        date: "3 days ago",
        content: "Throwback to my amazing trek in Nepal last month. The Himalayas are truly majestic! 🏔️ #Nepal #Himalayas #Adventure",
        likes: 210,
        comments: 45,
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        date: "2 hours ago",
        content: "Just arrived in Bali! The sunset here is absolutely breathtaking. Can't wait to explore more tomorrow! 🌅🏝️ #TravelDiary #Bali",
        likes: 128,
        comments: 32,
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        date: "Yesterday",
        content: "Pro tip: Always pack a reusable water bottle when traveling. It's eco-friendly and saves you money! 💧🌍 #SustainableTravel #TravelTips",
        likes: 95,
        comments: 18,
    },
    {
        date: "3 days ago",
        content: "Throwback to my amazing trek in Nepal last month. The Himalayas are truly majestic! 🏔️ #Nepal #Himalayas #Adventure",
        likes: 210,
        comments: 45,
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        date: "2 hours ago",
        content: "Just arrived in Bali! The sunset here is absolutely breathtaking. Can't wait to explore more tomorrow! 🌅🏝️ #TravelDiary #Bali",
        likes: 128,
        comments: 32,
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        date: "Yesterday",
        content: "Pro tip: Always pack a reusable water bottle when traveling. It's eco-friendly and saves you money! 💧🌍 #SustainableTravel #TravelTips",
        likes: 95,
        comments: 18,
    },
    {
        date: "3 days ago",
        content: "Throwback to my amazing trek in Nepal last month. The Himalayas are truly majestic! 🏔️ #Nepal #Himalayas #Adventure",
        likes: 210,
        comments: 45,
        image: "/placeholder.svg?height=400&width=600",
    },
]


const products = [
    {
        name: "UX Design Masterclass",
        description: "A comprehensive course on user experience design principles and practices.",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Prototyping Toolkit",
        description: "Essential tools and templates for rapid prototyping in digital product design.",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Design System Guide",
        description: "Learn how  ",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "UI Icon Pack",
        description: "A collection of 1000+ customizable vector icons for modern user interfaces.",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    }, {
        name: "UX Design Masterclass",
        description: "A comprehensive course on user experience design principles and practices.",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Prototyping Toolkit",
        description: "Essential tools and templates for rapid prototyping in digital product design.",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Design System Guide",
        description: "Learn how to create and maintain effective design systems for scalable products.",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "UI Icon Pack",
        description: "A collection of 1000+ customizable vector icons for modern user interfaces.",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    }, {
        name: "UX Design Masterclass",
        description: "A comprehensive course on user experience design principles and practices.",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Prototyping Toolkit",
        description: "Essential tools and templates for rapid prototyping in digital product design.",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Design System Guide",
        description: "Learn how to create and maintain effective design systems for scalable products.",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "UI Icon Pack",
        description: "A collection of 1000+ customizable vector icons for modern user interfaces.",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    }, {
        name: "UX Design Masterclass",
        description: "A comprehensive course on user experience design principles and practices.",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Prototyping Toolkit",
        description: "Essential tools and templates for rapid prototyping in digital product design.",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Design System Guide",
        description: "Learn how to create and maintain effective design systems for scalable products.",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "UI Icon Pack",
        description: "A collection of 1000+ customizable vector icons for modern user interfaces.",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    }, {
        name: "UX Design Masterclass",
        description: "A comprehensive course on user experience design principles and practices.",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Prototyping Toolkit",
        description: "Essential tools and templates for rapid prototyping in digital product design.",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Design System Guide",
        description: "Learn how to create and maintain effective design systems for scalable products.",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "UI Icon Pack",
        description: "A collection of 1000+ customizable vector icons for modern user interfaces.",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    }, {
        name: "UX Design Masterclass",
        description: "A comprehensive course on user experience design principles and practices.",
        price: 199.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Prototyping Toolkit",
        description: "Essential tools and templates for rapid prototyping in digital product design.",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "Design System Guide",
        description: "Learn how to create and maintain effective design systems for scalable products.",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
    {
        name: "UI Icon Pack",
        description: "A collection of 1000+ customizable vector icons for modern user interfaces.",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/71YFOZ2k0XL._AC_UL320_.jpg",
        rate: 4
    },
]