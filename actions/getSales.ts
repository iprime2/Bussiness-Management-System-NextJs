import prismadb from '@/lib/prismadb'

export const getSales = async () => {
  const data = await prismadb.sales.findMany({})
  return data
}
