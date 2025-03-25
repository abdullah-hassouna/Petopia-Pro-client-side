import { PostDetails } from '@/app/interfaces/postInterface'
import ImageSlider from './ImageSlider'
import PetDetails from './PetDetails'
import ProductDetails from './ProductDetails'

const PostContent = ({ postDetails }: { postDetails: PostDetails }) => {
  let colorScheme = ['adoption', 'help', 'discuss', 'product'].includes(postDetails.category)
    ? postDetails.category
    : 'help'
  const images = postDetails.images

  if (postDetails.pet && postDetails.pet.petImage) images.push(...postDetails.pet.petImage)

  return (
    <>
      <p className="px-5 py-5 text-whity">{postDetails.postContent}</p>
      {postDetails.pet && ['adoption', 'breeding'].includes(postDetails.category) ? (
        <PetDetails pet={postDetails.pet} category={postDetails.category} />
      ) : null}
      {postDetails.product && postDetails.category === 'product' ? (
        <ProductDetails product={postDetails.product} category={postDetails.category} />
      ) : null}

      {postDetails.images ? <ImageSlider images={images} tag={colorScheme} /> : null}
    </>
  )
}
export default PostContent
