'use client'
import { AlertDialog, Button, Flex, Spinner } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const DeleteUserButton = ({ userId }: { userId: number }) => {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState(false)
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button className='w-full' color='red' disabled={isDeleting}>
            Delete User {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion </AlertDialog.Title>
          <AlertDialog.Description>
            are you sure you want to delete the user ? this action cant be
            undone
          </AlertDialog.Description>
          <div className='mt-4 flex justify-end gap-4'>
            <AlertDialog.Cancel>
              <Button color='gray' variant='soft'>
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                color='red'
                variant='solid'
                onClick={async () => {
                  try {
                    setIsDeleting(true)
                    await axios.delete(`/api/issues/${userId}`)
                    router.push('/issues/list')
                    router.refresh()
                  } catch (error) {
                    setIsDeleting(false)
                    setError(true)
                  }
                }}
              >
                Confirm Deletion
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>

      {error && (
        <AlertDialog.Root open={error}>
          <AlertDialog.Content>
            <AlertDialog.Title>Error Occurred</AlertDialog.Title>
            <AlertDialog.Description>
              Failed to delete the user, please try again later.
            </AlertDialog.Description>
            <Flex gap='3' mt='4' justify='end'>
              <Button
                variant='soft'
                color='gray'
                onClick={() => setError(false)}
              >
                Close
              </Button>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
    </>
  )
}

export default DeleteUserButton
