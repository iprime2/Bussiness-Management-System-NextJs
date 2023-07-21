'use client'

import { PurchasesForm } from '@/forms'
import { FC } from 'react'
import {
  CreditorsProps,
  DebitorsProps,
  ProductsProps,
  PurchaseProps,
} from '@/types'
import FormContent from '@/components/FormContent'
import { purchaseFields } from '@/formFields'

interface ConverterProps {
  id: string
  data: CreditorsProps | DebitorsProps | ProductsProps | PurchaseProps
}

const Converter: FC<ConverterProps> = ({ id, data }) => {
  return (
    <FormContent
      initialData={data}
      type='Purchase'
      urlType='purchases'
      id={id}
      formType={PurchasesForm(data)}
      fieldArray={purchaseFields}
    />
  )
}

export default Converter
