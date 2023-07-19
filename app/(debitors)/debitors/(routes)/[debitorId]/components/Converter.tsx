'use client'

import { DebitorsForm } from '@/forms'
import { FC } from 'react'
import FormContent from '../../../../../../components/FormContent'
import { Debtor } from '@prisma/client'

interface ConverterProps {
  id: string
  data?: Debtor[] | null
}

const Converter: FC<ConverterProps> = ({ id, data }) => {
  return (
    <FormContent
      initialData={data}
      type='Debitors'
      urlType='debtors'
      id={id}
      formType={DebitorsForm(data)}
    />
  )
}

export default Converter
