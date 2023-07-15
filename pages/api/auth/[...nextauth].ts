import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import prismadb from '@/lib/prismadb'

import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismadb),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Invalid credentials')
          }

          const user = await prismadb.user.findUnique({
            where: {
              email: credentials.email,
            },
          })

          if (!user || !user?.password) {
            throw new Error('Invalid credentials')
          }

          const isCorrectedPassword = await bcrypt.compare(
            credentials.password,
            user.password
          )

          if (!isCorrectedPassword) {
            // throw new Error('Invalid Credentials')
            throw new NextResponse('Invalid Credentials')
          }

          return user
        } catch (error) {
          console.log(error)
          throw new Error('Internal Server Error')
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'production',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
