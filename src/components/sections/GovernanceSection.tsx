"use client";

import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Building2, Users, UserCog, UsersRound, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export const GovernanceSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      id: 'overview',
      title: t.governance.overview,
      icon: Building2,
      link: '/governance/overview'
    },
    {
      id: 'boc',
      title: t.governance.boc,
      icon: Users,
      link: '/governance/board-of-commissioners'
    },
    {
      id: 'bod',
      title: t.governance.bod,
      icon: UserCog,
      link: '/governance/board-of-directors'
    },
    {
      id: 'committees',
      title: t.governance.committees,
      icon: UsersRound,
      link: '/governance/committees'
    },
    {
      id: 'policies',
      title: t.governance.policies,
      icon: FileText,
      link: '/governance/policies-charter'
    }
  ];

  return (
    <section id="governance" className="py-20 bg-white">
      <div className="container">
        <SectionTitle 
          title={t.governance.title} 
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.id} 
                href={item.link}
                className="group flex items-center justify-between p-6 bg-white border border-aluminum rounded-xl shadow-sm hover:border-primary hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-1.5rem)] lg:w-auto lg:min-w-[240px]"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary group-hover:scale-110 transition-transform bg-light-blue p-2 rounded-lg">
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <span className="font-semibold text-navy text-base">{item.title}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-steel group-hover:text-primary transition-colors ml-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
