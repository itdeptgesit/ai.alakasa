"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, Mail, Printer } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Headquarters" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact Us</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Contact Us
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Reach out to our team for business inquiries, investor relations, or general information about PT Alakasa Industrindo Tbk.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container max-w-[1200px]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              
              <div>
                <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
                  Head Office
                </h4>
                <h2 className="text-3xl font-bold text-navy mb-6 font-heading">
                  Get in Touch
                </h2>
                <div className="w-12 h-1 bg-primary mb-8"></div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Company Address</h3>
                  <p className="text-steel leading-relaxed">
                    PT. Alakasa Industrindo, Tbk<br/>
                    Jl. Pulogadung no. 4<br/>
                    Kawasan Industri Pulogadung<br/>
                    DKI Jakarta 13920, Indonesia
                  </p>
                </div>
              </div>

              {/* Phone & Fax */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-navy mb-1">Phone & Fax</h3>
                  <div className="text-steel">
                    <span className="font-semibold text-navy">Phone:</span> +62-21-4608855<br/>
                    <span className="font-semibold text-navy">Phone:</span> +62-21-31997275<br/>
                    <span className="font-semibold text-navy">Fax:</span> +62-21-4608856
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-2">Email Address</h3>
                  <a href="mailto:corsec@ai.alakasa.co.id" className="text-primary hover:underline font-medium">
                    corsec@ai.alakasa.co.id
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form & Map */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Contact Form */}
              <div className="bg-white p-8 md:p-10 border border-gray-200 shadow-sm relative">
                <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
                <h3 className="text-2xl font-bold text-navy mb-8 font-heading">Send us a message</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Subject</label>
                    <input 
                      type="text" 
                      placeholder="How can we help you?" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Write your message here..." 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="bg-navy hover:bg-primary text-white font-bold py-4 px-8 uppercase tracking-widest text-sm transition-colors w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="bg-gray-200 h-[300px] w-full border border-gray-200">
                <iframe 
                  src="https://maps.google.com/maps?q=PT.+Alakasa+Industrindo&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
