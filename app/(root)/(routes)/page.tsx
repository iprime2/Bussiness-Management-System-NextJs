'use client'

import { useEffect } from 'react'

import { useLoginModal } from '@/hooks/useLoginModal'
import { useRegisterModal } from '@/hooks/useRegisterModal'

const SetupPage = () => {
  const onOpen = useLoginModal((state) => state.onOpen)
  const isOpen = useLoginModal((state) => state.isOpen)
  const registerModal = useRegisterModal()

  useEffect(() => {
    if (!isOpen && !registerModal.isOpen) {
      onOpen()
    }
  }, [isOpen, onOpen, registerModal.isOpen])

  return null
}

export default SetupPage
