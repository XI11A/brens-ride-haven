
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, DollarSign } from "lucide-react";

export interface CarProps {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  seats: number;
  transmission: string;
  fuelType: string;
}

const CarCard = ({ car }: { car: CarProps }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{car.name}</CardTitle>
            <CardDescription>{car.category}</CardDescription>
          </div>
          <div className="flex items-center text-brens-red font-semibold">
            <span>₹</span>
            <span>{car.price}</span>
            <span className="text-sm text-muted-foreground font-normal">/day</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center col-span-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-4 w-4 mr-2 text-gray-500"
            >
              <path d="M4 11V9c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2z" />
              <line x1="6" y1="17" x2="6" y2="17.1" />
              <line x1="18" y1="17" x2="18" y2="17.1" />
              <path d="M6 15v2" />
              <path d="M18 15v2" />
              <path d="M4 11h16" />
            </svg>
            <span>{car.fuelType}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a 
          href={`https://wa.me/919876543210?text=I'm%20interested%20in%20booking%20the%20${encodeURIComponent(car.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full bg-brens-blue hover:bg-blue-800">
            Book Now
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
