'use client'

import Link from 'next/link'

export default function Navbar() {
  const navLinks = [
    { href: '/', text: 'Home' },
    { href: 'our-story', text: 'Our Story' },
    { href: 'work', text: 'Work' },
    { href: 'services', text: 'Services' },
    { href: 'contact', text: 'Contact' },
  ]

  // Website name/logo on the left - links on the right
  return (
    <>
      <nav className="flex justify-between pt-6 text-2xl">
        <h1 className="ps-7">Website Name</h1>
        <ul className="flex gap-5 pe-7">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <li className="list-none">{link.text}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  )
}
