import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { creditorId: string } }
) {
  try {
    const { creditorId } = params

    if (!creditorId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const creditor = await prismadb.creditor.findUnique({
      where: {
        id: creditorId,
      },
    })

    return NextResponse.json(creditor)
  } catch (error) {
    console.log('[CREDITOR_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { creditorId: string } }
) {
  try {
    const { creditorId } = params

    if (!creditorId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const body = await req.json()
    const { firmName, ownerName, panNumber, phone, address } = body

    if (!firmName || !ownerName || !panNumber || !phone || !address) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    const creditor = await prismadb.creditor.update({
      where: {
        id: creditorId,
      },
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
    console.log('[CREDITOR_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { creditorId: string } }
) {
  try {
    const { creditorId } = params

    if (!creditorId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const creditor = await prismadb.creditor.delete({
      where: {
        id: creditorId,
      },
    })

    return NextResponse.json(creditor)
  } catch (error: any) {
    console.log('[CREDITOR_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
