'use client'

import { UseFormReturn, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CreditorValueType,
  DebitorValueType,
  ProductValueType,
  creditorSchema,
  debitorSchema,
  productSchema,
} from '@/lib/schemas'
import { CreditorsProps, DebitorsProps, ProductsProps } from '@/types'

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

export function ProductsForm(
  data: ProductsProps
): UseFormReturn<ProductValueType> {
  const defaultValues = data
    ? {
        ...data,
      }
    : {
        name: '',
        weight: 0,
        price: 0,
        type: '',
      }
  const form = useForm<ProductValueType>({
    resolver: zodResolver(productSchema),
    defaultValues,
  })

  return form
}
