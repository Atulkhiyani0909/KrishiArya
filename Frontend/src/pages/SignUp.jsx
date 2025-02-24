import React, { useState, useContext, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../pages/logo.png';
import { FarmerContext } from '../contexts/farmerContext';

export function SignUp() {
  const { t } = useTranslation();
  const { loginFarmer } = useContext(FarmerContext);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const dummyData = {
    livestockOptions: [t('Cows'), t('Sheep'), t('Goats'), t('Chickens')],
    cropOptions: [t('Wheat'), t('Corn'), t('Rice'), t('Soybeans')],
  };

  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    name: '',
    crops: [],
    livestock: []
  });

  const [dropdownStates, setDropdownStates] = useState({
    livestock: false,
    crops: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const newFarmer = {
      Name: formData.name,
      livestock: formData.livestock,
      password: formData.password,
      mobNumber: formData.phone,
      cropsDetails: formData.crops,
    };

    console.log('Request Payload:', newFarmer);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/farmers/register`, newFarmer);

      if (response.status === 201) {
        const data = response.data;
        console.log('Response Data:', data);
        setLoader(false);

        // Store the farmer data in localStorage
        localStorage.setItem('farmerData', JSON.stringify(data));

        // Update the context
        loginFarmer(data);

        navigate('/services'); // Navigate to the next page
      }
    } catch (error) {
      console.error('Error Response:', error.response);
      setLoader(false);
    }

    // Reset form data after submission
    setFormData({
      phone: '',
      password: '',
      name: '',
      crops: [],
      livestock: [],
    });
  };

  const toggleDropdown = (field) => {
    setDropdownStates(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleOptionSelect = (field, option) => {
    setFormData(prev => {
      const currentSelections = prev[field];
      const newSelections = currentSelections.includes(option)
        ? currentSelections.filter(item => item !== option)
        : [...currentSelections, option];
      return { ...prev, [field]: newSelections };
    });
  };

  const removeSelection = (field, option) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter(item => item !== option)
    }));
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16a34a] mb-8 text-center">{t('signup.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{t('signup.Name')}</label>
                <input
                  type="text"
                  placeholder='Rahul Kumar'
                  required
                  className="block w-full px-3 sm:px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16a34a] focus:ring focus:ring-green-200 transition-colors text-sm sm:text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{t('signup.Phone_Number')}</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 sm:px-4 rounded-l-xl border-2 border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm sm:text-base font-medium">
                    +91
                  </span>
                  <input
                    placeholder='8694567412'
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="flex-1 px-3 sm:px-4 py-3 rounded-r-xl border-2 border-gray-200 focus:border-[#16a34a] focus:ring focus:ring-green-200 transition-colors text-sm sm:text-base"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <p className="text-sm text-gray-500">{t('signup.Format')}</p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{t('signup.LiveStock')}</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown('livestock')}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-left flex justify-between items-center focus:border-[#16a34a] focus:ring focus:ring-green-200 transition-colors"
                  >
                    <span className="text-gray-700 text-sm sm:text-base">
                      {formData.livestock.length > 0 
                        ? formData.livestock.join(', ') 
                        : t('signup.LiveStock')}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${dropdownStates.livestock ? 'transform rotate-180' : ''}`} />
                  </button>
                  {dropdownStates.livestock && (
                    <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto">
                      {dummyData.livestockOptions.map((option, index) => (
                        <div
                          key={index}
                          onClick={() => handleOptionSelect('livestock', option)}
                          className={`px-4 py-2 cursor-pointer hover:bg-green-50 flex justify-between items-center ${
                            formData.livestock.includes(option) ? 'bg-green-50' : ''
                          }`}
                        >
                          <span className="text-sm sm:text-base">{option}</span>
                          {formData.livestock.includes(option) && (
                            <X className="h-4 w-4 text-[#16a34a]" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {formData.livestock.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.livestock.map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 text-[#16a34a]"
                        >
                          {item}
                          <X
                            className="h-4 w-4 ml-2 cursor-pointer"
                            onClick={() => removeSelection('livestock', item)}
                          />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{t('signup.Crops')}</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown('crops')}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-left flex justify-between items-center focus:border-[#16a34a] focus:ring focus:ring-green-200 transition-colors"
                  >
                    <span className="text-gray-700 text-sm sm:text-base">
                      {formData.crops.length > 0 
                        ? formData.crops.join(', ') 
                        : t('signup.Crops')}
                    </span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${dropdownStates.crops ? 'transform rotate-180' : ''}`} />
                  </button>
                  {dropdownStates.crops && (
                    <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto">
                      {dummyData.cropOptions.map((option, index) => (
                        <div
                          key={index}
                          onClick={() => handleOptionSelect('crops', option)}
                          className={`px-4 py-2 cursor-pointer hover:bg-green-50 flex justify-between items-center ${
                            formData.crops.includes(option) ? 'bg-green-50' : ''
                          }`}
                        >
                          <span className="text-sm sm:text-base">{option}</span>
                          {formData.crops.includes(option) && (
                            <X className="h-4 w-4 text-[#16a34a]" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {formData.crops.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formData.crops.map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 text-[#16a34a]"
                        >
                          {item}
                          <X
                            className="h-4 w-4 ml-2 cursor-pointer"
                            onClick={() => removeSelection('crops', item)}
                          />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-6">
              <label className="block text-sm font-semibold text-gray-700">{t('signup.Password')}</label>
              <input
                type="password"
                required
                placeholder='Enter password'
                className="block w-full px-3 sm:px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16a34a] focus:ring focus:ring-green-200 transition-colors text-sm sm:text-base"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 sm:py-4 px-6 rounded-full text-white bg-[#16a34a] hover:bg-[#15803d] font-semibold text-base sm:text-lg shadow-lg shadow-green-200 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2"
              >
                {t('signup.Submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
