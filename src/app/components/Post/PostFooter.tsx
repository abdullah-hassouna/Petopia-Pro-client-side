import { Heart, MessageText, Share, Archive, MessageText1 } from 'iconsax-react'
import PostComment from './PostComment'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card'
import InteractionsHover from './InteractionsHover'
import { useRef, useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Comments from './Comments'
import { redirect } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { IoSettingsOutline } from 'react-icons/io5'
import FormDialog from '../PostForms/FormDialog'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface PostFooterProps {
  postId: string
  likes: number
  comments: number
  bookmarks: number
  shares: number
  fullName: string
  userImage: string
  tag: string
}
const users = [
  {
    fullName: 'Haitham Akram',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
  },
  {
    fullName: 'Haitham Akram',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
  },
  {
    fullName: 'Haitham Akram',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
  },
  {
    fullName: 'Haitham Akram',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
  },
  {
    fullName: 'Haitham Akram abu lamdi',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
  },
]

const commentsContent = [
  {
    fullName: 'Haitham Akram',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
    commentId: '1',
    commentContent:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, illum! Ut eius quia libero doloribus cumque iure, rerum asperiores odio vitae blanditiis sit corrupti atque, neque tempora dolorem aperiam? Inventore.',
    createdAt: new Date().toLocaleString(),
  },
  {
    fullName: 'Haitham Akram',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
    commentId: '1',
    commentContent: 'this is a comment nigga',
    createdAt: new Date().toLocaleString(),
  },
  {
    fullName: 'Haitham Akram',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
    commentId: '1',
    commentContent: 'this is a comment nigga',
    createdAt: new Date().toLocaleString(),
  },
]

const PostFooter = (props: PostFooterProps) => {
  const { postId, likes, comments, bookmarks, shares, fullName, userImage, tag } = props
  const [saved, setSaved] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likedCounter, setLikedCounter] = useState(likes)
  const [savedCounter, setSavedCounter] = useState(bookmarks)
  const [showComments, setShowComments] = useState(false)
  const [isLikeHoverCardActive, setIsLikeHoverCardActive] = useState(false)
  const [isSaveHoverCardActive, setIsSaveHoverCardActive] = useState(false)

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleOpenDialog = () => setDialogOpen(true)
  const handleCloseDialog = () => setDialogOpen(false)

  const handleSaveClick = () => {
    setSaved(!saved)
    setSavedCounter((prev) => (saved ? prev - 1 : prev + 1))
  }
  const handleLikedClick = () => {
    setLiked(!liked)
    setLikedCounter((prev) => (liked ? prev - 1 : prev + 1))
  }
  const handleShowComments = () => {
    setShowComments((prev) => !prev)
  }

  const handleLikeHoverCardToggle = () => {
    setIsLikeHoverCardActive(!isLikeHoverCardActive)
  }

  const handleSaveHoverCardToggle = () => {
    setIsSaveHoverCardActive(!isSaveHoverCardActive)
  }

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 lg:gap-3 md:gap-3 sm:gap-6 px-5 py-5 justify-between font-light text-whity w-full items-center">
          <div className="flex gap-1 cursor-pointer">
            <Heart
              size="20"
              color={liked ? 'red' : 'var(--whity)'}
              onClick={handleLikedClick}
              variant={liked ? 'Bold' : 'Outline'}
            />
            <HoverCard open={isLikeHoverCardActive} onOpenChange={setIsLikeHoverCardActive}>
              <HoverCardTrigger onClick={handleLikeHoverCardToggle}>
                <span>
                  {likedCounter}
                  <span className="hidden md:inline ml-2">Like</span>
                </span>
              </HoverCardTrigger>
              {isLikeHoverCardActive && <InteractionsHover tag={tag} users={users} />}
            </HoverCard>
          </div>
          <div className="flex gap-1 cursor-pointer" onClick={handleShowComments}>
            <MessageText size="20" color="var(--whity)" />
            <span>
              {comments}
              <span className="hidden md:inline ml-2">Comment</span>
            </span>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <Share size="20" color="var(--whity)" />
            <span>
              {shares}
              <span className="hidden md:inline ml-2">Share</span>
            </span>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <Archive
              size="20"
              color={saved ? 'var(--prime-color)' : 'var(--whity)'}
              onClick={handleSaveClick}
              variant={saved ? 'Bold' : 'Outline'}
            />
            <HoverCard open={isSaveHoverCardActive} onOpenChange={setIsSaveHoverCardActive}>
              <HoverCardTrigger onClick={handleSaveHoverCardToggle}>
                <span>
                  {savedCounter}
                  <span className="hidden md:inline ml-2">Saved</span>
                </span>
              </HoverCardTrigger>
              {isSaveHoverCardActive && <InteractionsHover tag={tag} users={users} />}
            </HoverCard>
          </div>
          <div className="flex gap-2 mr-5">
            {['adoption', 'product'].includes(tag.toLowerCase()) ? (
              <>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      className="hidden sm:flex bg-discuss justify-center items-center rounded-md hover:bg-discuss-70 shadow-none font-normal h-9 min-w-9 p-0"
                      onClick={() => redirect('/message/userid')}
                    >
                      <MessageText1 color="#FF8A65" style={{ width: '1.25rem', height: '1.25rem' }} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-discuss text-whity">
                      <p> Chat with {tag === 'product' ? 'Seller' : 'Owner'} </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Button
                  onClick={() => redirect('/message/userid')}
                  variant="discuss"
                  className="sm:hidden flex shadow-none font-normal min-w-9 h-9 p-0"
                >
                  <MessageText1 color="#FF8A65" style={{ width: '1.25rem', height: '1.25rem' }} />
                </Button>
              </>
            ) : null}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex bg-discuss justify-center items-center rounded-md hover:bg-discuss-70 shadow-none font-normal h-9 max-w-9 p-1 hidden-arrow">
                <div className="flex items-center justify-center w-full h-full">
                  <IoSettingsOutline className="w-5 h-5" color="#FF8A65" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute right-30 left-0 shadow-md rounded-md w-32">
                <DropdownMenuItem onClick={handleOpenDialog}>Edit</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Comments show={showComments} comments={commentsContent} tag={tag} />
        <PostComment postId={postId} fullName={fullName} userImage={userImage} />
      </div>
      <FormDialog open={dialogOpen} handleClose={handleCloseDialog} tag={{ title: tag, id: 1 }} />
    </>
  )
}
export default PostFooter
