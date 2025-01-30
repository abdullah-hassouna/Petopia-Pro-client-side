import { Card } from '@/components/ui/card'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import PostContent from './PostContent'

const PostCard = (props: { title: 'adoption' | 'help' | 'discuss' | 'product' | 'other' }) => {
  const { title } = props
  let colorScheme = ['adoption', 'help', 'discuss', 'product'].includes(title) ? title : 'help'

  const viaColorClass = `via-${colorScheme.toLowerCase()}`

  const images = [
    'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
    'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
    'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
  ]
  const pet = {
    id: '1',
    ownerId: 'me, nigga',
    petName: 'nigga cat',
    type: 'cat',
    petImage: ['https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg'],
    dob: '12/20/2000',
    gender: 0,
    healthStatus: 'good',
    adoptionStatus: 'adopted' as 'adopted' | 'available',
  }
  const product = {
    id: '1',
    userId: 'asd',
    title: 'cat nip',
    stock: 10,
    price: 10,
    rating: 5,
    details:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci explicabo dolorem magni obcaecati aut repellendus molestiae. Error exercitationem ducimus dicta ipsum qui incidunt assumenda quaerat. Quas at quo facilis.',
  }
  const PostDetails = {
    id: '1',
    images,
    category: title,
    postContent:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rerum deleniti eaque aliquam, odio nam, incidunt possimus nostrum ratione, rem in blanditiis perferendis! Non ratione unde modi repellat magnam ad.',
    likesCount: 10,
    commentsCount: 10,
    bookmarkCount: 10,
    pet: pet,
    product: product,
  }

  return (
    <div className="relative min-h-[32.771875rem] w-full max-w-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto mt-5">
      <Card
        className={`bg-gradient-to-b from-foreground ${viaColorClass} to-foreground border border-background rounded-[8px] box-border z-0`}
      >
        <PostHeader
          username="username"
          fullName="Haitham AbuLamdiasdasdasdassadasdasd"
          labelTag={title}
          userImage={images[0]}
        />

        <PostContent postDetails={PostDetails} />

        <PostFooter
          postId="1"
          userImage={images[0]}
          fullName="Haitham AbuLamdi"
          likes={10}
          comments={10}
          shares={10}
          bookmarks={10}
          tag={colorScheme}
          postDetails={PostDetails}
        />
      </Card>
      <div
        className={`w-[1.0634375rem] h-[0.681rem] flex-shrink-0 absolute top-[1.125rem] -right-[0.5625rem]  rotate-[45deg] bg-${colorScheme}-100 z-[-5]`}
      ></div>
      <div
        className={`w-[1.0634375rem] h-[0.681rem] flex-shrink-0 absolute top-[3.3125rem] -right-[0.5625rem] rotate-[-45deg] bg-${colorScheme}-100 z-[-5]`}
      ></div>
    </div>
  )
}
export default PostCard
