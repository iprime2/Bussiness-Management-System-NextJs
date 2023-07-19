'use client'

import CellAction from '@/components/CellAction'
import { ColumnDef } from '@tanstack/react-table'

export type CreditorsColumnsProps = {
  id: string
  firmName: string
  ownerName: string
  panNumber: number
  phone: number
  address: string
  createdAt: string
}

export const CreditorsColumns: ColumnDef<CreditorsColumnsProps>[] = [
  {
    accessorKey: 'firmName',
    header: 'Firm Name',
  },
  {
    accessorKey: 'ownerName',
    header: 'Owner Name',
  },
  {
    accessorKey: 'panNumber',
    header: 'Pan',
  },
  {
    accessorKey: 'phone',
    header: 'Contact Number',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created Date',
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => (
      <CellAction type='creditors' apiUrl='creditors' data={row.original} />
    ),
  },
]
