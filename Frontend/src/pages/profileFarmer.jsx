import React, { useContext, useEffect } from 'react';
import { FarmerContext } from '../contexts/farmerContext'; // import the context
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { farmer, logoutFarmer } = useContext(FarmerContext); // access farmer data from context
  const navigate = useNavigate();

  if(!farmer){
    return <>
     <h2>Please login to access the dashboard</h2>; 
     </>
  }

  const handleLogout = () => {
    logoutFarmer(); // Call the logout function
    // Optionally, navigate to the login or home page
    navigate('/');  // Use react-router's navigate to move to the home page
  };

  return (
    <div>
      {/* Check if the farmer exists */}
      {farmer ? (
        <>
         <h1>Welcome, {farmer.newFarmer.Name}</h1>
          <p>Phone: {farmer.newFarmer.mobNumber}</p>
          {/* <p>Livestock: {farmer.livestock.join(', ')}</p>
          <p>Crops: {farmer.cropsDetails.join(', ')}</p> */}
        </>
      ) : (
        <h2>Loading...</h2> // Optional loading message while farmer is being fetched
      )}

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
