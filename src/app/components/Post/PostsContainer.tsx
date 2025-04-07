import { ScrollArea } from '@/components/ui/scroll-area'
import PostCard from './PostCard'
import { PostProps } from '@/app/interfaces/postInterface'

// interface Posts {
//   tag: 'adoption' | 'help' | 'discuss' | 'product' | 'other'
// }

const PostContainer = ({ loading, error, posts }: { loading: boolean, error, posts?: PostProps[] | undefined }) => {

  return (
    <div className="w-full px-2 sm:px-3 md:px-4 lg:px-5 pb-5 h-screen">
      {
        <ScrollArea id="container" className="w-full h-full overflow-auto">
          <div className="flex flex-col gap-4 md:gap-6">
            {/* {loading} */}
            {(loading && posts.length > 0) ? <>Loading...</> :
              (posts).map((post, index) => {
                console.log(post)
                return <PostCard
                key={index} {...post} pet={post.pet} product={post.product} user={post.user} />
              }
                
              )
            }
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
