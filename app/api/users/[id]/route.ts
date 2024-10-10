import { EditUserSchema } from '@/app/ValidationSchema'
import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json()
  const validation = EditUserSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 })
  }

  const userId = parseInt(params.id, 10)

  const user = await prisma.user.findUnique({
    where: { id: userId },
  })
  if (!user) {
    return NextResponse.json({ error: 'Invalid user' }, { status: 404 })
  }

  // Prepare data to update
  const updatedData: any = {
    name: body.name,
    phoneNumber: body.phoneNumber,
    email: body.email,
    status: body.status,
    lastCalled: body.lastCalled,
    description: body.description || user.description,
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: updatedData,
  })

  return NextResponse.json(updatedUser)
}

// *********************************************************************************************************
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id, 10) }, // Make sure to use base 10
  })

  if (!user) {
    return NextResponse.json({ error: 'Invalid user' }, { status: 404 })
  }

  await prisma.user.delete({
    where: { id: user.id },
  })

  // Return 200 OK with a message
  return NextResponse.json(
    { message: 'User deleted successfully' },
    { status: 200 },
  )
}
