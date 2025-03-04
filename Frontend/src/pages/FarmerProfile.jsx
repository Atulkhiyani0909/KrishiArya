import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Calendar, Award, Leaf, Users, ShoppingBag, ChevronDown, ChevronUp, X } from 'lucide-react';
import VerificationBadge from '../components/VerificationBadge';
import ProductCard from '../components/ProductCard';
import { mockFarmers, mockProducts } from '../data/mockData';
import { format } from 'date-fns';

const FarmerProfile = () => {
  const { id } = useParams();
  const [farmer, setFarmer] = useState(null);
  const [farmerProducts, setFarmerProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [loading, setLoading] = useState(true);
  const [expandedImage, setExpandedImage] = useState(null);
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    
    // Simulate API fetch
    setTimeout(() => {
      const foundFarmer = mockFarmers.find(f => f.id === id);
      if (foundFarmer) {
        setFarmer(foundFarmer);
        
        // Get products by this farmer
        const products = mockProducts.filter(p => p.farmer.id === id);
        setFarmerProducts(products);
      }
      setLoading(false);
    }, 300);
  }, [id]);

  // Scroll to top when farmer changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Scroll to section when tab changes
  useEffect(() => {
    if (activeTab === 'about' && aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab]);

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };
  
  const reviewsToShow = showAllReviews ? (farmer?.reviews || []) : (farmer?.reviews || []).slice(0, 3);
  const hasMoreReviews = (farmer?.reviews?.length || 0) > 3;

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-pulse w-full max-w-4xl">
          <div className="h-48 bg-gray-200 rounded-lg mb-6"></div>
          <div className="flex items-end mb-6">
            <div className="w-32 h-32 bg-gray-300 rounded-full mr-4"></div>
            <div className="flex-1">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/5"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!farmer) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-white p-8 rounded-lg shadow-md inline-block">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Farmer Not Found</h2>
          <p className="text-gray-600 mb-4">The farmer profile you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Return to marketplace</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        <span>Back to marketplace</span>
      </Link>
      
      {/* Farmer Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="h-48 sm:h-64 bg-gradient-to-r from-green-700 to-green-500 relative">
          {farmer.farmImages && farmer.farmImages.length > 0 && (
            <img 
              src={farmer.farmImages[0]} 
              alt={`${farmer.name}'s farm`} 
              className="w-full h-full object-cover opacity-30"
            />
          )}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="relative px-4 sm:px-8 pb-6 pt-16 sm:pt-20">
          <div className="absolute -top-16 left-4 sm:left-8 rounded-full border-4 border-white shadow-md overflow-hidden">
            <img 
              src={farmer.profileImage} 
              alt={farmer.name} 
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover"
            />
          </div>
          
          <div className="sm:flex justify-between items-end">
            <div>
              <div className="flex items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mr-2">{farmer.name}</h1>
                <VerificationBadge verified={farmer.verified} size="lg" showTooltip={true} />
              </div>
              
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{farmer.location}</span>
              </div>
              
              <div className="flex flex-wrap items-center mt-2 gap-4">
                <div className="flex items-center text-amber-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1 font-medium">{farmer.rating}</span>
                  <span className="ml-1 text-gray-600">({farmer.reviewCount} reviews)</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Joined {format(new Date(farmer.joinedDate), 'MMMM yyyy')}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md font-medium transition-colors">
                Contact Farmer
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Farmer Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <Award className="h-10 w-10 text-green-600 mr-3" />
            <div>
              <p className="text-gray-600 text-sm">Certification</p>
              <p className="font-semibold text-gray-800">{farmer.certification}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <Leaf className="h-10 w-10 text-green-600 mr-3" />
            <div>
              <p className="text-gray-600 text-sm">Farming Type</p>
              <p className="font-semibold text-gray-800">{farmer.farmingType}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <ShoppingBag className="h-10 w-10 text-green-600 mr-3" />
            <div>
              <p className="text-gray-600 text-sm">Products</p>
              <p className="font-semibold text-gray-800">{farmerProducts.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center">
            <Users className="h-10 w-10 text-green-600 mr-3" />
            <div>
              <p className="text-gray-600 text-sm">Happy Customers</p>
              <p className="font-semibold text-gray-800">{farmer.customerCount}+</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          <button 
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === 'products' 
                ? 'text-green-700 border-b-2 border-green-700' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button 
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === 'about' 
                ? 'text-green-700 border-b-2 border-green-700' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === 'reviews' 
                ? 'text-green-700 border-b-2 border-green-700' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({farmer.reviews?.length || 0})
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'products' && (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Products by {farmer.name}</h2>
              {farmerProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {farmerProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-600">No products available at the moment.</p>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'about' && (
            <div ref={aboutSectionRef}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About {farmer.name}</h2>
              <div className="prose max-w-none text-gray-600">
                <p>{farmer.bio}</p>
                
                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Farming Practices</h3>
                <p>{farmer.farmingPractices}</p>
                
                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Farm Location</h3>
                <p>{farmer.farmLocation}</p>
                
                {farmer.farmImages && farmer.farmImages.length > 0 && (
                  <>
                    <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Farm Images</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {farmer.farmImages.map((image, index) => (
                        <div 
                          key={index} 
                          className="rounded-lg overflow-hidden h-40 cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => handleImageClick(image)}
                        >
                          <img 
                            src={image} 
                            alt={`${farmer.name}'s farm`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
                
                <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Certification Details</h3>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <p>
                    {farmer.name} holds a <span className="font-medium">{farmer.certification}</span> certification, 
                    which verifies adherence to natural farming practices without the use of synthetic chemicals.
                    This certification was issued on {farmer.certificationDate} and is valid for 2 years.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Customer Reviews</h2>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.round(farmer.rating) ? 'fill-current' : ''}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-700">{farmer.rating} out of 5</span>
                </div>
              </div>
              
              {farmer.reviews && farmer.reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviewsToShow.map((review, index) => (
                    <div 
                      key={index} 
                      className="border-b border-gray-200 pb-6 last:border-0 animate-fadeIn"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-start">
                          <img 
                            src={review.userImage} 
                            alt={review.userName} 
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <p className="font-medium text-gray-800">{review.userName}</p>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? 'fill-current' : ''}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-3 text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                  
                  {hasMoreReviews && (
                    <button 
                      onClick={() => setShowAllReviews(!showAllReviews)}
                      className="flex items-center justify-center w-full py-2 text-green-700 hover:text-green-800 transition-colors"
                    >
                      {showAllReviews ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-1" />
                          <span>Show Less</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-1" />
                          <span>Show All Reviews</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <Star className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-600">No reviews yet.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Lightbox for farm images */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setExpandedImage(null)}
        >
          <button 
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <img 
            src={expandedImage} 
            alt="Farm view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default FarmerProfile;