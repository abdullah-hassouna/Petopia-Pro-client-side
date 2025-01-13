import { Heart, MessageText, Share, Archive, MessageText1 } from 'iconsax-react'
import PostComment from './PostComment'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card'
import InteractionsHover from './InteractionsHover'
import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Comments from './Comments'
import { redirect } from 'next/navigation'

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
  },
  {
    fullName: 'Haitham Akram',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
    commentId: '1',
    commentContent: 'this is a comment nigga',
  },
  {
    fullName: 'Haitham Akram',
    username: 'haitham-Akram',
    userImage:
      'https://lh3.googleusercontent.com/a/ACg8ocKJi4lgnRYwkKuQS6P0-TN_TPPGfkWbKgTjPJS8mV29c5-pXHEaYQ=s96-c-rg-br100',
    commentId: '1',
    commentContent: 'this is a comment nigga',
  },
]

const PostFooter = (props: PostFooterProps) => {
  const { postId, likes, comments, bookmarks, shares, fullName, userImage, tag } = props
  const [saved, setSaved] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likedCounter, setLikedCounter] = useState(likes)
  const [savedCounter, setSavedCounter] = useState(bookmarks)
  const [showComments, setShowComments] = useState(false)

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
  return (
    <div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-6 px-5 py-5 justify-between font-light text-whity w-full items-center">
          <div className="flex gap-1 cursor-pointer">
            <Heart
              size="20"
              color={liked ? 'red' : 'var(--whity)'}
              onClick={handleLikedClick}
              variant={liked ? 'Bold' : 'Outline'}
            />
            <HoverCard>
              <HoverCardTrigger>
                <span>
                  {likedCounter}
                  <span className="hidden sm:inline ml-2">Like</span>
                </span>
              </HoverCardTrigger>
              <InteractionsHover tag={tag} users={users} />
            </HoverCard>
          </div>
          <div className="flex gap-1 cursor-pointer" onClick={handleShowComments}>
            <MessageText size="20" color="var(--whity)" />
            <span>
              {comments}
              <span className="hidden sm:inline ml-2">Comment</span>
            </span>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <Share size="20" color="var(--whity)" />
            <span>
              {shares}
              <span className="hidden sm:inline ml-2">Share</span>
            </span>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <Archive
              size="20"
              color={saved ? 'var(--prime-color)' : 'var(--whity)'}
              onClick={handleSaveClick}
              variant={saved ? 'Bold' : 'Outline'}
            />
            <HoverCard>
              <HoverCardTrigger>
                <span>
                  {savedCounter}
                  <span className="hidden sm:inline ml-2">Saved</span>
                </span>
              </HoverCardTrigger>
              <InteractionsHover tag={tag} users={users} />
            </HoverCard>
          </div>
          {['adoption', 'product'].includes(tag.toLowerCase()) ? (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="hidden sm:flex bg-discuss justify-center items-center rounded-md hover:bg-discuss-70 shadow-none font-normal h-9 w-9 p-0">
                    {/* <Button variant="discuss" className=""> */}
                    <MessageText1 color="#FF8A65" style={{ width: '1.25rem', height: '1.25rem' }} />
                    {/* </Button> */}
                  </TooltipTrigger>
                  <TooltipContent className="bg-discuss text-whity">
                    <p>Chat with owner</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button
                onClick={() => redirect('/message/userid')}
                variant="discuss"
                className="sm:hidden flex shadow-none font-normal w-10 h-9 p-0"
              >
                <MessageText1 color="#FF8A65" style={{ width: '1.25rem', height: '1.25rem' }} />
              </Button>
            </>
          ) : null}
        </div>
        <Comments show={showComments} comments={commentsContent} tag={tag} />
        <PostComment postId={postId} fullName={fullName} userImage={userImage} />
      </div>
    </div>
  )
}
export default PostFooter
