'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    image: '/home.jpg',
    title: "We Are The Best In The Industry",
    description: "We are dedicated to providing you with the best homeware products and services. Our team is committed to excellence and innovation.",
    primaryButton: "View Products",
    secondaryButton: "Learn More"
  },
  {
    id: 2,
    image: '/Noble_ease_NH_CHR_LNG003.png',
    title: "Discover Premium Comfort",
    description: "Experience the perfect blend of style and functionality with our exclusive range of homeware products designed for modern living.",
    primaryButton: "View Products",
    secondaryButton: "View Catalog"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={slide.image}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
