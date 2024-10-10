import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'
interface Props {
  status: Status
}
const UserStatusBadge = ({ status }: Props) => {
  if (status === 'NOT_ANSWERED')
    return (
      <Badge color='red' size='3'>
        Not Called
      </Badge>
    )
  if (status === 'SUCCESSFULLY_SUBMITTED')
    return (
      <Badge color='green' size='3'>
        Successfully Submitted
      </Badge>
    )
  if (status === 'SUCCESSFULLY_NOTICED')
    return (
      <Badge color='violet' size='3'>
        Successfully Noticed
      </Badge>
    )
  if (status === 'NOT_CALLED')
    return (
      <Badge color='purple' size='3'>
        Not Called
      </Badge>
    )

  return null
}

export default UserStatusBadge
