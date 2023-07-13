'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { FC } from 'react'

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname()
  const params = useParams()

  const routes = [
    {
      key: 'Overview',
      href: `/`,
      label: 'Overview',
      active: pathname === `/`,
    },
    {
      key: 'Creditor',
      href: `/creditors`,
      label: 'Creditors',
      active:
        pathname === `/creditors` ||
        pathname === `/creditors/${params.creditorId}` ||
        pathname === `/creditors/new`,
    },
    {
      key: 'Settings',
      href: `/settings`,
      label: 'Settings',
      active: pathname === `/settings`,
    },
  ]

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-black dark:text-white'
              : 'text-muted-foreground'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
