import PostCard from './PostCard'

interface Posts {
  tag: 'adoption' | 'help' | 'discuss' | 'product' | 'other'
}
const PostContainer = ({ posts }: { posts: Posts[] }) => {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto justify-center m-3 md:mx-[10vw] sm:mx-[28vw] lg:mx-[20vw]">
      {posts.map((post, index) => (
        <PostCard title={post.tag} key={index} />
      ))}
    </div>
  )
}
export default PostContainer
