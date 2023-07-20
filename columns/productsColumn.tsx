'use client'

import CellAction from '@/components/CellAction'
import { ColumnDef } from '@tanstack/react-table'

export type ProductsColumnsProps = {
  id: string
  name: string
  weight: number
  price: number
  type: string
  createdAt: string
}

export const ProductsColumns: ColumnDef<ProductsColumnsProps>[] = [
  {
    accessorKey: 'name',
    header: 'Product Name',
  },
  {
    id: 'weight',
    header: 'Weight in kg',
    cell: ({ row }) => <span>{row.original.weight} k.g</span>,
  },
  {
    id: 'price',
    header: 'Price',
    cell: ({ row }) => <span>₹ {row.original.price}</span>,
  },
  {
    accessorKey: 'type',
    header: 'Product Type',
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
