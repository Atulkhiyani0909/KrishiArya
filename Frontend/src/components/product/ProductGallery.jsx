import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

/**
 * Product gallery component with lightbox
 * 
 * @param {Object} props
 * @param {string} props.mainImage - Main product image URL
 * @param {string[]} [props.additionalImages=[]] - Additional product image URLs
 * @param {boolean} [props.isOrganic=false] - Whether the product is organic
 */
const ProductGallery = ({ 
  mainImage, 
  additionalImages = [],
  isOrganic = false
}) => {
  const [currentImage, setCurrentImage] = useState(mainImage);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const allImages = [mainImage, ...additionalImages];
  
  const handlePrevImage = () => {
    const currentIndex = allImages.indexOf(currentImage);
    const prevIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    setCurrentImage(allImages[prevIndex]);
  };
  
  const handleNextImage = () => {
    const currentIndex = allImages.indexOf(currentImage);
    const nextIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentImage(allImages[nextIndex]);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      handleNextImage();
    } else if (isRightSwipe) {
      handlePrevImage();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  return (
    <div className="relative">
      {/* Main Image */}
      <div 
        className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img 
          src={currentImage} 
          alt="Product" 
          className="w-full h-full object-cover"
        />
        
        {isOrganic && (
          <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            Organic
          </div>
        )}
        
        <button 
          onClick={() => setLightboxOpen(true)}
          className="absolute bottom-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="View full size"
        >
          <Maximize2 className="h-5 w-5" />
        </button>
        
        {allImages.length > 1 && (
          <>
            <button 
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button 
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      
      {/* Thumbnail Images */}
      {allImages.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-2">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(image)}
              className={`rounded-md overflow-hidden aspect-square ${
                currentImage === image 
                  ? 'ring-2 ring-green-600' 
                  : 'ring-1 ring-gray-200 hover:ring-gray-300'
              }`}
            >
              <img 
                src={image} 
                alt={`Product thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div 
            className="relative max-w-4xl max-h-[80vh]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentImage} 
              alt="Product full size" 
              className="max-w-full max-h-[80vh] object-contain"
            />
            
            {allImages.length > 1 && (
              <>
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnails in lightbox */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(image);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    currentImage === image ? 'bg-white' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;