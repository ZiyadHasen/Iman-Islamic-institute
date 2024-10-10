'use client'
import React from 'react'
import { createUserSchema } from '@/app/ValidationSchema'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod'
import { Button, Callout, Spinner, Text, TextField } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

type UserFormData = z.infer<typeof createUserSchema>

const CreateUserForm = () => {
  const router = useRouter()
  const { register, handleSubmit, formState } = useForm<UserFormData>({
    resolver: zodResolver(createUserSchema),
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <div className='max-w-lg'>
      {error && (
        <Callout.Root color='red' className=''>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className='space-y-3'
        onSubmit={handleSubmit(async (data) => {
          try {
            setIsSubmitting(true)
            await axios.post('/api/users', data)
            router.push('/users')
          } catch (error: any) {
            setIsSubmitting(false)
            // Extract the error message from the response
            if (error.response && error.response.data.error) {
              setError(error.response.data.error)
            } else {
              setError('An unexpected error occurred')
            }
          }
        })}
      >
        <div>
          <Text className='mb-2' size='2'>
            Name
          </Text>
          <TextField.Root
            placeholder='name'
            radius='large'
            {...register('name')}
          >
            <TextField.Slot></TextField.Slot>
          </TextField.Root>
          {formState.isSubmitted && formState.errors.name && (
            <Text color='red' size='2' as='p'>
              {formState.errors.name.message}
            </Text>
          )}
        </div>
        <div>
          <Text className='mb-2' size='2'>
            Phone Number
          </Text>
          <TextField.Root
            placeholder='phoneNumber'
            radius='large'
            {...register('phoneNumber')}
          >
            <TextField.Slot></TextField.Slot>
          </TextField.Root>
          {formState.isSubmitted && formState.errors.phoneNumber && (
            <Text color='red' size='2' as='p'>
              {formState.errors.phoneNumber.message}
            </Text>
          )}
        </div>
        <div>
          <Text className='mb-2' size='2'>
            Email
          </Text>
          <TextField.Root
            placeholder='email'
            radius='large'
            {...register('email')}
          >
            <TextField.Slot></TextField.Slot>
          </TextField.Root>
          {formState.isSubmitted && formState.errors.email && (
            <Text color='red' size='2' as='p'>
              {formState.errors.email.message}
            </Text>
          )}
        </div>
        <Button className='mt-2' disabled={isSubmitting}>
          {' '}
          Submit The New User{isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  )
}

export default CreateUserForm
