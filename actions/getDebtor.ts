import prismadb from '@/lib/prismadb'

export const getDebtor = async (debtorId: string) => {
  if (debtorId !== 'new') {
    const data = await prismadb.debtor.findUnique({
      where: { id: debtorId },
    })
    return data
  } else {
    return null
  }
}
