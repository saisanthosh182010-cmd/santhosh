import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, MapPin, Navigation, Car, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cabData';

export const Hero: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [tripType, setTripType] = useState('One-Way Drop');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState(todayStr);
  const [vehicle, setVehicle] = useState('Sedan (Dzire / Etios)');
  const [passengerName, setPassengerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!pickup.trim() || !destination.trim() || !passengerName.trim() || !mobileNumber.trim()) {
      return;
    }

    // Build structured WhatsApp message
    const lines = [
      `*SS CAB TIRUTTANI - BOOKING ENQUIRY*`,
      `---------------------------------`,
      `*Passenger Name:* ${passengerName}`,
      `*Contact:* ${mobileNumber}`,
      `*Trip Type:* ${tripType}`,
      `*Pickup Location:* ${pickup}`,
      `*Drop Destination:* ${destination}`,
      `*Travel Date:* ${travelDate}`,
      `*Vehicle Preference:* ${vehicle}`,
      `---------------------------------`,
      `Please confirm car availability and share the best fare estimate.`,
    ];

    const encodedText = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone}?text=${encodedText}`;

    // Mark submitted and open WhatsApp
    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    setPickup('');
    setDestination('');
    setPassengerName('');
    setMobileNumber('');
  };

  return (
    <section className="relative min-h-[660px] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Dark Navy Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_sscab_highway_1793411795438.jpg"
          alt="SS Cab Highway Travel"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Message & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker (Quiet inline metadata, zero-pill) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-orange-400">
              <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Verified Cab &amp; Travel Service</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Based in Tiruttani, Tamil Nadu</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-heading max-w-2xl text-balance">
              Your Journey, <br />
              <span className="text-orange-500">Our Responsibility.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Travel safely across Tamil Nadu, Andhra Pradesh, and Karnataka with <strong className="text-white font-semibold">SS Cab</strong>. 
              Whether you need a local town drop in Tiruttani, pilgrim darshan at Tirupati Balaji, or an urgent flight transfer to Chennai Airport (MAA), we provide clean AC cabs and seasoned local chauffeurs.
            </p>

            {/* Core Value Line */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Hidden Charges</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Human Dispatch</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Spotless AC Fleet</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-orange-600/30 transition-all text-sm sm:text-base text-center"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SS%20Cab,%20I%20would%20like%20to%20enquire%20about%20a%20taxi%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-emerald-900/30 transition-all text-sm sm:text-base text-center"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Quick route chips for quick access */}
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center gap-2">
              <span className="font-semibold text-slate-300">Popular Routes:</span>
              <a href="#routes" className="hover:text-orange-400 underline decoration-slate-600 underline-offset-4">Tirupati</a>
              <span>·</span>
              <a href="#routes" className="hover:text-orange-400 underline decoration-slate-600 underline-offset-4">Chennai Airport (MAA)</a>
              <span>·</span>
              <a href="#routes" className="hover:text-orange-400 underline decoration-slate-600 underline-offset-4">Vellore CMC</a>
              <span>·</span>
              <a href="#routes" className="hover:text-orange-400 underline decoration-slate-600 underline-offset-4">Bengaluru</a>
            </div>

          </div>

          {/* Right Column: Instant Booking Enquiry Form */}
          <div className="lg:col-span-5" id="booking-form">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-7 border border-slate-100">
              
              <div className="border-b border-slate-100 pb-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Direct Reservation</span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mt-0.5">
                  Book Your SS Cab
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  Share your trip details for an instant WhatsApp rate quote &amp; confirmation.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Enquiry Initiated!</h4>
                    <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                      Your booking summary was generated for WhatsApp. If your chat did not open automatically, tap the button below.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <a
                      href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SS%20Cab,%20I%20have%20submitted%20a%20booking%20enquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-slate-500 hover:text-slate-800 underline py-1"
                    >
                      Book Another Ride
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Trip Type Segmented Control */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Trip Type
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
                      {['One-Way Drop', 'Round Trip', 'Airport / Temple'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setTripType(type)}
                          className={`py-2 px-1 text-xs font-semibold rounded-lg transition-all text-center whitespace-nowrap ${
                            tripType === type
                              ? 'bg-slate-900 text-white shadow-xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pickup and Destination Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-pickup" className="block text-xs font-semibold text-slate-700 mb-1">
                        Pickup Location *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                        <input
                          id="hero-pickup"
                          type="text"
                          required
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          placeholder="e.g. Tiruttani Town"
                          className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-hidden text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hero-destination" className="block text-xs font-semibold text-slate-700 mb-1">
                        Destination *
                      </label>
                      <div className="relative">
                        <Navigation className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                        <input
                          id="hero-destination"
                          type="text"
                          required
                          value={destination}
                          onChange={(e) => setDestination(e.target.value)}
                          placeholder="e.g. Chennai Airport / Tirupati"
                          className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-hidden text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date and Vehicle Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-date" className="block text-xs font-semibold text-slate-700 mb-1">
                        Travel Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                        <input
                          id="hero-date"
                          type="date"
                          required
                          min={todayStr}
                          value={travelDate}
                          onChange={(e) => setTravelDate(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-hidden text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hero-vehicle" className="block text-xs font-semibold text-slate-700 mb-1">
                        Vehicle Preference *
                      </label>
                      <div className="relative">
                        <Car className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                        <select
                          id="hero-vehicle"
                          value={vehicle}
                          onChange={(e) => setVehicle(e.target.value)}
                          className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-hidden text-slate-900"
                        >
                          <option value="Sedan (Dzire / Etios)">Sedan (Dzire / Etios) - 4 Seats</option>
                          <option value="SUV (Innova / Ertiga)">SUV (Innova / Ertiga) - 6 Seats</option>
                          <option value="Hatchback (Swift / WagonR)">Hatchback (Swift) - 4 Seats</option>
                          <option value="Tempo Traveller">Tempo Traveller (12+ Seats)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Name and Mobile Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-name" className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="hero-name"
                        type="text"
                        required
                        value={passengerName}
                        onChange={(e) => setPassengerName(e.target.value)}
                        placeholder="e.g. Ramesh"
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-hidden text-slate-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="hero-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        id="hero-phone"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="10-digit number"
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-hidden text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl transition duration-150 flex items-center justify-center gap-2 shadow-md text-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Get Instant Quote via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    No advance payment required. Connect with our Tiruttani coordinator.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
