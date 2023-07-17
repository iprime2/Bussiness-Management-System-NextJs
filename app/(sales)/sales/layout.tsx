import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import getCurrentUser from '@/actions/getCurrentuser'
import { redirect } from 'next/navigation'
import ClientOnly from '@/components/ClientOnly'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Business CMS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/')
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
