import ProductForm from '@/app/components/PostForms/ProductForm'

const product = {
  id: '1',
  userId: '1',
  title: 'Catnip',
  stock: 3,
  price: 16,
  rating: 4,
  details: 'A good catnip for your lovely cat.',
  productImage: [],
}
const page = () => {
  return <ProductForm title={'Edit '} productData={product} />
}
export default page
