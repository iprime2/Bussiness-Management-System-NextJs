'use client'

import { FC, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

import { Trash } from 'lucide-react'

import { Creditor } from '@prisma/client'
import { CreditorValueType, creditorSchema } from '@/lib/schemas'
import Heading from './ui/Heading'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import AlertModal from './modals/AlertModal'
import { ToastAction } from './ui/toast'
import { toast } from './ui/use-toast'

interface FormContentProps {
  data: Creditor | null
  type: string
}

const FormContent: FC<FormContentProps> = ({ data, type }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const title = data ? `Edit ${type}` : `Create ${type}`
  const description = data ? `Edit a ${type}` : `Add new ${type}`
  const toastMessage = data ? `${type} updated` : `${type} Created`
  const action = data ? `Save changes` : `Create`

  const params = useParams()
  const router = useRouter()

  const form = useForm<CreditorValueType>({
    resolver: zodResolver(creditorSchema),
    defaultValues: data
      ? {
          ...data,
        }
      : {
          firmName: '',
          ownerName: '',
          panNumber: 0,
          phone: 0,
          address: '',
        },
  })

  const onSubmit = async (data: CreditorValueType) => {
    try {
      setLoading(true)
      await axios.post(`/api/creditors`, data)
      toast({
        description: toastMessage,
      })

      router.push(`/creditors`)
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      })
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/creditors/${params?.creditorId}`)
      router.refresh()
      router.push(`/creditors`)
      toast({ title: `${type} deleted.` })
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
      <div className='flex items-center justify-between'>
        <Heading title={title} description={description} />
        {data && (
          <Button
            disabled={loading}
            variant='destructive'
            size='sm'
            onClick={() => setOpen(true)}
          >
            <Trash className='h-4 w-4' />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-full'
        >
          <div className='grid grid-cols-3 gap-8'>
            <FormField
              control={form.control}
              name='firmName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firm Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Firm name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='ownerName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Owner Name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='panNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pan Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Pan Number'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Phone Number'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Address'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className='ml-auto' type='submit'>
            {action}
          </Button>
        </form>
      </Form>
    </>
  )
}

export default FormContent
