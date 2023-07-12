import FormContent from '@/components/FormContent'
import { FC } from 'react'
import prismadb from '@/lib/prismadb'

interface CreditorPageProps {}

const CreditorPage: FC<CreditorPageProps> = async ({}) => {
  const creditors = await prismadb.creditor.findMany({})

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <FormContent data={creditors} type='Creditor' />
      </div>
    </div>
  )
}

export default CreditorPage
