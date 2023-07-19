'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CreditorValueType,
  DebitorValueType,
  creditorSchema,
  debitorSchema,
} from '@/lib/schemas'
import { Creditor, Debtor } from '@prisma/client'

export function CreditorsForm(data?: CreditorValueType | null): any {
  const defaultValues = data
    ? {
        ...data,
      }
    : {
        firmName: '',
        ownerName: '',
        panNumber: 0,
        phone: 0,
        address: '',
      }
  const form = useForm<CreditorValueType>({
    resolver: zodResolver(creditorSchema),
    defaultValues,
  })

  return form
}

export function DebitorsForm(data?: Debtor[] | null): any {
  const defaultValues = data
    ? {
        ...data,
      }
    : {
        firmName: '',
        ownerName: '',
        panNumber: 0,
        phone: 0,
        address: '',
      }
  const form = useForm<DebitorValueType>({
    resolver: zodResolver(debitorSchema),
    defaultValues,
  })

  return form
}
