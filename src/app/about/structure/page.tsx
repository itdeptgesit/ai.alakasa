"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Building2, MapPin, Briefcase, Landmark } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { SectionTitle } from '@/components/ui/SectionTitle';

export default function StructurePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subsidiaries = [
    {
      name: 'PT. Alakasa Extrusindo',
      field: 'Property',
      ownership: '99,99%',
      activities: '2001',
      status: 'Operating',
      address: 'Jl. Pulogadung No.4, Kawasan Industri Pulogadung Jakarta Timur, Indonesia'
    },
    {
      name: 'Alakasa Company Limited',
      field: 'Aluminium Raw Material Trading',
      ownership: '100,00%',
      activities: '2000',
      status: 'Operating',
      address: '17/F,Far East Finance Centre, 16 Harcourt Road, Hong Kong'
    },
    {
      name: 'PT. Alka Niaga Industri',
      field: 'Trading, Manufacturing & Service',
      ownership: '99,00%',
      activities: '–',
      status: 'Not yet in Operation',
      address: 'The City Tower, Lantai 27 Jl. M.H. Thamrin No. 81 Jakarta Pusat 10310'
    },
    {
      name: 'PT. Alakasa Andalan Mitra Sejati',
      alias: '(d/h. PT. Alakasa Alexindo Mitra Sejati)',
      field: 'Aluminium fabrication industry',
      ownership: '99,00%',
      activities: '2019',
      status: 'Operating',
      address: 'Jl. Pulogadung No.4, Kawasan Industri Pulogadung Jakarta Timur'
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="cursor-default">About Us</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Corporate Structure</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Corporate <span className="text-primary">Structure</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Discover the ownership hierarchy and operational subsidiaries that form the foundation of PT Alakasa Industrindo Tbk.
          </p>
        </div>
      </section>

      {/* Ownership Structure Chart */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container max-w-[1200px]">
          <SectionTitle 
            title="Ownership Structure" 
            subtitle="The organizational hierarchy and stakeholder distribution of PT Alakasa Industrindo Tbk."
            centered
          />
          
          {/* CSS Chart */}
          <div className="mt-16 w-full max-w-4xl mx-auto p-4 md:p-8 bg-gray-50 rounded-3xl border border-gray-100 overflow-x-auto shadow-inner">
            <div className="min-w-[700px] flex flex-col items-center py-8">
              
              {/* Top Level */}
              <div className="flex items-start justify-center gap-16 md:gap-32 w-full relative">
                {/* Node 1 */}
                <div className="flex flex-col items-center w-64">
                  <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 w-full text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative z-10">
                    <h3 className="text-primary font-bold text-lg leading-tight">Soetoyo Family</h3>
                  </div>
                  {/* Vertical line down */}
                  <div className="w-0.5 h-12 bg-gray-300"></div>
                  {/* Next Node */}
                  <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 w-full text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative z-10">
                    <h3 className="text-primary font-bold text-lg leading-tight mb-2">PT. Gesit Perkasa</h3>
                    <p className="text-gray-900 font-bold text-xl">56,58%</p>
                  </div>
                  {/* Vertical line down to horizontal connector */}
                  <div className="w-0.5 h-16 bg-gray-300 relative z-0"></div>
                </div>

                {/* Node 2 */}
                <div className="flex flex-col items-center w-64 pt-[124px]">
                  <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 w-full text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative z-10">
                    <h3 className="text-primary font-bold text-lg leading-tight mb-2">Masyarakat<br/><span className="text-sm font-normal text-gray-500">(Masing-masing di bawah 5%)</span></h3>
                    <p className="text-gray-900 font-bold text-xl">43,42%</p>
                  </div>
                  {/* Vertical line down to horizontal connector */}
                  <div className="w-0.5 h-16 bg-gray-300 relative z-0"></div>
                </div>

                {/* Horizontal Connector Line */}
                <div className="absolute bottom-[64px] left-[50%] -translate-x-1/2 w-[calc(100%-256px)] md:w-[calc(100%-384px)] h-0.5 bg-gray-300 z-0"></div>
              </div>

              {/* Bottom Level */}
              <div className="flex flex-col items-center w-64 relative -mt-[64px] z-10">
                {/* Vertical line from horizontal connector down to target */}
                <div className="w-0.5 h-16 bg-gray-300 relative z-0"></div>
                
                <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-b-primary border-t border-x border-gray-100 w-full md:w-80 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative z-10">
                  <h3 className="text-navy font-black text-xl leading-tight">PT. Alakasa<br/>Industrindo Tbk</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section className="py-20 md:py-32 bg-[#F8FAFC] border-t border-gray-100">
        <div className="container max-w-[1200px]">
          <SectionTitle 
            title="Our Subsidiaries" 
            subtitle="The operational arms driving growth and value creation across our business segments."
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {subsidiaries.map((sub, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Building2 className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy leading-tight">{sub.name}</h3>
                      {sub.alias && <p className="text-xs text-gray-500 mt-1">{sub.alias}</p>}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                    sub.status === 'Operating' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {sub.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 flex-grow">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Business Field</p>
                    <p className="text-sm font-bold text-navy flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {sub.field}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Ownership</p>
                    <p className="text-sm font-bold text-navy">{sub.ownership}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl col-span-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Commercial Activities</p>
                    <p className="text-sm font-bold text-navy">{sub.activities}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-6 border-t border-gray-100 mt-auto">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-steel leading-relaxed">
                    {sub.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

    </main>
  );
}
