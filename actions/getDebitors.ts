import prismadb from '@/lib/prismadb'

export const getDebitors = async () => {
  const data = await prismadb.debitor.findMany({})
  return data
}
