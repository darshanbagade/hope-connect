import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { VictimSearch } from './components/VictimSearch';
import { NGORegistration } from './components/NGORegistration';
import { Partners } from './components/Partners';
import { Donate } from './components/Donate';

function App() {
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {path === '/' ? (
        <>
          <Hero />
          <Testimonials />
        </>
      ) : path === '/victims' ? (
        <VictimSearch />
      ) : path === '/ngo' ? (
        <NGORegistration />
      ) : path === '/companies' ? (
        <Partners />
      ) : path === '/donate' ? (
        <Donate />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;