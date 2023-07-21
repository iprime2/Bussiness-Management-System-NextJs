import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { purchaseId: string } }
) {
  try {
    const { purchaseId } = params

    if (!purchaseId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const purchase = await prismadb.purchase.findUnique({
      where: {
        id: purchaseId,
      },
    })

    return NextResponse.json(purchase)
  } catch (error) {
    console.log('[PURCHASE_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { purchaseId: string } }
) {
  try {
    const { purchaseId } = params

    if (!purchaseId) {
      return new NextResponse('ID is required', { status: 400 })
    }

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

    const purchase = await prismadb.purchase.update({
      where: {
        id: purchaseId,
      },
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
    console.log('[PURCHASE_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { purchaseId: string } }
) {
  try {
    const { purchaseId } = params

    if (!purchaseId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const purchase = await prismadb.purchase.delete({
      where: {
        id: purchaseId,
      },
    })

    return NextResponse.json(purchase)
  } catch (error: any) {
    console.log('[PURCHASE_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
