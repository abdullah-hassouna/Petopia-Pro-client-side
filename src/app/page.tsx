"use client"

import TrindingSidebar from './components/sidebars/TrendingSidebar'
import PostContainer from './components/Post/PostsContainer'
import PostFormCreation from './components/PostForms/CreatePostForms'
import ContainerHeader from './components/Post/PostContainerHeader'
import callExplorePosts from '@/hooks/explorePostsHook'
import { srcollTrigger } from '@/hooks/srcollTrigger'

function Home() {

  const { ref: viewRef, isInView } = srcollTrigger<HTMLDivElement>({ threshold: 0.5 });
  let { isLoadingPosts, posts, error } = callExplorePosts(isInView)


  return (
    <div className="w-full mb-14 md:mb-0 ">
      <div className="flex justify-between  overflow-hidden" >
        <div className="flex flex-col justify-between items-center mx-auto w-full">
          <PostFormCreation />
          <ContainerHeader header={'Feed'} />
          <PostContainer posts={posts} isLoadingPosts={isLoadingPosts} error={error} ref={viewRef} />
        </div>
        <TrindingSidebar />
      </div >
    </div >
  )
}

export default Home
