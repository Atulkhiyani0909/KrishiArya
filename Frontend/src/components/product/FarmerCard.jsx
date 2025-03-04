import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, MessageCircle } from 'lucide-react';
import VerificationBadge from '../VerificationBadge';

/**
 * Farmer card component for product detail page
 * 
 * @param {Object} props
 * @param {Object} props.farmer - Farmer data
 */
const FarmerCard = ({ farmer }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">About the Farmer</h2>
        
        <Link to={`/farmer/${farmer.id}`} className="flex items-start group">
          <img 
            src={farmer.profileImage} 
            alt={farmer.name} 
            className="w-12 h-12 rounded-full mr-3 border-2 border-white shadow-sm"
          />
          <div>
            <div className="flex items-center">
              <span className="font-medium text-gray-800 group-hover:text-green-700 transition-colors">
                {farmer.name}
              </span>
              <VerificationBadge verified={farmer.verified} showTooltip={true} />
            </div>
            
            <div className="flex items-center mt-1 text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 text-xs text-gray-600">(120+ reviews)</span>
            </div>
            
            <div className="flex items-center mt-1 text-gray-600 text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </Link>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>
            I have been practicing natural farming for over 15 years, growing a variety of 
            seasonal vegetables and fruits without any chemical inputs.
          </p>
        </div>
        
        <div className="mt-4 flex space-x-3">
          <Link 
            to={`/farmer/${farmer.id}`}
            className="flex-1 bg-white border border-green-700 text-green-700 hover:bg-green-50 text-center py-2 px-4 rounded-md text-sm font-medium transition-colors"
          >
            View Profile
          </Link>
          <button className="flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
            <MessageCircle className="h-4 w-4 mr-1" />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerCard;