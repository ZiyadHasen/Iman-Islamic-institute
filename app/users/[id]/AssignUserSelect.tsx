import { Select } from '@radix-ui/themes'
import React from 'react'

const AssignUserSelect = () => {
  return (
    <>
      <Select.Root defaultValue='apple'>
        <Select.Trigger className='w-full' placeholder='select Operator' />

        <Select.Content className='w-full'>
          <Select.Item value='operator1'>Operator 1</Select.Item>
          <Select.Item value='operator2'>Operator 2</Select.Item>
          <Select.Item value='operator3'>Operator 3</Select.Item>
          <Select.Item value='operator4'>Operator 4</Select.Item>
        </Select.Content>
      </Select.Root>
    </>
  )
}

export default AssignUserSelect
