import { Card } from '@/components/ui/card'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import PostContent from './PostContent'
import viaColorClass from '@/lib/utils/categoryColor'
import { PostProps } from '@/app/interfaces/postInterface'


const PostCard = (props: PostProps) => {
  const { via, colorScheme } = viaColorClass('help')
  const { user, } = props

  return (
    <div className="relative min-h-[32.771875rem] w-full max-w-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto mt-5">
      <Card
        className={`bg-gradient-to-b from-foreground ${via} to-foreground border border-background rounded-[8px] box-border z-0`}
      >
        <PostHeader
          labelTag={'help'}
          userImage={user.userImage}
          fullName={user.fullName}
          username={user.username} />

        <PostContent postDetails={props} />

        <PostFooter
          tag={colorScheme}
          postId={props.id}
          likes={props.likesCount}
          comments={props.comments}
          shares={props.sharesCount}
          bookmarks={props.bookmarkCount}
          postDetails={props}
        />
      </Card>
      <div
        className={`w-[1.0634375rem] h-[0.681rem] flex-shrink-0 absolute top-[1.125rem] -right-[0.5625rem]  rotate-[45deg] bg-${colorScheme}-100 z-[-5]`}
      ></div>
      <div
        className={`w-[1.0634375rem] h-[0.681rem] flex-shrink-0 absolute top-[3.3125rem] -right-[0.5625rem] rotate-[-45deg] bg-${colorScheme}-100 z-[-5]`}
      ></div>
    </div>
  )
}
export default PostCard
