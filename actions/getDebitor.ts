import prismadb from '@/lib/prismadb'

export const getDebitor = async (debitorId: string) => {
  if (debitorId !== 'new') {
    const data = await prismadb.debitor.findUnique({
      where: { id: debitorId },
    })
    return data
  } else {
    return null
  }
}
