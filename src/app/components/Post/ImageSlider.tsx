import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'

const ImageSlider = (props: { tag: string; images: string[] }) => {
  const { tag, images } = props
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                className="w-[93%] h-[19.6875rem] top-[5.116875rem] rounded-[8px] mx-auto object-cover"
                src={image}
              ></img>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block left-8" variant="secondary" />
        <CarouselNext className="hidden sm:block right-8" variant="secondary" />
      </Carousel>
      <div className="flex justify-center py-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${current === index + 1 ? `bg-${tag}-100` : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
export default ImageSlider
