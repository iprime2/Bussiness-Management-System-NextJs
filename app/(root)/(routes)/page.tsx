'use client'

import { useEffect } from 'react'

import { useLoginModal } from '@/hooks/useLoginModal'

const RootPage = () => {
  const user = false
  const loginModal = useLoginModal()

  useEffect(() => {
    if (!user) {
      loginModal.onOpen()
    }
  }, [user])

  return null
}

export default RootPage
