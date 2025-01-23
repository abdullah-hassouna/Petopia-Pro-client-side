import { Product } from '@/app/interfaces/postInterface'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FaShoppingBag, FaStar } from 'react-icons/fa'

const ProductDetails = ({ product, category }: { product: Product; category: string }) => {
  const bgColor = `bg-${category.toLowerCase()}`
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item-1"
        className={`flex flex-col m-5 p-1 ${bgColor} rounded-lg hover:bg-foreground text-whity shadow-md justify-center`}
      >
        <AccordionTrigger about={category}>
          <div className="col-span-1 flex mt-4 gap-2">
            <FaShoppingBag className="text-2xl mr-2" color={`var(--${category}-tag-100)`} />
            <p className="text-lg">{product.title}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="grid grid-cols-2 gap-4 mx-5 ">
          <div className="flex flex-col">
            <p className="font-semibold">Name:</p>
            <p>{product.title}</p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">InStock:</p>
            <p>{product.stock}</p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">Price:</p>
            <p>${product.price}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Rating:</p>
            <div className="flex gap-1">
              {product.rating ? (
                [...new Array(product.rating % 6)].map((__star, i) => (
                  <FaStar className="text-lg" color="yellow" key={i} />
                ))
              ) : (
                <i className="text-gray-600">Not Rated</i>
              )}
            </div>
          </div>

          <div className="flex flex-col col-span-2">
            <p className="font-semibold">Details:</p>
            <p>{product.details}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ProductDetails
