
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <main className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              At Brens Cars, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our car rental services.
            </p>
            <p className="text-gray-700 mb-4">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect several types of information from and about users of our website and services, including:
            </p>
            <ul className="list-disc ml-8 mb-4 text-gray-700">
              <li>Personal identifiable information: name, postal address, email address, telephone number, date of birth, driver's license details, payment information, and any other information you provide when booking a vehicle or communicating with us.</li>
              <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
              <li>Vehicle usage information, including GPS location data, if applicable.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Collect Information</h2>
            <p className="text-gray-700 mb-4">
              We collect information in the following ways:
            </p>
            <ul className="list-disc ml-8 mb-4 text-gray-700">
              <li>Direct interactions: when you provide information by filling in forms, creating an account, making a booking, or corresponding with us.</li>
              <li>Automated technologies: as you navigate through our website, we may automatically collect technical data about your equipment, browsing actions, and patterns.</li>
              <li>Third parties: we may receive information about you from various third parties, such as business partners, analytics providers, and search information providers.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect about you to:
            </p>
            <ul className="list-disc ml-8 mb-4 text-gray-700">
              <li>Process and manage your car rental bookings.</li>
              <li>Verify your identity and eligibility to rent vehicles.</li>
              <li>Process payments and manage your account.</li>
              <li>Provide customer support and respond to your requests.</li>
              <li>Send administrative information, such as updates to our terms, conditions, and policies.</li>
              <li>With your consent, send marketing communications about our products, services, and promotions.</li>
              <li>Analyze usage patterns and improve our website and services.</li>
              <li>Protect our rights, property, and safety, and the rights, property, and safety of others.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclosure of Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may disclose personal information that we collect or you provide:
            </p>
            <ul className="list-disc ml-8 mb-4 text-gray-700">
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              <li>To enforce our rights arising from any contracts entered into between you and us.</li>
              <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Brens Cars, our customers, or others.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
            </p>
            <p className="text-gray-700 mb-4">
              The safety and security of your information also depends on you. We urge you to be careful about giving out information in public areas of the website. The information you share in public areas may be viewed by any user of the website.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc ml-8 mb-4 text-gray-700">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right of rectification – the right to have your information corrected if it is inaccurate or incomplete.</li>
              <li>The right to object to our processing of your personal data.</li>
              <li>The right of restriction – the right to request that we restrict the processing of your personal information.</li>
              <li>The right to data portability – the right to be provided with a copy of your personal data in a structured, machine-readable format.</li>
              <li>The right to withdraw consent – the right to withdraw your consent at any time where we relied on your consent to process your personal information.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our website and services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this website or through any of its features.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Our Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. If we make material changes, we will notify you by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              To ask questions or comment about this Privacy Policy and our privacy practices, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
              Brens Cars<br />
              123 Rental Street<br />
              Car City, CC 12345<br />
              Phone: +1 (234) 567-8900<br />
              Email: privacy@brenscars.com
            </p>
          </section>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Have questions about our privacy practices? Feel free to contact us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-brens-blue hover:bg-blue-800">
                Contact Us
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-brens-blue text-brens-blue hover:bg-brens-blue hover:text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Policy;
