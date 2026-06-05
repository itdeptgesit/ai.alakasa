import React from 'react';
import { Card } from '../ui/Card';
import { Activity, Link as LinkIcon, Globe, Leaf } from 'lucide-react';

export const HighlightStats = () => {
  const highlights = [
    {
      icon: Activity,
      title: '30+',
      subtitle: 'Years of Experience',
      description: 'Three decades of expertise in the aluminum industry.',
    },
    {
      icon: LinkIcon,
      title: 'Integrated',
      subtitle: 'Value Chain',
      description: 'From raw materials, manufacturing, trading to refining.',
    },
    {
      icon: Globe,
      title: 'Global',
      subtitle: 'Partners',
      description: 'Serving customers in domestic and international markets.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      subtitle: 'Commitment',
      description: 'Responsible operations for a better, sustainable future.',
    },
  ];

  return (
    <section className="relative z-20 -mt-16 mb-20">
      <div className="container">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 p-4 lg:p-6 items-start">
                  <div className="w-12 h-12 rounded-full border-2 border-light-blue flex items-center justify-center shrink-0 text-primary">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-0.5 font-heading leading-tight">{item.title}</h3>
                    <div className="text-navy font-bold text-sm mb-2">{item.subtitle}</div>
                    <p className="text-steel text-[11px] leading-relaxed max-w-[180px]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
