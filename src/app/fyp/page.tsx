"use client"

import TrindingSidebar from '@/app/components/sidebars/TrendingSidebar'
import PostContainer from '@/app/components/Post/PostsContainer'
import PostFormCreation from '@/app/components/PostForms/CreatePostForms'
import ContainerHeader from '@/app/components/Post/PostContainerHeader'
import callFYPPosts from '@/hooks/fypPostsHook'
import { srcollTrigger } from '@/hooks/srcollTrigger'

function FYP() {

    const { ref: viewRef, isInView } = srcollTrigger<HTMLDivElement>({ threshold: 0.5 });
    let { isLoadingPosts, posts, error } = callFYPPosts(isInView)

    return (
        <div className="w-full mb-14 md:mb-0 ">
            < div className="flex justify-between  overflow-hidden" >
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

export default FYP
