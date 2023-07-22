import { FC } from 'react'

import Converter from './components/Converter'

import { getProduct } from '@/actions/getProduct'

import { ProductsProps } from '@/types'
import getCurrentUser from '@/actions/getCurrentuser'
import { redirect } from 'next/navigation'

interface ProductPageProps {
  params: { productId: string }
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/')
  }
  const product = await getProduct(params.productId)
  const productId = params.productId

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <Converter data={product as ProductsProps} id={productId} />
      </div>
    </div>
  )
}

export default ProductPage
