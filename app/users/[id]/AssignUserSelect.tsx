import { Select } from '@radix-ui/themes'
import React from 'react'

const AssignUserSelect = () => {
  return (
    <>
      <Select.Root defaultValue='apple'>
        <Select.Trigger className='w-full' />
        <Select.Content className='w-full'>
          {' '}
          <Select.Item value='apple'>Operator1</Select.Item>
          <Select.Item value='orange'>Operator2</Select.Item>
          <Select.Item value='orange'>Operator3</Select.Item>
          <Select.Item value='orange'>Operator4</Select.Item>
        </Select.Content>
      </Select.Root>
    </>
  )
}

export default AssignUserSelect
