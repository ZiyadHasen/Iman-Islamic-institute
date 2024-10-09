import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssueActions = () => {
  return (
    <div className='mt-5 flex justify-between'>
      <div>filter by status</div>
      <Button>
        <Link href={'/users/new'}>Create New User</Link>
      </Button>
    </div>
  )
}

export default IssueActions
