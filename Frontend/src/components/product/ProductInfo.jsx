import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Truck, ShoppingBag, Calendar, Heart, Share2, AlertCircle } from 'lucide-react';
import VerificationBadge from '../VerificationBadge';

/**
 * Product information component
 * 
 * @param {Object} props
 * @param {Object} props.product - Product data
 */
const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  
  const handleAddToCart = () => {
    // Add to cart logic would go here
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };
  
  const handleBuyNow = () => {
    // Buy now logic would go here
    console.log('Buy now:', product.name, 'Quantity:', quantity);
  };
  
  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };
  
  const toggleShareMenu = (e) => {
    e.preventDefault();
    setIsShareMenuOpen(!isShareMenuOpen);
  };
  
  const shareProduct = (platform) => {
    console.log(`Sharing product on ${platform}`);
    setIsShareMenuOpen(false);
  };
  
  // Close share menu when clicking outside
  useEffect(() => {
    if (!isShareMenuOpen) return;
    
    const handleClickOutside = () => setIsShareMenuOpen(false);
    document.addEventListener('click', handleClickOutside);
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isShareMenuOpen]);
  
  return (
    <div className="flex flex-col h-full">
      {/* Product Title and Farmer */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
        
        <Link to={`/farmer/${product.farmer.id}`} className="flex items-center group mb-4">
          <img 
            src={product.farmer.profileImage} 
            alt={product.farmer.name} 
            className="w-8 h-8 rounded-full mr-2 border-2 border-white shadow-sm"
          />
          <span className="text-gray-700 group-hover:text-green-700 transition-colors">
            {product.farmer.name}
          </span>
          <VerificationBadge verified={product.farmer.verified} showTooltip={true} />
        </Link>
      </div>
      
      {/* Price and Location */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-2">
        <div>
          <div className="text-3xl font-bold text-gray-900">₹{product.price}<span className="text-lg font-medium text-gray-600">/{product.unit}</span></div>
          {product.stock < 10 && (
            <div className="text-amber-600 text-sm mt-1 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              Only {product.stock} {product.unit}s left
            </div>
          )}
        </div>
        <div className="flex items-center text-gray-600 text-sm bg-gray-100 px-3 py-1.5 rounded-full">
          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
          <span>{product.distance} km away</span>
        </div>
      </div>
      
      {/* Short Description */}
      <p className="text-gray-600 mb-6">{product.description}</p>
      
      {/* Product Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
          <Calendar className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Harvested</p>
            <p className="text-sm font-medium">{product.harvestedDate}</p>
          </div>
        </div>
        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
          <Truck className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Delivery</p>
            <p className="text-sm font-medium">1-2 days</p>
          </div>
        </div>
        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
          <ShoppingBag className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Available</p>
            <p className="text-sm font-medium">{product.stock} {product.unit}s</p>
          </div>
        </div>
        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
          <div className="h-5 w-5 text-green-600 mr-3 flex-shrink-0">🌱</div>
          <div>
            <p className="text-xs text-gray-500">Type</p>
            <p className="text-sm font-medium">{product.organic ? 'Organic' : 'Natural'}</p>
          </div>
        </div>
      </div>
      
      {/* Quantity Selector */}
      <div className="mb-6">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center">
          <div className="flex items-center border border-gray-300 rounded-md mr-4">
            <button 
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))}
              className="w-12 text-center border-0 focus:ring-0"
              min="1"
              max={product.stock}
            />
            <button 
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <span className="text-gray-600 text-sm">{product.unit}s</span>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-auto">
        <button 
          onClick={handleAddToCart}
          className="flex-1 min-w-[120px] bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Add to Cart
        </button>
        <button 
          onClick={handleBuyNow}
          className="flex-1 min-w-[120px] bg-green-100 hover:bg-green-200 text-green-800 py-3 px-6 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Buy Now
        </button>
        <button 
          onClick={toggleFavorite}
          className={`p-3 border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isFavorite 
              ? 'border-red-300 bg-red-50 text-red-500 focus:ring-red-500' 
              : 'border-gray-300 text-gray-600 hover:bg-gray-100 focus:ring-gray-500'
          }`}
          aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        <div className="relative">
          <button 
            onClick={toggleShareMenu}
            className="p-3 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Share product"
          >
            <Share2 className="h-5 w-5" />
          </button>
          
          {isShareMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <button 
                  onClick={() => shareProduct('facebook')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Facebook
                </button>
                <button 
                  onClick={() => shareProduct('twitter')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Twitter
                </button>
                <button 
                  onClick={() => shareProduct('whatsapp')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  WhatsApp
                </button>
                <button 
                  onClick={() => shareProduct('email')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Email
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 bg-green-700 text-white px-4 py-3 rounded-lg shadow-lg flex items-center z-50 animate-fadeIn">
          <ShoppingBag className="h-5 w-5 mr-2" />
          <span>Added to cart!</span>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;