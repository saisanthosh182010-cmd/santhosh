import React from 'react';
import { Phone, MessageSquare, MapPin, Car, ArrowUp, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cabData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Pre-Footer Action Banner */}
      <section className="bg-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Ready to book your ride?
              </h3>
              <p className="text-orange-100 text-xs sm:text-sm mt-1 max-w-xl">
                Get an upfront price quote within 2 minutes with zero obligation. Available 24 hours a day in Tiruttani.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SS%20Cab,%20I%20would%20like%20to%20book%20a%20cab%20now.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-colors text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Col 1: Brand & Bio */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                    SS CAB
                  </span>
                  <p className="text-[10px] text-slate-400">Tiruttani • Tamil Nadu</p>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                SS Cab is Tiruttani's trusted taxi service providing local city drops, outstation travels, pilgrimage tours, and punctual airport transfers. Your safety and comfort remain our top commitments.
              </p>

              <div className="pt-1 text-xs text-slate-400 space-y-1.5">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-semibold">
                    {BUSINESS_INFO.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>{BUSINESS_INFO.address}</span>
                </p>
              </div>
            </div>

            {/* Col 2: Services Directory */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                Cab Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Local Taxi Services</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Outstation Car Hire</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">One-Way Drops</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Airport Transfers (MAA / TIR)</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Pilgrim Temple Packages</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Corporate Travel Solutions</a></li>
              </ul>
            </div>

            {/* Col 3: Quick Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#fleet" className="hover:text-orange-400 transition-colors">Our Fleet</a></li>
                <li><a href="#routes" className="hover:text-orange-400 transition-colors">Popular Routes</a></li>
                <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#why-us" className="hover:text-orange-400 transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact &amp; Map</a></li>
              </ul>
            </div>

            {/* Col 4: Business Owner Verification Notice */}
            <div className="lg:col-span-3 space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                Owner Verification
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                This website is configured for <strong>SS Cab</strong>, Tiruttani. Exact fare estimates, custom outstation packages, and specific car availability are confirmed directly by the business owner at <strong>{BUSINESS_INFO.phone}</strong>.
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-2.5 py-1 rounded-md">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Phone {BUSINESS_INFO.phone} Verified</span>
                </span>
              </div>
            </div>

          </div>

          {/* Sub-Footer */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <p>
                &copy; {currentYear} SS Cab ({BUSINESS_INFO.location}). All rights reserved.
              </p>
              <span className="hidden sm:inline text-slate-700">|</span>
              <p className="text-slate-400">
                Website created by <span className="text-slate-300 font-medium">V.santhosh</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">{BUSINESS_INFO.tagline}</span>
              <span className="hidden md:inline text-slate-700">•</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors inline-flex items-center gap-1"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
