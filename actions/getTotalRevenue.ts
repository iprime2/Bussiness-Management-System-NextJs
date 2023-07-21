import prismadb from '@/lib/prismadb'

export const getTotalRevenue = async () => {
  const paidOrders = await prismadb.sales.findMany({
    where: {
      paid: true,
    },
  })

  const totalRevenue = paidOrders.reduce((total, item) => {
    return total + item.totalAmount
  }, 0)

  return totalRevenue
}
