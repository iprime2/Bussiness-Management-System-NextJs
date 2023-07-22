import { redirect } from 'next/navigation'

import getCurrentUser from '@/actions/getCurrentuser'

import Heading from '@/components/ui/Heading'

const RootPage = async () => {
  const user = await getCurrentUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <h1 className='text-5xl font-extrabold'>Welcome</h1>
        <p className='text-lg font-medium'>Business Management System </p>
      </div>
    </div>
  )
}

export default RootPage
