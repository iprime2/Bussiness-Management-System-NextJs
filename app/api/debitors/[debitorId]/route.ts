import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { debitorId: string } }
) {
  try {
    const { debitorId } = params

    if (!debitorId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const debitor = await prismadb.debitor.findUnique({
      where: {
        id: debitorId,
      },
    })

    return NextResponse.json(debitor)
  } catch (error) {
    console.log('[Debitor_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { debitorId: string } }
) {
  try {
    const { debitorId } = params

    if (!debitorId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const body = await req.json()
    const { firmName, ownerName, panNumber, phone, address } = body

    if (!firmName || !ownerName || !panNumber || !phone || !address) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    const debitor = await prismadb.debitor.update({
      where: {
        id: debitorId,
      },
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
    console.log('[Debitor_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { debitorId: string } }
) {
  try {
    const { debitorId } = params

    if (!debitorId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const debitor = await prismadb.debitor.delete({
      where: {
        id: debitorId,
      },
    })

    return NextResponse.json(debitor)
  } catch (error: any) {
    console.log('[Debitor_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
