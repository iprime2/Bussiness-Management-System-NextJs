'use client'

import { CreditorsForm } from '@/forms'
import { FC } from 'react'
import { CreditorsProps, DebitorsProps } from '@/types'
import FormContent from '@/components/FormContent'
import { creditorFields } from '@/formFields'

interface ConverterProps {
  id: string
  data: CreditorsProps | DebitorsProps
}

const Converter: FC<ConverterProps> = ({ id, data }) => {
  return (
    <FormContent
      initialData={data}
      type='Creditor'
      urlType='creditors'
      id={id}
      formType={CreditorsForm(data)}
      fieldArray={creditorFields}
    />
  )
}

export default Converter
