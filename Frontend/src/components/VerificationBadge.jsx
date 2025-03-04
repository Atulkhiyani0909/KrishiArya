import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

/**
 * Verification badge component
 * 
 * @param {Object} props
 * @param {boolean} props.verified - Whether the entity is verified
 * @param {string} [props.size='md'] - Size of the badge (sm, md, lg)
 * @param {boolean} [props.showTooltip=false] - Whether to show tooltip on hover
 */
const VerificationBadge = ({ 
  verified, 
  size = 'md',
  showTooltip = false 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  if (!verified) return null;

  return (
    <div className="relative inline-flex group">
      <CheckCircle className={`${sizeClasses[size]} text-green-600 ml-1`} />
      
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
          <div className="bg-gray-800 text-white text-xs rounded p-2 shadow-lg">
            <div className="flex items-start">
              <Info className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Verified Natural Farmer</p>
                <p>This farmer follows certified natural farming practices and has been verified by our team.</p>
              </div>
            </div>
          </div>
          <div className="w-3 h-3 bg-gray-800 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
        </div>
      )}
    </div>
  );
};

export default VerificationBadge;