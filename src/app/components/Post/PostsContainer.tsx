import { ScrollArea } from '@/components/ui/scroll-area'
import PostCard from './PostCard'

interface Posts {
  tag: 'adoption' | 'help' | 'discuss' | 'product' | 'other'
}

const PostContainer = ({ posts }: { posts: Posts[] }) => {
  return (
    <div className="w-full px-2 sm:px-3 md:px-4 lg:px-5 pb-5 h-screen">
      <ScrollArea id="container" className="w-full h-full overflow-auto">
        <div className="flex flex-col gap-4 md:gap-6">
          {posts.map((post, index) => (
            <PostCard title={post.tag} key={index} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default PostContainer
