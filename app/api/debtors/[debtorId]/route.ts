import prismadb from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { debtorId: string } }
) {
  try {
    const { debtorId } = params

    if (!debtorId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const debtor = await prismadb.debtor.findUnique({
      where: {
        id: debtorId,
      },
    })

    return NextResponse.json(debtor)
  } catch (error) {
    console.log('[DEBTOR_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { debtorId: string } }
) {
  try {
    const { debtorId } = params

    if (!debtorId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const body = await req.json()
    const { firmName, ownerName, panNumber, phone, address } = body

    if (!firmName || !ownerName || !panNumber || !phone || !address) {
      return new NextResponse('All fields are required', { status: 400 })
    }

    const debtor = await prismadb.debtor.update({
      where: {
        id: debtorId,
      },
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
    console.log('[DEBTOR_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { debtorId: string } }
) {
  try {
    const { debtorId } = params

    if (!debtorId) {
      return new NextResponse('ID is required', { status: 400 })
    }

    const debtor = await prismadb.debtor.delete({
      where: {
        id: debtorId,
      },
    })

    return NextResponse.json(debtor)
  } catch (error: any) {
    console.log('[DEBTOR_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
