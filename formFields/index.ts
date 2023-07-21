import { Options, PurchaseField } from './../types/index'
import { CreditorField, DebitorField, ProductField } from '@/types'
import { Loader } from '@/components/ui/loader'

export const creditorFields: CreditorField[] = [
  {
    name: 'firmName',
    label: 'Firm Name',
    type: 'text',
    placeholder: 'Enter Firm Name',
    required: true,
  },
  {
    name: 'ownerName',
    label: 'Owner Name',
    type: 'text',
    placeholder: 'Enter Owner Name',
    required: true,
  },
  {
    name: 'panNumber',
    label: 'PAN Number',
    type: 'number',
    placeholder: 'Enter PAN Number',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'number',
    placeholder: 'Enter Phone Number',
    required: true,
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    placeholder: 'Enter Address',
    required: true,
  },
]

export const debitorFields: DebitorField[] = [
  {
    name: 'firmName',
    label: 'Firm Name',
    type: 'text',
    placeholder: 'Enter Firm Name',
    required: true,
  },
  {
    name: 'ownerName',
    label: 'Owner Name',
    type: 'text',
    placeholder: 'Enter Owner Name',
    required: true,
  },
  {
    name: 'panNumber',
    label: 'PAN Number',
    type: 'number',
    placeholder: 'Enter PAN Number',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'number',
    placeholder: 'Enter Phone Number',
    required: true,
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    placeholder: 'Enter Address',
    required: true,
  },
]

export const productFields: ProductField[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter Product Name',
    required: true,
  },
  {
    name: 'weight',
    label: 'Weight',
    type: 'number',
    placeholder: 'Enter Product Weight',
    required: true,
  },
  {
    name: 'price',
    label: 'Price',
    type: 'text',
    placeholder: 'Enter Product Price',
    required: true,
  },
  {
    name: 'type',
    label: 'Type',
    type: 'select',
    placeholder: 'Enter Product Type',
    required: true,
    options: [
      { id: 1, name: 'Sale', value: 'Sale' },
      { id: 2, name: 'Purchase', value: 'Purchase' },
    ],
  },
]

let firmNameData: Options[] = []
async function getFirmName() {
  try {
    const response = await fetch('/api/creditors')
    const data = await response.json()

    data.map((item: any) =>
      firmNameData.push({ name: item.firmName, id: item.id, value: item.id })
    )
    return firmNameData
  } catch (error) {
    console.error('Error fetching firm names:', error)
    return []
  }
}
getFirmName()

let productTypeData: Options[] = []
async function getProductType() {
  try {
    const response = await fetch('/api/products')
    const data = await response.json()

    data.map(
      (item: any) =>
        item.type === 'Purchase' &&
        productTypeData.push({ name: item.name, id: item.id, value: item.id })
    )
    return productTypeData
  } catch (error) {
    console.error('Error fetching firm names:', error)
    return []
  }
}
getProductType()

export const purchaseFields: PurchaseField[] = [
  {
    name: 'creditorId',
    label: 'Firm Name',
    type: 'select',
    placeholder: 'Select Firm',
    required: true,
    options: firmNameData
      ? firmNameData
      : [{ id: 1, name: 'Loading...', value: 'Loading...' }],
  },
  {
    name: 'productId',
    label: 'Product',
    type: 'select',
    placeholder: 'Select Product',
    required: true,
    options: productTypeData,
  },
  {
    name: 'quantity',
    label: 'Quantity',
    type: 'number',
    placeholder: 'Enter Quantity',
    required: true,
  },
  {
    name: 'price',
    label: 'Price',
    type: 'number',
    placeholder: 'Enter Price',
    required: true,
  },
  {
    name: 'pricePaid',
    label: 'Price Paid',
    type: 'number',
    placeholder: 'Enter Price Paid',
    required: true,
  },

  {
    name: 'totalWeight',
    label: 'Total Weight',
    type: 'number',
    placeholder: 'Enter Total Weight',
    required: true,
  },
  {
    name: 'totalAmount',
    label: 'Total Amount',
    type: 'number',
    placeholder: 'Enter Total Amount',
    required: true,
  },
  {
    name: 'paid',
    label: 'Paid',
    type: 'select',
    placeholder: 'Select',
    required: true,
    options: [
      { id: 1, name: 'Yes', value: 'Yes' },
      { id: 2, name: 'No', value: 'No' },
    ],
  },
  {
    name: 'paidThrough',
    label: 'Paid In',
    type: 'select',
    placeholder: 'Select',
    required: true,
    options: [
      { id: 1, name: 'Cash', value: 'Cash' },
      { id: 2, name: 'Cheque', value: 'Cheque' },
      { id: 3, name: 'Bank', value: 'Bank' },
      { id: 4, name: 'Credit', value: 'Credit' },
    ],
  },
]
