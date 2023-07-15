import getCurrentUser from '@/actions/getCurrentuser'
import { redirect } from 'next/navigation'

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (user) {
    redirect('/dashboard')
  }

  return <>{children}</>
}
