import React from 'react';
import { Header } from '../../../components/sections/Header';
import { Footer } from '../../../components/sections/Footer';
import { Target, Compass } from 'lucide-react';
import { CustomVideoPlayer } from '../../../components/ui/CustomVideoPlayer';

export const metadata = {
  title: 'Vision & Mission - PT Alakasa Industrindo Tbk',
  description: 'Our core vision and mission to be a company with competence in the aluminum business from upstream to downstream.',
};

export default function VisionMissionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Static Hero Section */}
        <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-[#0A1D3A] to-[#0057B8]">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="container relative z-10 text-center pt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading tracking-tight drop-shadow-lg">
              Vision & Mission
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
              Guiding our journey towards excellence in the aluminum industry.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          
          {/* Faint Logo Watermark */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-20 md:-left-40 w-[500px] md:w-[800px] h-[500px] md:h-[800px] opacity-5 grayscale pointer-events-none z-0 select-none">
            <img 
              src="/alakasa.png" 
              alt="" 
              className="w-full h-full object-contain object-left"
            />
          </div>

          <div className="container max-w-[1440px] px-6 lg:px-12 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* Left Column: Text Content */}
              <div className="flex flex-col justify-center">
                
                {/* Vision */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-[#4a4a4a] mb-3">Vision</h2>
                  <p className="text-[15px] text-[#555] leading-relaxed">
                    To be a company with competence in the aluminum business from upstream to downstream.
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <h2 className="text-xl font-bold text-[#4a4a4a] mb-3">Mission</h2>
                  <div className="space-y-5">
                    {[
                      "To conduct research on business development from upstream to downstream in the aluminum businesses.",
                      "To empower potential resources to support business development strategy.",
                      "To attain professionalism through developing capabilities and upgrading the processes, operational and management system.",
                      "To provide added value to shareholders, customers, employees and community."
                    ].map((mission, idx) => (
                      <p key={idx} className="text-[15px] text-[#555] leading-relaxed">
                        {idx + 1}. {mission}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Corporate Video */}
              <div className="w-full">
                <CustomVideoPlayer 
                  src="https://ai.alakasa.co.id/wp-content/uploads/2022/10/VID-20221019-WA0012.mp4"
                  poster="https://images.unsplash.com/photo-1504917595217-d4f3e0339c8e?q=80&w=800&h=600&auto=format&fit=crop"
                />
              </div>

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
