import React, { useState } from 'react';
import { QrCode, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

/**
 * Product traceability component
 * 
 * @param {Object} props
 * @param {Object} props.product - Product data
 */
const ProductTraceability = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Generate a fake traceability code
  const traceabilityCode = `NF-${Math.random().toString(36).substring(2, 10).toUpperCase()}-${Date.now().toString().slice(-6)}`;
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Product Traceability</h2>
          <QrCode className="h-5 w-5 text-green-700" />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">Traceability Code</div>
            <div className="font-mono text-sm font-medium">{traceabilityCode}</div>
          </div>
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
        >
          <span>View Traceability Details</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        
        {isExpanded && (
          <div className="mt-4 space-y-4 text-sm">
            <div className="relative pl-6 pb-4 border-l-2 border-green-200">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div className="font-medium text-gray-800">Harvested</div>
              <div className="text-gray-600">{product.harvestedDate}</div>
              <div className="text-gray-600 mt-1">
                Harvested by {product.farmer.name} using sustainable practices
              </div>
            </div>
            
            <div className="relative pl-6 pb-4 border-l-2 border-green-200">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div className="font-medium text-gray-800">Quality Check</div>
              <div className="text-gray-600">{product.harvestedDate.split(' ')[0]} 16, 2024</div>
              <div className="text-gray-600 mt-1">
                Passed quality inspection for freshness and organic standards
              </div>
            </div>
            
            <div className="relative pl-6">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-green-600 flex items-center justify-center">
                <CheckCircle className="h-3 w-3 text-white" />
              </div>
              <div className="font-medium text-gray-800">Ready for Delivery</div>
              <div className="text-gray-600">{product.harvestedDate.split(' ')[0]} 17, 2024</div>
              <div className="text-gray-600 mt-1">
                Packaged using eco-friendly materials and prepared for delivery
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTraceability;