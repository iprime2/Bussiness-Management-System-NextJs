import prismadb from '@/lib/prismadb'

export const getPurchases = async () => {
  const data = await prismadb.purchase.findMany({})
  return data
}
