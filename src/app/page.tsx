"use client"

import TrindingSidebar from './components/sidebars/TrendingSidebar'
import PostContainer from './components/Post/PostsContainer'
import PostFormCreation from './components/PostForms/CreatePostForms'
import ContainerHeader from './components/Post/PostContainerHeader'
import callExplorePosts from '@/hooks/call-explore-posts'
import PostCard from './components/Post/PostCard'

function Home() {

  const { isLoadingPosts, posts, error } = callExplorePosts()

  if (isLoadingPosts || posts.length === 0) {
    return <div>Loading..</div>
  }

  return (
    <div className="w-full mb-14 md:mb-0 ">
      < div className="flex justify-between  overflow-hidden" >
        <div className="flex flex-col justify-between items-center mx-auto w-full">
          <PostFormCreation
            userInfo={{
              fullName: 'Haitham AbuLamdi',
              userImage: 'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
            }}
          />
          <ContainerHeader header={'Feeds'} />

          {/* <PostCard user={posts[0].user} post={posts[0].post} pet={posts[0].pet} product={posts[0].product} /> */}

          <PostContainer posts={posts} loading={isLoadingPosts} error={error} />
        </div>
        <TrindingSidebar />
      </div >
    </div >
  )
}

export default Home
