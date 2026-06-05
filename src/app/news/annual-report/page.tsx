"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, FileText, Download } from 'lucide-react';
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
    { year: '2024', title: 'Annual Report 2024', url: 'https://ai.alakasa.co.id/wp-content/uploads/2025/04/Annual Report 2024 PT. Alakasa Industrindo Tbk.pdf' },
    { year: '2023', title: 'Annual Report 2023', url: 'http://ai.alakasa.co.id/wp-content/uploads/2024/04/ANNUAL-REPORT-2023-AI-TBK-ALKA.pdf' },
    { year: '2022', title: 'Annual Report 2022', url: 'http://ai.alakasa.co.id/wp-content/uploads/2023/05/AR-ALAKASA-2022_FINAL.pdf' },
    { year: '2021', title: 'Annual Report 2021', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/ANNUAL-REPORT-2021-AI-Tbk.pdf' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Reports" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">News & Report</span>
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

      {/* Main Content Area */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container max-w-[1000px]">
          
          <div className="flex items-center gap-3 mb-4 justify-center">
            <FileText className="w-6 h-6 text-primary" />
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Document Archive
            </h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 font-heading text-center">
            Download Annual Reports
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <a 
                key={index}
                href={report.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-primary flex items-center justify-center font-bold text-lg border border-blue-100 group-hover:bg-primary group-hover:text-white transition-colors">
                    {report.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy group-hover:text-primary transition-colors">{report.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">PDF Document</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
