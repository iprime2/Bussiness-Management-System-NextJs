import { FC } from 'react'
import { format } from 'date-fns'

import { DebitorsColumnsProps } from '@/columns/debitorsColumn'

import { DebitorsColumns } from '@/columns/debitorsColumn'

import { getDebitors } from '@/actions/getDebitors'

import PageContent from '@/components/PageContent'
import ClientOnly from '@/components/ClientOnly'

interface DebitorsPageProps {}

const DebitorsPage: FC<DebitorsPageProps> = async ({}) => {
  const debitors = await getDebitors()

  const formattedDebitors: DebitorsColumnsProps[] = debitors.map((item) => ({
    id: item.id,
    firmName: item.firmName,
    ownerName: item.ownerName,
    panNumber: item.panNumber,
    phone: item.phone,
    address: item.address,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <ClientOnly>
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
    </ClientOnly>
  )
}

export default DebitorsPage
