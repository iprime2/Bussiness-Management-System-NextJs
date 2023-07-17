import prismadb from '@/lib/prismadb'

export const getDebtors = async () => {
  const data = await prismadb.debtor.findMany({})
  return data
}
