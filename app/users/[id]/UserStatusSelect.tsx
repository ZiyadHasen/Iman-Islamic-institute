import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import React from 'react'

const UserStatusSelect = ({ userStatuses }: { userStatuses: Status }) => {
  return (
    <>
      <Select.Root size='2' defaultValue='apple'>
        <Select.Trigger />
        <Select.Content>
          <Select.Item value='apple'>Apple</Select.Item>
          <Select.Item value='orange'>Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </>
  )
}

export default UserStatusSelect
