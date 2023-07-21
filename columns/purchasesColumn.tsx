'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CheckCircle2Icon, XCircleIcon } from 'lucide-react'

import CellAction from '@/components/CellAction'

export type PurchasesColumnsProps = {
  id: string
  firmName: string
  productType: string
  creditorId: string
  productId: string
  quantity: number
  price: number
  pricePaid: number
  totalAmount: number
  totalWeight: number
  paid: string
  paidThrough: string
  createdAt: string
}

export const PurchasesColumns: ColumnDef<PurchasesColumnsProps>[] = [
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
        {row.original.paid === 'Yes' ? (
          <CheckCircle2Icon size={24} />
        ) : (
          <XCircleIcon size={24} />
        )}
      </span>
    ),
  },
  {
    id: 'paidThrough',
    header: 'Paid Through',
    cell: ({ row }) => <span>{row.original.paidThrough}</span>,
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
