import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import React from 'react'

const UserStatusSelect = () => {
  return (
    <>
      <Select.Root>
        <Select.Trigger className='w-full' placeholder='select status' />
        <Select.Content>
          {Object.keys(Status).map((status) => (
            <Select.Item key={status} value={status}>
              {status.replaceAll('_', ' ').toLowerCase()}{' '}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </>
  )
}

export default UserStatusSelect
