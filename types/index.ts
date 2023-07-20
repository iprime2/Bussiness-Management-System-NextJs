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
  type: 'text' | 'number'
  placeholder: string
  required: boolean
}
