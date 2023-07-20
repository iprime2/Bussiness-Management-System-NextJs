import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const { productId } = params

    if (!productId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const product = await prismadb.product.findUnique({
      where: {
        id: productId,
      },
    })

    return NextResponse.json(product)
  } catch (error) {
    console.log('[PRODUCT_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const { productId } = params

    if (!productId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const body = await req.json()
    const { name, weight, price, type } = body

    if (!name || !weight || !price || !type) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    const product = await prismadb.product.update({
      where: {
        id: productId,
      },
      data: {
        name,
        weight,
        price,
        type,
      },
    })

    return NextResponse.json(product)
  } catch (error: any) {
    console.log('[PRODUCT_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const { productId } = params

    if (!productId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const product = await prismadb.product.delete({
      where: {
        id: productId,
      },
    })

    return NextResponse.json(product)
  } catch (error: any) {
    console.log('[PRODUCT_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
