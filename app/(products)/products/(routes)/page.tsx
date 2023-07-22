import { FC } from 'react'
import { format } from 'date-fns'

import { getProducts } from '@/actions/getProducts'

import { ProductsColumns, ProductsColumnsProps } from '@/columns/productsColumn'

import PageContent from '@/components/PageContent'
import ClientOnly from '@/components/ClientOnly'

interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = async ({}) => {
  const products = await getProducts()

  const formattedProducts: ProductsColumnsProps[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    weight: item.weight,
    price: item.price,
    type: item.type,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))
  return (
    <ClientOnly>
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <PageContent
            title='Products'
            description='Manage your products here!'
            columns={ProductsColumns}
            data={formattedProducts}
            type='products'
            searchKey='name'
          />
        </div>
      </div>
    </ClientOnly>
  )
}

export default ProductsPage
