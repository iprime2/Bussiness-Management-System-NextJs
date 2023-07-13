import { FC } from 'react'
import Heading from './ui/Heading'
import MainNav from './MainNav'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className='border-b px-5 w-full py-3'>
      <div className='flex items-center gap-3'>
        <h1 className='text-2xl'>Bam Bam Rice Mill</h1>
        <div>
          <MainNav />
        </div>
        <div
          className='flex items-center ml-auto border-slate-200
        p-2 rounded-sm'
        ></div>
      </div>
    </div>
  )
}

export default Navbar
