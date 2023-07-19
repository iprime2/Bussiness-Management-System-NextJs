'use client'

import { UseFormReturn, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CreditorValueType,
  DebitorValueType,
  creditorSchema,
  debitorSchema,
} from '@/lib/schemas'
import { CreditorsProps, DebitorsProps } from '@/types'

export function CreditorsForm(
  data: CreditorsProps
): UseFormReturn<CreditorValueType> {
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

export function DebitorsForm(
  data: DebitorsProps
): UseFormReturn<DebitorValueType> {
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
