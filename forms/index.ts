'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { CreditorValueType, creditorSchema } from '@/lib/schemas'
import { Creditor } from '@prisma/client'

const CreditorsForm = (data?: Creditor): ReturnType<typeof useForm> => {
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

const useDebitorsForm = (data?: Creditor): ReturnType<typeof useForm> => {
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

export { CreditorsForm, useDebitorsForm }
