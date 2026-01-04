'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {slide.primaryButton}
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              {slide.secondaryButton}
            </button>
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
