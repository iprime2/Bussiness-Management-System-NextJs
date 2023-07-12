import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const creditorSchema = z.object({
  firmName: z.string().min(1),
  ownerName: z.string().min(1),
  panNumber: z.coerce.number().min(1).min(5),
  phone: z.coerce.number().min(1).min(10).max(10),
  address: z.string().min(1),
})

export type CreditorValueType = z.infer<typeof creditorSchema>
