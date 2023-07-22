'use client'

import { UserProps } from '@/types'
import { redirect } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
  user?: UserProps
}

const ClientOnly: FC<ClientOnlyProps> = ({ children, user }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
  return <>{children}</>
}

export default ClientOnly
