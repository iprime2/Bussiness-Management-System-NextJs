'use client'

import Heading from '@/components/ui/Heading'
import ClientOnly from '@/components/ClientOnly'

const SetupPage = () => {
  return (
    <ClientOnly>
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <Heading title='Welcome' description='Please login to continue' />
        </div>
      </div>
    </ClientOnly>
  )
}

export default SetupPage
