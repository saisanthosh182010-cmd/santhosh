import React from 'react';
import { Phone, CheckCircle2, Shield, Award, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cabData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/src/assets/images/tiruttani_temple_hills_1793411796764.jpg"
                alt="Tiruttani Temple Hills and Scenic Travel"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold text-orange-400">Regional Heritage</span>
                <p className="text-sm font-bold font-heading">
                  Proudly based in Tiruttani — Serving Pilgrims &amp; Travellers 24/7
                </p>
              </div>
            </div>

            {/* Quiet trust badge */}
            <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Round-the-clock driver availability in Tiruttani town</span>
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="font-bold text-slate-900 hover:text-orange-600 transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Editorial & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
              About SS Cab
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
              Tiruttani's Reliable Travel Partner For Every Road Trip
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Based in the holy town of <strong>Tiruttani, Tamil Nadu</strong>, <strong>SS Cab</strong> is dedicated to delivering safe, punctual, and transparent passenger transportation. We bridge connectivity between Tiruttani, Chennai, Tirupati, Vellore, Kanchipuram, and major commercial hubs across South India.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you are a pilgrim seeking a peaceful journey to the sacred <em>Arulmigu Subramanya Swamy Temple</em> or Tirumala Tirupati, an executive catching a flight at Chennai International Airport (MAA), or a family planning a holiday, our verified chauffeurs ensure a smooth, worry-free ride.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-sm">
                  <Shield className="w-4 h-4 text-orange-600 shrink-0" />
                  <h4>Verified Chauffeurs</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Commercial licensed drivers familiar with highway safety, ghat routes, and town navigation.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-sm">
                  <Award className="w-4 h-4 text-orange-600 shrink-0" />
                  <h4>Clear Pricing</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Upfront fare quotes with transparent toll and driver allowances. No surprise surge charges.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <h4>Clean Sanitized Cars</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fully air-conditioned vehicles, cleaned before every trip for family and elder comfort.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-sm">
                  <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                  <h4>Human Dispatch</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Direct phone access to our Tiruttani coordinator for fast adjustments and inquiries.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors"
              >
                <span>Talk with our dispatcher directly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
