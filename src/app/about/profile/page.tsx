"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Target, Compass, Clock, Building, History } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { CustomVideoPlayer } from '@/components/ui/CustomVideoPlayer';
import { SectionTitle } from '@/components/ui/SectionTitle';

export default function ProfilePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
            <span className="text-white">Company Profile</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Company <span className="text-primary">Profile</span>
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
            Discover the heritage, vision, and mission driving PT Alakasa Industrindo Tbk towards excellence in the aluminum industry.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white">
        {/* Faint Logo Watermark */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-20 md:-left-40 w-[500px] md:w-[800px] h-[500px] md:h-[800px] opacity-[0.03] grayscale pointer-events-none z-0 select-none">
          <img 
            src="/alakasa.png" 
            alt="" 
            className="w-full h-full object-contain object-left"
          />
        </div>

        <div className="container max-w-[1200px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-primary text-sm font-bold mb-6 w-fit">
                <Target className="w-4 h-4" />
                Vision & Mission
              </div>

              {/* Vision */}
              <div className="mb-12">
                <h2 className="text-3xl font-black text-navy mb-4 font-heading">Our Vision</h2>
                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <p className="text-lg text-steel leading-relaxed font-medium">
                    "To be a company with competence in the aluminum business from upstream to downstream."
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div>
                <h2 className="text-3xl font-black text-navy mb-6 font-heading">Our Mission</h2>
                <div className="space-y-4">
                  {[
                    "To conduct research on business development from upstream to downstream in the aluminum businesses.",
                    "To empower potential resources to support business development strategy.",
                    "To attain professionalism through developing capabilities and upgrading the processes, operational and management system.",
                    "To provide added value to shareholders, customers, employees and community."
                  ].map((mission, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-soft group-hover:bg-primary group-hover:-translate-y-0.5 transition-all">
                        {idx + 1}
                      </div>
                      <p className="text-base text-steel leading-relaxed pt-1">
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corporate Video */}
            <div className="w-full overflow-hidden shadow-lg border border-gray-200">
              <CustomVideoPlayer 
                src="https://ai.alakasa.co.id/wp-content/uploads/2022/10/VID-20221019-WA0012.mp4"
                poster="https://images.unsplash.com/photo-1504917595217-d4f3e0339c8e?q=80&w=800&h=600&auto=format&fit=crop"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-32 bg-[#F8FAFC] border-t border-gray-100 relative">
        <div className="container max-w-[1200px]">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-primary text-sm font-bold mb-4 w-fit mx-auto">
              <History className="w-4 h-4" />
              Company Heritage
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4 font-heading">
              The Journey of PT Alakasa Industrindo Tbk
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              Tracing our roots from establishment to our current position as a leader in the aluminum industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="w-full relative shadow-xl rounded-3xl overflow-hidden bg-white p-2">
                <img 
                  src="https://ai.alakasa.co.id/wp-content/uploads/2022/09/20220913_144244dsss-1.jpg"
                  alt="Alakasa Company History"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
              <div className="bg-white p-6 md:p-8 border border-gray-100 shadow-sm">
                <p className="text-base text-steel leading-relaxed mb-6 text-justify">
                  PT Alakasa Industrindo Tbk (the "Company") was established within the framework of the Foreign Capital Investment Law No. 1 year 1967, as amended by Law No. 11 year 1970 and amended most recently by the Capital Investment Law No. 25 year 2007, based on notarial Deed No. 31 dated February 21, 1972 of Soeleman Ardjasasmita, S.H., notary public in Jakarta.
                </p>
                <p className="text-base text-steel leading-relaxed mb-6 text-justify">
                  The deed of establishment was approved by the Minister of Justice of the Republic of Indonesia based on his Decision Letter No. Y.A.5/214/17 dated June 19, 1973, and was published in State Gazette No. 93, Supplement No. 836 dated November 20, 1973.
                </p>
                <div className="h-px w-full bg-gray-100 my-6"></div>
                <p className="text-base text-steel leading-relaxed text-justify">
                  The Company's Articles of Association have been amended several times, includes changes to the Articles of Association of Companies that has been accordance with the Law of the Republic of Indonesia No. 40 year 2007 on Limited Liability Company in accordance with Deed No. 7 dated June 3, 2008 from Fathiah Helmi, SH, notary in Jakarta. The deed was approved by the Minister of Law and Human Rights of the Republic of Indonesia based on his Decision Letter No. AHU-70317.AH.01.02.Year 2008, and was published in State Gazette No. 13, Supplement No. 1600 dated February 14, 2011.
                </p>
                <p className="text-base text-steel leading-relaxed mt-6 text-justify">
                  The Company's Articles of Association have been amended several times and the latest amendments were based on Deed No. 18 dated September 04, 2020 of Jimmy Tanal, SH., M.Kn., Notary in Jakarta concerning amendments to Article 3, Article 11, Article 12 and Article 14. The deed was approved by the Minister of Law and Human Rights of the Republic of Indonesia based on his Decision Letter No. AHU-0064479.AH.01.02. TAHUN 2020, dated September 18, 2020.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
