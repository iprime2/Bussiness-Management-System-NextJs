'use client'

import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoginValueType, loginSchema } from '@/lib/schemas'

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

import { useLoginModal } from '@/hooks/useLoginModal'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { toast } from '../ui/use-toast'
import { ToastAction } from '../ui/toast'
import { useRouter } from 'next/navigation'

interface LoginModalProps {}

const LoginModal: FC<LoginModalProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const form = useForm<LoginValueType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  if (!isMounted) {
    return null
  }

  const onSubmit = async (data: LoginValueType) => {
    setLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setLoading(false)
      console.log(callback)
      if (callback?.ok) {
        toast({ description: 'Logged In' })
        loginModal.onClose()
        router.refresh()
        router.push('/dashboard')

        if (callback?.error) {
          toast({
            variant: 'destructive',
            title: 'Uh oh! Login failed.',
            description: 'There was a problem with your request.',
            action: <ToastAction altText='Try again'>Try again</ToastAction>,
          })
        }
      }
    })
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
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='ml-1'>E-Mail</FormLabel>
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

          <Button type='submit' className='w-full' disabled={loading}>
            Log In
          </Button>
        </form>
      </Form>
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <div
        className='
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        '
      >
        <p>
          Do not have an account?
          <span
            onClick={() => {
              loginModal.onClose()
              registerModal.onOpen()
            }}
            className='
              text-neutral-800
              cursor-pointer 
              hover:underline
            '
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  )

  return (
    <CustomModal
      title='Login'
      disabled={loading}
      onSubmit={onSubmit}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
