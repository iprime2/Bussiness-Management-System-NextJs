'use client'

import { FC } from 'react'
import Image from 'next/image'
import { MoreVerticalIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from './ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface AccountDropDownProps {}

const AccountDropDown: FC<AccountDropDownProps> = ({}) => {
  return (
    <div className=' ml-auto'>
      <DropdownMenu>
        <DropdownMenuTrigger
          className='flex item-center border-slate-200
        p-2 rounded-full cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-800 transition duration-200 ease-in-out border'
        >
          <Image
            className='rounded-full'
            src={'/avatar.jpg'}
            alt='account'
            width={30}
            height={30}
          />
          <MoreVerticalIcon className='w-5 h-5 mt-1' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className={cn('mr-3 w-[150px]')}>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <p
            className='cursor-pointer w-full'
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </p>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default AccountDropDown
