import { FC } from 'react'

import { DebitorsProps } from '@/types'

import { getDebitor } from '@/actions/getDebitor'

import Converter from './components/Converter'
import ClientOnly from '@/components/ClientOnly'

interface DebitorPageProps {
  params: { debitorId: string }
}

const DebitorPage: FC<DebitorPageProps> = async ({ params }) => {
  const debitor = await getDebitor(params.debitorId)
  const debitorId = params.debitorId

  return (
    <ClientOnly>
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <Converter data={debitor as DebitorsProps} id={debitorId} />
        </div>
      </div>
    </ClientOnly>
  )
}

export default DebitorPage
