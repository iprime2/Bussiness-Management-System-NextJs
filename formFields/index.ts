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
    type: 'number',
    placeholder: 'Enter Product Price',
    required: true,
  },
  {
    name: 'type',
    label: 'Type',
    type: 'text',
    placeholder: 'Enter Product Type',
    required: true,
  },
]
