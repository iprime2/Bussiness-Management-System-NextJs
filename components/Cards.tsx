import { FC } from 'react'

import { EyeIcon, IndianRupee } from 'lucide-react'
import { getTotalRevenue } from '@/actions/getTotalRevenue'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { EyeOffIcon } from 'lucide-react'
import { getSalesCount } from '@/actions/getSalesCount'
import { CreditCard } from 'lucide-react'
import { getGraphRevenue } from '@/actions/getGraphRevenue'
import { Overview } from './Overview'

interface CardsProps {}

const Cards: FC<CardsProps> = async ({}) => {
  const totalRevenue = await getTotalRevenue()
  const salesCount = await getSalesCount()
  const graphRevenue = await getGraphRevenue()

  return (
    <>
      <div className='grid gap-4 grid-flow-col'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
            <IndianRupee className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent className='flex items-center justify-between'>
            <div className='text-2xl font-bold'>
              {true ? totalRevenue : 'XXXX'}
            </div>
            {true ? (
              <EyeIcon className='cursor-pointer' />
            ) : (
              <EyeOffIcon className='cursor-pointer' />
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Sales</CardTitle>
            <CreditCard className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent className='flex items-center justify-between'>
            <div className='text-2xl font-bold'>
              {true ? `+${salesCount}` : 'XXXX'}
            </div>
            {true ? (
              <EyeIcon className='cursor-pointer' />
            ) : (
              <EyeOffIcon className='cursor-pointer' />
            )}
          </CardContent>
        </Card>
      </div>
      <Card className='col-span-4'>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className='pl-2'>
          <Overview data={graphRevenue} />
        </CardContent>
      </Card>
    </>
  )
}

export default Cards
