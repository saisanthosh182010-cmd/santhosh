import React from 'react';
import { Star, Info } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/cabData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold text-orange-600 uppercase tracking-widest">
            Rider Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-3 font-heading">
            What Customers Say About SS Cab
          </h2>

          {/* Compliance notice */}
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50/80 border border-amber-200/90 rounded-lg px-3 py-1.5 text-left mt-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              Sample customer feedback reflecting customary service experiences until genuine Google reviews synchronize.
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {item.avatarLetter}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 font-heading">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {item.location} · <span className="text-slate-400">Sample</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
