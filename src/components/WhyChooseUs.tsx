import React from 'react';
import { Clock, ShieldCheck, Sparkles, Headset } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cabData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
            The SS Cab Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
            Why Travellers Choose SS Cab
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reliability and passenger safety are at the heart of our service. Here is what you can depend on every time you reserve a ride with us.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Punctual Pickups
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We respect your time. Chauffeurs arrive 10 to 15 minutes before your scheduled departure for worry-free airport drops and train connections.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-900 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Transparent Pricing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No surge pricing during rush hours or sudden driver allowance surprises. Tolls and state permits are clearly quoted upfront.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Sanitized AC Cabs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every cab is cleaned, air-freshened, and checked for functional air-conditioning so your family travels in pristine comfort.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <Headset className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              Direct Phone Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No automated chatbots. Talk directly to our Tiruttani coordinator anytime at <strong>{BUSINESS_INFO.phone}</strong> for instant assistance.
            </p>
          </div>

        </div>

        {/* Operational Highlights Strip */}
        <div className="mt-14 bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 font-heading">
                24/7
              </div>
              <p className="text-xs text-slate-300 mt-1 uppercase tracking-wider font-medium">
                Dispatch &amp; Helpline
              </p>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 font-heading">
                100%
              </div>
              <p className="text-xs text-slate-300 mt-1 uppercase tracking-wider font-medium">
                Confirmed Bookings
              </p>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 font-heading">
                Verified
              </div>
              <p className="text-xs text-slate-300 mt-1 uppercase tracking-wider font-medium">
                Licensed Drivers
              </p>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-orange-500 font-heading">
                Interstate
              </div>
              <p className="text-xs text-slate-300 mt-1 uppercase tracking-wider font-medium">
                TN · AP · KA Permits
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
