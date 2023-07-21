import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const purchases = await prismadb.purchase.findMany({})

    return NextResponse.json(purchases)
  } catch (error) {
    console.log('[PURCHASES_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      creditorId,
      productId,
      ownerName,
      quantity,
      price,
      pricePaid,
      totalAmount,
      totalWeight,
      paid,
      paidThrough,
    } = body

    if (
      !creditorId ||
      !productId ||
      !ownerName ||
      !quantity ||
      !price ||
      !pricePaid ||
      !totalAmount ||
      !totalWeight ||
      !paid ||
      !paidThrough
    ) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    let paidType: boolean = false

    if (paid === 'Yes') {
      paidType = true
    } else if (paid === 'No') {
      paidType = false
    }

    const purchase = await prismadb.purchase.create({
      data: {
        quantity,
        price,
        pricePaid,
        totalAmount,
        totalWeight,
        paid: paidType,
        paidThrough,
        creditorId,
        productId,
      },
    })

    return NextResponse.json(purchase)
  } catch (error: any) {
    console.log('[PURCHASE_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
