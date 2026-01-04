import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: 'Furniture',
    count: '115+ Products',
    description: 'Create comfortable and stylish living spaces with our extensive range of plastic furniture.',
    image: '/furniture-category.jpg'
  },
  {
    name: 'Households',
    count: '25+ Products',
    description: 'Smart solutions to declutter your home and office, making organization simple and efficient.',
    image: '/households-category.jpg'
  },
  {
    name: 'Kitchen & Dining',
    count: '45+ Products',
    description: 'Functional, food-safe, and modern essentials for your kitchen and dining experience.',
    image: '/kitchen-category.jpg'
  },
  {
    name: 'Bathroom & Cleaning',
    count: '35+ Products',
    description: 'Durable, hygienic, and easy-to-clean products designed for bathrooms and cleaning tasks.',
    image: '/bathroom-category.jpg'
  },
  {
    name: 'Kids World',
    count: '21+ Products',
    description: 'Safe, colorful, and fun plastic products that spark joy and creativity for children.',
    image: '/kids-category.jpg'
  },
  {
    name: 'Garden & Outdoors',
    count: '5+ Products',
    description: 'Weather-resistant and sturdy items to enhance and maintain your outdoor spaces.',
    image: '/garden-category.jpg'
  },
  {
    name: 'Industrial & Commercial Storage',
    count: '6+ Products',
    description: 'Heavy-duty storage solutions built to withstand demands of industrial and commercial use.',
    image: '/industrial-category.jpg'
  }
];

const blogPosts = [
  {
    id: 1,
    title: "The Trader Trap: Why Sourcing 'Manufacturer-Grade Quality' Means Partnering with an Expert",
    excerpt: "Don't get caught in the 'trader trap.' Learn the real difference between standard export plastics and true 'manufacturer-grade quality.' Discover how our polymer expertise guarantees a more durable, reliable, and profitable product for your business.",
    date: "December 20, 2024",
    category: "Manufacturing Excellence"
  },
  {
    id: 2,
    title: "Stop Paying the 'Trader Tax': How Our Direct-from-Source Model Maximizes Your Margins",
    excerpt: "Don't let hidden markups eat your profits. Learn how Noble Homeware's 'direct-from-source' pricing for B2B plastic homewares cuts out the middlemen, giving you a powerful, sustainable cost advantage.",
    date: "December 18, 2024",
    category: "Pricing Strategy"
  },
  {
    id: 3,
    title: "Stop Juggling Suppliers. How Our 'Complete Sourcing Solution' Simplifies Your Business",
    excerpt: "Tired of managing multiple suppliers, freight forwarders, and designers? Discover how Noble Homeware's 'complete sourcing solution'—from 250+ products to full white-label manufacturing and logistics—streamlines your supply chain.",
    date: "December 22, 2024",
    category: "Sourcing Strategy"
  },
  {
    id: 4,
    title: "Beyond the Checklist: What Our 'Manufacturer DNA' Quality Assurance Really Means",
    excerpt: "Tired of defective shipments? A trader's Q.A. is just a visual guess. See how Noble Homeware's 'Manufacturer DNA' Q.A. inspects plastic homewares from the molecule up, protecting your profits.",
    date: "December 24, 2024",
    category: "Quality Assurance"
  },
  {
    id: 5,
    title: "The Importer's Nightmare: Why We Treat Logistics as Our Final Quality Check",
    excerpt: "Stop the anxiety of international shipping. Noble Homeware's 'Seamless Global Logistics' means we act as your dedicated operations team, managing all documentation, packaging, and on-time delivery.",
    date: "December 26, 2024",
    category: "Global Logistics"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Products Overview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Welcome to Explore Our Comprehensive Range of Plastic Products
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Find the perfect solution for your industry. Browse and download our specialized catalogs to discover quality, durability, and innovation.
            </p>
          </div>
          
          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  {/* Image */}
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mb-4 uppercase tracking-wide">
                      {category.count}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Previews Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert insights on quality manufacturing, pricing strategy, and industry trends
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              View All Blog Posts
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Get a Quote CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your homeware needs. Our team is here to help you find the perfect solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg">
              Get a Quote
            </button>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* PLEXCONCIL Membership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/plexconcil.webp"
                alt="PLEXCONCIL"
                width={128}
                height={64}
                className="h-16 w-auto"
              />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Proud Member of PLEXCONCIL
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We are honored to be part of PLEXCONCIL, demonstrating our commitment to quality standards and excellence in the plastic industry.
          </p>
          
          {/* Experience and Quote Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
            {/* Experience */}
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900">12+</p>
              <p className="text-lg text-gray-600 mt-2">Years Experience</p>
            </div>
            {/* Projects Completed */}
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900">100+</p>
              <p className="text-lg text-gray-600 mt-2">Project Completed</p>
            </div>
            {/* Quote */}
            <div className="lg:col-span-1">
              <blockquote className="text-center lg:text-left">
                <p className="text-4xl text-gray-400 font-serif mb-4">"</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  What if plastic was never a problem, but a test? A resource
                  provided so that our forests could thrive. We are now
                  answering that call. By embracing a circular economy, we
                  complete the cycle—using nature's gift to protect nature
                  itself. Let's recycle, renew, and respect, ensuring a world
                  where both innovation and ancient trees can flourish
                  together.
                </p>
                <footer className="mt-4">
                  <p className="text-md font-semibold text-gray-800">Dr. Mohammed Tahir</p>
                  <p className="text-sm text-gray-600">Director of Operations</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Follow Us
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stay connected with Noble Homeware on social media for the latest updates, products, and inspiration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://www.instagram.com/thenoblehomeware/?igsh=dXFlM2NqbmxicHZ4#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
              Instagram
            </a>
            
            <a 
              href="https://www.linkedin.com/company/thenoble-homeware/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            
            <a 
              href="https://x.com/NobleHomeware"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              X (Twitter)
            </a>
            
            <a 
              href="https://www.facebook.com/share/17j25uCFqN/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
          
          <p className="text-blue-200 text-sm">
            Join our community and be the first to know about new products and exclusive offers!
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
