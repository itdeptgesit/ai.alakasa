"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [language, setLanguage] = useState<'EN' | 'ID'>('EN');

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
          { label: 'Company Profile', href: '/about/profile' },
          { label: 'Management', href: '/about/management' },
          { label: 'Corporate Structure', href: '/about/structure' },
          { label: 'Legal & Compliance', href: '/about/legal' },
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
          { label: 'Manufacturing', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&h=300&auto=format&fit=crop', href: '/business-activity/manufacturing' },
          { label: 'Trading', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=400&h=300&auto=format&fit=crop', href: '/business-activity/trading' },
          { label: 'Refinery', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&h=300&auto=format&fit=crop', href: '/business-activity/refinery' },
        ]
      }
    },
    { 
      name: 'Corporate Governance', 
      href: '#governance', 
      hasDropdown: true,
      submenu: {
        links: [
          { label: 'Board Guidance', href: '/governance/board-guidance' },
          { label: 'Charters & Code of Conduct', href: '/governance/charters' },
          { label: 'Committees & Internal Audit', href: '/governance/committees' },
          { label: 'Corporate Secretary', href: '/governance/secretary' },
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
          { label: 'Annual Report', href: '/news/annual-report' },
          { label: 'Financial Statement', href: '/news/financial-statement' },
          { label: 'Announcement', href: '/news/announcement' },
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=600&auto=format&fit=crop',
        title: 'News & Report',
        description: 'Stay updated with our latest financial reports and company announcements.'
      }
    },
    { name: 'Contact Us', href: '/contact' },
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
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-400 ease-out z-50">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-white/40 flex gap-6 w-auto relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-transparent before:pointer-events-none">
                      
                      {item.submenu?.type === 'grid' ? (
                        <div className="flex gap-4 w-[600px] xl:w-[750px] relative z-10">
                          {item.submenu?.items?.map((gridItem, idx) => (
                            <Link key={idx} href={gridItem.href} className="flex-1 h-[220px] xl:h-[260px] relative rounded-xl overflow-hidden group/card block border border-gray-100/50 shadow-sm hover:shadow-md transition-shadow">
                              <img src={gridItem.image} alt={gridItem.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                <span className="text-white font-bold text-sm xl:text-base uppercase tracking-wider flex items-center justify-between">
                                  {gridItem.label}
                                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-300" />
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="flex gap-8 w-[580px] xl:w-[680px] relative z-10">
                          {/* Links Column */}
                          <div className="flex-1 flex flex-col justify-center py-2">
                            {item.submenu?.links?.map((link, idx) => (
                              (link as any).isTitle ? (
                                <span key={idx} className="text-[10px] xl:text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-4 mb-2 px-3 border-b border-gray-100 pb-2">
                                  {link.label}
                                </span>
                              ) : (
                                <Link 
                                  key={idx} 
                                  href={link.href || '#'} 
                                  className="group/link text-xs xl:text-sm text-gray-600 hover:text-primary hover:bg-blue-50/50 font-medium px-3 py-2.5 rounded-lg transition-all duration-300 flex items-center"
                                >
                                  <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover/link:w-4 group-hover/link:opacity-100 mr-0 group-hover/link:mr-1">
                                    <ChevronRight className="w-3.5 h-3.5 text-primary" />
                                  </span>
                                  <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">{link.label}</span>
                                </Link>
                              )
                            ))}
                          </div>
                          
                          {/* Featured Image Column */}
                          <div className="w-[260px] xl:w-[300px] min-h-[320px] relative rounded-xl overflow-hidden flex flex-col justify-end p-6 border border-gray-100 shadow-sm group/feature">
                            <img 
                              src={item.submenu.image} 
                              alt={item.submenu.title} 
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/feature:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent"></div>
                            <div className="relative z-10 translate-y-2 group-hover/feature:translate-y-0 transition-transform duration-500">
                              <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] text-white font-bold tracking-widest uppercase mb-3 border border-white/20">Featured</span>
                              <h4 className="text-white font-bold text-lg xl:text-xl mb-2 font-heading">{item.submenu.title}</h4>
                              <p className="text-white/80 text-[11px] xl:text-xs leading-relaxed">{item.submenu.description}</p>
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
            <button 
              onClick={() => setLanguage(lang => lang === 'EN' ? 'ID' : 'EN')}
              className="relative flex items-center bg-white/10 hover:bg-white/20 rounded-full w-[48px] h-[26px] p-[2px] shadow-inner transition-colors cursor-pointer border border-gray-200/50"
            >
              <div 
                className={`absolute left-[2px] w-[20px] h-[20px] rounded-full transition-transform duration-300 ease-in-out ${
                  language === 'ID' ? 'translate-x-[22px]' : 'translate-x-0'
                }`}
              >
                <img 
                  src={language === 'EN' ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/id.png"} 
                  alt={language === 'EN' ? "English" : "Bahasa Indonesia"} 
                  className="w-full h-full rounded-full object-cover shadow-sm" 
                />
              </div>
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
        <div className="lg:hidden absolute top-full left-0 w-full max-h-[85vh] overflow-y-auto bg-white shadow-soft border-t border-aluminum p-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-gray-100 last:border-0 pb-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.hasDropdown ? '#' : item.href}
                    className={`text-base font-medium py-2 flex-1 ${expandedMobileMenu === item.name ? 'text-primary' : 'text-navy'}`}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setExpandedMobileMenu(expandedMobileMenu === item.name ? null : item.name);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <button 
                      onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.name ? null : item.name)}
                      className={`p-2 transition-colors ${expandedMobileMenu === item.name ? 'text-primary' : 'text-navy'}`}
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedMobileMenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu Accordion */}
                {item.hasDropdown && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedMobileMenu === item.name ? 'max-h-[500px] opacity-100 mb-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 py-2 mt-1 flex flex-col gap-3 border-l-2 border-primary/20 ml-2 bg-gray-50/50 rounded-r-lg">
                      {item.submenu?.type === 'grid' 
                        ? item.submenu.items?.map((gridItem, idx) => (
                            <Link 
                              key={idx} 
                              href={gridItem.href}
                              className="text-sm text-gray-600 hover:text-primary py-1.5 px-2 block transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {gridItem.label}
                            </Link>
                          ))
                        : item.submenu?.links?.map((link, idx) => (
                            (link as any).isTitle ? (
                              <span key={idx} className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-3 mb-1 block px-2">
                                {link.label}
                              </span>
                            ) : (
                              <Link 
                                key={idx} 
                                href={link.href || '#'}
                                className="text-sm text-gray-600 hover:text-primary py-1.5 px-2 block transition-colors flex items-center gap-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                {link.label}
                              </Link>
                            )
                          ))
                      }
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-2">
            <span className="text-sm font-medium text-navy">Language ({language})</span>
            <button 
              onClick={() => setLanguage(lang => lang === 'EN' ? 'ID' : 'EN')}
              className="relative flex items-center bg-gray-100 rounded-full w-[48px] h-[26px] p-[2px] shadow-inner transition-colors cursor-pointer border border-gray-200"
            >
              <div 
                className={`absolute left-[2px] w-[20px] h-[20px] rounded-full transition-transform duration-300 ease-in-out ${
                  language === 'ID' ? 'translate-x-[22px]' : 'translate-x-0'
                }`}
              >
                <img 
                  src={language === 'EN' ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/id.png"} 
                  alt={language === 'EN' ? "English" : "Bahasa Indonesia"} 
                  className="w-full h-full rounded-full object-cover shadow-sm" 
                />
              </div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
