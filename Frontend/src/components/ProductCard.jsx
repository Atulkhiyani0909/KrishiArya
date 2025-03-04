import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingCart } from 'lucide-react';

/**
 * Product card component
 * 
 * @param {Object} props
 * @param {Object} props.product - Product data
 */
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation
    console.log('Added to cart:', product.name);
    // Implement cart functionality
  };
  
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
          />
          {product.organic && (
            <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              Organic
            </span>
          )}
          
          {/* Quick add to cart button */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
            <button 
              onClick={handleAddToCart}
              className="w-full bg-white text-green-700 hover:bg-green-50 py-1.5 rounded-md text-sm font-medium flex items-center justify-center"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </button>
          </div>
        </div>
        
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">{product.name}</h3>
          
          <div className="flex items-center mb-2">
            <img 
              src={product.farmer.profileImage} 
              alt={product.farmer.name} 
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-sm text-gray-600 flex items-center">
              {product.farmer.name}
              {product.farmer.verified && (
                <CheckCircle className="h-4 w-4 text-green-600 ml-1" />
              )}
            </span>
          </div>
          
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center mt-auto">
            <span className="text-green-700 font-bold">₹{product.price}/{product.unit}</span>
            <span className="text-xs text-gray-500">{product.distance} km away</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;