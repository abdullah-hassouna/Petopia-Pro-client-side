import { PostDetails, PostProps } from '@/app/interfaces/postInterface'
import ImageSlider from './ImageSlider'
import PetDetails from './PetDetails'
import ProductDetails from './ProductDetails'
import viaColorClass from '@/lib/utils/categoryColor'

const PostContent = ({ postDetails }: { postDetails: PostProps }) => {
  const colorScheme = viaColorClass("help").colorScheme
  // ? postDetails.category.title
  // : 'help'
  const images = postDetails.images.map(({ url }) => url)

  if (postDetails.pet && postDetails.pet.petImage) images.push(postDetails.pet.petImage)

  return (
    <>
      <p className="px-5 py-5 text-whity">{postDetails.postContent}</p>
      {postDetails.pet && ['adoption', 'breeding'].includes("help") ? (
        <PetDetails pet={postDetails.pet} category={"help"} />
      ) : null}
      {postDetails.product && postDetails.category.title === 'product' ? (
        <ProductDetails product={postDetails.product} category={postDetails.category.title} />
      ) : null}

      {postDetails.images ? <ImageSlider images={images} tag={"help"} /> : null}
    </>
  )
}
export default PostContent
