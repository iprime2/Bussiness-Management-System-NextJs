import { FC } from 'react'

import Converter from './components/Converter'

import { getPurchase } from '@/actions/getPurchase'

import { PurchaseProps } from '@/types'
import { format } from 'date-fns'
import { getCreditor } from '@/actions/getCreditor'
import { getProduct } from '@/actions/getProduct'
import ClientOnly from '@/components/ClientOnly'

interface PurchasePageProps {
  params: { purchaseId: string }
}

const PurchasePage: FC<PurchasePageProps> = async ({ params }) => {
  const purchase = await getPurchase(params.purchaseId)
  const purchaseId = params.purchaseId

  const getProductNames = async (id: string) => {
    const product = await getProduct(id)
    return product?.name || ''
  }

  const getFirmNames = async (id: string) => {
    const creditor = await getCreditor(id)
    return creditor?.firmName || ''
  }

  const firmName = purchase && (await getFirmNames(purchase.creditorId))
  const productType = purchase && (await getProductNames(purchase.productId))

  const purchaseData = purchase
    ? {
        id: purchase.id,
        firmName,
        productType,
        creditorId: purchase.creditorId,
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
          <Converter data={purchaseData as PurchaseProps} id={purchaseId} />
        </div>
      </div>
    </ClientOnly>
  )
}

export default PurchasePage
