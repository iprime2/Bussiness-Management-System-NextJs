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
  quantity: number
  price: number
  pricePaid: number
  totalAmount: number
  totalWeight: number
  paid: boolean
  paidThrough: string
  debitorId: boolean
  productId: boolean
  createdAt: Date
  updatedAt: Date
}

export interface SalesProps {
  id: string
  quantity: number
  price: number
  pricePaid: number
  totalAmount: number
  totalWeight: number
  paid: boolean
  paidThrough: string
  creditorId: boolean
  productId: boolean
  createdAt: Date
  updatedAt: Date
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

export interface ProductField {
  name: string
  label: string
  type: 'text' | 'number' | 'select'
  placeholder: string
  required: boolean
  options?: string[]
}

export interface PurchaseField {
  name: string
  label: string
  type: 'text' | 'number' | 'select' | 'radio'
  placeholder: string
  required: boolean
  options?: string[]
}

export interface SaleField {
  name: string
  label: string
  type: 'text' | 'number' | 'select' | 'radio'
  placeholder: string
  required: boolean
  options?: string[]
}
