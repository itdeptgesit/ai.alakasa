"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, LineChart, Download } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function FinancialStatementPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const statements = [
    { year: '2025', title: 'Financial Statement 2025', url: 'http://ai.alakasa.co.id/wp-content/uploads/2026/04/Lapkeu-Tahunan-Audited-31-Des-2025-AI-Tbk.pdf' },
    { year: '2024', title: 'Financial Statement 2024', url: 'https://ai.alakasa.co.id/wp-content/uploads/2025/03/Lapkeu-Tahunan-Audited-31-Des-2024-AI-Tbk.pdf' },
    { year: '2023', title: 'Financial Statement 2023', url: 'http://ai.alakasa.co.id/wp-content/uploads/2024/03/Lap-Keu-Tahunan-Audited-Des-2023.pdf' },
    { year: '2022', title: 'Financial Statement 2022', url: 'http://ai.alakasa.co.id/wp-content/uploads/2023/03/Laporan-Keuangan-Konsolidasian-PT-Alakasa-Industrindo-Tbk-31-Desember-2022.pdf' },
    { year: '2021', title: 'Financial Statement 2021', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Lap-Keu-Audited-31-Des-2021-ALKA-Tbk.pdf' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
            alt="Financial Statements" 
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
            <span className="text-white">Financial Statement</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Financial Statement
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Detailed, audited financial records showcasing the robust economic health and transparent fiscal management of our company.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container max-w-[1000px]">
          
          <div className="flex items-center gap-3 mb-4 justify-center">
            <LineChart className="w-6 h-6 text-primary" />
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Audited Records
            </h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 font-heading text-center">
            Download Financial Statements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {statements.map((doc, index) => (
              <a 
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-primary flex items-center justify-center font-bold text-lg border border-blue-100 group-hover:bg-primary group-hover:text-white transition-colors">
                    {doc.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy group-hover:text-primary transition-colors">{doc.title}</h3>
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
