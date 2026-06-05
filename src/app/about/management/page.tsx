import React from 'react';
import { Header } from '../../../components/sections/Header';
import { Footer } from '../../../components/sections/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Management - PT Alakasa Industrindo Tbk',
  description: 'Board of Commissioners, Board of Directors, and Organization Structure of PT Alakasa Industrindo Tbk.',
};

import { ManagementGallery } from './ManagementGallery';

const OrgBox = ({ title, subtitle, name, role }: { title?: string, subtitle?: string, name?: string, role?: string }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 w-64 text-center mx-auto relative z-10">
    {title && <div className="text-primary font-bold text-sm leading-tight">{title}</div>}
    {subtitle && <div className="text-primary text-xs italic mb-2">{subtitle}</div>}
    {name && role && (
      <div className="text-[10px] text-steel mt-2 border-t border-gray-100 pt-2 text-left space-y-1">
        <p><span className="font-semibold text-navy">{name}</span> - {role}</p>
      </div>
    )}
  </div>
);

export default function ManagementPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Static Hero Section */}
        <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-navy to-[#0057B8]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="container relative z-10 text-center pt-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight drop-shadow-md">
              Management
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-[1200px] px-4 md:px-8">
            
            <ManagementGallery />

            <hr className="border-gray-200 mb-20" />

            {/* Organization Structure */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-16 font-heading">
                Organization Structure
              </h2>
              
              <div className="w-full overflow-x-auto pb-10 flex justify-center">
                <div className="min-w-max flex flex-col items-center">
                  
                  {/* ROOT: Dewan Komisaris */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 w-[450px] text-center relative z-10">
                      <div className="text-primary font-bold text-base">Dewan Komisaris</div>
                      <div className="text-primary text-sm italic mb-4">Board of Commissioner</div>
                      <div className="text-xs text-steel text-left space-y-2 max-w-sm mx-auto">
                        <p><span className="font-semibold text-navy">Peng Tjoan</span> - Presiden Komisaris / President Commissioner</p>
                        <p><span className="font-semibold text-navy">Bambang Rahardja Burhan</span> - Wakil Presiden Komisaris / Vice President Commissioner</p>
                        <p><span className="font-semibold text-navy">Antonius Wahyu Djatmiko</span> - Komisaris / Commissioner</p>
                        <p><span className="font-semibold text-navy">Suryadi Hartanto</span> - Komisaris / Commissioner</p>
                      </div>
                    </div>
                    {/* Stem going down */}
                    <div className="w-px h-10 bg-gray-300"></div>
                  </div>

                  {/* LEVEL 2: Children of Dewan Komisaris */}
                  <div className="flex flex-row items-start relative">
                    {/* Horizontal Connector Line for Level 2 */}
                    <div className="absolute top-0 left-[25%] right-[25%] h-px bg-gray-300"></div>

                    {/* CHILD 1: Audit Committee */}
                    <div className="flex flex-col items-center px-8 w-[50%]">
                      {/* Stem from horizontal line */}
                      <div className="w-px h-10 bg-gray-300"></div>
                      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 w-80 text-center relative z-10">
                        <div className="text-primary font-bold text-sm">Komite Audit</div>
                        <div className="text-primary text-xs italic mb-4">Audit committee</div>
                        <div className="text-xs text-steel text-left space-y-2">
                          <p><span className="font-semibold text-navy">Antonius Wahyu Djatmiko</span> - Ketua / Chairman</p>
                          <p><span className="font-semibold text-navy">Plain Syaripin</span> - Anggota / Member</p>
                          <p><span className="font-semibold text-navy">Kuswianata Nardi Cading</span> - Anggota / Member</p>
                        </div>
                      </div>
                      
                      {/* Stem going down to Internal Audit */}
                      <div className="w-px h-10 bg-gray-300"></div>
                      
                      {/* Internal Audit (Direct Child) */}
                      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 w-64 text-center relative z-10">
                        <div className="text-primary font-bold text-sm">Audit Internal</div>
                        <div className="text-primary text-xs italic mb-3">Internal Audit</div>
                        <div className="text-xs text-navy font-semibold">Merly Misally</div>
                      </div>
                    </div>

                    {/* CHILD 2: Dewan Direksi */}
                    <div className="flex flex-col items-center px-8 w-[50%]">
                      {/* Stem from horizontal line */}
                      <div className="w-px h-10 bg-gray-300"></div>
                      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 w-96 text-center relative z-10">
                        <div className="text-primary font-bold text-sm">Dewan Direksi</div>
                        <div className="text-primary text-xs italic mb-4">Board of Director</div>
                        <div className="text-xs text-steel text-left space-y-2">
                          <p><span className="font-semibold text-navy">Sucipto Tanro</span> - Presiden Direktur / President Director</p>
                          <p><span className="font-semibold text-navy">Fendra Hartanto</span> - Wakil Presiden Direktur / Vice President Director</p>
                          <p><span className="font-semibold text-navy">Maradona Parhorasan Manurung</span> - Direktur / Director</p>
                        </div>
                      </div>
                      
                      {/* Stem going down from BOD */}
                      <div className="w-px h-10 bg-gray-300"></div>

                      {/* LEVEL 3: Departments under BOD */}
                      <div className="flex flex-row items-start relative">
                        {/* Horizontal Connector Line for Level 3 */}
                        {/* The width of this line needs to connect the centers of the first and last child.
                            Since there are 3 children, it goes from left-[16.6%] to right-[16.6%] roughly.
                            A safer way is to use a large line and let padding handle it, but exact positioning is tricky without JS.
                            Instead, I will use individual branches using absolute halves. */}
                        <div className="absolute top-0 left-[16.5%] right-[16.5%] h-px bg-gray-300"></div>

                        {/* Dept 1: Finance */}
                        <div className="flex flex-col items-center px-4 w-48 relative">
                          <div className="w-px h-8 bg-gray-300"></div>
                          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-3 w-full text-center">
                            <div className="text-primary font-bold text-[11px] leading-tight mb-1">Keuangan & Akuntansi</div>
                            <div className="text-primary text-[10px] italic mb-3">Finance & Accountant</div>
                            <div className="text-[11px] text-navy font-semibold">Nathalia Lisi</div>
                          </div>
                        </div>

                        {/* Dept 2: Business Dev */}
                        <div className="flex flex-col items-center px-4 w-48 relative">
                          <div className="w-px h-8 bg-gray-300"></div>
                          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-3 w-full text-center">
                            <div className="text-primary font-bold text-[11px] leading-tight mb-1">Pengembangan Bisnis</div>
                            <div className="text-primary text-[10px] italic mb-3">Business Development</div>
                            <div className="text-[11px] text-navy font-semibold">Fendra Hartanto</div>
                          </div>
                        </div>

                        {/* Dept 3: HR */}
                        <div className="flex flex-col items-center px-4 w-48 relative">
                          <div className="w-px h-8 bg-gray-300"></div>
                          <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-3 w-full text-center">
                            <div className="text-primary font-bold text-[11px] leading-tight mb-1">Sumber Daya Manusia</div>
                            <div className="text-primary text-[10px] italic mb-3">Human Resource</div>
                            <div className="text-[11px] text-navy font-semibold">Yudho Prabowo</div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
