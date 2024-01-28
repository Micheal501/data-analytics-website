import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/organisms/Navbar';
import './index.css';
import HeroSection from './components/organisms/Hero';
import About from './components/organisms/About';
import Newsletter from './components/organisms/Newsletter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
    <About />
    <Newsletter />
  </React.StrictMode>
);
