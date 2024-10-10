import { Button, Table } from '@radix-ui/themes'
import React from 'react'
import UserActions from './UserActions'
import prisma from '@/prisma/client'
import Link from '../components/Link'
import UserStatusBadge from '../components/UserStatusBadge'

const UsersPage = async () => {
  const users = await prisma.user.findMany()
  return (
    <>
      <UserActions />
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone Number</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
                <div className='block md:hidden'>
                  <UserStatusBadge status={user.status} />
                </div>
              </Table.Cell>
              <Table.Cell>
                <UserStatusBadge status={user.status} />
              </Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}

export default UsersPage
