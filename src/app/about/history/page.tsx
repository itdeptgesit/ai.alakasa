import React from 'react';
import { Header } from '../../../components/sections/Header';
import { Footer } from '../../../components/sections/Footer';

export const metadata = {
  title: 'Summary Of Company History - PT Alakasa Industrindo Tbk',
  description: 'The history and establishment of PT Alakasa Industrindo Tbk.',
};

export default function HistoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-[#0A1D3A] to-[#0057B8]">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container relative z-10 text-center pt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading tracking-tight drop-shadow-lg">
              Summary Of Company History
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white relative">
          <div className="container max-w-[1200px] px-6 lg:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-8 lg:mb-12">
              
              {/* Text Content P1 */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-navy mb-6 font-heading">The Journey of PT Alakasa Industrindo Tbk</h2>
                
                <div className="text-base text-[#555] leading-relaxed text-justify">
                  <p>
                    PT Alakasa Industrindo Tbk (the “Company”) was established within the framework of the Foreign Capital Investment Law No. 1 year 1967, as amended by Law No. 11 year 1970 and amended most recently by the Capital Investment Law No. 25 year 2007, based on notarial Deed No. 31 dated February 21, 1972 of Soeleman Ardjasasmita, S.H., notary public in Jakarta. The deed of establishment was approved by the Minister of Justice of the Republic of Indonesia based on his Decision Letter No. Y.A.5/214/17 dated June 19, 1973, and was published in State Gazette No. 93, Supplement No. 836 dated November 20, 1973.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="lg:col-span-5 flex items-center justify-center mt-8 lg:mt-0">
                <div className="w-full relative shadow-md bg-gray-100">
                  <img 
                    src="https://ai.alakasa.co.id/wp-content/uploads/2022/09/20220913_144244dsss-1.jpg"
                    alt="Alakasa Company History"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>

            {/* Full Width Content P2 */}
            <div className="w-full text-base text-[#555] leading-relaxed text-justify">
              <p>
                The Company’s Articles of Association have been amended several times, includes changes to the Articles of Association of Companies that has been accordance with the Law of the Republic of Indonesia No. 40 year 2007 on Limited Liability Company in accordance with Deed No. 7 dated June 3, 2008 from Fathiah Helmi, SH, notary in Jakarta. The deed was approved by the Minister of Law and Human Rights of the Republic of Indonesia based on his Decision Letter No. AHU-70317.AH.01.02.Year 2008, and was published in State Gazette No. 13, Supplement No. 1600 dated February 14, 2011. The Company’s Articles of Association have been amended several times and the latest amendments were based on Deed No. 18 dated September 04, 2020 of Jimmy Tanal, SH., M.Kn., Notary in Jakarta concerning amendments to Article3, Article 11, Article 12 and Article 14. The deed was approved by the Minister of Law and Human Rights of the Republic of Indonesia based on his Decision Letter No. AHU-0064479.AH.01.02. TAHUN 2020, dated September 18, 2020.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
