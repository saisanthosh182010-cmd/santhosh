import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cabData';

export const ContactAndMapSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
              Direct Contact
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Connect with SS Cab Tiruttani
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Ready to schedule your journey or need a rapid taxi pickup in Tiruttani? Our local dispatchers are on duty 24 hours a day to assist you.
            </p>

            <div className="space-y-4 pt-2">
              {/* Phone card */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center p-4 rounded-xl bg-white border border-slate-200 hover:border-orange-500 transition-colors shadow-xs group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    24/7 Phone Booking Line
                  </p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors font-heading">
                    {BUSINESS_INFO.phone}
                  </p>
                </div>
              </a>

              {/* WhatsApp card */}
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SS%20Cab,%20I%20would%20like%20to%20enquire%20about%20a%20taxi%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 transition-colors shadow-xs group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    WhatsApp Chat &amp; Instant Quotes
                  </p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors font-heading">
                    +91 {BUSINESS_INFO.phone}
                  </p>
                </div>
              </a>

              {/* Location card */}
              <div className="flex items-start p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    Business Base Location
                  </p>
                  <p className="text-sm font-bold text-slate-900 font-heading">
                    {BUSINESS_INFO.name}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium mt-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Open 24 Hours / 365 Days</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Maps showing Tiruttani, Tamil Nadu */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-200">
              <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden relative bg-slate-100">
                <iframe
                  title="SS Cab Location - Tiruttani, Tamil Nadu"
                  src={BUSINESS_INFO.mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="px-3 pt-3 pb-1 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 gap-2">
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Center: Tiruttani, Tamil Nadu (Pin 631209)</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Tiruttani,Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-900 font-bold hover:text-orange-600 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
