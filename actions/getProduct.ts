import prismadb from '@/lib/prismadb'

export const getProduct = async (creditorId: string) => {
  if (creditorId !== 'new') {
    const data = await prismadb.product.findUnique({
      where: { id: creditorId },
    })
    return data
  } else {
    return null
  }
}
