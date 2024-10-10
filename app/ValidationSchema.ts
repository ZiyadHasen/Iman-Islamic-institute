import { Status } from '@prisma/client'
import { z } from 'zod'

export const createUserSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name must be at most 50 characters' }),

  phoneNumber: z.string().regex(/^(?:\+251[1-9]\d{8}|09\d{8})$/, {
    message: 'Invalid Ethiopian phone number format.',
  }),

  email: z.string().email({ message: 'Invalid email address' }).optional(),

  description: z
    .string()
    .max(200, { message: 'Description must be at most 200 characters' })
    .optional(),
})
export const EditUserSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(50, { message: 'Name must be at most 50 characters' }),

  phoneNumber: z.string().regex(/^(?:\+251[1-9]\d{8}|09\d{8})$/, {
    message: 'Invalid Ethiopian phone number format.',
  }),

  email: z.string().email({ message: 'Invalid email address' }).optional(),

  description: z
    .string()
    .max(200, { message: 'Description must be at most 200 characters' })
    .optional(),

  status: z.nativeEnum(Status).optional(), // Status as type and optional
  lastCalled: z.date().optional(), // Validation for lastCalled
})
