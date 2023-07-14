import { FC } from 'react'
import MainNav from './MainNav'
import AccountDropDown from './AccountDropDown'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className='border-b px-7 w-full py-3'>
      <div className='flex items-center gap-3'>
        <h1 className='text-2xl'>BamBam</h1>
        <div>
          <MainNav />
        </div>
        <AccountDropDown />
      </div>
    </div>
  )
}

export default Navbar
