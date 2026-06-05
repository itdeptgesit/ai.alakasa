"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const HERO_IMAGES = [
  'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg',
  'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg',
  'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg',
  'https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg'
];

export const HeroSection = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image Slider */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `url("${img}")`,
            transformOrigin: 'center center'
          }}
        />
      ))}
      
      {/* Overlays - Reduced Opacity */}
      <div className="absolute inset-0 bg-navy/40 mix-blend-multiply z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent z-[1]" />

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-heading">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-aluminum leading-relaxed font-sans max-w-2xl">
            {t.hero.desc}
          </p>
        </div>
      </div>
    </section>
  );
};
