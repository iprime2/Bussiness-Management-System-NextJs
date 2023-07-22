import { FC } from 'react'

import { Separator } from '@/components/ui/separator'
import Heading from '@/components/ui/Heading'
import Cards from '@/components/Cards'
import ClientOnly from '@/components/ClientOnly'

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  return (
    <ClientOnly>
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <Heading title='Dashboard' description='Overview of your Business!' />
          <Separator />
          <Cards />
        </div>
      </div>
    </ClientOnly>
  )
}

export default DashboardPage
