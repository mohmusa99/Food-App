import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Onboarding/Welcome';
import Walkthrough from './components/Onboarding/Walkthrough';
import ForgotPassword from './components/Onboarding/ForgotPassword';
import SignIn from './components/Onboarding/SignIn';
import SignUp from './components/Onboarding/SignUp';
import VerifyPhone from './components/Onboarding/VerifyPhone';
import HomePage from './components/HomePage';
import FeaturedPartners from './components/Homepage/FeaturedPartners';
import BestPicks from './components/Homepage/BestPicks';
import AllRestaurants from './components/Homepage/AllRestaurants';
import NotFound from './components/NotFound'; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/onboarding">
        <Route path="welcome" element={<Welcome />} />
        <Route path="walkthrough" element={<Walkthrough />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="verify-phone" element={<VerifyPhone />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="/featured-partners" element={<FeaturedPartners />} />
      <Route path="/best-picks" element={<BestPicks />} />
      <Route path="/all-restaurants" element={<AllRestaurants />} />
      <Route path="*" element={<NotFound />} /> {/* Fallback route */}
    </Routes>
  );
};

export default AppRoutes;
