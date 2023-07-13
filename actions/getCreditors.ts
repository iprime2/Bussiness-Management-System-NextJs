import prismadb from '@/lib/prismadb'

export const getCreditors = async () => {
  const data = await prismadb.creditor.findMany({})
  return data
}
