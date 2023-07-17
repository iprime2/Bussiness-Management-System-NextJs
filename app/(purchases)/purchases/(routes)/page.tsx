import { getCreditors } from '@/actions/getCreditors'
import PageContent from '@/components/PageContent'
import { FC } from 'react'

interface CreditorsPageProps {}

const CreditorsPage: FC<CreditorsPageProps> = async ({}) => {
  const data = await getCreditors()
  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <PageContent
          title='Creditors'
          description='Manage your creditors'
          data={data}
        />
      </div>
    </div>
  )
}

export default CreditorsPage
