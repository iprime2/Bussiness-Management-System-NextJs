'use client'

import { FC } from 'react'

import { UserProps } from '@/types'

import MainNav from './MainNav'
import AccountDropDown from './AccountDropDown'
import LoginBtn from './LoginBtn'
import { ThemeToggle } from './ui/ThemeToggle'

interface NavbarProps {
  user?: UserProps
}

const Navbar: FC<NavbarProps> = ({ user }) => {
  return (
    <div className='border-b px-7 w-full py-3'>
      <div className='flex items-center gap-3 justify-between'>
        <div>{user && <MainNav />}</div>
        <h1 className='text-2xl font-logo font-bold'>Bambam</h1>
        <div className='flex gap-4'>
          <ThemeToggle />
          {user ? <AccountDropDown /> : <LoginBtn />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
