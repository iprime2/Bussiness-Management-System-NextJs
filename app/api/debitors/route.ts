import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const debitors = await prismadb.debitor.findMany({})

    return NextResponse.json(debitors)
  } catch (error) {
    console.log('[DEBITORS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firmName, ownerName, panNumber, phone, address } = body

    if (!firmName || !ownerName || !panNumber || !phone || !address) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    const debitor = await prismadb.debitor.create({
      data: {
        firmName,
        ownerName,
        panNumber,
        phone,
        address,
      },
    })

    return NextResponse.json(debitor)
  } catch (error: any) {
    console.log('[Debitor_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
