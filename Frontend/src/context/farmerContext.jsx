import React, { createContext, useState, useEffect } from 'react';

// Create context
export const FarmerContext = createContext();

// Create the provider component
export const FarmerProvider = ({ children }) => {
  const [farmer, setFarmer] = useState(null);

  // Load farmer data from localStorage when the app is loaded
  useEffect(() => {
    const storedFarmer = localStorage.getItem('farmerData');
    if (storedFarmer) {
      try {
        const parsedFarmer = JSON.parse(storedFarmer);
        setFarmer(parsedFarmer);  // Update the context with the farmer data
      } catch (error) {
        console.error('Error parsing farmer data from localStorage:', error);
      }
    }
  }, []);

  // Function to update the farmer context and store in localStorage
  const loginFarmer = (farmerData) => {
    setFarmer(farmerData); // Update the context state
    localStorage.setItem('farmerData', JSON.stringify(farmerData)); // Store in localStorage
  };

  // Function to log out the farmer (clear context and localStorage)
  const logoutFarmer = () => {
    setFarmer(null); // Clear context state
    localStorage.removeItem('farmerData'); // Remove farmer data from localStorage
  };

  return (
    <FarmerContext.Provider value={{ farmer, loginFarmer, logoutFarmer }}>
      {children}
    </FarmerContext.Provider>
  );
};
