export type UserProps = {
  id: string
  name: string
  email: string
  image: string
  password: string
  isAdmin: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CreditorsProps {
  id: string
  firmName: string
  ownerName: string
  panNumber: number
  phone: number
  address: string
  createdAt: Date
  updatedAt: Date
}

export interface DebitorsProps {
  id: string
  firmName: string
  ownerName: string
  panNumber: number
  phone: number
  address: string
  createdAt: Date
  updatedAt: Date
}

export interface ProductsProps {
  id: string
  name: string
  weight: number
  price: number
  type: string
  createdAt: Date
  updatedAt: Date
}

export interface PurchaseProps {
  id: string
  firmName: string
  productType: string
  quantity: number
  price: number
  pricePaid: number
  totalAmount: number
  totalWeight: number
  paid: string
  paidThrough: string
  creditorId: string
  productId: string
  createdAt: string
}

export interface SalesProps {
  id: string
  firmName: string
  productType: string
  quantity: number
  price: number
  pricePaid: number
  totalAmount: number
  totalWeight: number
  paid: string
  paidThrough: string
  debitorId: string
  productId: string
  createdAt: string
}

// Form fields  types

export interface CreditorField {
  name: string
  label: string
  type: 'text' | 'number'
  placeholder: string
  required: boolean
}

export interface DebitorField {
  name: string
  label: string
  type: 'text' | 'number'
  placeholder: string
  required: boolean
}

export type Options = {
  id: number | string
  name: string
  value: boolean | string
}

export interface ProductField {
  name: string
  label: string
  type: 'text' | 'number' | 'select'
  placeholder: string
  required: boolean
  options?: Options[]
}

export interface PurchaseField {
  name: string
  label: string
  type: 'text' | 'number' | 'select'
  placeholder: string
  required: boolean
  options?: Options[] | (() => Promise<Options[]>)
}

export interface SaleField {
  name: string
  label: string
  type: 'text' | 'number' | 'select'
  placeholder: string
  required: boolean
  options?: Options[] | (() => Promise<Options[]>)
}
