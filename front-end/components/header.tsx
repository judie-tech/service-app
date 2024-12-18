"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="p-5 shadow-sm flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex-shrink-0 text-xl font-bold text-purple-600"
          >
            HarakaFix!!
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="hover:scale-105 hover:text-primary transition-all"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:scale-105 hover:text-primary transition-all"
            >
              Services
            </Link>
            <Link
              href="/my-bookings"
              className="hover:scale-105 hover:text-primary transition-all"
            >
              My Bookings
            </Link>
            <Link
              href="/about"
              className="hover:scale-105 hover:text-primary transition-all"
            >
              About Us
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/auth">
            <Button>Login / Signup</Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="hover:text-primary transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-primary transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/my-bookings"
              className="hover:text-primary transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              My Bookings
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/auth"
              className="hover:text-primary transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Login / Signup
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
