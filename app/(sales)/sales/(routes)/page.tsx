import React from 'react'
import { format } from 'date-fns'

import { getSales } from '@/actions/getSales'
import { getProduct } from '@/actions/getProduct'
import { getDebitor } from '@/actions/getDebitor'

import PageContent from '@/components/PageContent'

import { SalesColumns, SalesColumnsProps } from '@/columns/salesColumn'
import ClientOnly from '@/components/ClientOnly'

interface SalesPageProps {}

const SalesPage: React.FC<SalesPageProps> = async () => {
  const purchase = await getSales()

  const getProductNames = async (id: string) => {
    const product = await getProduct(id)
    return product?.name || ''
  }

  const getFirmNames = async (id: string) => {
    const debitor = await getDebitor(id)
    return debitor?.firmName || ''
  }

  const formattedSalesData: SalesColumnsProps[] = await Promise.all(
    purchase.map(async (item) => {
      const firmName = await getFirmNames(item.debitorId)
      const productType = await getProductNames(item.productId)

      return {
        id: item.id,
        firmName,
        productType,
        debitorId: item.debitorId,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        pricePaid: item.pricePaid,
        totalAmount: item.totalAmount,
        totalWeight: item.totalWeight,
        paid: item.paid ? 'Yes' : 'No',
        paidThrough: item.paidThrough,
        createdAt: format(item.createdAt, 'MMMM do, yyyy'),
      }
    })
  )

  return (
    <ClientOnly>
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <PageContent
            title='Sales'
            description='Manage your sales here!'
            columns={SalesColumns}
            data={formattedSalesData}
            type='sales'
            searchKey='firmName'
          />
        </div>
      </div>
    </ClientOnly>
  )
}

export default SalesPage
