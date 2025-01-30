"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [year, setYear] = useState("")

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="bg-prussian_blue-500 text-baby_powder py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {year} Victor Chen. All rights reserved.</p>
        <p className="mt-2">Stanford University | Computer Science</p>
      </div>
    </footer>
  )
}

