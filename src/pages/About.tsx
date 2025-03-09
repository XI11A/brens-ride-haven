
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <main className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Brens Cars</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for self-drive car rentals. Quality vehicles, exceptional service.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Brens Cars story" 
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, Brens Cars started with a simple mission: to provide travelers and locals with reliable, affordable, and high-quality car rental services. What began as a small fleet of just five vehicles has now grown into one of the region's most trusted car rental services.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, Bren Johnson, identified a gap in the market for personalized car rental services that prioritized customer satisfaction and vehicle quality above all else. With a background in the automotive industry and a passion for exceptional service, Bren established the company on principles that continue to guide us today.
            </p>
            <p className="text-gray-700">
              Today, Brens Cars proudly serves thousands of customers annually, helping them create memorable journeys and seamless travel experiences with our premium vehicles and dedicated support.
            </p>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="bg-gray-50 rounded-xl p-8 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              These core principles guide everything we do at Brens Cars, ensuring we provide the best possible experience for our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brens-blue mb-3">Customer First</h3>
              <p className="text-gray-700">
                We prioritize customer satisfaction in every decision we make, striving to exceed expectations at every touchpoint.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brens-blue mb-3">Quality & Safety</h3>
              <p className="text-gray-700">
                We maintain the highest standards for our vehicles, ensuring they are reliable, clean, and safe for every journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-brens-blue mb-3">Transparency</h3>
              <p className="text-gray-700">
                We believe in clear communication and no hidden fees. What you see is what you pay.
              </p>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Our Customers Choose Us</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Here's what sets Brens Cars apart from other rental services in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-brens-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Premium Vehicles</h3>
                <p className="text-gray-700">
                  Our fleet consists of late-model, well-maintained vehicles from trusted manufacturers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-brens-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Flexible Booking</h3>
                <p className="text-gray-700">
                  Simple booking process with options to modify or cancel reservations when plans change.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-brens-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-gray-700">
                  Transparent rates with no hidden fees, providing excellent value for the quality we offer.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-brens-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Exceptional Support</h3>
                <p className="text-gray-700">
                  24/7 customer service to assist with any questions or concerns during your rental period.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-brens-blue text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience The Brens Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your perfect car today and discover why our customers keep coming back to Brens Cars.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/1234567890?text=I'm%20interested%20in%20booking%20a%20car" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-brens-red hover:bg-red-700 text-lg px-6 py-5 h-auto">
                Book Now
              </Button>
            </a>
            <Link to="/cars">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brens-blue text-lg px-6 py-5 h-auto">
                Explore Cars
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
