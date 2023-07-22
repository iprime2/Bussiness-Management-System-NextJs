import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { Toaster } from '@/components/ui/toaster'
import RegisterModal from '@/components/modals/RegisterModal'
import LoginModal from '@/components/modals/LoginModal'
import Navbar from '@/components/Navbar'
import getCurrentUser from '@/actions/getCurrentuser'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import ClientOnly from '@/components/ClientOnly'

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

  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ClientOnly>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <RegisterModal />
            <LoginModal />
            <Toaster />
            {<Navbar user={user} />}

            {children}
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  )
}
