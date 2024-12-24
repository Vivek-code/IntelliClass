import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import WorkFlow from './components/WorkFlow';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SignIn from './components/SignIn'; // Import SignIn component
import CreateAccount from './components/CreateAccount'; // Import CreateAccount component

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          {/* Define routes for all sections */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/workflow" element={<WorkFlow />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
          {/* Sign In and Create Account Pages */}
          <Route path="/signin" element={<SignIn />} /> {/* Use actual SignIn component */}
          <Route path="/create-account" element={<CreateAccount />} /> {/* Use actual CreateAccount component */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;