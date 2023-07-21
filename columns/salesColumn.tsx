'use client'

import CellAction from '@/components/CellAction'
import { ColumnDef } from '@tanstack/react-table'
import { CheckCheckIcon, XCircleIcon } from 'lucide-react'

export type SalesColumnsProps = {
  id: string
  firmName: string
  productType: string
  quantity: number
  price: number
  pricePaid: number
  totalAmount: number
  totalWeight: number
  paid: string
  paidThrough: string
  createdAt: string
  updatedAt: string
}

export const SalesColumns: ColumnDef<SalesColumnsProps>[] = [
  {
    accessorKey: 'firmName',
    header: 'Firm Name',
  },
  {
    accessorKey: 'productType',
    header: 'Product',
  },
  {
    id: 'quantity',
    header: 'Quantity',
    cell: ({ row }) => <span>{row.original.quantity} Pcs.</span>,
  },
  {
    id: 'price',
    header: 'Price',
    cell: ({ row }) => <span>₹ {row.original.price}</span>,
  },
  {
    id: 'price',
    header: 'Paid Price',
    cell: ({ row }) => <span>₹ {row.original.pricePaid}</span>,
  },
  {
    id: 'totalWeight',
    header: 'Total Weight',
    cell: ({ row }) => <span>{row.original.totalWeight} k.g</span>,
  },
  {
    id: 'totalAmount',
    header: 'Total Amount',
    cell: ({ row }) => <span>₹ {row.original.totalAmount}</span>,
  },
  {
    id: 'paid',
    header: 'Paid',
    cell: ({ row }) => (
      <span>
        {row.original.paid ? (
          <CheckCheckIcon size={12} />
        ) : (
          <XCircleIcon size={12} />
        )}
      </span>
    ),
  },
  {
    id: 'paidThrough',
    header: 'Paid Through',
    cell: ({ row }) => <span>{row.original.paid}</span>,
  },
  {
    accessorKey: 'createdAt',
    header: 'Created Date',
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => (
      <CellAction type='products' apiUrl='products' data={row.original} />
    ),
  },
]
