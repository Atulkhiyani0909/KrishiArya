import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tractor, ShoppingCart, Users, Stethoscope, Menu, X, Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import logo from '../components/logo.png';
import { FarmerContext } from '../contexts/farmerContext';
import axios from 'axios';

export const Navigation = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const langMenuRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false); // Manage Account menu state
  // const location = useLocation();
  const { getCartCount, setIsCartOpen } = useCart();
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [weatherData, setWeatherData] = useState('');
  const { farmer, logoutFarmer} = useContext(FarmerContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogout = () => {
    logoutFarmer();
    navigate('/');
  };

    useEffect(() => {
      // Fetch location data using Geolocation API
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
  
        // Call weather API
        const weatherCall = async () => {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`);
          console.log('Weather API response:', response.data);
          setWeatherData(response.data.weather[0].main);
        };
        weatherCall();
      });
    }, []);


  const menuItems = [
    {
      label: t('navigation.services'),
      icon: <Tractor className="w-5 h-5" />,
      path: '/services',
    },
    {
      label: t('navigation.marketplace'),
      icon: <ShoppingCart className="w-5 h-5" />,
      path: '/marketplace',
    },
    {
      label: t('navigation.community'),
      icon: <Users className="w-5 h-5" />,
      path: '/community',
    },
    {
      label: t('navigation.Knowledgehub'),
      icon: <Stethoscope className="w-5 h-5" />,
      path: '/educationhub',
    },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
  ];

  const changeLanguage = (lng) => {
    if (lng === 'en' || lng === 'hi') {
      i18n.changeLanguage(lng);
    }
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
      if (isAccountMenuOpen && !event.target.closest('.account-dropdown')) {
        setIsAccountMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAccountMenuOpen]);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-17">
          <div className="flex items-center space-x-8">
            <Link to="/">
              <motion.div
                className="text-2xl font-bold text-green-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: '80px',
                    height: '70px',
                    overflow: 'hidden',
                  }}
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>

          {/* Right Side Elements (Cart, SignUp, Language) */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:bg-green-50 rounded-full"
            >
              <ShoppingCart className="w-6 h-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Account Button (Sign Up / Sign In) */}
            {!farmer && (
            <>
<div className="relative inline-block">
      <button 
        onClick={toggleDropdown} 
        className="cursor-pointer text-white bg-[#16A34A] px-3 py-1 rounded-md">
        Account
      </button>
      {isOpen && (
        <div className="absolute bg-[#16A34A] min-w-[160px] shadow-lg rounded-md p-2 z-10 border border-[white]">
          <Link 
            to="/signup" 
            className="block text-white hover:bg-white hover:text-[#16A34A] px-2 py-1 rounded-md"
            onClick={closeDropdown}>
            {t('navigation.signUp')}
          </Link>
          <Link 
            to="/signin" 
            className="block text-white hover:bg-white hover:text-[#16A34A] px-2 py-1 rounded-md mt-1"
            onClick={closeDropdown}>
             {t('navigation.signIn')}
          </Link>
        </div>
      )}
   
    
    </div>
          </>
          
           
            )}

            {/* Farmer Profile & Logout */}
            {farmer && (
              <>
                <Link
                  to={'/profile'}
                  className="w-14 h-14 p-1 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors duration-200"
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-green-600 w-17 h-11 text-white px-2 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            )}

            {/* Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
              >
                <Globe2 className="w-5 h-5" />
                {!isMobile && <span>{t('navigation.language')}</span>}
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Mobile Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
              >
                <Globe2 className="w-5 h-5" />
                <span>{t('navigation.language')}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            
            </div>
            
          </div>
        )}
      </div>
    </nav>
  );
};
