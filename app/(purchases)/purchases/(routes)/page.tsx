import React from 'react'
import { format } from 'date-fns'

import { getPurchases } from '@/actions/getPurchases'
import { getProduct } from '@/actions/getProduct'
import { getCreditor } from '@/actions/getCreditor'

import PageContent from '@/components/PageContent'
import {
  PurchasesColumns,
  PurchasesColumnsProps,
} from '@/columns/purchasesColumn'

interface PurchasesPageProps {}

const PurchasesPage: React.FC<PurchasesPageProps> = async () => {
  const purchase = await getPurchases()

  const getProductNames = async (id: string) => {
    const product = await getProduct(id)
    return product?.name || ''
  }

  const getFirmNames = async (id: string) => {
    const creditor = await getCreditor(id)
    return creditor?.firmName || ''
  }

  const formattedPurchaseData: PurchasesColumnsProps[] = await Promise.all(
    purchase.map(async (item) => {
      const firmName = await getFirmNames(item.creditorId)
      const productType = await getProductNames(item.productId)

      return {
        id: item.id,
        firmName,
        productType,
        creditorId: item.creditorId,
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
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <PageContent
          title='Purchases'
          description='Manage your purchases here!'
          columns={PurchasesColumns}
          data={formattedPurchaseData}
          type='purchases'
          searchKey='firmName'
        />
      </div>
    </div>
  )
}

export default PurchasesPage
