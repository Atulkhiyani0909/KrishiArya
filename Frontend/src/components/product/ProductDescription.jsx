import React, { useState } from 'react';

/**
 * Product description component with tabbed interface
 * 
 * @param {Object} props
 * @param {Object} props.product - Product data
 */
const ProductDescription = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        <button 
          className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
            activeTab === 'description' 
              ? 'text-green-700 border-b-2 border-green-700' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button 
          className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
            activeTab === 'farming' 
              ? 'text-green-700 border-b-2 border-green-700' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('farming')}
        >
          Farming Practices
        </button>
        <button 
          className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
            activeTab === 'storage' 
              ? 'text-green-700 border-b-2 border-green-700' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('storage')}
        >
          Storage & Handling
        </button>
      </div>
      
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">About this product</h2>
            <p className="text-gray-600">{product.longDescription}</p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Benefits</h3>
            <ul className="text-gray-600 list-disc pl-5 space-y-1">
              <li>Grown using natural farming methods without chemical pesticides or fertilizers</li>
              <li>Higher nutritional value compared to conventionally grown produce</li>
              <li>Supports local farmers and sustainable agriculture</li>
              <li>Better taste and freshness due to local sourcing</li>
            </ul>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Nutritional Value</h3>
            <p className="text-gray-600">
              Natural farming methods preserve the nutritional integrity of the produce, 
              resulting in higher levels of vitamins, minerals, and antioxidants. 
              Studies have shown that organically grown produce can contain up to 69% more 
              key antioxidants than conventionally grown alternatives.
            </p>
          </div>
        )}
        
        {activeTab === 'farming' && (
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Natural Farming Practices</h2>
            <p className="text-gray-600">{product.farmingPractices}</p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Our Commitment</h3>
            <p className="text-gray-600">
              We are committed to promoting farming practices that work in harmony with nature. 
              Our farmers use traditional knowledge combined with modern sustainable techniques 
              to grow food that's better for you and better for the planet.
            </p>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">No Chemical Inputs</h4>
                <p className="text-sm text-gray-600">
                  We never use synthetic fertilizers, pesticides, herbicides, or fungicides 
                  in our farming practices.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Soil Health</h4>
                <p className="text-sm text-gray-600">
                  We prioritize building healthy soil through composting, mulching, 
                  and other natural methods that increase soil biodiversity.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Water Conservation</h4>
                <p className="text-sm text-gray-600">
                  We use efficient irrigation methods and rainwater harvesting 
                  to minimize water usage.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Biodiversity</h4>
                <p className="text-sm text-gray-600">
                  We maintain diverse plantings and habitat areas to support 
                  beneficial insects and natural pest control.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'storage' && (
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Storage Instructions</h2>
            <p className="text-gray-600">{product.storageInstructions}</p>
            
            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Handling Tips</h3>
            <ul className="text-gray-600 list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Washing:</span> Rinse thoroughly under cool running water just before use, not before storage.
              </li>
              <li>
                <span className="font-medium">Preparation:</span> Use a clean cutting board and knife to prevent cross-contamination.
              </li>
              <li>
                <span className="font-medium">Consumption:</span> For maximum nutritional benefits, consume within 3-5 days of purchase.
              </li>
            </ul>
            
            <div className="mt-6 p-4 border border-amber-200 bg-amber-50 rounded-lg">
              <h4 className="font-medium text-amber-800 mb-2">Important Note</h4>
              <p className="text-sm text-gray-600">
                Natural produce may have a shorter shelf life than conventionally grown produce 
                due to the absence of preservative chemicals. This is a sign of its freshness and purity.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;