import { Creditor } from '@prisma/client'

export type SafeCreditors = Omit<Creditor, 'createdAt' | 'updatedAt'> & {
  createdAt: string
  updatedAt: string
}
