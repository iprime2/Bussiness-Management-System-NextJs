'use client'

import { FC } from 'react'

import { DebitorsProps } from '@/types'
import { DebitorsForm } from '@/forms'
import { debitorFields } from '@/formFields'

import FormContent from '@/components/FormContent'

interface ConverterProps {
  id: string
  data: DebitorsProps
}

const Converter: FC<ConverterProps> = ({ id, data }) => {
  return (
    <FormContent
      initialData={data}
      type='Debitors'
      urlType='debtors'
      id={id}
      formType={DebitorsForm(data)}
      fieldArray={debitorFields}
    />
  )
}

export default Converter
