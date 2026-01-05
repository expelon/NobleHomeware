'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const heroSlides = [
  {
    id: 1,
    image: '/home.webp',
    tagline: '',
    title: "We Are The Best In The Industry",
    description: "We are dedicated to providing you with the best homeware products and services. Our team is committed to excellence and innovation.",
    primaryButton: "View Products",
    secondaryButton: "Learn More"
  },
  {
    id: 2,
    image: '/home2.webp',
    tagline: 'WHITE LABEL & CUSTOM SOLUTIONS',
    title: "Your Brand.\nOur Manufacturing.",
    description: "Leverage our full white-label and custom manufacturing services to bring your unique product vision to life with our expertise.",
    primaryButton: "View Products",
    secondaryButton: "View Catalog"
  },
  {
    id: 3,
    image: '/home3.webp',
    tagline: 'GLOBAL SOURCING EXCELLENCE',
    title: "Sourcing from India.\nSimplified.",
    description: "We are your dedicated team on the ground. We manage all quality assurance, logistics, and documentation for a seamless, on-time delivery.",
    primaryButton: "Get Started",
    secondaryButton: "Learn More"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = (prevSlide + 1) % heroSlides.length;
        console.log('Changing slide from', prevSlide, 'to', nextSlide, 'Total slides:', heroSlides.length);
        return nextSlide;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const slide = heroSlides[currentSlide];

  return (
    <div className="relative h-[110vh] w-full overflow-hidden">
      {/* Integrated Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 shadow-lg">
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
                    className={`whitespace-nowrap px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${pathname === link.href ? 'text-white' : 'text-white hover:bg-white/20'}`}
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
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-colors duration-200"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`block px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${pathname === link.href ? 'text-white' : 'text-white hover:bg-white/20'}`}
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

      <Image
        src={slide.image}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          {slide.tagline && (
            <p className="text-sm md:text-base font-medium uppercase tracking-wider mb-4 animate-fade-in text-blue-200">
              {slide.tagline}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in whitespace-pre-line">
            {slide.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in">
            {slide.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link 
              href="/products" 
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
            >
              {slide.primaryButton}
            </Link>
            <Link 
              href={slide.secondaryButton === 'View Catalog' ? '/products' : '/about'} 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
            >
              {slide.secondaryButton}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white bg-opacity-40 hover:bg-opacity-60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
