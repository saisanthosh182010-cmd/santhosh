import React, { useState, useMemo } from 'react';
import { ArrowRight, Clock, MapPin, MessageSquare, Search, X, Sparkles } from 'lucide-react';
import { POPULAR_ROUTES, BUSINESS_INFO } from '../data/cabData';

export const PopularRoutesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Pilgrimage', 'Airport', 'City Drop', 'Medical & Temple', 'Interstate'];

  const filteredRoutes = useMemo(() => {
    return POPULAR_ROUTES.filter((route) => {
      const matchesCategory =
        selectedCategory === 'All' || route.tripType.toLowerCase().includes(selectedCategory.toLowerCase());
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        route.to.toLowerCase().includes(query) ||
        route.from.toLowerCase().includes(query) ||
        route.highlight.toLowerCase().includes(query) ||
        route.tripType.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="routes" className="py-20 bg-slate-900 text-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
            Frequent Destinations &amp; Route Search
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4 font-heading">
            Popular Cab Routes from Tiruttani
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Search your destination or browse our most requested one-way and round-trip routes with instant WhatsApp fare inquiry.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-3xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination, airport, or temple (e.g. Tirupati, Chennai, CMC, Bangalore...)"
              className="w-full pl-12 pr-10 py-3.5 bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-center text-xs text-slate-400">
            Showing <span className="font-semibold text-orange-400 font-mono">{filteredRoutes.length}</span> destinations from Tiruttani
          </div>
        </div>

        {/* Routes Grid */}
        {filteredRoutes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((route) => (
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
        ) : (
          /* Empty Search State: Custom Route Dispatch */
          <div className="max-w-xl mx-auto bg-slate-800/80 border border-slate-700 rounded-2xl p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-orange-600/20 text-orange-400 rounded-xl flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Looking for a trip to "{searchQuery}"?
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                We operate 24/7 across Tamil Nadu, Andhra Pradesh, and Karnataka! Even if "{searchQuery}" isn't listed above, we will dispatch a cab directly to your doorstep.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SS%20Cab,%20I%20am%20looking%20for%20a%20cab%20from%20Tiruttani%20to%20${encodeURIComponent(searchQuery)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Fare for "{searchQuery}"</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="w-full sm:w-auto text-xs text-slate-400 hover:text-white py-3 px-4 underline"
              >
                Reset Search
              </button>
            </div>
          </div>
        )}

        {/* Customized Route Callout */}
        <div className="mt-12 bg-slate-800/40 border border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-heading">
                Travelling to any other town or village?
              </h4>
              <p className="text-xs text-slate-400">
                Call our Tiruttani coordinator directly at {BUSINESS_INFO.phone} for instantaneous quotes.
              </p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs whitespace-nowrap transition-colors"
          >
            <span>Call {BUSINESS_INFO.phone}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
