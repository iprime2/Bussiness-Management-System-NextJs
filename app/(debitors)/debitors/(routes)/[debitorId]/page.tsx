import { FC } from 'react'

import { DebitorsProps } from '@/types'

import { getDebitor } from '@/actions/getDebitor'

import Converter from './components/Converter'
import { redirect } from 'next/navigation'
import getCurrentUser from '@/actions/getCurrentuser'


interface DebitorPageProps {
  params: { debitorId: string }
}

const DebitorPage: FC<DebitorPageProps> = async ({ params }) => {
   const user = await getCurrentUser()

  if (!user) {
    redirect('/')
  }
  const debitor = await getDebitor(params.debitorId)
  const debitorId = params.debitorId

  return (
    
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <Converter data={debitor as DebitorsProps} id={debitorId} />
        </div>
      </div>
  
  )
}

export default DebitorPage
