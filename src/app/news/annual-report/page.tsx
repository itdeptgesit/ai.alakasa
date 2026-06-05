"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Download } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

const ITEMS_PER_PAGE = 8;

const reports = [
  { year: '2025', title: 'Annual Report 2025', url: 'http://ai.alakasa.co.id/wp-content/uploads/2026/04/ANNUAL-REPORT-2025-PT.-ALAKASA-INDUSTRINDO-TBK.pdf',  photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg',   panel: '#0B1F3A', accent: '#C8A96E' },
  { year: '2024', title: 'Annual Report 2024', url: 'https://ai.alakasa.co.id/wp-content/uploads/2025/04/Annual%20Report%202024%20PT.%20Alakasa%20Industrindo%20Tbk.pdf', photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg', panel: '#0B1F3A', accent: '#4A90D9' },
  { year: '2023', title: 'Annual Report 2023', url: 'http://ai.alakasa.co.id/wp-content/uploads/2024/04/ANNUAL-REPORT-2023-AI-TBK-ALKA.pdf',                   photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg',   panel: '#0B1F3A', accent: '#C8A96E' },
  { year: '2022', title: 'Annual Report 2022', url: 'http://ai.alakasa.co.id/wp-content/uploads/2023/05/AR-ALAKASA-2022_FINAL.pdf',                             photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg',   panel: '#0B1F3A', accent: '#4A90D9' },
  { year: '2021', title: 'Annual Report 2021', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/ANNUAL-REPORT-2021-AI-Tbk.pdf',                         photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg',   panel: '#112B4A', accent: '#C8A96E' },
  { year: '2020', title: 'Annual Report 2020', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/ANNUAL-REPORT-2020-ALKA.pdf',                           photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg', panel: '#112B4A', accent: '#4A90D9' },
  { year: '2019', title: 'Annual Report 2019', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2019-PT-Alakasa-Industrindo-Tbk.pdf',     photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg',   panel: '#112B4A', accent: '#C8A96E' },
  { year: '2018', title: 'Annual Report 2018', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2018.pdf',                                photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg',   panel: '#112B4A', accent: '#4A90D9' },
  { year: '2017', title: 'Annual Report 2017', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2017.pdf',                                photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg',   panel: '#0B1F3A', accent: '#C8A96E' },
  { year: '2016', title: 'Annual Report 2016', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2016.pdf',                                photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg', panel: '#0B1F3A', accent: '#4A90D9' },
  { year: '2015', title: 'Annual Report 2015', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2015.pdf',                                photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg',   panel: '#0B1F3A', accent: '#C8A96E' },
  { year: '2014', title: 'Annual Report 2014', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2014.pdf',                                photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg',   panel: '#0B1F3A', accent: '#4A90D9' },
  { year: '2013', title: 'Annual Report 2013', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2013.pdf',                                photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg',   panel: '#112B4A', accent: '#C8A96E' },
  { year: '2012', title: 'Annual Report 2012', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2012.pdf',                                photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg', panel: '#112B4A', accent: '#4A90D9' },
  { year: '2011', title: 'Annual Report 2011', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2011.pdf',                                photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg',   panel: '#112B4A', accent: '#C8A96E' },
  { year: '2010', title: 'Annual Report 2010', url: 'http://ai.alakasa.co.id/wp-content/uploads/2022/09/Annual-Report-2010.pdf',                                photo: 'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg',   panel: '#112B4A', accent: '#4A90D9' },
];

export default function AnnualReportPage() {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

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

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img src="https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg" alt="Corporate Reports" className="w-full h-full object-cover grayscale" />
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">Annual Report</h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Comprehensive overviews of our financial performance, operational achievements, and strategic outlook over the years.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-[1200px]">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {paginatedReports.map((r, i) => (
              <div key={i} className="group flex flex-col">

                {/* Book Cover */}
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                  style={{
                    boxShadow: '4px 4px 18px rgba(0,0,0,0.22), -2px 0 6px rgba(0,0,0,0.12)',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '8px 12px 32px rgba(0,0,0,0.32), -2px 0 6px rgba(0,0,0,0.12)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 18px rgba(0,0,0,0.22), -2px 0 6px rgba(0,0,0,0.12)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Spine shadow */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[8px] z-20"
                    style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.05) 70%, transparent)' }}
                  />

                  {/* Cover face — A4 portrait ratio */}
                  <div className="relative overflow-hidden" style={{ paddingTop: '141%' }}>
                    <div className="absolute inset-0">

                      {/* Top photo section */}
                      <img
                        src={r.photo}
                        alt={r.title}
                        className="absolute top-0 left-0 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ height: '60%', filter: 'brightness(0.85)' }}
                      />

                      {/* Fade from photo into panel */}
                      <div
                        className="absolute left-0 right-0 h-10 z-10"
                        style={{ top: 'calc(60% - 20px)', background: `linear-gradient(to bottom, transparent, ${r.panel})` }}
                      />

                      {/* Bottom branding panel */}
                      <div
                        className="absolute bottom-0 left-0 right-0 flex flex-col justify-between px-4 pt-3 pb-5"
                        style={{ top: '60%', background: r.panel }}
                      >
                        <div className="w-10 h-[2px]" style={{ background: r.accent }} />
                        <div>
                          <div className="text-4xl font-black" style={{ color: r.accent, lineHeight: 1 }}>
                            {r.year}
                          </div>
                          <div className="text-white/55 text-[9px] font-bold tracking-[0.2em] uppercase mt-1.5">
                            Annual Report
                          </div>
                        </div>
                        <div className="text-white/30 text-[8px] uppercase tracking-wider leading-tight">
                          PT Alakasa<br />Industrindo Tbk
                        </div>
                      </div>

                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] z-10" style={{ background: r.accent }} />
                    </div>
                  </div>
                </a>

                {/* Title + download below */}
                <div className="pt-4">
                  <p className="text-sm font-bold text-navy leading-snug mb-2">{r.title}</p>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-widest hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm font-bold"
              >‹</button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-9 h-9 flex items-center justify-center border text-sm font-bold transition-colors ${
                    page === currentPage
                      ? 'bg-navy border-navy text-white'
                      : 'border-gray-300 text-gray-600 hover:border-primary hover:text-primary'
                  }`}
                >{page}</button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center border border-gray-300 text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm font-bold"
              >›</button>
            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-4 tracking-widest uppercase">
            Page {currentPage} of {totalPages} &mdash; {reports.length} Reports
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
