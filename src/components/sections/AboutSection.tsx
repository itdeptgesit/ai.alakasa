"use client";

import React from 'react';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';
import { useLanguage } from '@/context/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title={t.about.title} 
              subtitle={t.about.subtitle}
            />
            <p className="text-steel mb-8 leading-relaxed">
              {t.about.desc}
            </p>
            <Button variant="primary">
              {t.about.btn}
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-section overflow-hidden shadow-soft relative group">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4f3e0339c8e?q=80&w=800&h=600&auto=format&fit=crop" 
                alt="Alakasa Facility" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-light-blue rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
