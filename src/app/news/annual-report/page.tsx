"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Download } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function AnnualReportPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const reports = [
    { year: '2025', title: 'Annual Report 2025', url: 'http://ai.alakasa.co.id/wp-content/uploads/2026/04/ANNUAL-REPORT-2025-PT.-ALAKASA-INDUSTRINDO-TBK.pdf' },
    { year: '2024', title: 'Annual Report 2024', url: 'https://ai.alakasa.co.id/wp-content/uploads/2025/04/Annual%20Report%202024%20PT.%20Alakasa%20Industrindo%20Tbk.pdf' },
    { year: '2023', title: 'Annual Report 2023', url: 'http://ai.alakasa.co.id/wp-content/uploads/2024/04/ANNUAL-REPORT-2023-AI-TBK-ALKA.pdf' },
    { year: '2022', title: 'Annual Report 2022', url: 'http://ai.alakasa.co.id/wp-content/uploads/2023/05/AR-ALAKASA-2022_FINAL.pdf' },
    { year: '2021', title: 'Annual Report 2021', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/ANNUAL-REPORT-2021-AI-Tbk.pdf' },
    { year: '2020', title: 'Annual Report 2020', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/ANNUAL-REPORT-2020-ALKA.pdf' },
    { year: '2019', title: 'Annual Report 2019', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2019-PT-Alakasa-Industrindo-Tbk.pdf' },
    { year: '2018', title: 'Annual Report 2018', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2018.pdf' },
    { year: '2017', title: 'Annual Report 2017', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2017.pdf' },
    { year: '2016', title: 'Annual Report 2016', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2016.pdf' },
    { year: '2015', title: 'Annual Report 2015', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2015.pdf' },
    { year: '2014', title: 'Annual Report 2014', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2014.pdf' },
    { year: '2013', title: 'Annual Report 2013', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2013.pdf' },
    { year: '2012', title: 'Annual Report 2012', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2012.pdf' },
    { year: '2011', title: 'Annual Report 2011', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2011.pdf' },
    { year: '2010', title: 'Annual Report 2010', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2010.pdf' },
  ];

  // Cover palette: cycle through these for visual variety
  const coverStyles = [
    { bg: 'bg-[#0B1F3A]', yearColor: 'text-[#C8A96E]', stripe: 'bg-[#C8A96E]' },
    { bg: 'bg-[#1A3A5C]', yearColor: 'text-[#7BB8F0]', stripe: 'bg-[#4A90D9]' },
    { bg: 'bg-[#0D2B1E]', yearColor: 'text-[#7DD4A8]', stripe: 'bg-[#4CAF7D]' },
    { bg: 'bg-[#2C1A0E]', yearColor: 'text-[#F0A865]', stripe: 'bg-[#D4813A]' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg" 
            alt="Corporate Reports" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">News &amp; Report</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Annual Report</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Annual Report
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Comprehensive overviews of our financial performance, operational achievements, and strategic outlook over the years.
          </p>
        </div>
      </section>

      {/* Main Content: Cover Grid */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container max-w-[1200px]">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {reports.map((report, index) => {
              const style = coverStyles[index % coverStyles.length];
              return (
                <div key={index} className="group flex flex-col">
                  {/* Book Cover */}
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex flex-col justify-between p-5 h-[220px] md:h-[260px] ${style.bg} overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl cursor-pointer`}
                  >
                    {/* Top accent stripe */}
                    <div className={`absolute top-0 left-0 w-full h-1 ${style.stripe}`} />

                    {/* Top: Brand mark */}
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 ${style.stripe} opacity-80`} />
                      <span className="text-white/50 text-[9px] font-bold tracking-[0.25em] uppercase">ALKA</span>
                    </div>

                    {/* Middle: Year */}
                    <div>
                      <div className={`text-5xl md:text-6xl font-black leading-none mb-1 ${style.yearColor}`}>
                        {report.year}
                      </div>
                      <div className="text-white/40 text-[9px] font-bold tracking-[0.3em] uppercase">
                        Annual Report
                      </div>
                    </div>

                    {/* Bottom: Company name */}
                    <div>
                      <div className={`w-6 h-[2px] ${style.stripe} mb-2`} />
                      <p className="text-white/35 text-[8px] leading-tight uppercase tracking-wider">
                        PT Alakasa<br />Industrindo Tbk
                      </p>
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute -bottom-8 -right-8 w-24 h-24 ${style.stripe} opacity-10`} />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>

                  {/* Below Cover: Title & Download */}
                  <div className="pt-4 pb-2">
                    <p className="text-sm font-bold text-navy mb-2">{report.title}</p>
                    <a
                      href={report.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-widest hover:gap-2.5 transition-all duration-200"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
