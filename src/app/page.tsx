"use client"

import TrindingSidebar from './components/sidebars/TrendingSidebar'
import PostContainer from './components/Post/PostsContainer'
import PostFormCreation from './components/PostForms/CreatePostForms'
import ContainerHeader from './components/Post/PostContainerHeader'
import callExplorePosts from '@/hooks/explorePostsHook'
import { srcollTrigger } from '@/hooks/srcollTrigger'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function Home() {

  const { ref: viewRef, isInView } = srcollTrigger<HTMLDivElement>({ threshold: 0.5 });
  let { isLoadingPosts, posts, error } = callExplorePosts(isInView)


  return (
    <div className="w-full mb-14 md:mb-0 ">
      < div className="flex justify-between  overflow-hidden" >
        <div className="flex flex-col justify-between items-center mx-auto w-full">
          <PostFormCreation />
          <Tabs defaultValue="explore">
            <TabsList className="grid w-[70%] pt-5 mx-auto grid-cols-2 gap-5">
              <TabsTrigger value="explore">Explore</TabsTrigger>
              <TabsTrigger value="feed">Feed</TabsTrigger>
            </TabsList>
            <TabsContent value="explore">
              <ContainerHeader header={'Explore'} />
              <PostContainer posts={posts} isLoadingPosts={isLoadingPosts} error={error} ref={viewRef} />
            </TabsContent>
            <TabsContent value="feed">
              <ContainerHeader header={'Feed'} />
              <PostContainer posts={posts} isLoadingPosts={isLoadingPosts} error={error} ref={viewRef} />
            </TabsContent>
          </Tabs>

        </div>
        <TrindingSidebar />
      </div >
    </div >
  )
}

export default Home
