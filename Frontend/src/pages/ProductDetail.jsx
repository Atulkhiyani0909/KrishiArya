import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import ProductGallery from '../components/product/ProductGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductDescription from '../components/product/ProductDescription';
import ProductRecommendations from '../components/product/ProductRecommendations';
import FarmerCard from '../components/product/FarmerCard';
import ProductTraceability from '../components/product/ProductTraceability';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(mockProducts.find(p => p.id === id) || null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Find product index for navigation
  const currentIndex = mockProducts.findIndex(p => p.id === id);
  
  // Load product data
  useEffect(() => {
    setLoading(true);
    
    // Simulate API fetch with timeout
    const timer = setTimeout(() => {
      const foundProduct = mockProducts.find(p => p.id === id);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get related products (same category, different product)
        const related = mockProducts
          .filter(p => p.categoryId === foundProduct.categoryId && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Navigate to previous/next product
  const navigateProduct = useCallback((direction) => {
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? mockProducts.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === mockProducts.length - 1 ? 0 : currentIndex + 1;
    }
    
    navigate(`/product/${mockProducts[newIndex].id}`);
  }, [currentIndex, navigate]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        navigateProduct('prev');
      } else if (e.key === 'ArrowRight') {
        navigateProduct('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateProduct]);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Return to marketplace</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="inline-flex items-center text-green-700 hover:text-green-800 text-sm">
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Back to marketplace</span>
            </Link>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => navigateProduct('prev')}
                className="p-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                aria-label="Previous product"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={() => navigateProduct('next')}
                className="p-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                aria-label="Next product"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Main Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Gallery */}
          <ProductGallery 
            mainImage={product.imageUrl} 
            additionalImages={product.additionalImages || []} 
            isOrganic={product.organic}
          />
          
          {/* Product Info */}
          <ProductInfo product={product} />
        </div>
      </section>
      
      {/* Product Description and Details */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProductDescription product={product} />
            </div>
            <div className="space-y-6">
              <FarmerCard farmer={product.farmer} />
              <ProductTraceability product={product} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <ProductRecommendations products={relatedProducts} />
        </section>
      )}
    </div>
  );
};

export default ProductDetail;