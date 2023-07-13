import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const creditors = await prismadb.creditor.findMany({})

    return NextResponse.json(creditors)
  } catch (error) {
    console.log('[CREDITOR_GET]', error)
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

    const creditor = await prismadb.creditor.create({
      data: {
        firmName,
        ownerName,
        panNumber,
        phone,
        address,
      },
    })

    return NextResponse.json(creditor)
  } catch (error: any) {
    console.log('[CREDITOR_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
