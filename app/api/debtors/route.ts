import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const debtors = await prismadb.debtor.findMany({})

    return NextResponse.json(debtors)
  } catch (error) {
    console.log('[DEBTOR_GET]', error)
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

    const debtor = await prismadb.debtor.create({
      data: {
        firmName,
        ownerName,
        panNumber,
        phone,
        address,
      },
    })

    return NextResponse.json(debtor)
  } catch (error: any) {
    console.log('[DEBTOR_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
