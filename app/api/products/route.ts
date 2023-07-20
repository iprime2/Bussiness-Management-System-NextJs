import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const products = await prismadb.product.findMany({})

    return NextResponse.json(products)
  } catch (error) {
    console.log('[PRODUCTS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, price, weight, type } = body

    if (!name || !price || !weight || !type) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    const product = await prismadb.product.create({
      data: {
        name,
        price,
        weight,
        type,
      },
    })

    return NextResponse.json(product)
  } catch (error: any) {
    console.log('[PRODUCT_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
