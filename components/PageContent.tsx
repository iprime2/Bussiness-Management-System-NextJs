'use client'

import { FC } from 'react'
import Heading from './ui/Heading'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { Separator } from './ui/separator'
import { Plus } from 'lucide-react'
import { DataTable } from './ui/DataTable'
import { creditorsColumn } from '@/columns/creditorsColumn'
import { SafeCreditors } from '@/types'

interface PageContentProps {
  title: string
  description: string
  data: SafeCreditors[]
}

const PageContent: FC<PageContentProps> = ({ title, description, data }) => {
  const router = useRouter()
  return (
    <div className='flex-col'>
      <div className='flex items-center justify-between'>
        <Heading title={title} description={description} />
        <Button onClick={() => router.push('/creditors/new')}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='firmName' columns={creditorsColumn} data={data} />
    </div>
  )
}

export default PageContent
