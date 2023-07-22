'use client'

import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { UseFormReturn } from 'react-hook-form'

import { Trash } from 'lucide-react'

import {
  CreditorValueType,
  DebitorValueType,
  ProductValueType,
  PurchaseValueType,
  SaleValueType,
} from '@/lib/schemas'
import {
  CreditorField,
  CreditorsProps,
  DebitorField,
  DebitorsProps,
  ProductField,
  ProductsProps,
  PurchaseField,
  PurchaseProps,
  SaleField,
  SalesProps,
} from '@/types'

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import AlertModal from './modals/AlertModal'
import { ToastAction } from './ui/toast'
import { toast } from './ui/use-toast'
import ClientOnly from './ClientOnly'
import { ClipLoader } from 'react-spinners'

interface FormContentProps {
  initialData:
    | CreditorsProps
    | DebitorsProps
    | ProductsProps
    | PurchaseProps
    | SalesProps
  type: string
  urlType: string
  id: string
  formType: UseFormReturn<
    | CreditorValueType
    | DebitorValueType
    | ProductValueType
    | PurchaseValueType
    | SaleValueType
  >
  fieldArray:
    | CreditorField[]
    | DebitorField[]
    | ProductField[]
    | PurchaseField[]
    | SaleField[]
}

const FormContent: FC<FormContentProps> = ({
  initialData,
  type,
  urlType,
  id,
  formType,
  fieldArray,
}) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const title = initialData ? `Edit ${type}` : `Create ${type}`
  const description = initialData ? `Edit a ${type}` : `Add new ${type}`
  const toastMessage = initialData ? `${type} updated` : `${type} Created`
  const action = initialData ? `Save changes` : `Create`

  const router = useRouter()

  const form = formType

  const onSubmit = async (
    data:
      | CreditorValueType
      | DebitorValueType
      | ProductValueType
      | PurchaseValueType
      | SaleValueType
  ) => {
    console.log('hello')
    try {
      setLoading(true)

      if (initialData) {
        await axios.patch(`/api/${urlType}/${id}`, data)
      } else {
        await axios.post(`/api/${urlType}`, data)
      }
      toast({
        description: toastMessage,
      })

      router.push(`/${urlType}`)
      router.refresh()
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
      await axios.delete(`/api/${urlType}/${id}`)
      router.refresh()
      router.push(`/creditors`)
      toast({ title: `${urlType} deleted.` })
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
        {initialData && (
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
            {fieldArray.map((item: any) => (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item.label}</FormLabel>
                    {item.type === 'select' ? (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='w-full'>
                            <SelectValue placeholder={item.placeholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {item?.options?.map((option: any) => (
                            <SelectItem key={option.name} value={option.value}>
                              {option.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder={item.placeholder}
                          {...field}
                        />
                      </FormControl>
                    )}

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <Button disabled={loading} className='ml-auto' type='submit'>
            {loading ? (
              <ClipLoader
                className='font-extrabold text-gray-50 dark:text-slate-800'
                size={22}
              />
            ) : (
              action
            )}
          </Button>
        </form>
      </Form>
    </>
  )
}

export default FormContent
