'use client'

import { FC } from 'react'
import { Button } from './ui/button'
import { useLoginModal } from '@/hooks/useLoginModal'
import { useRegisterModal } from '@/hooks/useRegisterModal'

interface LoginBtnProps {}

const LoginBtn: FC<LoginBtnProps> = ({}) => {
  const onOpen = useLoginModal((state) => state.onOpen)
  const registerOnOpen = useRegisterModal((state) => state.onOpen)

  return (
    <div className='flex gap-4'>
      <Button onClick={() => onOpen()}>Login</Button>
      <Button onClick={() => registerOnOpen()}>Register</Button>
    </div>
  )
}

export default LoginBtn
