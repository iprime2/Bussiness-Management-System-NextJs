'use client'

import { FC, useEffect, useState } from 'react'

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>DashBoard</div>
    </div>
  )
}

export default DashboardPage
