import React from 'react';
import { Users, Briefcase, Snowflake, MessageSquare } from 'lucide-react';
import { FLEET_DATA, BUSINESS_INFO } from '../data/cabData';

export const FleetSection: React.FC = () => {
  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
              Vehicle Fleet
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
              Clean, Inspected &amp; AC Vehicles
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Choose the vehicle size suited for your family, solo travel, or large tour group. All vehicles feature functioning air conditioning and undergo cleaning before each journey.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLEET_DATA.map((car) => (
            <div
              key={car.id}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image container with fallback */}
                <div className="h-48 bg-slate-200 overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {car.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-slate-900">
                    {car.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{car.models}</p>

                  {/* Specifications (tabular numbers) */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200/80 text-xs text-slate-600 tabular-nums">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>{car.bags} Bags</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Snowflake className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>Full AC</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    <span className="font-semibold text-slate-700">Best for:</span> {car.idealFor}
                  </p>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hi%20SS%20Cab,%20I%20am%20interested%20in%20reserving%20a%20${encodeURIComponent(car.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire {car.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verification note */}
        <p className="text-[11px] text-slate-400 text-center mt-6">
          * Vehicle allocations and exact luggage allowances are confirmed according to availability. Contact 7823085693 for customized requirements.
        </p>

      </div>
    </section>
  );
};
