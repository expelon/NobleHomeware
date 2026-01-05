'use client';

import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RequestQuote() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-screen w-full overflow-hidden">
        <Navbar isSticky={false} isTransparent={true} />
        
        {/* Hero Section */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/about-hero.webp")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Request a Quote
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Get a comprehensive, no-obligation quote for your homeware needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="quote-form">
        {isSuccess && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-green-800">Quote Request Sent Successfully!</h3>
                <p className="text-green-700">Thank you for your request! Our team will contact you within 24 hours.</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Form Header Messages */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tell Us About Your Requirement!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Submit your project details below to receive a comprehensive, no-obligation quote.
          </p>
          
          {/* What's Next Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Quick Response</h4>
                  <p className="text-gray-600 text-sm">Our Sales team will contact you within 24 hours</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Custom Solution</h4>
                  <p className="text-gray-600 text-sm">We tailor our quotes to your specific needs</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">No Commitment</h4>
                  <p className="text-gray-600 text-sm">Review your quote with zero pressure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form
            action="https://formsubmit.co/sales@noblehomeware.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="New Quote Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/request-quote?success=true" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Number Field */}
              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Delivery Term Field */}
              <div>
                <label htmlFor="deliveryTerm" className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Term *
                </label>
                <select
                  id="deliveryTerm"
                  name="deliveryTerm"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select delivery term</option>
                  <option value="EXW">EXW (Ex Works)</option>
                  <option value="FOB">FOB (Free on Board)</option>
                  <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                  <option value="DDP">DDP (Delivered Duty Paid)</option>
                  <option value="Other">Other (please specify in product details)</option>
                </select>
              </div>
            </div>

            {/* Product Details Field */}
            <div>
              <label htmlFor="productDetails" className="block text-sm font-medium text-gray-700 mb-2">
                Product Details *
              </label>
              <textarea
                id="productDetails"
                name="productDetails"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Please describe your requirements in detail:&#10;- Product categories needed&#10;- Quantity requirements&#10;- Specific features or customizations&#10;- Target market or application&#10;- Any other relevant details"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have questions? Contact our sales team directly at{' '}
            <a href="tel:+919686205948" className="text-blue-600 hover:text-blue-700 font-medium">
              +91 9686205948
            </a>{' '}
            or{' '}
            <a href="mailto:sales@noblehomeware.com" className="text-blue-600 hover:text-blue-700 font-medium">
              sales@noblehomeware.com
            </a>
          </p>
          <p className="text-sm text-gray-500">
            We respect your privacy and will never share your information with third parties.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
