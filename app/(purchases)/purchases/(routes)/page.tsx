import React, { Component } from 'react'
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

interface PurchasesPageState {
  formattedPurchase: PurchasesColumnsProps[]
}

class PurchasesPage extends Component<PurchasesPageProps, PurchasesPageState> {
  constructor(props: PurchasesPageProps) {
    super(props)
    this.state = {
      formattedPurchase: [],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const purchase = await getPurchases()

    const formattedPurchaseData = await Promise.all(
      purchase.map(async (item) => {
        const getProductNames = async (id: string) => {
          const product = await getProduct(id)
          return product?.name || ''
        }

        const getFirmNames = async (id: string) => {
          const creditor = await getCreditor(id)
          return creditor?.firmName || ''
        }

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

    this.setState({
      formattedPurchase: formattedPurchaseData,
    })
  }

  render() {
    const { formattedPurchase } = this.state

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <PageContent
            title='Purchases'
            description='Manage your purchases here!'
            columns={PurchasesColumns}
            data={formattedPurchase}
            type='purchases'
            searchKey='firmName'
          />
        </div>
      </div>
    )
  }
}

export default PurchasesPage
