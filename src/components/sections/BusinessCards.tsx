import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import Link from 'next/link';

export const BusinessCards = () => {
  const businesses = [
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1580982333555-46c59b655fc9?q=80&w=1000&h=800&auto=format&fit=crop',
      link: '/business/manufacturing'
    },
    {
      id: 'trading',
      title: 'Trading',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&h=800&auto=format&fit=crop',
      link: '/business/trading'
    },
    {
      id: 'refinery',
      title: 'Refinery',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&h=800&auto=format&fit=crop',
      link: '/business/refinery'
    }
  ];

  return (
    <section id="business" className="pt-20 pb-0 bg-white w-full">
      <div className="container mb-12">
        <SectionTitle 
          title="Our Business" 
          subtitle="Discover our integrated aluminum business segments, designed to deliver value from raw materials to finished products."
          centered
        />
      </div>
      
      <div className="flex flex-col md:flex-row w-full h-[60vh] min-h-[400px] lg:min-h-[550px]">
        {businesses.map((business) => {
          return (
            <Link 
              key={business.id} 
              href={business.link}
              className="group relative flex-1 h-full overflow-hidden flex items-center justify-center cursor-pointer border-r border-white/10 last:border-0"
            >
              <img 
                src={business.image} 
                alt={business.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
              
              <h3 className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-widest text-center px-6 drop-shadow-lg">
                {business.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
