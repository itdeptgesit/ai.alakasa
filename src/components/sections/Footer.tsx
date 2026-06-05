import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Printer, Mail, ChevronRight, Share2, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#061224] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Company Info */}
          <div className="flex flex-col lg:col-span-5 lg:pr-8">
            {/* Logo Block */}
            <Link href="/" className="flex items-center gap-5 mb-10">
              <img 
                src="/alakasa.png" 
                alt="Alakasa Logo" 
                className="h-12 lg:h-14 w-auto object-contain brightness-0 invert shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className="text-lg font-heading font-black text-white tracking-wide leading-tight mb-1 whitespace-nowrap">
                  PT. ALAKASA INDUSTRINDO, Tbk
                </span>
                <span className="text-[11px] text-gray-400 leading-snug whitespace-nowrap">
                  Aluminum Industry, Raw Material Aluminum Trading & Related Business
                </span>
                <span className="text-[11px] text-gray-400 leading-snug whitespace-nowrap">
                  Industri Aluminium, Perdagangan Bahan Baku Aluminium & Usaha Terkait Lainnya
                </span>
              </div>
            </Link>
            
            <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:w-[85%]">
              <h4 className="text-white font-bold text-lg mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Subscribe to get the latest news and<br />company updates.
              </p>
              <form className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/[0.05] border border-white/10 rounded-xl text-sm text-white px-4 py-3.5 pr-14 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-500"
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-[#3B82F6] hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </form>
            </div>
          </div>

          {/* Office Address */}
          <div className="flex flex-col lg:col-span-4">
            <h4 className="text-sm font-bold mb-8 font-heading uppercase tracking-widest text-white">
              Office Address
            </h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="leading-relaxed pt-2">Jl. Pulogadung No. 4<br/>Kawasan Industri Pulogadung<br/>DKI Jakarta 13920, Indonesia</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-wrap gap-2 pt-1.5">
                  <a href="tel:+62214608855" className="bg-white/5 hover:bg-white/10 transition-colors px-3 py-1 rounded-md text-xs text-gray-300 tracking-wide">+62-21-4608855</a>
                  <a href="tel:+622131997275" className="bg-white/5 hover:bg-white/10 transition-colors px-3 py-1 rounded-md text-xs text-gray-300 tracking-wide">+62-21-31997275</a>
                  <a href="tel:+622131997276" className="bg-white/5 hover:bg-white/10 transition-colors px-3 py-1 rounded-md text-xs text-gray-300 tracking-wide">+62-21-31997276</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Printer className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-wrap gap-2 pt-1.5">
                  <span className="bg-white/5 px-3 py-1 rounded-md text-xs text-gray-300 tracking-wide">+62-21-4608856</span>
                  <span className="bg-white/5 px-3 py-1 rounded-md text-xs text-gray-300 tracking-wide">+62-21-31997278</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:corsec@ai.alakasa.co.id" className="hover:text-white transition-colors">corsec@ai.alakasa.co.id</a>
              </li>
            </ul>
          </div>

          {/* Subsidiaries & Links */}
          <div className="flex flex-col lg:col-span-3">
            <h4 className="text-sm font-bold mb-8 font-heading uppercase tracking-widest text-white">
              Our Subsidiaries
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 mb-10">
              {['PT. Alakasa Extrusindo', 'Alakasa Company Limited', 'PT. Alka Niaga Industri', 'PT. Alakasa Alumina Refineri', 'Indonesia Alumina Refinery', 'PT. Alakasa Andalan Mitra Sejati'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-all flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-white transition-colors shrink-0"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-bold mb-6 font-heading uppercase tracking-widest text-white">
              Company Link
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="http://www.gesit.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-white transition-colors shrink-0"></span>
                  www.gesit.co.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PT Alakasa Industrindo, Tbk. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
