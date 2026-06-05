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
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
        <div className="container max-w-[1200px] relative z-10">
          <SectionTitle 
            title="Ownership Structure" 
            subtitle="The organizational hierarchy and stakeholder distribution of PT Alakasa Industrindo Tbk."
            centered
          />
          
          {/* CSS Chart Container */}
          <div className="mt-20 w-full max-w-4xl mx-auto overflow-x-auto pb-8">
            <div className="min-w-[700px] flex flex-col items-center">
              
              {/* Row 1 & 2: Top Level Columns */}
              <div className="w-full flex justify-between relative">
                
                {/* Left Column: Soetoyo & Gesit Perkasa */}
                <div className="w-72 flex flex-col items-center">
                  <div className="border border-gray-300 bg-white px-6 py-4 w-64 text-center shadow-sm">
                    <h3 className="text-navy font-bold text-sm tracking-widest uppercase">Soetoyo Family</h3>
                  </div>
                  
                  {/* Line down to Gesit */}
                  <div className="w-px h-10 bg-gray-400"></div>
                  
                  {/* Gesit Perkasa Node */}
                  <div className="border-t-4 border-t-primary border-x border-b border-gray-200 bg-white p-8 w-full text-center shadow-sm">
                    <h3 className="text-navy font-bold text-lg mb-2">PT. Gesit Perkasa</h3>
                    <p className="text-3xl font-light text-gray-800">56,58%</p>
                  </div>
                  
                  {/* Line down to horizontal connector */}
                  <div className="w-px h-12 bg-gray-400"></div>
                </div>

                {/* Right Column: Masyarakat */}
                <div className="w-72 flex flex-col items-center justify-end">
                  {/* Masyarakat Node */}
                  <div className="border-t-4 border-t-steel border-x border-b border-gray-200 bg-white p-8 w-full text-center shadow-sm">
                    <h3 className="text-navy font-bold text-lg mb-1">Masyarakat</h3>
                    <p className="text-xs text-gray-500 mb-4">(Masing-masing di bawah 5%)</p>
                    <p className="text-3xl font-light text-gray-800">43,42%</p>
                  </div>
                  
                  {/* Line down to horizontal connector */}
                  <div className="w-px h-12 bg-gray-400"></div>
                </div>

                {/* Horizontal Connector Line */}
                {/* 288px width columns (w-72) -> Center is 144px from left and right */}
                <div className="absolute bottom-0 left-[144px] right-[144px] h-px bg-gray-400"></div>
              </div>

              {/* Row 3: Vertical stem to Target */}
              <div className="w-px h-12 bg-gray-400"></div>

              {/* Row 4: Target (PT Alakasa) */}
              <div className="border border-navy bg-navy px-10 py-8 w-80 md:w-96 text-center shadow-md">
                <h3 className="text-white font-bold text-xl tracking-wider uppercase leading-snug">
                  PT. Alakasa<br/>Industrindo Tbk
                </h3>
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
