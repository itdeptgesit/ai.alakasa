"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Megaphone, Download } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function AnnouncementPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const announcements = [
    { 
      date: 'June 2024', 
      title: 'Proof of GMS Announcement 2024', 
      subtitle: 'Bukti Iklan Pengumuman RUPS 2024',
      url: 'https://ai.alakasa.co.id/wp-content/uploads/2024/06/Bukti-Iklan-Pengumuman-RUPS-2024.pdf' 
    },
    { 
      date: 'June 2024', 
      title: 'Proof of GMS Calling 2024', 
      subtitle: 'Bukti Iklan Pemanggilan RUPS 2024',
      url: 'https://ai.alakasa.co.id/wp-content/uploads/2024/06/Bukti-Iklan-Pemanggilan-RUPS-2024.pdf' 
    },
    { 
      date: 'June 2024', 
      title: 'General Meeting of Shareholders Rule 2024', 
      subtitle: 'Tata Tertib RUPS 2024',
      url: 'https://ai.alakasa.co.id/wp-content/uploads/2024/06/Tata-Tertib-RUPS-2024.pdf' 
    },
    { 
      date: 'June 2024', 
      title: 'Curriculum Vitae Board of Directors and Commissioner', 
      subtitle: 'Curriculum Vitae Calon Anggota Direksi & Komisaris',
      url: 'https://ai.alakasa.co.id/wp-content/uploads/2024/06/Curriculum-Vitae-Calon-Anggota-Direksi-Komisaris.pdf' 
    },
    { 
      date: 'May 2023', 
      title: 'Proof of Advertising Calling EGM & AGM 2023', 
      subtitle: 'Bukti Iklan Pemanggilan RUPSTLB 2023',
      url: 'http://ai.alakasa.co.id/wp-content/uploads/2023/05/Bukti-Iklan-Pemanggilan-RUPSTLB-2023.pdf' 
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Announcements" 
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
            <span className="text-white">Announcement</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Announcement
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Official corporate announcements, public disclosures, and notices for shareholders and stakeholders.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container max-w-[1000px]">
          
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Megaphone className="w-6 h-6 text-primary" />
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Public Disclosures
            </h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 font-heading text-center">
            Corporate Announcements
          </h2>

          <div className="flex flex-col gap-4">
            {announcements.map((doc, index) => (
              <a 
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start md:items-center gap-6">
                  <div className="w-24 shrink-0 text-center border-r border-gray-100 pr-6 hidden md:block">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">{doc.date.split(' ')[0]}</p>
                    <p className="text-xl font-black text-navy">{doc.date.split(' ')[1]}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold md:hidden mb-2">{doc.date}</p>
                    <h3 className="font-bold text-lg text-navy group-hover:text-primary transition-colors">{doc.title}</h3>
                    <p className="text-sm text-steel mt-1 italic">{doc.subtitle}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors ml-auto md:ml-0">
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
