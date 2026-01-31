import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';  // Correct relative path, no leading slash
import Contactus from './Pages/Contactus';  // Correct relative path, no leading slash
import Aboutus from './Pages/Aboutus';  // Correct relative path, no leading slash
import PropertyValuation from './services/propertyvaluation';
import LegalTitleCheck from './services/legaltitlecheck';
import RatesAndTrends from './services/ratesandtrends';
import EmiCalculator from './services/Emical';
import BuyPage from './Pages/buy';
import RentPage from './Pages/rent';
import PropertyDetail from './Pages/PropertyDetail';
import OneBhkPage from './Pages/OneBhkPage';
import TwoBhkPage from './Pages/TwoBhk';
import ThreeBhkPage from './Pages/ThreeBhk';
import FourBhkPage from './Pages/FourBhk';
import TermsConditions from './Pages/tandc';
import PrivacyPolicy from './Pages/privacypolicy';
import Properties from './Pages/properties';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/services/property-valuation" element={<PropertyValuation />} />
        <Route path="/services/legal-title-check" element={<LegalTitleCheck />} />
        <Route path="/services/rates---trends" element={<RatesAndTrends />} />
        <Route path="/services/emi-calculator" element={<EmiCalculator />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/properties/1bhk" element={<OneBhkPage />} />
        <Route path="/properties/2bhk" element={<TwoBhkPage />} />
        <Route path="/properties/3bhk" element={<ThreeBhkPage />} />
        <Route path="/properties/4bhk" element={<FourBhkPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />

      </Routes>
    </Router>
  );
};

export default App;
