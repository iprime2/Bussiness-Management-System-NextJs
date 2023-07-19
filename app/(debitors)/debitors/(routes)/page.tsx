import { FC } from 'react'
import { format } from 'date-fns'

import { CreditorsColumnsProps } from '@/columns/creditorsColumn'
import { DebitorsColumns } from '@/columns/debtorsColumn'

import { getDebtors } from '@/actions/getDebtors'

import PageContent from '@/components/PageContent'

interface DebitorsPageProps {}

const DebitorsPage: FC<DebitorsPageProps> = async ({}) => {
  const debitors = await getDebtors()

  const formattedDebitors: CreditorsColumnsProps[] = debitors.map((item) => ({
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
          title='Debtiors'
          description='Manage your Debitors'
          data={formattedDebitors}
          type='debitors'
          columns={DebitorsColumns}
          searchKey='firmName'
        />
      </div>
    </div>
  )
}

export default DebitorsPage
