import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar">
    <ul>
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/about"}>About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
  )
}
