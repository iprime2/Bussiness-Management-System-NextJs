'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { FC } from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Separator } from './ui/separator'
import { Check, Menu } from 'lucide-react'

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname()
  const params = useParams()

  const routes = [
    {
      key: 'Overview',
      href: `/dashboard`,
      label: 'Overview',
      active: pathname === `/dashboard`,
    },
    {
      key: 'Creditor',
      href: `/creditors`,
      label: 'Creditors',
      active:
        pathname === `/creditors` ||
        pathname === `/creditors/${params?.creditorId}` ||
        pathname === `/creditors/new`,
    },
    {
      key: 'Debitor',
      href: `/debitors`,
      label: 'Debitors',
      active:
        pathname === `/debitors` ||
        pathname === `/debitors/${params?.debitorId}` ||
        pathname === `/debitors/new`,
    },
    {
      key: 'Purchase',
      href: `/purchases`,
      label: 'Purchases',
      active:
        pathname === `/purchases` ||
        pathname === `/purchases/${params?.purchaseId}` ||
        pathname === `/purchases/new`,
    },
    {
      key: 'Sale',
      href: `/sales`,
      label: 'Sales',
      active:
        pathname === `/sales` ||
        pathname === `/sales/${params?.saleId}` ||
        pathname === `/sales/new`,
    },
  ]

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className='flex items-center justify-center gap-2'>
          <Menu size={16} />
        </MenubarTrigger>
        <MenubarContent>
          {routes.map((route) => (
            <>
              <MenubarItem key={route.href} className='gap-8'>
                <div>{route.active && <Check size={16} />}</div>
                <Link
                  href={route.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    route.active
                      ? 'text-black dark:text-white -ml-4'
                      : 'text-muted-foreground'
                  )}
                >
                  {route.label}
                </Link>
              </MenubarItem>
            </>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default MainNav
