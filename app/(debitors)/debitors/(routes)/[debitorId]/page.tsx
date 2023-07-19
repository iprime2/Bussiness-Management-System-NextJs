import { FC } from 'react'

import { DebitorsProps } from '@/types'

import { getDebtor } from '@/actions/getDebtor'

import Converter from './components/Converter'

interface DebitorPageProps {
  params: { debitorId: string }
}

const DebitorPage: FC<DebitorPageProps> = async ({ params }) => {
  const debitor = await getDebtor(params.debitorId)
  const debitorId = params.debitorId
  console.log(debitor)

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <Converter data={debitor as DebitorsProps} id={debitorId} />
      </div>
    </div>
  )
}

export default DebitorPage
