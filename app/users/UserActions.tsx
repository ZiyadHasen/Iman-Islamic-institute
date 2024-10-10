import { Status } from '@prisma/client'
import { Button, DropdownMenu, Select } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const UserActions = () => {
  const statuses: { label: string; value: Status | 'all' }[] = [
    { label: 'All', value: 'all' }, // Use 'all' as a valid fallback value
    { label: 'Not Answered', value: 'NOT_ANSWERED' },
    { label: 'Not Called', value: 'NOT_CALLED' },
    { label: 'Noticed', value: 'SUCCESSFULLY_NOTICED' },
    { label: 'Submitted', value: 'SUCCESSFULLY_SUBMITTED' },
  ]
  return (
    <div className='my-5 flex justify-between'>
      <div>
        <Select.Root defaultValue='all'>
          <Select.Trigger />
          <Select.Content>
            {statuses.map((status) => (
              <Select.Item key={status.value} value={status.value}>
                {status.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
      <Button>
        <Link href={'/users/new'}>Create New User</Link>
      </Button>
    </div>
  )
}

export default UserActions
