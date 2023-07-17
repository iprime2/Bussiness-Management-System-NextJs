import { getDebtor } from '@/actions/getDebtor'
import FormContent from '@/components/FormContent'
import { FC } from 'react'

interface DebitorPageProps {
  params: { debitorId: string }
}

const DebitorPage: FC<DebitorPageProps> = async ({ params }) => {
  const debitor = await getDebtor(params.debitorId)
  const debitorId = params.debitorId

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <FormContent
          data={debitor}
          type='debitors'
          urlType='debtors'
          id={debitorId}
        />
      </div>
    </div>
  )
}

export default DebitorPage
