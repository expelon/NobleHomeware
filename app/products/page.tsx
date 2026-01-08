'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { toast } from 'sonner';

const categories = [
  {
    name: 'Furniture',
    count: '115+ Products',
    description: 'Create comfortable and stylish living spaces with our extensive range of plastic furniture.',
    image: '/furniture.webp'
  },
  {
    name: 'Households',
    count: '25+ Products',
    description: 'Smart solutions to declutter your home and office, making organization simple and efficient.',
    image: '/households.webp'
  },
  {
    name: 'Kitchen & Dining',
    count: '45+ Products',
    description: 'Functional, food-safe, and modern essentials for your kitchen and dining experience.',
    image: '/kitchen.webp'
  },
  {
    name: 'Bathroom & Cleaning',
    count: '35+ Products',
    description: 'Durable, hygienic, and easy-to-clean products designed for bathrooms and cleaning tasks.',
    image: '/bathroom.webp'
  },
  {
    name: 'Kids World',
    count: '21+ Products',
    description: 'Safe, colorful, and fun plastic products that spark joy and creativity for children.',
    image: '/kids.webp'
  },
  {
    name: 'Garden & Outdoor',
    count: '5+ Products',
    description: 'Weather-resistant and sturdy items to enhance and maintain your outdoor spaces.',
    image: '/garden.webp'
  },
  {
    name: 'Industrial & Commercial',
    count: '6+ Products',
    description: 'Heavy-duty storage solutions built to withstand demands of industrial and commercial use.',
    image: '/industrial.webp'
  }
];

