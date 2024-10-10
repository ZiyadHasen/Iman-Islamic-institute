import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { ImPencil2 } from 'react-icons/im'

const EditUserButton = ({ userId }: { userId: Number }) => {
  return (
    <Link href={`/users/${userId}/edit`}>
      <Button asChild className='w-full'>
        <span className='flex items-center justify-center gap-2'>
          <span>Edit User Info</span>
          <ImPencil2 />
        </span>
      </Button>
    </Link>
  )
}

export default EditUserButton
