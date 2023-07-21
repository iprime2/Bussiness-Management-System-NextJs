'use client'

import { UseFormReturn, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  CreditorValueType,
  DebitorValueType,
  ProductValueType,
  PurchaseValueType,
  SaleValueType,
  creditorSchema,
  debitorSchema,
  productSchema,
  purchaseSchema,
  salesSchema,
} from '@/lib/schemas'
import { CreditorsProps, DebitorsProps, ProductsProps } from '@/types'
import { PurchasesColumnsProps } from '@/columns/purchasesColumn'
import { SalesColumnsProps } from '@/columns/salesColumn'
import { useEffect } from 'react'

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

export function PurchasesForm(
  data: PurchasesColumnsProps
): UseFormReturn<PurchaseValueType> {
  const defaultValues = data
    ? {
        ...data,
      }
    : {
        creditorId: '',
        productId: '',
        quantity: 0,
        weight: 0,
        price: 0,
        pricePaid: 0,
        totalWeight: 0,
        totalAmount: 0,
        paid: '',
        paidThrough: '',
      }
  const form = useForm<PurchaseValueType>({
    resolver: zodResolver(purchaseSchema),
    defaultValues,
  })

  useEffect(() => {
    const { pricePaid, totalWeight } = form.getValues()
    const totalAmount = pricePaid * totalWeight
    form.setValue('totalAmount', totalAmount)
  }, [form.watch('pricePaid'), form.watch('totalWeight')])

  return form
}

export function SalesForm(
  data: SalesColumnsProps
): UseFormReturn<SaleValueType> {
  const defaultValues = data
    ? {
        ...data,
      }
    : {
        firmName: '',
        productType: '',
        quantity: 0,
        weight: 0,
        price: 0,
        pricePaid: 0,
        totalAmount: 0,
        totalWeight: 0,
        paid: '',
        paidThrough: '',
      }
  const form = useForm<SaleValueType>({
    resolver: zodResolver(salesSchema),
    defaultValues,
  })
    useEffect(() => {
      const { pricePaid, totalWeight } = form.getValues()
      const totalAmount = pricePaid * totalWeight
      form.setValue('totalAmount', totalAmount)
    }, [form.watch('pricePaid'), form.watch('totalWeight')])

  return form
}
