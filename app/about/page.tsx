import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Noble Homeware</h1>
          <p className="text-xl">Woven from Legacy, Built for the Future</p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">A Foundation Forged in 1990</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For the last three decades, our family has been at the heart of India's plastic products industry. From humble beginnings in 1990, we grew to become one of India's most trusted suppliers of high-grade virgin and recycled polymers. We've dedicated our lives to the cycle of renewal, transforming discarded materials into valuable resources for manufacturers across the nation. This isn't just our business; it's our heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Noble Homeware</h2>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              We are the experts behind the Industry experts.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Building on our 30-year family legacy in polymer manufacturing, Noble Homeware represents the culmination of decades of expertise in plastic science and quality assurance. Our deep understanding of materials—from molecular structure to real-world performance—sets us apart in the homeware industry.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Located in Coimbatore, Tamil Nadu, we leverage our manufacturing DNA to provide B2B partners with manufacturer-grade quality products that combine durability, safety, and exceptional value. We don't just sell homeware; we deliver on our family's promise of excellence.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our commitment to sustainability and innovation drives everything we do, from sourcing premium recycled polymers to implementing rigorous quality control processes that ensure every product meets the highest standards.
            </p>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/home.jpg"
              alt="About Noble Homeware"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Heritage Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Journey of Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1990</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Humble Beginnings</h4>
              <p className="text-gray-600">Started our journey in the polymer industry with a vision for quality and sustainability.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">30+</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Years of Excellence</h4>
              <p className="text-gray-600">Three decades of building trust and becoming India's most trusted polymer supplier.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">Now</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Noble Homeware</h4>
              <p className="text-gray-600">Extending our manufacturing expertise to deliver premium homeware products globally.</p>
            </div>
          </div>
        </div>

        {/* Director's Message Section */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Welcome to the Noble Homeware family. Let's build a more sustainable home together.
              </h3>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                When you partner with Noble Homeware, you're not just buying a product. You are gaining a direct link to the source. You are partnering with a family of specialists who understand quality from the molecule up.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are here to build a long-term, trusted relationship. We are here to deliver our legacy of excellence, one container at a time.
              </p>
              <p className="text-lg font-semibold text-blue-600">
                – Dr. Mohammed Tahir, Director of Operations
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/tahir.webp"
                  alt="Dr. Mohammed Tahir"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
