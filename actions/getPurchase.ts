import prismadb from '@/lib/prismadb'

export const getPurchase = async (purchaseId: string) => {
  if (purchaseId !== 'new') {
    const data = await prismadb.purchase.findUnique({
      where: { id: purchaseId },
    })
    return data
  } else {
    return null
  }
}
