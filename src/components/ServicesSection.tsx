import React from 'react';
import { MapPin, Compass, ArrowLeftRight, Plane, Users, Briefcase, ChevronRight, Check } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/cabData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'ArrowLeftRight':
        return <ArrowLeftRight className="w-6 h-6" />;
      case 'Plane':
        return <Plane className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      default:
        return <MapPin className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
            Our Cab Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4 font-heading">
            Complete Taxi &amp; Travel Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From quick local commutes around Tiruttani to long-distance outstation journeys, SS Cab provides reliable, clean, and punctual rides tailored to your schedule.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-slate-900 text-slate-900 group-hover:text-orange-500 transition-colors flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {service.fullDesc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6 text-xs text-slate-600 border-t border-slate-100 pt-4">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hi%20SS%20Cab,%20I%20am%20enquiring%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span>Enquire Service</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs text-slate-400 hover:text-slate-700 transition-colors font-medium"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
