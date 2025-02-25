import React, { useContext, useEffect, useState } from 'react';
import { FarmerContext } from '../contexts/farmerContext';
import axios from 'axios';
import logo from '../pages/logo.png';


function ProfileFarmer() {
  const { farmer } = useContext(FarmerContext);
  const [profileData, setProfileData] = useState(null);
  const  [loader, setLoader] = useState(true);
  const [error,seterror]=useState('');
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/farmers/profile/${farmer.id}`);
        console.log('Response:', response);
        setLoader(false);
        setProfileData(response.data);
      } catch (error) {
        setLoader(false);
        seterror('No user profile found');
        console.error('Error fetching profile data:', error);
      }
    };

   fetchProfile();
  }, [farmer]);

  return (
    <div>
      {/* Loading Indicator */}
      {error && <div className='mt-16 text-red-500'>{error}</div>}
  
     {loader && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
              <div className="relative flex items-center justify-center">
                {/* Rotating Circle */}
                <div className="absolute w-20 h-20 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                
                {/* Logo (Slightly Bigger & Static) */}
                <img src={logo} alt="Loading" className="w-14 h-14" />
              </div>
            </div>
          )}
   
      <h1>Profile Farmer</h1>
      {profileData && (
        <div className='mt-16'>
          <h2>Name: {profileData.Name}</h2>
          <h2>Phone: {profileData.mobNumber}</h2>
          <h2>LiveStock: {profileData.livestock}</h2>
          <h2>Crop Type: {profileData.cropsDetails}</h2>
         
        </div>
      )}
    </div>
  );
}

export default ProfileFarmer;
