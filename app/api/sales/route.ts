import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const sales = await prismadb.sales.findMany({})

    return NextResponse.json(sales)
  } catch (error) {
    console.log('[SALES_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      debitorId,
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
      !debitorId ||
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

    const sale = await prismadb.sales.create({
      data: {
        quantity,
        price,
        pricePaid,
        totalAmount,
        totalWeight,
        paid: paidType,
        paidThrough,
        debitorId,
        productId,
      },
    })

    return NextResponse.json(sale)
  } catch (error: any) {
    console.log('[SALE_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
