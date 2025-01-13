'use client'

import { Card } from '@/components/ui/card'
import PostLabel from './PostLabel'
import ImageSlider from './ImageSlider'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

const PostCard = (props: { title: 'adoption' | 'help' | 'discuss' | 'product' | 'other' }) => {
  const { title } = props
  const viaColorClass = `via-${title.toLowerCase()}`
  const images = [
    'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
    'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
    'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_960_720.jpg',
  ]
  return (
    <div className="relative  w-[95%] min-h-[32.771875rem] ">
      <Card
        className={`bg-gradient-to-b from-foreground ${viaColorClass} to-foreground border border-background rounded-[8px] box-border z-0`}
      >
        <PostHeader username="username" fullName="Haitham AbuLamdi" labelTag={title} userImage={images[0]} />
        <ImageSlider images={images} />
        <p className="px-5 pt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, saepe. Illo aperiam, nihil corrupti porro
          fugit, dolorum sed culpa, voluptates cupiditate odit quae modi totam. Sit, nemo odio. Harum, fugit. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, sequi necessitatibus! Dignissimos hic odio
          laborum quaerat alias pariatur sapiente reiciendis expedita, possimus autem dolorem, ad nemo recusandae harum
          itaque architecto!
        </p>
        <PostFooter
          postId="1"
          userImage={images[0]}
          fullName="Haitham AbuLamdi"
          likes={10}
          comments={10}
          shares={10}
          bookmarks={10}
          tag={title}
        />
      </Card>
      <div
        className={`w-[1.0634375rem] h-[0.681rem] flex-shrink-0 absolute top-[1.125rem] -right-[0.5625rem]  rotate-[45deg] bg-${title}-100 z-[-5]`}
      ></div>
      <div
        className={`w-[1.0634375rem] h-[0.681rem] flex-shrink-0 absolute top-[3.3125rem] -right-[0.5625rem] rotate-[-45deg] bg-${title}-100 z-[-5]`}
      ></div>
    </div>
  )
}
export default PostCard
