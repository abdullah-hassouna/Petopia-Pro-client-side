import { ScrollArea } from '@/components/ui/scroll-area'
import PostCard from './PostCard'

interface Posts {
  tag: 'adoption' | 'help' | 'discuss' | 'product' | 'other'
}
const PostContainer = ({ posts }: { posts: Posts[] }) => {
  return (
    <ScrollArea id="container" className="h-screen w-full py-5">
      {posts.map((post, index) => (
        <PostCard title={post.tag} key={index} />
      ))}
    </ScrollArea>
  )
}
export default PostContainer
