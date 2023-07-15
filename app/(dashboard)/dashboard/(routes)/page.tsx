'use client'

import { FC, useEffect, useState } from 'react'

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <div>DashboardPage</div>
}

export default DashboardPage
