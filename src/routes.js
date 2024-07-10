import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Onboarding/Welcome';
import Walkthrough from './components/Onboarding/Walkthrough';
import SignIn from './components/Onboarding/SignIn';
import SignUp from './components/Onboarding/SignUp';
import VerifyPhone from './components/Onboarding/VerifyPhone';


const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/Onboarding">
      <Route path="welcome" element={<Welcome />} />
      <Route path="walkthrough" element={<Walkthrough />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="verify-phone" element={<VerifyPhone />} />
    </Route>
    </Routes>
  )
}

export default AppRoutes