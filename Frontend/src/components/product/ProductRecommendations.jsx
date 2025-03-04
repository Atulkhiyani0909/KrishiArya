import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Product recommendations component
 * 
 * @param {Object} props
 * @param {Array} props.products - List of recommended products
 */
const ProductRecommendations = ({ products }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Check if scrolling is needed and update arrow visibility
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  // Add scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
      
      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
    }
  }, [products]);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (products.length === 0) return null;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">You might also like</h2>
        
        {!isMobile && products.length > 3 && (
          <div className="flex space-x-2">
            <button 
              onClick={scrollLeft}
              className={`p-2 rounded-full border border-gray-300 ${
                showLeftArrow 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-gray-400 cursor-not-allowed'
              }`}
              disabled={!showLeftArrow}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollRight}
              className={`p-2 rounded-full border border-gray-300 ${
                showRightArrow 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-gray-400 cursor-not-allowed'
              }`}
              disabled={!showRightArrow}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
      
      <div 
        ref={scrollContainerRef}
        className={`${isMobile ? '' : 'overflow-x-auto scrollbar-hide -mx-4 px-4'}`}
      >
        <div className={isMobile 
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" 
          : "flex space-x-6"
        }>
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`} 
              className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 ${
                isMobile ? '' : 'w-72'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.organic && (
                  <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Organic
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <img 
                    src={product.farmer.profileImage} 
                    alt={product.farmer.name} 
                    className="w-5 h-5 rounded-full mr-1"
                  />
                  <span className="text-xs text-gray-600">{product.farmer.name}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-bold">₹{product.price}/{product.unit}</span>
                  <span className="text-xs text-gray-500">{product.distance} km</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;