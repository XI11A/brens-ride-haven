
import { useState } from "react";
import CarCard from "@/components/CarCard";
import cars from "@/data/cars";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [maxPrice, setMaxPrice] = useState(150);

  // Extract unique categories
  const categories = ["all", ...new Set(cars.map(car => car.category))];

  // Filter cars based on search, category, and price
  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || car.category === categoryFilter;
    const matchesPrice = car.price <= maxPrice;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <main className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Our Car Fleet</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of quality vehicles perfect for any occasion. From economic options to luxury models.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="search">Search</Label>
              <Input 
                id="search"
                type="text" 
                placeholder="Search cars..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger id="category" className="mt-1">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <div className="flex justify-between">
                <Label htmlFor="price">Max Price: ${maxPrice}</Label>
              </div>
              <Slider 
                id="price"
                min={30} 
                max={150} 
                step={5} 
                value={[maxPrice]} 
                onValueChange={(value) => setMaxPrice(value[0])}
                className="mt-3"
              />
            </div>
          </div>
        </div>
        
        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No cars found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cars;
