import React, { useRef, useEffect, useState } from 'react';

/**
 * Category filter component
 * 
 * @param {Object} props
 * @param {Array} props.categories - List of categories
 * @param {string|null} props.selectedCategory - Currently selected category ID
 * @param {Function} props.onSelectCategory - Function to call when a category is selected
 */
const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-4">
      {/* Left scroll arrow */}
      {showLeftArrow && (
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 ml-1"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      
      {/* Right scroll arrow */}
      {showRightArrow && (
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full p-2 mr-1"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
      
      {/* Scrollable container */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide px-4 py-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex space-x-3 min-w-max">
          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === null
                ? 'bg-green-100 text-green-800'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => onSelectCategory(null)}
          >
            <span className="text-2xl mb-1">🌱</span>
            <span className="text-sm font-medium">All</span>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex flex-col items-center px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-100 text-green-800'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => onSelectCategory(category.id)}
            >
              <span className="text-2xl mb-1">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;