export default function Products() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadCountryCode, setLeadCountryCode] = useState('+91');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);
  const [pendingDownload, setPendingDownload] = useState<{ pdfUrl: string; filename: string; label: string } | null>(null);

  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === 'undefined') return;
    
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const triggerDownload = (pdfUrl: string, filename: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    if (isMobile) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.location.href = pdfUrl;
    }
  };

  const requestCatalogueDownload = (pdfUrl: string, filename: string, label: string) => {
    setPendingDownload({ pdfUrl, filename, label });
    setLeadError(null);
    setIsLeadModalOpen(true);
  };

  const submitLeadAndDownload = async () => {
    if (!pendingDownload) return;

    const email = leadEmail.trim();
    const countryCode = leadCountryCode.trim();
    const phone = leadPhone.trim();

    if (!email) {
      setLeadError('Please enter your email.');
      return;
    }
    if (!countryCode || !countryCode.startsWith('+')) {
      setLeadError('Please enter a valid country code (example: +91).');
      return;
    }
    if (!phone) {
      setLeadError('Please enter your phone number.');
      return;
    }

    setLeadSubmitting(true);
    setLeadError(null);

    try {
      const res = await fetch('https://formsubmit.co/ajax/aneconglobal@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: `Catalogue download request: ${pendingDownload.label}`,
          Email: email,
          Phone: `${countryCode} ${phone}`,
          Catalogue: pendingDownload.label,
          Page: 'Products'
        })
      });

      if (!res.ok) {
        throw new Error('Lead submission failed');
      }

      setIsLeadModalOpen(false);
      setLeadEmail('');
      setLeadPhone('');
      setLeadCountryCode('+91');
      const toDownload = pendingDownload;
      setPendingDownload(null);

      toast.success('Thanks! Your download is starting.');

      triggerDownload(toDownload.pdfUrl, toDownload.filename);
    } catch (e) {
      setLeadError('Something went wrong. Please try again.');
      toast.error('Could not submit. Please try again.');
    } finally {
      setLeadSubmitting(false);
    }
  };

  const handleDownload = (categoryName: string) => {
    // Ensure we're on the client side
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    try {
      if (categoryName === 'Bathroom & Cleaning') {
        requestCatalogueDownload('/Bathroomwares-Catalogue.pdf', 'Bathroomwares-Catalogue.pdf', 'Bathroom & Cleaning');
      } else if (categoryName === 'Furniture') {
        requestCatalogueDownload('/Furniture-Catalogue.pdf', 'Furniture-Catalogue.pdf', 'Furniture');
      } else if (categoryName === 'Households') {
        requestCatalogueDownload('/Household-Storage-Catalogue.pdf', 'Household-Storage-Catalogue.pdf', 'Households');
      } else if (categoryName === 'Kitchen & Dining') {
        requestCatalogueDownload('/Kitchenwares-Catalogue.pdf', 'Kitchenwares-Catalogue.pdf', 'Kitchen & Dining');
      } else if (categoryName === 'Garden & Outdoor') {
        requestCatalogueDownload('/Gardening-Catalogue.pdf', 'Gardening-Catalogue.pdf', 'Garden & Outdoor');
      } else if (categoryName === 'Industrial & Commercial') {
        requestCatalogueDownload('/Industrial-Storage-Catalogue.pdf', 'Industrial-Storage-Catalogue.pdf', 'Industrial & Commercial');
      } else if (categoryName === 'Kids World') {
        requestCatalogueDownload('/Kids-World-Catalogue.pdf', 'Kids-World-Catalogue.pdf', 'Kids World');
      }
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      requestCatalogueDownload('/master-catalog.pdf', 'master-catalog.pdf', 'Master Catalog');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => {
              if (leadSubmitting) return;
              setIsLeadModalOpen(false);
            }}
          />

          <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Get the catalog</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Enter your details to download{pendingDownload?.label ? `: ${pendingDownload.label}` : ''}.
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100"
                  onClick={() => {
                    if (leadSubmitting) return;
                    setIsLeadModalOpen(false);
                  }}
                >
                  Close
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800">Email</label>
                  <input
                    type="email"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800">Country code</label>
                    <input
                      type="tel"
                      value={leadCountryCode}
                      onChange={(e) => setLeadCountryCode(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                      placeholder="+91"
                      inputMode="tel"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-800">Phone number</label>
                    <input
                      type="tel"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-600 focus:outline-none"
                      placeholder="9876543210"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>
                </div>

                {leadError && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{leadError}</div>}

                <button
                  type="button"
                  disabled={leadSubmitting}
                  onClick={submitLeadAndDownload}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:opacity-60"
                >
                  {leadSubmitting ? 'Submitting...' : 'Submit & Download'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative h-screen w-full overflow-hidden">
        <Navbar isSticky={false} isTransparent={true} />
        
        {/* Hero Section */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/product-hero.webp")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore 250+ products in one place</h1>
              <p className="text-lg max-w-3xl mx-auto mb-8">From premium furniture to essential household items, discover our comprehensive collection of quality homeware solutions designed to meet your every need.</p>
              <button 
                onClick={() => {
                  // Ensure we're on client side
                  if (typeof window === 'undefined' || typeof document === 'undefined') return;
                  
                  try {
                    requestCatalogueDownload('/master-catalog.pdf', 'master-catalog.pdf', 'Master Catalog');
                  } catch (error) {
                    console.error('Master catalog download failed:', error);
                    // Fallback: open in new tab
                    requestCatalogueDownload('/master-catalog.pdf', 'master-catalog.pdf', 'Master Catalog');
                  }
                }}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors duration-300 text-lg shadow-lg mx-auto"
              >
                Download Master Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Product Categories
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Browse our comprehensive product categories and download detailed catalogs for each collection.
            </p>
          </div>
          
          {/* Categories Sections */}
          {categories.map((category, index) => (
            <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image - First on mobile, alternating on desktop */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} order-1`}>
                    <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder image if the main image fails
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.webp';
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  
                  {/* Content - Second on mobile, alternating on desktop */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} order-2`}>
                    <div className="mb-6">
                      <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                        {category.count}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      {category.name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                      {category.description}
                    </p>
                    <button 
                      onClick={() => handleDownload(category.name)}
                      className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center"
                    >
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download Catalog
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Master Catalog Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold uppercase tracking-widest">
                Complete Collection
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Download Master Catalog
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Get access to our complete product collection in one comprehensive catalog. Features all 250+ products across all categories with detailed specifications and pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => {
                  // Ensure we're on client side
                  if (typeof window === 'undefined' || typeof document === 'undefined') return;
                  
                  try {
                    requestCatalogueDownload('/master-catalog.pdf', 'master-catalog.pdf', 'Master Catalog');
                  } catch (error) {
                    console.error('Master catalog download failed:', error);
                    // Fallback: open in new tab
                    requestCatalogueDownload('/master-catalog.pdf', 'master-catalog.pdf', 'Master Catalog');
                  }
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center text-lg shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Complete Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
