import React from 'react';
import { ArrowRight, Clock, MapPin, MessageSquare } from 'lucide-react';
import { POPULAR_ROUTES, BUSINESS_INFO } from '../data/cabData';

export const PopularRoutesSection: React.FC = () => {
  return (
    <section id="routes" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Frequent Destinations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4 font-heading">
            Popular Cab Routes from Tiruttani
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Transparent estimated travel times and direct one-way or round-trip transfers from Tiruttani across key spiritual, medical, and transit corridors.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-orange-500/80 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Distance */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-orange-400">
                    {route.tripType}
                  </span>
                  <span className="text-xs font-mono tabular-nums text-slate-300 bg-slate-700/60 px-2 py-0.5 rounded">
                    {route.distance}
                  </span>
                </div>

                {/* Route Destination */}
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-white">
                  <span>{route.from}</span>
                  <ArrowRight className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{route.to}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Approx. {route.duration}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {route.highlight}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SS%20Cab,%20I%20would%20like%20to%20check%20rates%20for%20trip%20from%20${encodeURIComponent(route.from)}%20to%20${encodeURIComponent(route.to)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Check Fare Quote</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Customized Route Callout */}
        <div className="mt-12 bg-slate-800/40 border border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-heading">
                Travelling to another destination not listed here?
              </h4>
              <p className="text-xs text-slate-400">
                We operate across all districts of Tamil Nadu, Andhra Pradesh, and Karnataka.
              </p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs whitespace-nowrap transition-colors"
          >
            <span>Custom Route Request</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
