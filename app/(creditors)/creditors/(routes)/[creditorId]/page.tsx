import { FC } from 'react'

import Converter from './components/Converter'

import { getCreditor } from '@/actions/getCreditor'

import { CreditorsProps } from '@/types'
import getCurrentUser from '@/actions/getCurrentuser'
import { redirect } from 'next/navigation'

interface CreditorPageProps {
  params: { creditorId: string }
}

const CreditorPage: FC<CreditorPageProps> = async ({ params }) => {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/')
  }

  const creditor = await getCreditor(params.creditorId)
  const creditorId = params.creditorId

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <Converter data={creditor as CreditorsProps} id={creditorId} />
      </div>
    </div>
  )
}

export default CreditorPage
