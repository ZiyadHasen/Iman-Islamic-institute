import prisma from '@/prisma/client'
import { Box } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import UserDetail from './UserDetail'
import EditUserButton from './EditUserButton'
import DeleteUserButton from './DeleteUserButton'

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
        <div>assign</div>
        <EditUserButton userId={user.id} />
        <DeleteUserButton userId={user.id} />
        <div>status</div>
      </div>
    </div>
  )
}

export default UserDetailPage
