import React from 'react';
import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1920&h=1080&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-heading">
            Building Indonesia’s Aluminum Future With Global Standards
          </h1>
          <p className="text-lg md:text-xl text-aluminum mb-10 leading-relaxed font-sans max-w-2xl">
            With over 30 years of experience, PT Alakasa Industrindo Tbk delivers high-quality aluminum products through an integrated value chain.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" className="rounded-full px-8 gap-2 group">
              About Alakasa <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-navy gap-2 group">
              Our Business <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
