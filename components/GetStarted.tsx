'use client'

import React from 'react'
import { Button } from './ui/button'
import { useRegisterModal } from '@/hooks/useRegisterModal'

const GetStarted = () => {
  const registerModal = useRegisterModal()
  return <Button onClick={() => registerModal.onOpen()}>Get Started</Button>
}

export default GetStarted
