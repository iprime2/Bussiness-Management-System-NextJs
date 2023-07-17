import FormContent from '@/components/FormContent'
import { FC } from 'react'
import { getCreditor } from '@/actions/getCreditor'

interface CreditorPageProps {
  params: { creditorId: string }
}

const CreditorPage: FC<CreditorPageProps> = async ({ params }) => {
  const creditor = await getCreditor(params.creditorId)

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <FormContent data={creditor} type='Creditor' />
      </div>
    </div>
  )
}

export default CreditorPage
