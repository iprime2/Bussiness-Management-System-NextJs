'use client'

import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'

import { SignUpValueType, signUpSchema } from '@/lib/schemas'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'
import CustomModal from './CustomModal'

import { useRegisterModal } from '@/hooks/useRegisterModal'
import { useLoginModal } from '@/hooks/useLoginModal'
import { toast } from '../ui/use-toast'
import { ToastAction } from '../ui/toast'
import { ClipLoader } from 'react-spinners'
import ClientOnly from '../ClientOnly'
import { Separator } from '../ui/separator'

interface RegisterModalProps {}

const RegisterModal: FC<RegisterModalProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [loading, setLoading] = useState(false)

  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const form = useForm<SignUpValueType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      image: '',
    },
  })

  if (!isMounted) {
    return null
  }

  const onSubmit = async (data: SignUpValueType) => {
    try {
      setLoading(true)
      await axios.post('/api/register', data)

      toast({
        title: 'Account created.',
      })
      registerModal.onClose()
      loginModal.onOpen()
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

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-full'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='ml-1'>Name</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder='Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='ml-1'>E-mail</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder='E-mail' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='ml-1'>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    disabled={loading}
                    placeholder='Password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='ml-1'>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    disabled={loading}
                    placeholder='Confirm Password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full' disabled={loading}>
            {loading ? (
              <ClipLoader
                className='font-extrabold text-gray-50 dark:text-slate-800'
                z
                size={22}
              />
            ) : (
              'Register'
            )}
          </Button>
        </form>
      </Form>
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <div
        className='
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        '
      >
        <p>
          Already have an account?
          <span
            onClick={() => {
              registerModal.onClose()
              loginModal.onOpen()
            }}
            className='
              text-neutral-800
              cursor-pointer 
              hover:underline
              dark:text-slate-200
            '
          >
            {'  '}
            Log in
          </span>
        </p>
      </div>
    </div>
  )

  return (
    <CustomModal
      title='Sign Up'
      disabled={loading}
      onSubmit={onSubmit}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal
