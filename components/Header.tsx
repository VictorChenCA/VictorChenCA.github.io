"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-prussian_blue-500 text-baby_powder shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-myrtle_green-400 to-beige-400"
        >
          VC
        </Link>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
        <ul
          id="mobile-menu"
          className={`w-full md:w-auto md:flex md:space-x-6 ${isMenuOpen ? "block" : "hidden"} mt-4 md:mt-0`}
        >
          {["Education", "Experience", "Skills", "Research", "Honors"].map((item) => (
            <li key={item} className="mb-2 md:mb-0">
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-baby_powder hover:text-myrtle_green-300 text-lg block transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

