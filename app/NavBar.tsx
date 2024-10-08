'use client'
import { Container } from '@radix-ui/themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import classNames from 'classnames'

const NavBar = () => {
  const currentPath = usePathname()
  const links = [
    { label: 'dashboard', href: '/' },
    { label: 'users', href: '/users' },
  ]
  return (
    <nav className='mb-5 border-b py-5'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-5 px-3'>
            <Link href='/'>
              <AiFillBug />
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={classNames({
                  'text-zinc-900': link.href === currentPath,
                  'text-zinc-500': link.href !== currentPath,
                  'hover:text-zinc-800 transition-colors': true
                })}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>login</div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar
