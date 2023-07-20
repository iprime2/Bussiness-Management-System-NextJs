import { PurchaseField } from './../types/index'
import { CreditorField, DebitorField, ProductField } from '@/types'

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
    options: ['Sale', 'Purchase'],
  },
]

export const purchaseFields: PurchaseField[] = [
  {
    name: 'Firm Name',
    label: 'firmName',
    type: 'select',
    placeholder: 'Select Firm',
    required: true,
  },
  {
    name: 'productType',
    label: 'Product',
    type: 'select',
    placeholder: 'Select Product',
    required: true,
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
    type: 'radio',
    placeholder: 'Select',
    required: true,
  },
  {
    name: 'paidThrough',
    label: 'Paid In',
    type: 'radio',
    placeholder: 'Select',
    required: true,
  },
]
