
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-brens-blue to-blue-900 text-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Drive Your Way with Premium Self-Rental Cars
            </h1>
            <p className="text-lg text-gray-200">
              Experience the freedom of the road with Brens Cars. Quality vehicles, competitive rates, and exceptional service across Chennai and Tamil Nadu.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brens-red mr-2" />
                <span>No hidden fees, transparent pricing</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brens-red mr-2" />
                <span>24/7 roadside assistance across Tamil Nadu</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-brens-red mr-2" />
                <span>Sanitized vehicles with regular maintenance</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://wa.me/919876543210?text=I'm%20interested%20in%20booking%20a%20car" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <Button className="bg-brens-red hover:bg-red-700 text-white">
                  Book Now
                </Button>
              </a>
              <Link to="/cars">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brens-blue">
                  View Cars
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Premium rental car" 
              className="rounded-lg shadow-xl object-cover h-[400px] w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
    </div>
  );
};

export default Hero;
