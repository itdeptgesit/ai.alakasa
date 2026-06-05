"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, UserCheck } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function CommitteesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Committees" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Corporate Governance</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Committees</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Committees & <br/>Internal Audit
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Independent oversight bodies ensuring transparency, accountability, and the effective implementation of our corporate governance principles.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      
      {/* Audit Committee Section */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="container max-w-[1200px]">
          
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Supervision & Compliance
            </h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-heading">
            Audit Committee
          </h2>
          <div className="w-12 h-1 bg-primary mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Text Intro */}
            <div className="lg:col-span-5">
              <p className="text-lg text-steel leading-relaxed text-justify mb-6">
                The Audit Committee is formed by and is responsible to the Board of Commissioners in helping to carry out their duties and functions. The Audit Committee consists of at least 3 (three) members comprising Independent Commissioners and external Independent Parties.
              </p>
              <p className="text-lg text-steel leading-relaxed text-justify">
                The purpose of establishing the Audit Committee is to conduct an independent review regarding the financial information released by the Company, evaluate the Company's internal control system, and ensure compliance with applicable laws and regulations.
              </p>
            </div>

            {/* Members Grid */}
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold text-navy mb-8 font-heading">Composition of the Audit Committee</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Chairman */}
                <div className="bg-[#F8FAFC] border border-gray-100 p-6 shadow-sm flex flex-col justify-between md:col-span-2">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                      Chairman
                    </span>
                    <h4 className="text-xl font-bold text-navy mb-1">Antonius Wahyu Djatmiko</h4>
                    <p className="text-sm text-steel">Independent Commissioner</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Appointed</p>
                    <p className="text-sm font-medium text-navy">July 03, 2024</p>
                  </div>
                </div>

                {/* Member 1 */}
                <div className="bg-white border border-gray-100 p-6 shadow-sm flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider mb-3">
                      Member
                    </span>
                    <h4 className="text-lg font-bold text-navy mb-1">Pipin Syaripin</h4>
                    <p className="text-sm text-steel">Independent Party</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Appointed</p>
                    <p className="text-sm font-medium text-navy">July 04, 2023</p>
                  </div>
                </div>

                {/* Member 2 */}
                <div className="bg-white border border-gray-100 p-6 shadow-sm flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider mb-3">
                      Member
                    </span>
                    <h4 className="text-lg font-bold text-navy mb-1">Parawinata Naidi Gaing</h4>
                    <p className="text-sm text-steel">Independent Party</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Appointed</p>
                    <p className="text-sm font-medium text-navy">July 04, 2023</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Audit Unit Section */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container max-w-[1200px]">
          
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="w-6 h-6 text-primary" />
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Operational Oversight
            </h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-heading">
            Unit Internal Audit
          </h2>
          <div className="w-12 h-1 bg-primary mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Image/Profile */}
            <div className="w-full">
              <div className="bg-white border border-gray-200 shadow-md p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10"></div>
                <h3 className="text-xl font-bold text-navy mb-6 font-heading">Head of Internal Audit</h3>
                
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-sm shrink-0">
                    <span className="text-2xl font-bold text-primary">MM</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-navy tracking-tight mb-1">Merly Miselly</h4>
                    <p className="text-steel font-medium">Internal Audit Unit Leader</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <p className="text-lg text-steel leading-relaxed text-justify">
                  The Internal Audit Unit is an independent entity within the Company tasked with providing assurance and consultation that are independent and objective. It is designed to add value and improve the Company's operations.
                </p>
                <p className="text-lg text-steel leading-relaxed text-justify">
                  The Internal Audit Unit helps the Company achieve its objectives by bringing a systematic and disciplined approach to evaluating and improving the effectiveness of risk management, control, and governance processes. The Head of the Internal Audit Unit is appointed and dismissed by the President Director with the approval of the Board of Commissioners.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
