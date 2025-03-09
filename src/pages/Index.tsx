
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import cars from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Shield, Award, Clock } from "lucide-react";

const Index = () => {
  // Get only the first 4 cars for the homepage
  const featuredCars = cars.slice(0, 4);

  return (
    <main>
      <Hero />
      
      {/* Featured Cars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Featured Cars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our selection of meticulously maintained vehicles ready for your next journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/cars">
              <Button className="bg-brens-blue hover:bg-blue-800">
                View All Cars
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Brens Cars?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on providing exceptional service and reliable vehicles for all your transportation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-brens-blue mb-4">
                <Car className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Vehicles</h3>
              <p className="text-gray-600">
                Our fleet consists of well-maintained, late-model vehicles for a smooth riding experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-brens-blue mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">
                Peace of mind with comprehensive insurance coverage included in all our rentals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-brens-blue mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
              <p className="text-gray-600">
                Competitive pricing with no hidden fees. Transparent rates to fit your budget.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-brens-blue mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Customer support available around the clock to assist you whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-brens-blue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect car today and enjoy the freedom of the open road with Brens Cars.
          </p>
          <a 
            href="https://wa.me/1234567890?text=I'm%20interested%20in%20booking%20a%20car" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-brens-red hover:bg-red-700 text-lg px-8 py-6 h-auto">
              Book Now via WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Index;
