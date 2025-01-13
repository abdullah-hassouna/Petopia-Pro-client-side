import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const ImageSlider = (props: { images: string[] }) => {
  const images = props.images
  return (
    <Carousel>
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
  )
}
export default ImageSlider
