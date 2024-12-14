import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          HomeServices
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-purple-600">Home</Link>
          <Link href="/services" className="text-gray-600 hover:text-purple-600">Services</Link>
          <Link href="/about" className="text-gray-600 hover:text-purple-600">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline">Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

