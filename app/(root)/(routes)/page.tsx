import Image from 'next/image'
import { redirect } from 'next/navigation'

import getCurrentUser from '@/actions/getCurrentuser'
import GetStarted from '@/components/GetStarted'

const RootPage = async () => {
  const user = await getCurrentUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className='flex p-8 pt-6 gap-4 xl:flex-row md:flex-row flex-col '>
      <div className='md:w-[40%] sm:w-full'>
        <h1 className='xl:text-[82px] md:text-[68px] sm:text-[58px] text-[45px]  font-extrabold '>
          Welcome
        </h1>
        <p className='xl:text-xl md:text-lg sm:text-sm text-justify font-medium'>
          Optimize your business management with our integrated platform.
          Streamline purchase, sale, client, stock, finance, and accounts for
          seamless operations. Drive growth and maximize efficiency with our
          comprehensive solutions.
        </p>
        <br />
        <GetStarted />
      </div>

      <div className='md:w-[60%] sm:w-full'>
        <Image
          src='/homeImg.png'
          className='object-cover mix-difference'
          width={900}
          height={1200}
          alt='Homepage'
        />
      </div>
    </div>
  )
}

export default RootPage
