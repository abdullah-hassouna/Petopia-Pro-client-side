'use client'
import { Heart, MessageText, Share, Archive, MessageText1 } from 'iconsax-react'
import PostComment from './PostComment'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card'
import InteractionsHover from './InteractionsHover'
import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Comments from './Comments'
import { redirect } from 'next/navigation'
import { IoSettingsOutline } from 'react-icons/io5'
import FormDialog from '../PostForms/FormDialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { CommentsProps, LikeProps, PostDetails } from '@/app/interfaces/postInterface'
import callPostComments from '@/apiFetchs/unauth/call-post-comments'
import callPostLikes from '@/apiFetchs/unauth/call-post-likes'

interface PostFooterProps {
  postId: string
  likesCount: number
  commentsCount: number
  bookmarks: number
  shares: number
  tag: string
  postDetails: PostDetails
}



const PostFooter = ({
  postId,
  likesCount,
  commentsCount,
  bookmarks,
  shares,
  tag,
  postDetails,
}: PostFooterProps) => {

  const [saved, setSaved] = useState<boolean>(false)
  const [liked, setLiked] = useState<boolean>(false)
  const [likedCounter, setLikedCounter] = useState<number>(likesCount)
  const [savedCounter, setSavedCounter] = useState<number>(bookmarks)
  const [commentsData, setCommentsData] = useState<CommentsProps[] | undefined>(undefined)
  const [isCommentsDataLoading, setIsCommentsDataLoading] = useState<boolean>(false)
  const [likesData, setLikesData] = useState<LikeProps[] | undefined>(undefined)
  const [isLikesDataLoading, setIsLikesDataLoading] = useState<boolean>(false)
  const [showComments, setShowComments] = useState(false)
  const [isLikeHoverCardActive, setIsLikeHoverCardActive] = useState(false)
  const [isSaveHoverCardActive, setIsSaveHoverCardActive] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const handleOpenDialog = () => {
    setMenuOpen(false)
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  const handleSaveClick = () => {
    setSaved(!saved)
    setSavedCounter((prev) => (saved ? prev - 1 : prev + 1))
  }
  const handleLikedClick = () => {
    setLiked(!liked)
    setLikedCounter((prev) => (liked ? prev - 1 : prev + 1))
  }

  const handleShowComments = async () => {
    if (commentsData) {
      setShowComments((prev) => !prev)
    } else {
      setIsCommentsDataLoading(prev => !prev)
      const { comments, error } = await callPostComments(postId)
      if (!error && comments) {
        setShowComments((prev) => !prev)

        setTimeout(() => {
          setIsCommentsDataLoading(prev => !prev)
          if (typeof commentsData === "undefined")
            setCommentsData(() => comments)
        }, 1000)
      }
    }
  }

  const handleLikeHoverCardToggle = async () => {
    if (typeof likesData === "undefined" || likedCounter === 0) {
      setIsLikesDataLoading(prev => !prev)
      const { likes, error } = await callPostLikes(postId)
      if (!error && likes) {
        setTimeout(() => {
          setIsLikesDataLoading(prev => !prev)
          setLikesData(() => likes)
        }, 1000)
      }
    }
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
              variant={liked ? 'Bold' : 'Outline'}
              onClick={handleLikedClick}
            />

            {/* The Likes Conatiner */}
            <HoverCard open={isLikeHoverCardActive} onOpenChange={setIsLikeHoverCardActive}>
              <HoverCardTrigger onMouseOver={handleLikeHoverCardToggle}>
                <span>
                  {likedCounter}
                  <span className="hidden md:inline ml-2">Like</span>
                </span>
              </HoverCardTrigger>
              {isLikeHoverCardActive && <InteractionsHover ex={true} tag={tag} isLoading={isLikesDataLoading} likes={likesData} />}
            </HoverCard>
          </div>
          <div className="flex select-none gap-1 cursor-pointer" onClick={handleShowComments}>
            <MessageText size="20" color="var(--whity)" />
            <span>
              {commentsCount}
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
              {/* {isSaveHoverCardActive && <InteractionsHover tag={tag} users={likesData} />} */}
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
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
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
        <Comments show={showComments} comments={commentsData} tag={tag} isLoading={isCommentsDataLoading} />

        <PostComment postId={postId} />
      </div>
      <FormDialog open={dialogOpen} handleClose={handleCloseDialog} tag={{ title: tag, id: 1 }} post={postDetails} />
    </>
  )
}
export default PostFooter
