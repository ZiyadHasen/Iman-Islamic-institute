import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { createUserSchema } from '@/app/ValidationSchema'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = createUserSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })
  try {
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        phoneNumber: body.phoneNumber,
        email: body.email,
      },
    })
    return NextResponse.json(newUser, { status: 201 })
  } catch (error: any) {
    // Check for Prisma unique constraint error (P2002)
    if (error.code === 'P2002' && error.meta?.target === 'User_email_key') {
      return NextResponse.json(
        { error: 'Email already in use. Please use a different email.' },
        { status: 409 },
      )
    }
    // Handle other potential errors
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
