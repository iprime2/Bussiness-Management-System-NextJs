'use client'

import { FC } from 'react'

import { SalesForm } from '@/forms'
import { saleFields } from '@/formFields'

import FormContent from '@/components/FormContent'
import { SalesProps } from '@/types'

interface ConverterProps {
  id: string
  data: SalesProps
}

const Converter: FC<ConverterProps> = ({ id, data }) => {
  return (
    <FormContent
      initialData={data}
      type='Sale'
      urlType='sales'
      id={id}
      formType={SalesForm(data)}
      fieldArray={saleFields}
    />
  )
}

export default Converter
