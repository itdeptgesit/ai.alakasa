"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      href: '/' 
    },
    { 
      name: 'About Us', 
      href: '#about', 
      hasDropdown: true,
      submenu: {
        links: [
          { label: 'Vision & Mission', href: '/about/vision-mission' },
          { label: 'Management', href: '/about/management' },
          { label: 'Summary Of Company History', href: '/about/history' },
          { label: 'Ownership Structure', href: '#ownership' },
          { label: 'Subsidiaries', href: '#subsidiaries' },
          { label: 'Capital Market Supporting Institution', href: '#capital-market' },
          { label: 'Company\'s Articles of Association', href: '#articles' },
        ],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&h=600&auto=format&fit=crop',
        title: 'About Us',
        description: 'Learn about our journey, core values and structure of our company.'
      }
    },
    { 
      name: 'Business Activity', 
      href: '#business', 
      hasDropdown: true,
      submenu: {
        type: 'grid',
        items: [
          { label: 'Manufacturing', image: 'https://images.unsplash.com/photo-1580982333555-46c59b655fc9?q=80&w=400&h=300&auto=format&fit=crop', href: '#manufacturing' },
          { label: 'Trading', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=400&h=300&auto=format&fit=crop', href: '#trading' },
          { label: 'Refinery', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&h=300&auto=format&fit=crop', href: '#refinery' },
        ]
      }
    },
    { 
      name: 'Corporate Governance', 
      href: '#governance', 
      hasDropdown: true,
      submenu: {
        links: [
          { label: 'Guidance of the Board of Commissioners', href: '#guidance-boc' },
          { label: 'Guidance of the Board of Directors', href: '#guidance-bod' },
          { label: 'Good Corporate Governance Charter', href: '#gcg-charter' },
          { label: 'Guidance of Code Of Conduct & Business', href: '#code-of-conduct' },
          { label: 'Audit Committee', isTitle: true },
          { label: 'Audit Committee Composition', href: '#audit-composition' },
          { label: 'Audit Committee Charter', href: '#audit-charter' },
          { label: 'Corporate Secretary', href: '#corporate-secretary' },
          { label: 'Unit Internal Audit', isTitle: true },
          { label: 'Charter Internal Audit Unit', href: '#charter-internal-audit' },
        ],
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=400&h=600&auto=format&fit=crop',
        title: 'Corporate Governance',
        description: 'Our commitment to transparency, accountability, and ethical business practices.'
      }
    },
    { 
      name: 'News & Report', 
      href: '#news', 
      hasDropdown: true,
      submenu: {
        links: [
          { label: 'Annual Report', href: '#annual-report' },
          { label: 'Financial Statement', href: '#financial-statement' },
          { label: 'Announcement', href: '#announcement' },
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=600&auto=format&fit=crop',
        title: 'News & Report',
        description: 'Stay updated with our latest financial reports and company announcements.'
      }
    },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm py-3' 
          : 'bg-transparent py-4 lg:py-6 border-b border-white/10'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 mr-4 xl:mr-8 group">
          <img 
            src="/alakasa.png" 
            alt="Alakasa Logo" 
            className={`h-10 lg:h-12 xl:h-14 w-auto object-contain transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
          />
          <div className="flex flex-col justify-center hidden md:flex">
            <span className={`text-sm lg:text-base xl:text-lg font-heading font-black tracking-tight leading-none mb-1 whitespace-nowrap transition-colors ${isScrolled ? 'text-[#2D2D2D]' : 'text-white'}`}>
              PT. ALAKASA INDUSTRINDO, Tbk
            </span>
            <span className={`hidden lg:block text-[8px] xl:text-[9px] leading-[1.2] whitespace-nowrap transition-colors ${isScrolled ? 'text-[#4A4A4A]' : 'text-white/80'}`}>
              Aluminum Industry, Raw Material Aluminum Trading & Related Business
            </span>
            <span className={`hidden lg:block text-[8px] xl:text-[9px] leading-[1.2] whitespace-nowrap transition-colors ${isScrolled ? 'text-[#4A4A4A]' : 'text-white/80'}`}>
              Industri Aluminium, Perdagangan Bahan Baku Aluminium & Usaha Terkait Lainnya
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-end flex-1 gap-2 xl:gap-4">
          <div className="flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-[12px] xl:text-sm font-medium transition-all px-3 py-2 rounded-md flex items-center gap-1 whitespace-nowrap ${
                    isScrolled 
                      ? 'text-navy hover:bg-gray-100' 
                      : 'text-white/90 hover:bg-white/20 hover:text-white group-hover:bg-white/20'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:rotate-180" />}
                </Link>

                {/* Submenu Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white rounded-[20px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 flex gap-6 w-auto">
                      
                      {item.submenu?.type === 'grid' ? (
                        <div className="flex gap-4 w-[600px] xl:w-[750px]">
                          {item.submenu?.items?.map((gridItem, idx) => (
                            <Link key={idx} href={gridItem.href} className="flex-1 h-[200px] xl:h-[240px] relative rounded-xl overflow-hidden group/card block">
                              <img src={gridItem.image} alt={gridItem.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                              <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/20 transition-colors" />
                              <div className="absolute inset-0 flex items-center justify-center p-4">
                                <span className="text-white font-bold text-center text-sm xl:text-base uppercase tracking-wider">{gridItem.label}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="flex gap-6 w-[580px] xl:w-[650px]">
                          {/* Links Column */}
                          <div className="flex-1 flex flex-col justify-center">
                            {item.submenu?.links?.map((link, idx) => (
                              link.isTitle ? (
                                <span key={idx} className="text-[10px] xl:text-xs font-bold text-navy uppercase tracking-wider mt-3 mb-1 px-3">
                                  {link.label}
                                </span>
                              ) : (
                                <Link 
                                  key={idx} 
                                  href={link.href || '#'} 
                                  className="text-xs xl:text-sm text-[#2D2D2D] hover:bg-black/5 font-medium px-3 py-2 rounded-lg transition-colors flex items-center gap-3"
                                >
                                  <div className="w-1.5 h-1.5 border border-navy rounded-full"></div>
                                  {link.label}
                                </Link>
                              )
                            ))}
                          </div>
                          
                          {/* Featured Image Column */}
                          <div className="w-[240px] xl:w-[280px] min-h-[300px] relative rounded-xl overflow-hidden flex flex-col justify-end p-5">
                            <img 
                              src={item.submenu.image} 
                              alt={item.submenu.title} 
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            <div className="relative z-10">
                              <h4 className="text-white font-bold text-sm xl:text-base mb-1">{item.submenu.title}</h4>
                              <p className="text-white/80 text-[10px] xl:text-xs leading-relaxed">{item.submenu.description}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center pl-2 xl:pl-4">
            <button className="flex items-center bg-white rounded-full w-11 h-6 xl:w-12 xl:h-[26px] p-[2px] shadow-sm transition-transform hover:scale-105 cursor-pointer">
              <img 
                src="https://flagcdn.com/w40/gb.png" 
                alt="UK Flag" 
                className="w-5 h-5 xl:w-[22px] xl:h-[22px] rounded-full object-cover shadow-sm" 
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 ${isScrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-soft border-t border-aluminum p-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-base font-medium text-navy block w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-aluminum pt-4 mt-2">
            <button className="flex items-center gap-2 text-sm font-medium text-navy">
              <Globe className="w-5 h-5" />
              <span>English / Bahasa</span>
            </button>
            <Button variant="primary" size="sm">
              Investor Relations
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
