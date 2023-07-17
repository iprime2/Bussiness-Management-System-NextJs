'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreditorValueType, creditorSchema } from '@/lib/schemas'
import { FC } from 'react'

export const data = []

const CreditorsForm: FC<Creditord> = ({ data }) => {
  const form = useForm<CreditorValueType>({
    resolver: zodResolver(creditorSchema),
    defaultValues: data
      ? {
          ...data,
        }
      : {
          firmName: '',
          ownerName: '',
          panNumber: 0,
          phone: 0,
          address: '',
        },
  })

  return form
}

export default CreditorsForm
