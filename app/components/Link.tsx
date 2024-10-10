import React from 'react'
import NextLink from 'next/link'
import { Link as RadixLink } from '@radix-ui/themes'
interface Props {
  href: string
  children: string
}
const Link = ({ href, children }: Props) => {
  //*passHref: in order to radix link to act like link he expect href :this makesure that
  return (
    <>
      <NextLink href={href} passHref legacyBehavior>
        <RadixLink>{children}</RadixLink>
      </NextLink>
    </>
  )
}

export default Link
