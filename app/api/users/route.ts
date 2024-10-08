import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const createUserSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name must be at most 50 characters' }),

  phoneNumber: z.string().regex(/^(?:\+251[1-9]\d{8}|09\d{8})$/, {
    message:
      'Invalid Ethiopian phone number format. Use +251XXXXXXXXXX or 09XXXXXXXX',
  }),

  email: z.string().email({ message: 'Invalid email address' }).optional(),

  description: z
    .string()
    .max(200, { message: 'Description must be at most 200 characters' })
    .optional(),
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = createUserSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })
  const newUser = await prisma.user.create({
    data: { name: body.name, phoneNumber: body.phoneNumber, email: body.email },
  })
  return NextResponse.json(newUser, { status: 201 })
}
