'use client'

import { FC, useState } from 'react'
import { Copy } from 'lucide-react'
import { Trash } from 'lucide-react'
import { Edit, MoreHorizontal } from 'lucide-react'
import axios from 'axios'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation'
import { toast } from './ui/use-toast'
import { ToastAction } from './ui/toast'
import AlertModal from '@/components/modals/AlertModal'
import { CreditorsColumnsProps } from '@/columns/creditorsColumn'
import { DebitorsColumnsProps } from '@/columns/debitorsColumn'
import { ProductsColumnsProps } from '@/columns/productsColumn'
import { PurchasesColumnsProps } from '@/columns/purchasesColumn'

interface CellActionProps {
  data:
    | CreditorsColumnsProps[]
    | DebitorsColumnsProps[]
    | ProductsColumnsProps[]
    | PurchasesColumnsProps[]
  type: string
  apiUrl: string
}

const CellAction: FC<CellActionProps> = ({ data, type, apiUrl }) => {
  const router = useRouter()
  const params = useParams()

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast({
      title: 'Copied',
      description: 'Creditors Id Copied',
    })
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/${apiUrl}/${data.id}`)
      router.refresh()
      toast({ title: 'Deleted', description: 'Creditors Deleted Successfully' })
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      })
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className='mr-2 h-4 w-4' />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/${type}/${data.id}`)}>
            <Edit className='mr-2 h-4 w-4' />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className='mr-2 h-4 w-4' />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default CellAction
