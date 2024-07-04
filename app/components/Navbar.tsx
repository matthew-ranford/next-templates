'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: 'our-story', text: 'Our Story' },
    { href: 'projects', text: 'Projects' },
    { href: 'services', text: 'Services' },
    { href: 'contact', text: 'Contact' },
  ]

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  ///////////////////////////////////// Website name/logo on the left - links on the right /////////////////////////////////////

  // return (
  //   <>
  //     <nav className="flex justify-between pt-6 pb-6 bg-red-950 text-zinc-300">
  //       <h1 className="ps-2 lg:ps-7 text-5xl lg:text-6xl 2xl:text-8xl">
  //         Website Name
  //       </h1>
  //       <div className="lg:hidden flex pe-2">
  //         <button onClick={handleMenuClick}>
  //           <span
  //             className={`bg-zinc-300 block transition-all duration-1000 ease-out
  //                 h-0.5 w-14 rounded-2xl ${
  //                   isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-0.5'
  //                 }`}
  //           ></span>
  //           <span
  //             className={`bg-zinc-300 block transition-all duration-300 ease-out
  //                 h-0.5 w-14 rounded-2xl my-0.5 ${
  //                   isOpen ? 'opacity-0' : 'opacity-100'
  //                 }`}
  //           ></span>
  //           <span
  //             className={`bg-zinc-300 block transition-all duration-1000 ease-out
  //                 h-0.5 w-14 rounded-2xl ${
  //                   isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0.5'
  //                 }`}
  //           ></span>
  //         </button>
  //       </div>
  //       <ul
  //         className={`absolute lg:relative w-full h-full lg:w-auto lg:h-auto lg:flex lg:gap-4 my-16 pt-4 lg:pt-2 2xl:pt-6 text-right right-0 lg:my-0 pe-4 lg:pe-7 text-8xl lg:text-2xl 2xl:text-4xl bg-red-900 lg:bg-red-950 ${
  //           isOpen ? '' : 'hidden'
  //         }`}
  //       >
  //         {navLinks.map((link, index) => (
  //           <Link href={link.href} key={index}>
  //             <li className="list-none py-2 lg:py-0">{link.text}</li>
  //           </Link>
  //         ))}
  //       </ul>
  //     </nav>
  //   </>
  // )

  ///////////////////////////////////// Links in the center - Contact on the right /////////////////////////////////////

  return (
    <>
      <nav className="flex justify-end lg:justify-between pt-6 pb-6 bg-red-950 text-zinc-300">
        {/* Logo in here? */}
        <div className="lg:hidden flex pe-4">
          <button onClick={handleMenuClick}>
            <span
              className={`bg-zinc-300 block transition-all duration-1000 ease-out 
                  h-0.5 w-14 rounded-2xl ${
                    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                  }`}
            ></span>
            <span
              className={`bg-zinc-300 block transition-all duration-300 ease-out 
                  h-0.5 w-14 rounded-2xl my-0.5 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
            ></span>
            <span
              className={`bg-zinc-300 block transition-all duration-1000 ease-out 
                  h-0.5 w-14 rounded-2xl ${
                    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                  }`}
            ></span>
          </button>
        </div>
        <ul
          className={`absolute lg:relative w-full h-full lg:w-auto lg:h-auto lg:flex lg:gap-4 my-14 pt-4 lg:pt-2 2xl:pt-6 text-right right-0 lg:my-0 pe-4 lg:pe-0 text-8xl lg:text-2xl 2xl:text-4xl bg-red-900 lg:bg-red-950 mx-auto lg:px-20 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          {navLinks.slice(0, -1).map((link, index) => (
            <Link href={link.href} key={index}>
              <li className="list-none py-2 lg:py-0">{link.text}</li>
            </Link>
          ))}
        </ul>
        <button className="text-2xl 2xl:text-4xl pe-4 2xl:pt-6">
          <span className="border-4 border-amber-600 rounded-2xl px-2 hover:bg-amber-600">
            Contact
          </span>
        </button>
      </nav>
    </>
  )
}
