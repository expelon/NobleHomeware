import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
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
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Your privacy is important to us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Noble Homeware ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company information (if applicable)</li>
                <li>Product preferences and requirements</li>
                <li>Delivery preferences and terms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed">
                We may automatically collect certain information when you visit our website, including IP address, browser type, device information, and browsing behavior.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process and respond to your quote requests</li>
                <li>Provide customer support and service</li>
                <li>Send you product information and updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>With your consent for specific purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:sales@noblehomeware.com" className="text-blue-600 hover:text-blue-700">
                    sales@noblehomeware.com
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+919686205948" className="text-blue-600 hover:text-blue-700">
                    +91 9686205948
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Coimbatore, Tamil Nadu, India
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
