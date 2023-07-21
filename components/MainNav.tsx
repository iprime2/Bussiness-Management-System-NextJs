'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
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
    {
      key: 'Product',
      href: `/products`,
      label: 'Products',
      active:
        pathname === `/products` ||
        pathname === `/products/${params?.productId}` ||
        pathname === `/products/new`,
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
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary-dark',
                route.active
                  ? 'text-black dark:text-white '
                  : 'text-muted-foreground'
              )}
            >
              <MenubarItem
                className={cn('hover:bg-slate-300 cursor-pointer gap-2')}
              >
                <div className='w-[10%]'>
                  {route.active && <Check size={16} />}
                </div>
                {route.label}
              </MenubarItem>
            </Link>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default MainNav
