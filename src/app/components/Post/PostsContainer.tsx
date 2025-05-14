import { ScrollArea } from '@/components/ui/scroll-area'
import PostCard from './PostCard'
import { PostProps } from '@/app/interfaces/postInterface'
import PostSkeleton from '@/app/skeleton/PostSkeleton'
import { RefObject } from 'react'

// interface Posts {
//   tag: 'adoption' | 'help' | 'discuss' | 'product' | 'other'
// }

const PostContainer = ({ ref, isLoadingPosts, error, posts }: { ref: RefObject<HTMLDivElement>, isLoadingPosts: boolean, error: any, posts?: PostProps[] | undefined }) => {

  return (
    <div className="w-full mx-4 px-5 max-lg:ml-4 ml-32 sm:px-3 md:px-4 lg:px-5 pb-5 h-screen">
      {
        <ScrollArea id="container" className="w-full h-full overflow-auto">
          <div className="mx-auto flex flex-col items-center max-w-3xl gap-4 md:gap-6">

            {
              error ? <h1 className='text-red-500 font-bold'>Somthing Went Wrong</h1> :
                (isLoadingPosts && posts.length === 0) ?
                  ([...(new Array(5))].map((_, index) => <PostSkeleton key={index} />)) :
                  (posts).map((post, index) => {
                    console.log(post)
                    return <PostCard
                      key={index} {...post} pet={post.pet} product={post.product} user={post.user} />
                  })
            }
            <div><h4 ref={ref} className='text-transparent'>asda</h4></div>
          </div>
        </ScrollArea>
      }
    </div >
  )
}


// const PostsData = {
//   PostData: {
//     pet: {
//       id: 'pet-10',
//       petName: 'Cat',
//       type: '',
//       petImage: [],
//       dob: '',
//       gender: false,
//       healthStatus: '',
//       adoptionStatus: 'adopted'
//     },
//     product: {
//       id: 'product-10',
//       title: '',
//       stock: 0,
//       price: 0,
//       rating: 0,
//       details: ''
//     },
//     user: {
//       id: "user-5",
//       username: 'abood-hass',
//       fullName: 'Abdullah Hassouna',
//       labelTag: 'adoption',
//       userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDJ2Ng40CF4yr4q89wueOVHuQGwEWqq3oMg&s'
//     },
//     post: {
//       id: '5',
//       images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDJ2Ng40CF4yr4q89wueOVHuQGwEWqq3oMg&s"],
//       postContent: 'i found this',
//       likesCount: 20,
//       commentsCount: 20,
//       bookmarkCount: 5,
//       sharesCount: 2,
//       category: 'adoption'
//     }
//   }
// }

export default PostContainer
