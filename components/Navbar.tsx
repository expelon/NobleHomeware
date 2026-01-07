'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  isSticky?: boolean;
  isTransparent?: boolean;
}

export default function Navbar({ isSticky = true, isTransparent = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={`shadow-lg z-50 ${isSticky ? 'sticky top-0' : ''} ${isTransparent ? 'absolute top-0 left-0 right-0 bg-transparent' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo2.png"
                alt="Noble Homeware"
                width={180}
                height={50}
                className="h-12 w-auto sm:h-14"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2 px-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${pathname === link.href ? (isTransparent ? 'text-white' : 'text-red-600') : (isTransparent ? 'text-white hover:bg-white/20' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900')}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Request Quote Button */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <Link href="/request-quote" className="px-4 py-2 bg-gray-800 text-white rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-200">
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${isTransparent ? 'text-white hover:bg-white/20 focus:ring-white/50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500'}`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3 bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className={`block px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
                pathname === link.href ? 'text-red-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              } ${link.name === 'Contact Us' ? 'mb-4' : 'mb-2'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/request-quote" className="w-full text-left px-4 py-2 bg-gray-800 text-white rounded-md text-lg font-medium hover:bg-gray-700 transition-colors duration-200" onClick={() => setIsOpen(false)}>
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
