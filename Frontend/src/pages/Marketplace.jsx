import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { Filter, MapPin, SlidersHorizontal, Search } from 'lucide-react';
import { mockProducts, mockCategories } from '../data/mockData';

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [organicOnly, setOrganicOnly] = useState(false);
  const [maxDistance, setMaxDistance] = useState(null);

  // Apply filters when dependencies change
  useEffect(() => {
    let result = [...mockProducts];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.categoryId === selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply organic filter
    if (organicOnly) {
      result = result.filter(product => product.organic);
    }
    
    // Apply distance filter
    if (maxDistance !== null) {
      result = result.filter(product => product.distance <= maxDistance);
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, priceRange, organicOnly, maxDistance]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is already applied via useEffect
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    setPriceRange([0, 500]);
    setOrganicOnly(false);
    setMaxDistance(null);
    setIsFilterOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Natural Farming Marketplace</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <form onSubmit={handleSearch} className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </form>
          
          <button 
            className="flex items-center text-sm text-gray-600 hover:text-green-700 bg-white py-2 px-3 rounded-lg shadow-sm"
            onClick={() => setMaxDistance(maxDistance === 10 ? null : 10)}
          >
            <MapPin className="h-4 w-4 mr-1" />
            <span>{maxDistance === 10 ? 'Any Distance' : 'Near Me'}</span>
          </button>
          
          <button 
            className="flex items-center text-sm text-gray-600 hover:text-green-700 bg-white py-2 px-3 rounded-lg shadow-sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal className="h-4 w-4 mr-1" />
            <span>Filters</span>
          </button>
        </div>
      </div>
      
      {/* Advanced Filters */}
      {isFilterOpen && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (₹)
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm font-medium">₹{priceRange[1]}</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Type
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="organicOnly"
                  checked={organicOnly}
                  onChange={(e) => setOrganicOnly(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="organicOnly" className="ml-2 text-sm text-gray-700">
                  Organic Only
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Distance
              </label>
              <select
                value={maxDistance || ''}
                onChange={(e) => setMaxDistance(e.target.value ? parseInt(e.target.value) : null)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
              >
                <option value="">Any distance</option>
                <option value="5">Within 5 km</option>
                <option value="10">Within 10 km</option>
                <option value="25">Within 25 km</option>
                <option value="50">Within 50 km</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <button
              onClick={resetFilters}
              className="text-gray-600 hover:text-gray-800 text-sm mr-4"
            >
              Reset Filters
            </button>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow mb-8">
        <CategoryFilter 
          categories={mockCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <Filter className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">Try changing your filters or check back later for new products.</p>
          <button 
            onClick={resetFilters}
            className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md text-sm font-medium transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Marketplace;