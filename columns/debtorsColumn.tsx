'use client'

import CellAction from '@/components/CellAction'
import { ColumnDef } from '@tanstack/react-table'

export type DebitorsColumnsProps = {
  id: string
  firmName: string
  ownerName: string
  panNumber: number
  phone: number
  address: string
  createdAt: string
}

export const DebitorsColumns: ColumnDef<DebitorsColumnsProps>[] = [
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
    header: 'Date',
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
]
