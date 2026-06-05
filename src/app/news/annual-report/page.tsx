"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Download } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

const ITEMS_PER_PAGE = 8;

export default function AnnualReportPage() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const reports = [
    { year: '2025', title: 'Annual Report 2025', url: 'http://ai.alakasa.co.id/wp-content/uploads/2026/04/ANNUAL-REPORT-2025-PT.-ALAKASA-INDUSTRINDO-TBK.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg', accent: '#C8A96E' },
    { year: '2024', title: 'Annual Report 2024', url: 'https://ai.alakasa.co.id/wp-content/uploads/2025/04/Annual%20Report%202024%20PT.%20Alakasa%20Industrindo%20Tbk.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg', accent: '#4A90D9' },
    { year: '2023', title: 'Annual Report 2023', url: 'http://ai.alakasa.co.id/wp-content/uploads/2024/04/ANNUAL-REPORT-2023-AI-TBK-ALKA.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg', accent: '#C8A96E' },
    { year: '2022', title: 'Annual Report 2022', url: 'http://ai.alakasa.co.id/wp-content/uploads/2023/05/AR-ALAKASA-2022_FINAL.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg', accent: '#4A90D9' },
    { year: '2021', title: 'Annual Report 2021', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/ANNUAL-REPORT-2021-AI-Tbk.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg', accent: '#C8A96E' },
    { year: '2020', title: 'Annual Report 2020', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/ANNUAL-REPORT-2020-ALKA.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg', accent: '#4A90D9' },
    { year: '2019', title: 'Annual Report 2019', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2019-PT-Alakasa-Industrindo-Tbk.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg', accent: '#C8A96E' },
    { year: '2018', title: 'Annual Report 2018', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2018.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg', accent: '#4A90D9' },
    { year: '2017', title: 'Annual Report 2017', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2017.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg', accent: '#C8A96E' },
    { year: '2016', title: 'Annual Report 2016', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2016.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg', accent: '#4A90D9' },
    { year: '2015', title: 'Annual Report 2015', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2015.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg', accent: '#C8A96E' },
    { year: '2014', title: 'Annual Report 2014', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2014.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg', accent: '#4A90D9' },
    { year: '2013', title: 'Annual Report 2013', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2013.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg', accent: '#C8A96E' },
    { year: '2012', title: 'Annual Report 2012', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2012.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg', accent: '#4A90D9' },
    { year: '2011', title: 'Annual Report 2011', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2011.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg', accent: '#C8A96E' },
    { year: '2010', title: 'Annual Report 2010', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2010.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg', accent: '#4A90D9' },
  ];

  const totalPages = Math.ceil(reports.length / ITEMS_PER_PAGE);
  const paginatedReports = reports.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* Main Content: Book Cover Grid */}
      <section className="py-20 md:py-28 bg-[#F0F2F5]">
        <div className="container max-w-[1200px]">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {paginatedReports.map((report, index) => (
              <div key={index} className="group flex flex-col items-center">

                {/* 3D Book Wrapper */}
                <div className="relative w-full" style={{ perspective: '800px' }}>
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full"
                    style={{
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(-8deg)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg)')}
                  >
                    {/* Book Spine (left edge) */}
                    <div
                      className="absolute left-0 top-0 h-full w-[14px] z-10"
                      style={{
                        background: `linear-gradient(to right, #000000aa, ${report.accent}55, transparent)`,
                        transformOrigin: 'left center',
                      }}
                    />

                    {/* Cover Face */}
                    <div
                      className="relative w-full overflow-hidden"
                      style={{
                        height: '280px',
                        boxShadow: '6px 6px 20px rgba(0,0,0,0.35), 2px 2px 6px rgba(0,0,0,0.2)',
                      }}
                    >
                      {/* Background photo */}
                      <img
                        src={report.photo}
                        alt={report.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Dark gradient overlay — bottom to top */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                      {/* Accent top bar */}
                      <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: report.accent }} />

                      {/* Content overlay */}
                      <div className="absolute inset-0 flex flex-col justify-between p-4">
                        {/* Top: Logo mark */}
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3" style={{ background: report.accent }} />
                          <span className="text-white/70 text-[8px] font-black tracking-[0.3em] uppercase">ALKA</span>
                        </div>

                        {/* Bottom: Year + title */}
                        <div>
                          <div
                            className="text-5xl font-black leading-none mb-1"
                            style={{ color: report.accent, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                          >
                            {report.year}
                          </div>
                          <div className="text-white/60 text-[8px] font-bold tracking-[0.25em] uppercase mb-2">
                            Annual Report
                          </div>
                          <div
                            className="w-8 h-[2px] mb-2"
                            style={{ background: report.accent }}
                          />
                          <p className="text-white/50 text-[7px] uppercase tracking-wider leading-tight">
                            PT Alakasa Industrindo Tbk
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Below book: label + download */}
                <div className="w-full pt-4 text-left">
                  <p className="text-sm font-bold text-navy mb-2">{report.title}</p>
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-widest hover:gap-3 transition-all duration-200"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-1">
              {/* Prev */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm font-bold"
              >
                ‹
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-9 h-9 flex items-center justify-center border text-sm font-bold transition-colors ${
                    page === currentPage
                      ? 'bg-navy border-navy text-white'
                      : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm font-bold"
              >
                ›
              </button>
            </div>
          )}

          {/* Page info */}
          <p className="text-center text-xs text-gray-400 mt-4 tracking-widest uppercase">
            Page {currentPage} of {totalPages} &mdash; {reports.length} Reports
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
