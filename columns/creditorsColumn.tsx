import CellAction from '@/components/CellAction'
import { ColumnDef } from '@tanstack/react-table'

interface creditorsColumnProps {
  firmName: string
  ownerName: string
  panNumber: number
  phone: number
  address: string
  createdAt: Date
}

export const creditorsColumn: ColumnDef<creditorsColumnProps>[] = [
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
    cell: ({ row }) => (
      <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
    ),
  },
  {
    header: 'Actions',
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
]
