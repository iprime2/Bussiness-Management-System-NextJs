import prismadb from '@/lib/prismadb'

export const getProducts = async () => {
  const data = await prismadb.product.findMany({})
  return data
}
