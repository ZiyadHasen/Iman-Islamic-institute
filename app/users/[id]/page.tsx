import prisma from '@/prisma/client'
import { Box } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import UserDetail from './UserDetail'
import EditUserButton from './EditUserButton'
import DeleteUserButton from './DeleteUserButton'
import AssignUserSelect from './AssignUserSelect'
import UserStatusSelect from './UserStatusSelect'

interface Props {
  params: { id: string }
}

const fetchUser = cache((userId: number) =>
  prisma.user.findUnique({ where: { id: userId } }),
)
const UserDetailPage = async ({ params }: Props) => {
  const user = await fetchUser(parseInt(params.id))
  if (!user) return notFound()

  return (
    <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-5'>
      <Box className='md:col-span-4'>
        <UserDetail user={user} />
      </Box>

      <div className='flex flex-col gap-2'>
        <AssignUserSelect />
        <EditUserButton userId={user.id} />
        <DeleteUserButton userId={user.id} />
        <UserStatusSelect userStatuses={user.status} />
      </div>
    </div>
  )
}

export default UserDetailPage
