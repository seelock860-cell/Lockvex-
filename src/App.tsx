/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WorkGallery from './components/WorkGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Homepage / Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. My Services */}
        <Services />

        {/* 4. My Work */}
        <WorkGallery />

        {/* 5. Contact */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Pumping WhatsApp Button on Homepage / Everywhere */}
      <FloatingWhatsApp />
    </div>
  );
}
