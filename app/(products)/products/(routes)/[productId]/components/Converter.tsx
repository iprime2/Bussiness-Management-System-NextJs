'use client'

import { CreditorsForm, ProductsForm } from '@/forms'
import { FC } from 'react'
import { CreditorsProps, DebitorsProps, ProductsProps } from '@/types'
import FormContent from '@/components/FormContent'
import { productFields } from '@/formFields'

interface ConverterProps {
  id: string
  data: CreditorsProps | DebitorsProps | ProductsProps
}

const Converter: FC<ConverterProps> = ({ id, data }) => {
  return (
    <FormContent
      initialData={data}
      type='Product'
      urlType='products'
      id={id}
      formType={ProductsForm(data)}
      fieldArray={productFields}
    />
  )
}

export default Converter
