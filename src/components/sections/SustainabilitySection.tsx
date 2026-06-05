"use client";

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Leaf, Users, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const SustainabilitySection = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      id: 'environment',
      title: t.sustainability.envTitle,
      description: t.sustainability.envDesc,
      icon: Leaf,
    },
    {
      id: 'people',
      title: t.sustainability.peopleTitle,
      description: t.sustainability.peopleDesc,
      icon: Users,
    },
    {
      id: 'governance',
      title: t.sustainability.govTitle,
      description: t.sustainability.govDesc,
      icon: ShieldCheck,
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title={t.sustainability.title} 
              subtitle={t.sustainability.subtitle}
            />
            <p className="text-steel mb-8 leading-relaxed">
              {t.sustainability.desc}
            </p>
            
            <div className="space-y-6 mt-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.id} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy mb-1 font-heading group-hover:text-primary transition-colors">{pillar.title}</h4>
                      <p className="text-sm text-steel leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px]">
            <div className="absolute inset-0 rounded-section overflow-hidden shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1920&h=1080&auto=format&fit=crop" 
                alt="Sustainability" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-medium text-lg italic">
                  {t.sustainability.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
