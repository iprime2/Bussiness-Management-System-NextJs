import prismadb from '@/lib/prismadb'

export const getSale = async (saleId: string) => {
  if (saleId !== 'new') {
    const data = await prismadb.sales.findUnique({
      where: { id: saleId },
    })
    return data
  } else {
    return null
  }
}
