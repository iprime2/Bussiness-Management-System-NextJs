'use client'

import { FC } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
import { Plus } from 'lucide-react'

import { CreditorsColumnsProps } from '@/columns/creditorsColumn'
import { DebitorsColumnsProps } from '@/columns/debitorsColumn'
import { ProductsColumnsProps } from '@/columns/productsColumn'
import { PurchasesColumnsProps } from '@/columns/purchasesColumn'

import Heading from './ui/Heading'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { DataTable } from './ui/DataTable'

interface PageContentProps {
  title: string
  description: string
  data:
    | CreditorsColumnsProps[]
    | DebitorsColumnsProps[]
    | ProductsColumnsProps[]
    | PurchasesColumnsProps[]
  type: string
  columns:
    | ColumnDef<CreditorsColumnsProps>[]
    | ColumnDef<DebitorsColumnsProps>[]
    | ColumnDef<ProductsColumnsProps>[]
    | ColumnDef<PurchasesColumnsProps>[]
  searchKey: string
}

const PageContent: FC<PageContentProps> = ({
  columns,
  type,
  title,
  description,
  data,
  searchKey,
}) => {
  const router = useRouter()
  return (
    <div className='flex-col'>
      <div className='flex items-center justify-between'>
        <Heading title={title} description={description} />
        <Button onClick={() => router.push(`/${type}/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey={searchKey} columns={columns} data={data} />
    </div>
  )
}

export default PageContent
