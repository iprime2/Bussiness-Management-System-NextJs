import { FC } from 'react'
import { format } from 'date-fns'

import { getSale } from '@/actions/getSale'
import { getDebitor } from '@/actions/getDebitor'
import { getProduct } from '@/actions/getProduct'

import { SalesProps } from '@/types'

import Converter from './components/Converter'
import ClientOnly from '@/components/ClientOnly'

interface PurchasePageProps {
  params: { saleId: string }
}

const PurchasePage: FC<PurchasePageProps> = async ({ params }) => {
  const purchase = await getSale(params.saleId)
  const saleId = params.saleId

  const getProductNames = async (id: string) => {
    const product = await getProduct(id)
    return product?.name || ''
  }

  const getFirmNames = async (id: string) => {
    const creditor = await getDebitor(id)
    return creditor?.firmName || ''
  }

  const firmName = purchase && (await getFirmNames(purchase.debitorId))
  const productType = purchase && (await getProductNames(purchase.productId))

  const salesData = purchase
    ? {
        id: purchase.id,
        firmName,
        productType,
        debitorId: purchase.debitorId,
        productId: purchase.productId,
        quantity: purchase.quantity,
        price: purchase.price,
        pricePaid: purchase.pricePaid,
        totalAmount: purchase.totalAmount,
        totalWeight: purchase.totalWeight,
        paid: purchase.paid ? 'Yes' : 'No',
        paidThrough: purchase.paidThrough,
        createdAt: format(purchase.createdAt, 'MMMM do, yyyy'),
      }
    : null

  return (
    <ClientOnly>
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <Converter data={salesData as SalesProps} id={saleId} />
        </div>
      </div>
    </ClientOnly>
  )
}

export default PurchasePage
