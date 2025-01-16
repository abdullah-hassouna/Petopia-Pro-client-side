import { PostDetails } from '@/app/interfaces/postInterface'
import ImageSlider from './ImageSlider'
import PetDetails from './PetDetails'
import ProductDetails from './ProductDetails'

const PostContent = ({ postDetails }: { postDetails: PostDetails }) => {
  const bgColor = `bg-${postDetails.category.toLowerCase()}`
  const images = postDetails.images

  if (postDetails.pet && postDetails.pet.petImage) images.push(postDetails.pet.petImage)

  return (
    <>
      <p className="px-5 py-5 text-whity">
        Post description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, saepe. Illo aperiam, nihil
        corrupti porro fugit, dolorum sed culpa, voluptates cupiditate odit quae modi totam. Sit, nemo odio. Harum,
        fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, sequi necessitatibus! Dignissimos
        hic odio laborum quaerat alias pariatur sapiente reiciendis expedita, possimus autem dolorem, ad nemo recusandae
        harum itaque architecto!
      </p>
      {postDetails.pet && ['adoption', 'breeding'].includes(postDetails.category) ? (
        <PetDetails pet={postDetails.pet} category={postDetails.category} />
      ) : null}
      {postDetails.product && postDetails.category === 'product' ? (
        <ProductDetails product={postDetails.product} category={postDetails.category} />
      ) : null}

      {postDetails.images ? <ImageSlider images={images} tag={postDetails.category} /> : null}
    </>
  )
}
export default PostContent
