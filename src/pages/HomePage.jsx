// src/pages/HomePage.jsx
import React from 'react';
import { useWow } from '../hooks/useWow';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import Features from '../components/Features';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage({ onOpenLogin }) {
  useWow();

  return (
    <div className="App">
      <Preloader />
      <Header onOpenLogin={onOpenLogin} />
      <Features />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Team />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
