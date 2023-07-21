import { FC, useEffect, useState } from 'react'

import { Separator } from '@/components/ui/separator'
import Heading from '@/components/ui/Heading'
import Cards from '@/components/Cards'

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  // const [isMounted, setIsMounted] = useState(false)

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  // if (!isMounted) return null

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <Heading title='Dashboard' description='Overview of your Business!' />
        <Separator />
        <Cards />
      </div>
    </div>
  )
}

export default DashboardPage
