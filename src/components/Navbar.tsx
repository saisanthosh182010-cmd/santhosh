import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Menu, X, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cabData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Tiruttani, Tamil Nadu, India</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>24/7 Cab Dispatch &amp; Support</span>
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium text-xs">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SS%20Cab,%20I%20would%20like%20to%20enquire%20about%20a%20taxi%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Strict Top Bar Contract) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            
            {/* Zone 1: Brand Wordmark (Single text element) */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              <div className="w-11 h-11 bg-slate-900 group-hover:bg-orange-600 rounded-xl flex items-center justify-center text-orange-500 group-hover:text-white transition-colors shadow-sm">
                <Car className="w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap font-heading">
                SS Cab
              </span>
            </a>

            {/* Zone 2: 4-5 Clean Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <a href="#services" className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0">
                Services
              </a>
              <a href="#fleet" className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0">
                Our Fleet
              </a>
              <a href="#routes" className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0">
                Routes &amp; Search
              </a>
              <a href="#about" className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0">
                About
              </a>
              <a href="#why-us" className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0">
                Why Choose Us
              </a>
              <a href="#contact" className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0">
                Contact
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-all shadow-md shadow-orange-600/20 whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3 font-medium text-slate-700 text-sm">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-orange-600 transition-colors"
              >
                Our Cab Services
              </a>
              <a
                href="#fleet"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-orange-600 transition-colors"
              >
                Fleet &amp; Vehicles
              </a>
              <a
                href="#routes"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-orange-600 transition-colors"
              >
                Search Routes &amp; Destinations
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-orange-600 transition-colors"
              >
                About SS Cab
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-orange-600 transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-orange-600 transition-colors"
              >
                Contact &amp; Map
              </a>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SS%20Cab,%20I%20would%20like%20to%20enquire%20about%20a%20taxi%20booking.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
