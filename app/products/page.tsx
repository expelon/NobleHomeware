import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Noble Ease Chair',
    image: '/Noble_ease_NH_CHR_LNG003.png',
    description: 'Premium comfort chair with modern design',
    price: '₹4,999'
  },
  {
    id: 2,
    name: 'Noble Orbital Bowl',
    image: '/NHL_BWL_002_Noble_orbital_bowl.png',
    description: 'Elegant serving bowl for your dining needs',
    price: '₹899'
  },
  {
    id: 3,
    name: 'Noble Crest Bowl',
    image: '/NHL_BWL_003_Noble_crest_bowl.png',
    description: 'Stylish bowl with unique crest design',
    price: '₹1,299'
  },
  {
    id: 4,
    name: 'Noble Riza Chair',
    image: '/NH_CHR_PRM001_Noble_riza.png',
    description: 'Comfortable and durable dining chair',
    price: '₹3,499'
  },
  {
    id: 5,
    name: 'Noble Ascend Chair',
    image: '/NH_CHR_PRM027_Noble_ascend.png',
    description: 'Modern chair with ergonomic design',
    price: '₹2,999'
  },
  {
    id: 6,
    name: 'Noble Airtight Containers',
    image: '/NH_CTN_001_Noble_airtight_print_containers.png',
    description: 'Set of airtight storage containers',
    price: '₹1,599'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Discover our premium range of homeware products</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
