'use client'

import { CreditorsColumnsProps } from '@/columns/creditorsColumn'
import { useCreditorsForm } from '@/forms'
import { FC } from 'react'
import FormContent from './FormContent'
import { Creditor } from '@prisma/client'

interface ConverterProps {
  id: string
  creditor?: Creditor
}

const Converter: FC<ConverterProps> = ({ id, creditor }) => {
  return (
    <FormContent
      data={creditor}
      type='Creditor'
      urlType='creditors'
      id={id}
      formType={useCreditorsForm(creditor)}
    />
  )
}

export default Converter
