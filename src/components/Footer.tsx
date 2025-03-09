
import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brens-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">Brens Cars</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Premium self-drive car rental service. Quality vehicles for your comfort and convenience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-brens-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-brens-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-brens-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-white transition-colors">Cars</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@brenscars.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Rental Street, Car City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Brens Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
