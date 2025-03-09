
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Car } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-brens-blue" />
            <span className="text-xl font-bold text-brens-blue">Brens Cars</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brens-blue font-medium transition-colors">
              Home
            </Link>
            <Link to="/cars" className="text-gray-700 hover:text-brens-blue font-medium transition-colors">
              Cars
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brens-blue font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brens-blue font-medium transition-colors">
              Contact
            </Link>
            <a href="https://wa.me/1234567890?text=I'm%20interested%20in%20booking%20a%20car" 
               target="_blank"
               rel="noopener noreferrer" 
               className="flex items-center">
              <Button className="bg-brens-red hover:bg-red-700 text-white flex items-center gap-2">
                <Phone size={16} />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-brens-blue font-medium" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/cars" className="text-gray-700 hover:text-brens-blue font-medium" onClick={toggleMenu}>
                Cars
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-brens-blue font-medium" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-brens-blue font-medium" onClick={toggleMenu}>
                Contact
              </Link>
              <a href="https://wa.me/1234567890?text=I'm%20interested%20in%20booking%20a%20car" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-full"
                 onClick={toggleMenu}>
                <Button className="w-full bg-brens-red hover:bg-red-700 text-white flex items-center justify-center gap-2">
                  <Phone size={16} />
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
