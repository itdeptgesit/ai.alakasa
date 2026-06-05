"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Landmark, Phone, Printer, Mail, FileText } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { SectionTitle } from '@/components/ui/SectionTitle';

export default function LegalPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const institutions = [
    {
      role: 'Biro Administrasi Efek',
      name: 'PT. Raya Saham Registra',
      addressLine1: 'Gedung Plaza Sentral Lt. 2',
      addressLine2: 'Jl. Jend. Sudirman Kav. 47-48 Jakarta 12930',
      phone: '(62-21) 2525666',
      fax: '(62-21) 2525028'
    },
    {
      role: 'Auditor Kantor Akuntan Publik',
      name: 'Kanaka Puradiredja, Suhartono',
      addressLine1: '18 Office Park Tower A, 20th Floor',
      addressLine2: 'Jl. TB. Simatupang No. 18 Pasar Minggu\nJakarta 12520',
      phone: '(62-21) 22708292',
      fax: '(62-21) 22708299'
    },
    {
      role: 'Notary',
      name: 'Jimmi Tanal, S.H., M.Kn.',
      addressLine1: "Gedung The 'H' Tower, Lantai 20, Suite a & G",
      addressLine2: 'Jl. H.R. Rasuna Said Kavling C-20\nKuningan Jakarta Selatan 12940',
      phone: '(62-21) 29533377-78-79-80-81-82',
      emails: ['t_jimmy78@yahoo.co.id', 'jimmytanal@gmail.com']
    }
  ];

  const articlesData = [
    {
      title: 'Establishment',
      number: '31',
      date: 'February 21, 1972',
      notary: 'Soeleman Ardjasasmita, S.H.',
      approvalNumber: 'Y.A.5/214/17',
      approvalDate: 'June 19, 1973'
    },
    {
      title: 'Latest amendments to the articles of association',
      number: '18',
      date: 'September 04, 2020',
      notary: 'Jimmy Tanal, S.H., M.Kn',
      approvalNumber: 'AHU-0064479.AH.01.02 Tahun 2020',
      approvalDate: '18 September 2022'
    },
    {
      title: 'Board of Management',
      number: '186',
      date: 'June 28, 2024',
      notary: 'Monica Kusumadevi, SH., M.Kn',
      approvalNumber: 'AHU-AH.01.09-0224063',
      approvalDate: 'July 09, 2024'
    }
  ];

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
            <span className="text-white">Legal & Compliance</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Legal & <span className="text-primary">Compliance</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Ensuring transparency, accountability, and regulatory adherence through our corporate legal framework and supporting institutions.
          </p>
        </div>
      </section>

      {/* Capital Market Institutions */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container max-w-[1200px]">
          <SectionTitle 
            title="Capital Market Supporting Institution" 
            subtitle="Professional institutions partnering with us to ensure compliance and transparency."
            centered
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {institutions.map((inst, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <h3 className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-6 min-h-[2.5rem]">
                    {inst.role}
                  </h3>
                  
                  <div className="flex items-start gap-4">
                    <Landmark className="w-5 h-5 text-navy shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-bold text-navy leading-snug mb-3">
                        {inst.name}
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {inst.addressLine1}
                        <br />
                        {inst.addressLine2.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < inst.addressLine2.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto p-6 lg:p-8 bg-gray-50 flex flex-col justify-center gap-4 text-sm border-t border-gray-200 min-h-[140px]">
                  {inst.phone && (
                    <div className="flex items-start gap-4">
                      <Phone className="w-4 h-4 text-navy shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div className="flex items-start w-full">
                        <strong className="text-navy font-bold uppercase tracking-wider text-[11px] shrink-0 w-14 mt-0.5">Phone</strong> 
                        <span className="text-gray-800">{inst.phone}</span>
                      </div>
                    </div>
                  )}
                  
                  {inst.fax && (
                    <div className="flex items-start gap-4">
                      <Printer className="w-4 h-4 text-navy shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div className="flex items-start w-full">
                        <strong className="text-navy font-bold uppercase tracking-wider text-[11px] shrink-0 w-14 mt-0.5">Fax</strong> 
                        <span className="text-gray-800">{inst.fax}</span>
                      </div>
                    </div>
                  )}

                  {inst.emails && (
                    <div className="flex items-start gap-4">
                      <Mail className="w-4 h-4 text-navy shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div className="flex flex-col gap-1 w-full">
                        {inst.emails.map((email, idx) => (
                          <div key={idx} className="flex items-start w-full">
                            {idx === 0 ? (
                              <strong className="text-navy font-bold uppercase tracking-wider text-[11px] shrink-0 w-14 mt-0.5">Email</strong>
                            ) : (
                              <div className="w-14 shrink-0"></div>
                            )}
                            <a href={`mailto:${email}`} className="text-gray-800 hover:text-primary transition-colors break-all">
                              {email}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Articles of Association Section */}
      <section className="py-20 md:py-32 bg-[#F8FAFC] border-t border-gray-100">
        <div className="container max-w-[1200px]">
          
          <SectionTitle 
            title="Articles of Association" 
            subtitle="Details of the company's legal establishment and related ministerial approvals."
            centered
          />
          
          <p className="text-center text-xs text-gray-400 mb-3 md:hidden">← Scroll sideways to view full table →</p>
          <div className="mt-16 bg-white border border-gray-300 shadow-sm overflow-hidden">
            <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-navy text-white border-b border-white/10">
                    <th className="py-5 px-6 font-semibold text-sm w-[20%] border-r border-white/10" rowSpan={2}>Article of Associations</th>
                    <th className="py-5 px-6 font-semibold text-sm text-center border-r border-white/10 w-[8%]" rowSpan={2}>Number</th>
                    <th className="py-5 px-6 font-semibold text-sm border-r border-white/10 w-[15%]" rowSpan={2}>Date</th>
                    <th className="py-5 px-6 font-semibold text-sm border-r border-white/10 w-[20%]" rowSpan={2}>Notary</th>
                    <th className="py-3 px-6 font-semibold text-sm text-center" colSpan={2}>The Minister of Law and Human Rights R.I Approval</th>
                  </tr>
                  <tr className="bg-navy/95 text-white">
                    <th className="py-3 px-6 font-semibold text-xs text-center border-r border-white/10">Number</th>
                    <th className="py-3 px-6 font-semibold text-xs text-center">Date</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {articlesData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors">
                      <td className="py-6 px-6 text-navy font-bold align-top">
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          {item.title}
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center text-steel font-medium align-top">{item.number}</td>
                      <td className="py-6 px-6 text-steel align-top">{item.date}</td>
                      <td className="py-6 px-6 text-steel align-top">{item.notary}</td>
                      <td className="py-6 px-6 text-steel text-center align-top"><code className="bg-gray-50 px-2 py-1 rounded border border-gray-100">{item.approvalNumber}</code></td>
                      <td className="py-6 px-6 text-steel text-center align-top">{item.approvalDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </section>

    </main>
  );
}
