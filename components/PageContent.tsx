'use client'

import { FC } from 'react'
import Heading from './ui/Heading'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { Separator } from './ui/separator'
import { Plus } from 'lucide-react'
import { DataTable } from './ui/DataTable'

interface PageContentProps {
  title: string
  description: string
}

const PageContent: FC<PageContentProps> = ({ title, description }) => {
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
      <DataTable searchKey='name' columns={[]} data={[]} />
    </div>
  )
}

export default PageContent
