import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { saleId: string } }
) {
  try {
    const { saleId } = params

    if (!saleId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const sale = await prismadb.sales.findUnique({
      where: {
        id: saleId,
      },
    })

    return NextResponse.json(sale)
  } catch (error) {
    console.log('[SALE_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { saleId: string } }
) {
  try {
    const { saleId } = params

    if (!saleId) {
      return new NextResponse('ID is required', { status: 400 })
    }

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

    const sale = await prismadb.sales.update({
      where: {
        id: saleId,
      },
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
    console.log('[SALE_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { saleId: string } }
) {
  try {
    const { saleId } = params

    if (!saleId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const sale = await prismadb.sales.delete({
      where: {
        id: saleId,
      },
    })

    return NextResponse.json(sale)
  } catch (error: any) {
    console.log('[SALE_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
