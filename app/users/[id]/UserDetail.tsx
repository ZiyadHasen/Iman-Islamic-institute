import UserStatusBadge from '@/app/components/UserStatusBadge'
import { User } from '@prisma/client'
import { Box, Card, Heading, Text } from '@radix-ui/themes'

import React from 'react'

const UserDetail = ({ user }: { user: User }) => {
  return (
    <div>
      <Heading>{user.name}</Heading>
      <Card className='mt-4 flex space-x-12'>
        <UserStatusBadge status={user.status} />
        {user.lastCalled ? (
          <Text>{new Date(user.lastCalled).toLocaleString()}</Text>
        ) : (
          <Text>No calls made yet</Text> // Optional: Fallback message if lastCalled is null
        )}
      </Card>
      <div className='mt-5 flex flex-col gap-4 rounded-lg border border-[#00A36C] bg-gray-50 p-4 shadow-sm'>
        <Text className='text-sm font-semibold text-gray-800'>
          Email:
          <a
            href={`mailto:${user.email}`}
            className='font-normal text-[#00A36C] hover:underline'
          >
            {' '}
            {user.email}
          </a>
        </Text>
        <Text className='text-sm font-semibold text-gray-800'>
          Phone Number:
          <a
            href={`tel:${user.phoneNumber}`}
            className='font-normal text-[#00A36C] hover:underline'
          >
            {' '}
            {user.phoneNumber}
          </a>
        </Text>
        <Text className='text-sm font-semibold text-gray-800'>
          Reason the call did not work:
          <span className='font-normal text-gray-600'>
            {user.description || ' No reason provided'}
          </span>
        </Text>
      </div>
    </div>
  )
}

export default UserDetail
