"use client";

import React from 'react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export const NewsReports = () => {
  const { t } = useLanguage();

  const reports = [
    {
      id: 1,
      category: t.news.catAnnual,
      title: t.news.title1,
      date: '30 Apr 2024',
      link: '#'
    },
    {
      id: 2,
      category: t.news.catFinancial,
      title: t.news.title2,
      date: '28 Apr 2024',
      link: '#'
    },
    {
      id: 3,
      category: t.news.catAgm,
      title: t.news.title3,
      date: '25 Apr 2024',
      link: '#'
    },
    {
      id: 4,
      category: t.news.catAnnouncement,
      title: t.news.title4,
      date: '20 Apr 2024',
      link: '#'
    }
  ];

  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="container max-w-[1000px]">
        <SectionTitle 
          title={t.news.title} 
          centered
        />
        
        <div className="mt-14 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {reports.map((report, index) => (
            <div 
              key={report.id} 
              className={`group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 hover:bg-[#F8FAFC] transition-colors ${
                index !== reports.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex-1 md:pr-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
                    {report.category}
                  </span>
                  <span className="text-sm text-steel font-medium flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    {report.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy font-heading group-hover:text-primary transition-colors">
                  <Link href={report.link}>
                    {report.title}
                  </Link>
                </h3>
              </div>
              
              <div className="mt-6 md:mt-0 flex items-center gap-6">
                 <Link 
                    href={report.link}
                    className="text-sm font-semibold text-primary hover:text-navy transition-colors flex items-center gap-1.5"
                  >
                    {t.news.readMore} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="w-px h-8 bg-gray-200 hidden md:block"></div>
                  <button className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-steel group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-gray-100 group-hover:border-primary" title={t.news.downloadPdf}>
                    <Download className="w-5 h-5" />
                  </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/news" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-primary transition-colors border-b-2 border-navy hover:border-primary pb-1">
            {t.news.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
