import prismadb from '@/lib/prismadb'

export const getSalesCount = async () => {
  const salesCount = await prismadb.sales.count({})

  return salesCount
}
