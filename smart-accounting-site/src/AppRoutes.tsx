import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../ui/header';
import HomeScreen from './screens/HomeScreen';
import TaxConsulting from './screens/TaxConsulting';
import Accounting from './screens/Accounting';
import BusinessRegistration from './screens/BusinessRegistration';
import FinancialReporting from './screens/FinancialReporting';
import AboutUs from './screens/AboutUs';
import Documents from './screens/Documents';
import Clients from './screens/Clients';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Signup from './screens/Signup';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/tax" element={<TaxConsulting />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/registration" element={<BusinessRegistration />} />
        <Route path="/reporting" element={<FinancialReporting />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
