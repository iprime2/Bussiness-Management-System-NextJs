import { Options, PurchaseField, SaleField } from './../types/index'
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

let creditorsFirmNameData: Options[] = []
async function getCreditorsFirmName() {
  try {
    const response = await fetch('/api/creditors')
    const data = await response.json()

    data.map((item: any) =>
      creditorsFirmNameData.push({
        name: item.firmName,
        id: item.id,
        value: item.id,
      })
    )
    return creditorsFirmNameData
  } catch (error) {
    console.error('Error fetching firm names:', error)
    return []
  }
}
getCreditorsFirmName()

let creditorsProductTypeData: Options[] = []
async function getCreditorsProductType() {
  try {
    const response = await fetch('/api/products')
    const data = await response.json()

    data.map(
      (item: any) =>
        item.type === 'Purchase' &&
        creditorsProductTypeData.push({
          name: item.name,
          id: item.id,
          value: item.id,
        })
    )
    return creditorsProductTypeData
  } catch (error) {
    console.error('Error fetching firm names:', error)
    return []
  }
}
getCreditorsProductType()

export const purchaseFields: PurchaseField[] = [
  {
    name: 'creditorId',
    label: 'Firm Name',
    type: 'select',
    placeholder: 'Select Firm',
    required: true,
    options: creditorsFirmNameData
      ? creditorsFirmNameData
      : [{ id: 1, name: 'Loading...', value: 'Loading...' }],
  },
  {
    name: 'productId',
    label: 'Product',
    type: 'select',
    placeholder: 'Select Product',
    required: true,
    options: creditorsProductTypeData,
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

let debitorFirmNameData: Options[] = []
async function getDebitorsFirmName() {
  try {
    const response = await fetch('/api/debitors')
    const data = await response.json()
    console.log(data)

    data.map((item: any) =>
      debitorFirmNameData.push({
        name: item.firmName,
        id: item.id,
        value: item.id,
      })
    )
    return debitorFirmNameData
  } catch (error) {
    console.error('Error fetching firm names:', error)
    return []
  }
}
getDebitorsFirmName()

let salesProductTypeData: Options[] = []
async function getSalesProductType() {
  try {
    const response = await fetch('/api/products')
    const data = await response.json()

    data.map(
      (item: any) =>
        item.type === 'Sale' &&
        salesProductTypeData.push({
          name: item.name,
          id: item.id,
          value: item.id,
        })
    )
    return salesProductTypeData
  } catch (error) {
    console.error('Error fetching firm names:', error)
    return []
  }
}
getSalesProductType()

export const saleFields: SaleField[] = [
  {
    name: 'debitorId',
    label: 'Firm Name',
    type: 'select',
    placeholder: 'Select Firm',
    required: true,
    options: debitorFirmNameData
      ? debitorFirmNameData
      : [{ id: 1, name: 'Loading...', value: 'Loading...' }],
  },
  {
    name: 'productId',
    label: 'Product',
    type: 'select',
    placeholder: 'Select Product',
    required: true,
    options: salesProductTypeData,
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
    placeholder: 'Select Paid',
    required: true,
    options: [
      { id: 1, name: 'Yes', value: 'Yes' },
      { id: 2, name: 'No', value: 'No' },
    ],
  },
  {
    name: 'paidThrough',
    label: 'Mode of Payment',
    type: 'select',
    placeholder: 'Select Mode of Payment',
    required: true,
    options: [
      { id: 1, name: 'Cash', value: 'Cash' },
      { id: 2, name: 'Cheque', value: 'Cheque' },
      { id: 3, name: 'Bank', value: 'Bank' },
      { id: 4, name: 'Credit', value: 'Credit' },
    ],
  },
]
