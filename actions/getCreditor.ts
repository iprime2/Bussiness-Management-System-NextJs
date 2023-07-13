import prismadb from '@/lib/prismadb'

export const getCreditor = async (creditorId: string) => {
  if (creditorId !== 'new') {
    const data = await prismadb.creditor.findUnique({
      where: { id: creditorId },
    })
    return data
  } else {
    return null
  }
}
