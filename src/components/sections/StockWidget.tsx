"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { ArrowUpRight, ArrowDownRight, Loader2 } from 'lucide-react';

const PERIODS = ['1D', '1W', '1M', '3M', '1Y', '5Y'];

export const StockWidget = () => {
  const [activePeriod, setActivePeriod] = useState('1D');
  const [stockData, setStockData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetch(`/api/stock?period=${activePeriod}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted && data.meta) {
          setStockData(data);
        }
      })
      .catch(err => console.error("Error fetching stock:", err))
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activePeriod]);

  // Derived values
  const currentPrice = stockData?.meta?.regularMarketPrice || 715;
  const prevClose = stockData?.meta?.chartPreviousClose || 715;
  const change = currentPrice - prevClose;
  const changePercent = prevClose > 0 ? (change / prevClose) * 100 : 0;
  const isPositive = change >= 0;
  const ChangeIcon = isPositive ? ArrowUpRight : ArrowDownRight;
  const themeColor = "#0057B8";

  let timeString = 'Market Open 16 May 2024 14:37 WIB';
  if (stockData?.meta?.regularMarketTime) {
    const date = new Date(stockData.meta.regularMarketTime * 1000);
    timeString = `Market Status as of ${date.toLocaleString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric', 
      hour: '2-digit', minute: '2-digit', 
      timeZone: 'Asia/Jakarta'
    })} WIB`;
  }

  // Chart generation
  let lineD = "M0,100 Q20,80 40,90 T80,70 T120,85 T160,50 T200,60 T240,40 T280,65 T320,30 T360,45 T400,20";
  let areaD = "M0,100 Q20,80 40,90 T80,70 T120,85 T160,50 T200,60 T240,40 T280,65 T320,30 T360,45 T400,20 L400,150 L0,150 Z";
  let xLabels = ["09:00", "11:00", "13:00", "15:00"];

  if (stockData?.history && stockData.history.length >= 2) {
    const prices = stockData.history.map((d: any) => d.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;
    const padding = 30;
    const usableHeight = 150 - (padding * 2);

    const points = stockData.history.map((d: any, i: number) => {
      const x = (i / (stockData.history.length - 1)) * 400;
      const y = priceRange === 0 
        ? 75 
        : 150 - padding - ((d.price - minPrice) / priceRange) * usableHeight;
      return `${x},${y}`;
    });

    lineD = `M${points[0]} L${points.slice(1).join(' L')}`;
    areaD = `${lineD} L400,150 L0,150 Z`;

    // Generate dynamic labels based on time range
    const firstTime = stockData.history[0].time * 1000;
    const lastTime = stockData.history[stockData.history.length - 1].time * 1000;
    
    const formatLabel = (timestamp: number) => {
      const date = new Date(timestamp);
      if (activePeriod === '1D' || activePeriod === '1W') {
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' });
      } else if (activePeriod === '1M' || activePeriod === '3M') {
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
      } else {
        return date.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' });
      }
    };

    const interval = (lastTime - firstTime) / 3;
    xLabels = [
      formatLabel(firstTime),
      formatLabel(firstTime + interval),
      formatLabel(firstTime + interval * 2),
      formatLabel(lastTime)
    ];
  }

  return (
    <div className="rounded-card shadow-soft bg-navy overflow-hidden text-white w-full relative">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Column: Stock Info */}
        <div className="p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          <div>
            <h2 className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Investor Relations</h2>
            <h3 className="text-2xl font-bold font-heading mb-4">PT Alakasa Industrindo, Tbk</h3>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="px-2 py-1 bg-white/10 rounded text-sm font-semibold">ALKA</span>
              <span className="text-sm text-aluminum">Indonesia Stock Exchange</span>
            </div>
            
            <div className="mb-2">
              <span className="text-5xl font-bold font-heading mr-3">{currentPrice.toLocaleString('id-ID')}</span>
              <span className="text-xl">IDR</span>
            </div>
            <div className={`flex items-center font-medium text-lg ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              <ChangeIcon className="w-5 h-5 mr-1" />
              <span>
                {change > 0 ? '+' : ''}{change.toLocaleString('id-ID')} ({change > 0 ? '+' : ''}{changePercent.toFixed(2)}%)
              </span>
            </div>
            <p className="text-xs text-aluminum/70 mt-2">{timeString}</p>
          </div>
          
          <Button variant="primary" className="mt-8 w-fit">
            View Stock Details
          </Button>
        </div>
        
        {/* Middle Column: Chart */}
        <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col relative">
          <div className="flex justify-between text-xs font-medium text-aluminum mb-6 relative z-10">
            {PERIODS.map(period => (
              <button 
                key={period}
                onClick={() => setActivePeriod(period)}
                className={`pb-1 transition-colors ${activePeriod === period ? 'text-primary border-b-2 border-primary' : 'hover:text-white'}`}
              >
                {period}
              </button>
            ))}
          </div>
          
          <div className="flex-1 relative min-h-[200px] flex items-end">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-navy/50 backdrop-blur-sm rounded-lg">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
            )}
            <svg viewBox="0 0 400 150" className="w-full h-full preserve-3d" preserveAspectRatio="none">
              <path 
                d={areaD} 
                fill="url(#gradient)" 
                opacity="0.2"
                className="transition-all duration-700 ease-in-out"
              />
              <path 
                d={lineD} 
                fill="none" 
                stroke={themeColor} 
                strokeWidth="3"
                className="transition-all duration-700 ease-in-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={themeColor} />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="flex justify-between text-[10px] text-aluminum/60 mt-4">
            {xLabels.map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>
        </div>
        
        {/* Right Column: Metrics */}
        <div className="p-8 lg:p-10 flex flex-col justify-center gap-8">
          <div>
            <div className="text-3xl font-bold font-heading mb-1">32.99</div>
            <div className="text-sm text-aluminum">EPS (IDR)</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading mb-1">309.68 B</div>
            <div className="text-sm text-aluminum">Market Cap (IDR)</div>
          </div>
          <div>
            <div className="text-3xl font-bold font-heading mb-1">21.67</div>
            <div className="text-sm text-aluminum">P/E Ratio</div>
          </div>
        </div>
      </div>
    </div>
  );
};
