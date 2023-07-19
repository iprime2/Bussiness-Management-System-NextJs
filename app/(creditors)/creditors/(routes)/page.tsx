import { FC } from 'react'
import { format } from 'date-fns'

import { getCreditors } from '@/actions/getCreditors'

import PageContent from '@/components/PageContent'

import {
  CreditorsColumns,
  CreditorsColumnsProps,
} from '@/columns/creditorsColumn'

interface CreditorsPageProps {}

const CreditorsPage: FC<CreditorsPageProps> = async ({}) => {
  const creditors = await getCreditors()

  const formattedCreditors: CreditorsColumnsProps[] = creditors.map((item) => ({
    id: item.id,
    firmName: item.firmName,
    ownerName: item.ownerName,
    panNumber: item.panNumber,
    phone: item.phone,
    address: item.address,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))
  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <PageContent
          title='Creditors'
          description='Manage your creditors'
          columns={CreditorsColumns}
          data={formattedCreditors}
          type='creditors'
          searchKey='firmName'
        />
      </div>
    </div>
  )
}

export default CreditorsPage
