import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cabData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 shadow-2xl flex items-center gap-3 md:hidden">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center text-xs tracking-wide shadow-xs transition-colors"
      >
        <Phone className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
        <span>Call Now</span>
      </a>

      <a
        href={`https://wa.me/91${BUSINESS_INFO.phone}?text=Hello%20SS%20Cab,%20I%20would%20like%20to%20enquire%20about%20a%20taxi%20booking%20from%20Tiruttani.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center text-xs tracking-wide shadow-xs transition-colors"
      >
        <MessageSquare className="w-4 h-4 mr-2 shrink-0" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
