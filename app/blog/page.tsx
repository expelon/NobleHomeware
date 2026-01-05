import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const blogPosts = [
  {
    id: 1,
    title: "The Trader Trap: Why Sourcing 'Manufacturer-Grade Quality' Means Partnering with an Expert",
    excerpt: "Don't get caught in the 'trader trap.' Learn the real difference between standard export plastics and true 'manufacturer-grade quality.' Discover how our polymer expertise guarantees a more durable, reliable, and profitable product for your business.",
    date: "December 20, 2024",
    author: "Noble Homeware Team",
    category: "Manufacturing Excellence"
  },
  {
    id: 2,
    title: "Stop Paying the 'Trader Tax': How Our Direct-from-Source Model Maximizes Your Margins",
    excerpt: "Don't let hidden markups eat your profits. Learn how Noble Homeware's 'direct-from-source' pricing for B2B plastic homewares cuts out the middlemen, giving you a powerful, sustainable cost advantage.",
    date: "December 18, 2024",
    author: "Noble Homeware Team",
    category: "Pricing Strategy"
  },
  {
    id: 3,
    title: "Stop Juggling Suppliers. How Our 'Complete Sourcing Solution' Simplifies Your Business",
    excerpt: "Tired of managing multiple suppliers, freight forwarders, and designers? Discover how Noble Homeware's 'complete sourcing solution'—from 250+ products to full white-label manufacturing and logistics—streamlines your supply chain.",
    date: "December 22, 2024",
    author: "Noble Homeware Team",
    category: "Sourcing Strategy"
  },
  {
    id: 4,
    title: "Beyond the Checklist: What Our 'Manufacturer DNA' Quality Assurance Really Means",
    excerpt: "Tired of defective shipments? A trader's Q.A. is just a visual guess. See how Noble Homeware's 'Manufacturer DNA' Q.A. inspects plastic homewares from the molecule up, protecting your profits.",
    date: "December 24, 2024",
    author: "Noble Homeware Team",
    category: "Quality Assurance"
  },
  {
    id: 5,
    title: "The Importer's Nightmare: Why We Treat Logistics as Our Final Quality Check",
    excerpt: "Stop the anxiety of international shipping. Noble Homeware's 'Seamless Global Logistics' means we act as your dedicated operations team, managing all documentation, packaging, and on-time delivery.",
    date: "December 26, 2024",
    author: "Noble Homeware Team",
    category: "Global Logistics"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-screen w-full overflow-hidden">
        <Navbar isSticky={false} isTransparent={true} />
        
        {/* Hero Section */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/blog-hero.webp")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
              <p className="text-xl max-w-3xl mx-auto">Explore our latest articles, industry insights, and expert tips to help you make informed sourcing and manufacturing decisions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${slugify(post.title)}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link
                    href={`/blog/${slugify(post.title)}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
