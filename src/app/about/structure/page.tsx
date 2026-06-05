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
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -left-40 top-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -right-40 top-80 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container max-w-[1200px] relative z-10">
          <SectionTitle 
            title="Ownership Structure" 
            subtitle="The organizational hierarchy and stakeholder distribution of PT Alakasa Industrindo Tbk."
            centered
          />
          
          {/* CSS Chart Container */}
          <div className="mt-16 w-full max-w-5xl mx-auto p-8 md:p-12 lg:p-16 bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-x-auto">
            <div className="min-w-[800px] flex flex-col items-center relative">
              
              {/* Top Level Branches */}
              <div className="flex items-end justify-center gap-16 md:gap-32 w-full relative z-10">
                
                {/* Left Branch: Soetoyo Family -> PT Gesit Perkasa */}
                <div className="flex flex-col items-center w-80 relative group">
                  {/* Soetoyo Family Node */}
                  <div className="bg-gradient-to-b from-[#F8FAFC] to-white p-4 rounded-2xl shadow-sm border border-gray-100 w-56 text-center hover:shadow-md transition-all duration-300 relative z-20">
                    <h3 className="text-navy font-bold text-base leading-tight">Soetoyo Family</h3>
                  </div>
                  
                  {/* Vertical Line from Soetoyo */}
                  <div className="w-[2px] h-10 bg-gradient-to-b from-gray-200 to-primary/30 relative z-10"></div>
                  
                  {/* PT Gesit Perkasa Node */}
                  <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgb(0,0,0,0.06)] border border-gray-100 w-full text-center hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 relative z-20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-blue-400"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <h3 className="text-navy font-bold text-xl lg:text-2xl leading-tight mb-4 relative z-10">PT. Gesit Perkasa</h3>
                    <div className="inline-flex items-center justify-center bg-blue-50/80 px-6 py-2 rounded-full relative z-10">
                      <span className="text-primary font-black text-3xl tracking-tight">56,58%</span>
                    </div>
                  </div>
                  
                  {/* Vertical line from Gesit down */}
                  <div className="w-[2px] h-16 bg-primary/20 relative z-10"></div>
                </div>

                {/* Right Branch: Masyarakat */}
                <div className="flex flex-col items-center w-80 relative group">
                  {/* Masyarakat Node */}
                  <div className="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgb(0,0,0,0.06)] border border-gray-100 w-full text-center hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 relative z-20 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-steel to-gray-400"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <h3 className="text-navy font-bold text-xl lg:text-2xl leading-tight mb-1 relative z-10">Masyarakat</h3>
                    <p className="text-xs font-medium text-gray-400 mb-5 relative z-10">(Masing-masing di bawah 5%)</p>
                    
                    <div className="inline-flex items-center justify-center bg-gray-50 px-6 py-2 rounded-full border border-gray-100 relative z-10">
                      <span className="text-steel font-black text-3xl tracking-tight">43,42%</span>
                    </div>
                  </div>
                  
                  {/* Vertical line from Masyarakat down */}
                  <div className="w-[2px] h-16 bg-primary/20 relative z-10"></div>
                </div>

                {/* Horizontal Connector Line */}
                {/* Calculate exact width to span between the centers of the two 320px wide columns (w-80 = 320px) */}
                <div className="absolute bottom-[64px] left-1/2 -translate-x-1/2 w-[448px] h-[2px] bg-primary/20 z-0 flex justify-between items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40 -ml-1.5"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.5)] absolute left-1/2 -translate-x-1/2"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40 -mr-1.5"></div>
                </div>
              </div>

              {/* Bottom Level: Target (PT Alakasa Industrindo) */}
              <div className="flex flex-col items-center w-80 lg:w-[400px] relative -mt-[64px] z-20 group">
                {/* Vertical line from horizontal connector down to target */}
                <div className="w-[2px] h-16 bg-gradient-to-b from-primary/40 to-primary relative z-10"></div>
                
                {/* Alakasa Main Node */}
                <div className="bg-navy p-8 md:p-10 rounded-[2rem] shadow-[0_20px_40px_rgba(6,18,36,0.15)] border border-white/10 w-full text-center hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(37,99,235,0.25)] transition-all duration-500 relative overflow-hidden">
                  {/* Decorative mesh/gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50"></div>
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-20"></div>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <Landmark className="w-8 h-8 text-white drop-shadow-md" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-white font-black text-2xl lg:text-3xl leading-tight font-heading relative z-10 tracking-wide drop-shadow-sm">
                    PT. Alakasa<br/>Industrindo Tbk
                  </h3>
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
