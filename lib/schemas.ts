import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const creditorSchema = z.object({
  firmName: z.string().min(1),
  ownerName: z.string().min(1),
  panNumber: z.coerce.number().min(1),
  phone: z.coerce.number().min(1),
  address: z.string().min(1),
})

export type CreditorValueType = z.infer<typeof creditorSchema>

export const debitorSchema = z.object({
  firmName: z.string().min(1),
  ownerName: z.string().min(1),
  panNumber: z.coerce.number().min(1),
  phone: z.coerce.number().min(1),
  address: z.string().min(1),
})

export type DebitorValueType = z.infer<typeof debitorSchema>

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  name: z.string().min(1),
  image: z.string(),
})

export type SignUpValueType = z.infer<typeof signUpSchema>

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type LoginValueType = z.infer<typeof loginSchema>
