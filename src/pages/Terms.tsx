
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <main className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Brens Cars. These Terms and Conditions govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, please do not use our services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Reservation and Booking</h2>
            <p className="text-gray-700 mb-4">
              2.1. Booking a vehicle with Brens Cars constitutes a binding agreement subject to these Terms and Conditions.
            </p>
            <p className="text-gray-700 mb-4">
              2.2. A valid driver's license, credit card, and other identification documents are required at the time of vehicle pickup.
            </p>
            <p className="text-gray-700 mb-4">
              2.3. The primary renter must be at least 21 years of age and have held a valid driver's license for a minimum of one year.
            </p>
            <p className="text-gray-700 mb-4">
              2.4. Additional drivers must be present at the time of rental to sign the rental agreement and present a valid driver's license.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment and Fees</h2>
            <p className="text-gray-700 mb-4">
              3.1. Payment in full is required at the time of vehicle pickup.
            </p>
            <p className="text-gray-700 mb-4">
              3.2. A security deposit, which amount varies depending on the vehicle type, will be held against your credit card during the rental period.
            </p>
            <p className="text-gray-700 mb-4">
              3.3. Additional charges may apply for late returns, fuel replacement, cleaning fees (for excessive dirt), traffic violations, and damages not covered by insurance.
            </p>
            <p className="text-gray-700 mb-4">
              3.4. All rates and charges are subject to applicable taxes and fees as required by law.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Vehicle Usage</h2>
            <p className="text-gray-700 mb-4">
              4.1. The vehicle may only be driven by authorized drivers listed on the rental agreement.
            </p>
            <p className="text-gray-700 mb-4">
              4.2. The vehicle must not be used:
            </p>
            <ul className="list-disc ml-8 mb-4 text-gray-700">
              <li>For any illegal purpose</li>
              <li>To transport people or property for hire</li>
              <li>To push or tow any vehicle or trailer</li>
              <li>In any race, test, or competition</li>
              <li>Under the influence of alcohol, drugs, or any other substance that impairs driving ability</li>
              <li>Off established roads or in areas where driving is prohibited</li>
            </ul>
            <p className="text-gray-700 mb-4">
              4.3. The renter agrees to use the vehicle with due care and to return it in the same condition as when received, excluding normal wear and tear.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Insurance and Liability</h2>
            <p className="text-gray-700 mb-4">
              5.1. Basic insurance coverage is included in the rental price, subject to deductibles and exclusions outlined in the rental agreement.
            </p>
            <p className="text-gray-700 mb-4">
              5.2. Additional insurance options may be available for purchase at the time of rental.
            </p>
            <p className="text-gray-700 mb-4">
              5.3. The renter is responsible for any damage or loss to the vehicle not covered by the insurance policy.
            </p>
            <p className="text-gray-700 mb-4">
              5.4. Brens Cars assumes no responsibility for personal belongings left in the vehicle.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cancellations and Modifications</h2>
            <p className="text-gray-700 mb-4">
              6.1. Cancellations made more than 48 hours prior to the scheduled pickup time will receive a full refund.
            </p>
            <p className="text-gray-700 mb-4">
              6.2. Cancellations made less than 48 hours before the scheduled pickup time may be subject to a cancellation fee equivalent to one day's rental.
            </p>
            <p className="text-gray-700 mb-4">
              6.3. No-shows will be charged the full rental amount.
            </p>
            <p className="text-gray-700 mb-4">
              6.4. Modifications to reservations are subject to vehicle availability and may result in rate changes.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              7.1. Your use of our services is also governed by our Privacy Policy, which can be found on our website.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              8.1. Brens Cars reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              9.1. For questions regarding these Terms and Conditions, please contact us at:
            </p>
            <p className="text-gray-700 mb-4">
              Brens Cars<br />
              123 Rental Street<br />
              Car City, CC 12345<br />
              Phone: +1 (234) 567-8900<br />
              Email: info@brenscars.com
            </p>
          </section>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Have questions about our terms and conditions? Feel free to contact us.
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

export default Terms;
