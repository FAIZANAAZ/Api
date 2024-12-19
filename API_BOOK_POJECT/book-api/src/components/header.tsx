'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b font-[sans-serif] tracking-wide relative z-50 w-full bg-white text-black">
      <section className="py-3 bg-black text-white text-center px-4 sm:px-10">
        <p className="text-xs sm:text-sm">
          Discover the World of Knowledge: Your Gateway to Amazing Books!
        </p>
      </section>

      <div className="flex items-center justify-between px-4 sm:px-10 py-0 min-h-[70px]">
        {/* Left Logo */}
        <div className="w-[70px] h-[70px] flex items-center">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white w-full absolute top-full left-0 py-4 px-4 sm:px-10 border-t">
          <NavLinks mobile />
        </nav>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const linkClass = `hover:underline cursor-pointer text-black font-semibold ${
    mobile ? "block py-2" : ""
  }`;

  return (
    < >
  <section className="text-center md:flex gap-24">
  <Link href="/">
        <span className={linkClass}>Home</span>
      </Link>
      <Link href="/categories">
        <span className={linkClass}>Categories</span>
      </Link>
      <Link href="/bestsellers">
        <span className={linkClass}>Best Sellers</span>
      </Link>
      <Link href="/contact">
        <span className={linkClass}>Contact Us</span>
      </Link>
  </section>
    </>
  );
};

export default Header;

