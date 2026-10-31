import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { PopularRoutesSection } from './components/PopularRoutesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactAndMapSection } from './components/ContactAndMapSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 pb-20 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <FleetSection />
        <PopularRoutesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <FAQSection />
        <ContactAndMapSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
