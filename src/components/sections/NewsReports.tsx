import React from 'react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const NewsReports = () => {
  const reports = [
    {
      id: 1,
      category: 'ANNUAL REPORT',
      title: 'Annual Report 2023',
      date: '30 Apr 2024',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=600&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 2,
      category: 'FINANCIAL REPORT',
      title: 'Financial Report Q1 2024',
      date: '28 Apr 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 3,
      category: 'AGM SUMMARY',
      title: 'Summary of AGM 2024',
      date: '25 Apr 2024',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&h=600&auto=format&fit=crop',
      link: '#'
    },
    {
      id: 4,
      category: 'ANNOUNCEMENT',
      title: 'Audit Committee Composition 2024',
      date: '20 Apr 2024',
      image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=800&h=600&auto=format&fit=crop',
      link: '#'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="News & Reports" 
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {reports.map((report) => (
            <Card key={report.id} className="group flex flex-col hover:shadow-xl transition-all duration-300">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={report.image} 
                  alt={report.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold tracking-wider rounded">
                    {report.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs text-steel mb-2">{report.date}</span>
                <h3 className="text-lg font-bold text-navy mb-4 font-heading group-hover:text-primary transition-colors line-clamp-2">
                  {report.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link 
                    href={report.link}
                    className="text-sm font-semibold text-primary hover:text-navy transition-colors flex items-center gap-1"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="text-steel hover:text-primary transition-colors" title="Download PDF">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
