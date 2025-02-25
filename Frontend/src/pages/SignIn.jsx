import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import logo from '../pages/logo.png';
import { FarmerContext } from '../contexts/farmerContext';


export function SignIn() {
  const { t } = useTranslation();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { loginFarmer,farmer } = useContext(FarmerContext);
  const [formData, setFormData] = useState({
    mobNumber: '',
    password: ''
  });

  if(farmer){
    navigate('/profile');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const checkFarmer = {
      password: formData.password,
      mobNumber: formData.mobNumber,
    };
    console.log('Request Payload:', checkFarmer);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/farmers/login`, checkFarmer);
      console.log('Response:', response);
      setLoader(false);
      if (response.status === 200) {
        const data = response.data;
        console.log('Response Data:', data);
        

        // Store the farmer data in localStorage
        localStorage.setItem('farmerData', JSON.stringify(data));

        // Update the context
        loginFarmer(data);

        navigate('/services'); // Navigate to the next page
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error Response:', error.response);
      setLoader(false);
    }

    // Reset form data after submission
    setFormData({
      mobNumber: '',
      password: '',
    });
  };

  return (
   
    <>

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
      
      <div className="min-h-screen bg-gradient-to-br from-white to-green-50 px-4 py-8 pt-24">
        <div className="container mx-auto max-w-7xl">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16a34a] mb-8 text-center">{t('signin.title')}</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{t('signin.Phone')}</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 sm:px-4 rounded-l-xl border-2 border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm sm:text-base font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="flex-1 px-3 sm:px-4 py-3 rounded-r-xl border-2 border-gray-200 focus:border-[#16a34a] focus:ring focus:ring-green-200 transition-colors text-sm sm:text-base"
                    value={formData.mobNumber}
                    onChange={(e) => setFormData({ ...formData, mobNumber: e.target.value })}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{t('signin.PhoneFormat')}</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{t('signin.password')}</label>
                <input
                  type="password"
                  required
                  className="block w-full px-3 sm:px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16a34a] focus:ring focus:ring-green-200 transition-colors text-sm sm:text-base"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 sm:py-4 px-6 rounded-full text-white bg-[#16a34a] hover:bg-[#15803d] font-semibold text-base sm:text-lg shadow-lg shadow-green-200 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2"
              >
                {t('signin.Submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}