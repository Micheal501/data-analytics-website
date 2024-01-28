import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/organisms/Navbar';
import './index.css';
import HeroSection from './components/organisms/Hero';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
  </React.StrictMode>
);
