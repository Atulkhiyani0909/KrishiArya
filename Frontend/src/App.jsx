import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import MarketplacePage from './pages/MarketplacePage';
import CommunityPage from './pages/CommunityPage';
import EducationHub from './pages/EducationHub.jsx';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { FarmerProvider } from './contexts/farmerContext.jsx'; // import FarmerProvider
import ProfileFarmer  from './pages/profileFarmer.jsx';
import CropPrices from './pages/cropPrices.jsx';

function App() {
  return (
    <FarmerProvider>
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navigation />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/educationhub" element={<EducationHub />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/profile" element={<ProfileFarmer />} />
              <Route path="/crop-prices" element={<CropPrices />} />
            </Routes>
          </main>
          
          <Chatbot />
          <Footer />
        </div>
      </CartProvider>
    </Router>
    </FarmerProvider>
  );
}

export default App;