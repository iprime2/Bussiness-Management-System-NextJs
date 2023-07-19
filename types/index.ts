import { Creditor, Debtor } from '@prisma/client'

export type SafeCreditors = Omit<Creditor, 'createdAt' | 'updatedAt'> & {
  createdAt: string
  updatedAt: string
}
export type SafeDebitors = Omit<Debtor, 'createdAt' | 'updatedAt'> & {
  createdAt: string
  updatedAt: string
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
