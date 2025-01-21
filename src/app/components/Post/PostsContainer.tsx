import { ScrollArea } from '@/components/ui/scroll-area'
import PostCard from './PostCard'

interface Posts {
  tag: 'adoption' | 'help' | 'discuss' | 'product' | 'other'
}
const PostContainer = ({ posts }: { posts: Posts[] }) => {
  return (
    <div className="w-full  pb-5 mx-5 h-screen">
      <ScrollArea id="container" className="w-full h-full  overflow-auto ">
        {posts.map((post, index) => (
          <PostCard title={post.tag} key={index} />
        ))}
      </ScrollArea>
    </div>
  )
}
export default PostContainer
