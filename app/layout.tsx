import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import RegisterModal from '@/components/modals/RegisterModal'
import LoginModal from '@/components/modals/LoginModal'
import getCurrentUser from '@/actions/getCurrentuser'
import { redirect } from 'next/navigation'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'Business CMS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <html lang='en'>
      <body className={roboto.className}>
        <RegisterModal />
        <LoginModal />
        <Toaster />
        {children}
      </body>
    </html>
  )
}
