import { NextResponse } from 'next/server'
import prismadb from '@/lib/prismadb'
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password, name, image } = body

    if (!email || !password || !name) {
      return new NextResponse('All fields required credentials', {
        status: 400,
      })
    }

    const user = await prismadb.user.findUnique({
      where: {
        email,
      },
    })

    if (user) {
      return new NextResponse('User already exists', {
        status: 400,
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prismadb.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        image,
      },
    })

    return NextResponse.json(newUser)
  } catch (error) {
    console.log('[REGISTER_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
