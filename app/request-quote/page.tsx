'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    deliveryTerm: '',
    productDetails: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual submission logic here
    alert('Thank you for your request! Our team will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
          <p className="text-xl">Get a comprehensive, no-obligation quote for your homeware needs</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Form Header Messages */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tell Us About Your Requirement!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Submit your project details below to receive a comprehensive, no-obligation quote.
          </p>
          
          {/* What's Next Section */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Our Sales team will contact you within 24 hours.</h4>
                  <p className="text-gray-600 text-sm mt-1">Quick response to your requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Custom Solution</h4>
                  <p className="text-gray-600 text-sm mt-1">We tailor our quotes to your specific needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">No Commitment</h4>
                  <p className="text-gray-600 text-sm mt-1">Review your quote with zero pressure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.number}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.deliveryTerm}
                  onChange={handleChange}
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
                value={formData.productDetails}
                onChange={handleChange}
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
