import { FC } from 'react'
import { getCreditor } from '@/actions/getCreditor'
import { CreditorsForm } from '@/forms'
import dynamic from 'next/dynamic'

interface CreditorPageProps {
  params: { creditorId: string }
}

const FormContent = dynamic(() => import('@/components/FormContent'))

const CreditorPage: FC<CreditorPageProps> = async ({ params }) => {
  const creditor = await getCreditor(params.creditorId)
  const creditorId = params.creditorId

  const formType =
    typeof window !== 'undefined' ? CreditorsForm(creditor) : null

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <FormContent
          data={creditor}
          type='Creditor'
          urlType='creditors'
          id={creditorId}
          formType={formType}
        />
      </div>
    </div>
  )
}

export default CreditorPage
