import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-screen w-full overflow-hidden">
        <Navbar isSticky={false} isTransparent={true} />
        
        {/* Hero Section */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/about-hero.webp")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight md:leading-normal">Woven from Legacy, Built for the Future.<br />A Foundation Forged in 1990</h1>
              <p className="text-xl max-w-3xl mx-auto">Discover three decades of excellence in India's plastic products industry</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Noble Homeware Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Us</h2>
              <p className="text-lg text-blue-600 font-semibold mb-4">
                We are the experts behind the Industry experts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Noble Homeware delivers premium homeware with 30+ years of polymer excellence. Our plastic science expertise sets industry standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Based in Coimbatore, we provide B2B partners with durable, safe, valuable products. Sustainability drives our operations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For the last three decades, our family has been at the heart of India's plastic products industry. From humble beginnings in 1990, we grew to become one of India's most trusted suppliers of high-grade virgin and recycled polymers. We've dedicated our lives to the cycle of renewal, transforming discarded materials into valuable resources for manufacturers across the nation. This isn't just our business; it's our heritage.
              </p>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/home3.webp"
                alt="About Noble Homeware"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-base md:text-2xl text-white/95 leading-relaxed mb-8">
              We saw this deep, hands-on knowledge of material science as our greatest strength. We asked a simple question: If we create the very building blocks of quality plasticware, why not craft the finished products ourselves? This vision gave birth to Noble Homeware. We are the next level of our family's legacy, created to take our deep industry expertise directly to the global market.
            </p>
            <p className="text-base md:text-lg text-white/90 font-semibold mb-10">
              – Team Noble Homeware
            </p>
            <a
              href="/products"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              View Products
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      </div>

      {/* Director's Message Section - Full width below heritage timeline */}
      <section className="w-full bg-[#7f8095]">
        <div className="pl-6 sm:pl-8 lg:pl-16 pr-4 sm:pr-6 lg:pr-0 pt-4 md:pt-6 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 items-center">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1f1b2d] leading-tight mt-4 md:mt-0">
                Welcome to the Noble Homeware family. Let's build a more sustainable home together.
              </h3>
              <div className="space-y-4 text-white/90 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
                <p>
                  When you partner with Noble Homeware, you're not just buying a product. You are gaining a direct link to the source. You are partnering with a family of specialists who understand quality from the molecule up.
                </p>
                <p>
                  We are here to build a long-term, trusted relationship. We are here to deliver our legacy of excellence, one container at a time.
                </p>
              </div>
              <p className="text-white text-sm md:text-base italic">– Dr. Mohammed Tahir, Director of Operations</p>
            </div>

            <div className="relative w-full h-[380px] md:h-[450px] lg:h-[520px] flex justify-center lg:justify-end pr-0 lg:-mr-6">
              <Image
                src="/tahir.webp"
                alt="Dr. Mohammed Tahir"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
