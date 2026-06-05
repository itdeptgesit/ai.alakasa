"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function SecretaryPage() {
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Office" 
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
            <span className="text-white">Corporate Secretary</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Corporate Secretary
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            The central liaison ensuring compliance, transparency, and effective communication between the Company, shareholders, and regulatory authorities.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container max-w-[1200px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Profile Card */}
            <div className="lg:col-span-4">
              <div className="bg-white border border-gray-200 shadow-md p-8 relative overflow-hidden sticky top-32">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10"></div>
                
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-6">
                    <span className="text-4xl font-bold text-primary">FH</span>
                  </div>
                  <h3 className="text-2xl font-black text-navy tracking-tight mb-2">Fendra Hartanto</h3>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                    Corporate Secretary
                  </span>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-navy mb-1">Office Address</p>
                      <p className="text-sm text-steel leading-relaxed">The City Tower Lantai 27, Jl. M.H. Thamrin No.81, Jakarta 10310</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-navy mb-1">Email</p>
                      <a href="mailto:corporate.secretary@alakasa.co.id" className="text-sm text-primary hover:underline">
                        corporate.secretary@alakasa.co.id
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Details */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              
              {/* About */}
              <div>
                <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
                  Profile Overview
                </h4>
                <h2 className="text-3xl font-bold text-navy mb-6 font-heading">
                  About Fendra Hartanto
                </h2>
                <div className="w-12 h-1 bg-primary mb-8"></div>
                <div className="space-y-4">
                  <p className="text-lg text-steel leading-relaxed text-justify">
                    Aged 47 years old, Mr. Fendra Hartanto has been serving as the Corporate Secretary since July 3, 2023. He brings extensive experience in corporate governance, financial auditing, and strategic management to ensure PT Alakasa Industrindo Tbk maintains the highest standards of transparency and regulatory compliance.
                  </p>
                  <p className="text-lg text-steel leading-relaxed text-justify">
                    He has no affiliation with the members of the Board of Commissioners and the Board of Directors, as well as the majority shareholders.
                  </p>
                </div>
              </div>

              {/* Education & Career */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Education */}
                <div className="bg-white p-8 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-navy font-heading">Education</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                      <p className="text-steel text-sm leading-relaxed">
                        <strong className="text-navy">Bachelor's Degree in Management</strong><br/>
                        Widya Mandala Catholic University, Surabaya (2000)
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Experience */}
                <div className="bg-white p-8 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-navy font-heading">Work Experience</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                      <p className="text-steel text-sm leading-relaxed">
                        <strong className="text-navy">Business Manager</strong><br/>
                        PT. Teras Global Gemilang (2018 - 2023)
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                      <p className="text-steel text-sm leading-relaxed">
                        <strong className="text-navy">GM Strategic Control</strong><br/>
                        MNC Group (2015 - 2017)
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                      <p className="text-steel text-sm leading-relaxed">
                        <strong className="text-navy">Manager Audit</strong><br/>
                        Aryanto, Amir Jusuf, Mawar & Saptoto Public Accounting Firm (2003 - 2012)
                      </p>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
