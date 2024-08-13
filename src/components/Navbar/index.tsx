import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  }
  const colorUL = 'text-[#000000] font-bold';
  return (
    <nav className='flex justify-between px-36 pt-12 text-[20px] text-[#000000] uppercase'>
        <ul>
            <li className='font-bold'>Zabzul Supratman</li>
        </ul>
        <ul className='flex space-x-6'>
          <Link href={'/'} className={isActive('/') ? `${colorUL} ` : ''}>Home</Link>
          <Link id='Projects' href={'/Projects'} className={isActive('/Projects') ? `${colorUL} ` : ''}>Projects</Link>
          <Link href={'/contact'} className={isActive('/contact') ? `${colorUL} ` : ''}>Contact</Link>
          <Link href={'/about'} className={isActive('/about') ? `${colorUL} ` : ''}>About</Link>
        </ul>
    </nav> 
  )
}
