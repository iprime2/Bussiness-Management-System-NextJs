'use client'

import { CreditorsForm } from '@/forms'
import { FC } from 'react'
import FormContent from '../../../../../../components/FormContent'
import { Creditor } from '@prisma/client'
import { SafeCreditors } from '@/types'

interface ConverterProps {
  id: string
  data?: SafeCreditors | null
}

const Converter: FC<ConverterProps> = ({ id, data }) => {
  return (
    <FormContent
      data={data}
      type='Creditor'
      urlType='creditors'
      id={id}
      formType={CreditorsForm(data)}
    />
  )
}

export default Converter
