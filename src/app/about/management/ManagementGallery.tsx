"use client";

import React, { useState } from 'react';

// Official images for profiles
const PENG_TJOAN = "https://ai.alakasa.co.id/wp-content/uploads/2022/10/peng-tjoan.jpg";
const BAMBANG_RAHARDJA = "https://ai.alakasa.co.id/wp-content/uploads/2023/08/burhan-final.jpg";
const SURYADI_HARTANTO = "https://ai.alakasa.co.id/wp-content/uploads/2022/10/suryadi-hertanto.jpg";
const ANTONIUS_WAHYU = "https://ai.alakasa.co.id/wp-content/uploads/2024/07/11zon_resized-270x300.jpg";

const SUCIPTO_TANRO = "https://ai.alakasa.co.id/wp-content/uploads/2023/08/tanro-final-270x300.jpg";
const FENDRA_HARTANTO = "https://ai.alakasa.co.id/wp-content/uploads/2023/08/fendra-final-270x300.jpg";
const MARADONA_MANURUNG = "https://ai.alakasa.co.id/wp-content/uploads/2023/08/ulang-270x300.jpg";

type ProfileData = {
  id: string;
  name: string;
  title: string;
  image: string;
  nationality: string;
  legalBasis: string[];
  workExperience: string[];
  education: string[];
  concurrentPositions: string[];
  type: 'commissioner' | 'director';
};

const profiles: ProfileData[] = [
  // COMMISSIONERS
  {
    id: "peng-tjoan",
    name: "Peng Tjoan",
    title: "President Commissioner",
    image: PENG_TJOAN,
    type: 'commissioner',
    nationality: "Indonesia",
    legalBasis: [
      "Appointed as President Commissioner in accordance with the Deed of GMS No. 38 dated 28 June 2024, the Deed No. 186 dated June 25, 2021, with a term of office until the end of the 2029 GMS.",
      "Since 2006 he has joined the Company holding various positions including:",
      "As the President Director of the Company in accordance with the Deed of the GMS No. 30 dated June 21, 2019 and No. 73 June 10, 2016",
      "As Vice President Director of the Company in accordance with the Deed of the GMS No. 87 dated 20 June 2013 and No. 76 on 12 August 2011",
      "As a Director of the Company according to the Deed of the GMS No. 71 dated 24 May 2010, No. 3 dated June 5, 2007 and No. 1 June 1st 2006"
    ],
    workExperience: [
      "Manager of Finance and Accounting in PT Determinan Indah (1993-1999)",
      "Audit supervisor at the public accounting firm “Hans Tuanakotta & Mustafa” (1988-1992)"
    ],
    education: [
      "Earned a Diploma in Accounting from Sekolah Tinggi Ilmu Ekonomi Indonesia, Jakarta in 1987",
      "Bachelor of Economics from Institut Bisnis Manajemen Indonesia (IBMI), Jakarta in 2001"
    ],
    concurrentPositions: [
      "President Director PT. Gesit Perkasa",
      "Director PT. Gesit Alumas",
      "President Commissioner PT. Alakasa Extrusindo",
      "Commissioner PT. Alakasa Alumina Refineri",
      "Commissioner PT. Alakasa Andalan Mitra Sejati"
    ]
  },
  {
    id: "bambang",
    name: "Bambang Rahardja Burhan",
    title: "Vice President Commissioner - Independent",
    image: BAMBANG_RAHARDJA,
    type: 'commissioner',
    nationality: "Indonesia",
    legalBasis: [
      "Appointed as Vice President Commissioner of the Company in accordance with the Deed of GMS No. 38 dated June 28, 2024, the Deed No. 30 dated June 21, 2019, the Deed No. 73 dated June 10, 2016, with a term of office until the end of the 2029 AGMS.",
      "Since 2006 he has joined the Company holding various positions, including As a Commissioner of the Company according to the Deed of AGMS No. 87 dated June 20, 2013, No. 71 dated 24 May 2010, No. 3 dated June 5, 2007, No.1 dated June 1, 2006"
    ],
    workExperience: [
      "Country Chief Financial Officer at Standard Chartered Bank Indonesia",
      "Finance Manager at Aviva Hong Kong",
      "Vice President at City Bank Indonesia"
    ],
    education: [
      "Earned his Bachelor of Economics from University of Hull, England in 1978 and obtained several professional titles, such as Chartered Accountant in England, Chartered Accountant in Singapore, and Chartered Financial Analyst."
    ],
    concurrentPositions: []
  },
  {
    id: "suryadi",
    name: "Suryadi Hertanto",
    title: "Commissioner",
    image: SURYADI_HARTANTO,
    type: 'commissioner',
    nationality: "Indonesia",
    legalBasis: [
      "Appointed as Commissioner of the Company in accordance with the Deed of GMS No. 38 dated June 28, 2024, No. 30 dated June 21, 2019 with a term of office until the end of the 2029 AGMS.",
      "In 2003 – 2006 he joined the Company, then in 2013 he rejoined the Company holding various positions including:",
      "As Vice President Director of the Company in accordance with the Deed of AGMS No. 73 dated June 10, 2016",
      "As a Director of the Company in accordance with the Deed of AGMS No. 87 dated June 20, 2013, No. 100 dated February 26, 2013, No. 81 dated May 23, 2003"
    ],
    workExperience: [
      "Director PT Bumi Grafika Jaya (1997 – now)",
      "Jakarta Representative Manager PT Jasuindo Tiga Perkasa (1992-1997)",
      "Finance Manager and Production Manager of PT Singa Java (1989-1992)",
      "Finance Manager of PT Sarana Utama Aircon (1983-1989)"
    ],
    education: [
      "Earned a Bachelor of Economy from Diponegoro University, Semarang in 1982."
    ],
    concurrentPositions: [
      "Commissioner PT. Gesit Alumas"
    ]
  },
  {
    id: "antonius",
    name: "Antonius Wahyu Djatmiko",
    title: "Independent Commissioner",
    image: ANTONIUS_WAHYU,
    type: 'commissioner',
    nationality: "Indonesia",
    legalBasis: [
      "Appointed as Independent Commissioner of the Company in accordance with the Deed of GMS No. 38 dated June 28, 2024 with a term of office until the end of the 2029 AGMS."
    ],
    workExperience: [
      "Board of Directors PT Windas Development (2018-2024)",
      "Commissioner PT Medialand Internasional (2009 – Present)",
      "President Director PT Gading Development Tbk (2013-2014)",
      "Co-Founder & Director PT Graha Layar Prima (2006-2012)",
      "President Director PT Deyon Resources (2006-2012)",
      "Chairman PT Premier Qualitas Indonesia (2006-2012)",
      "Country Managing Director CB Richard Ellis Indonesia (2000-2006)",
      "Assistant Vice President Citibank NA (1994-2000)",
      "Corporate Secretary PT Jaya Real Property Tbk (1993-1994)"
    ],
    education: [
      "National Leadership Training from Lemhannas RI PPSA24 in 2023",
      "Earned MBA from University of Chicago Booth School of Business, Chicago, United States of America in 2005",
      "Earned BSc in Finance from George Mason University, Virginia, United States of America in 1993"
    ],
    concurrentPositions: []
  },

  // DIRECTORS
  {
    id: "sucipto",
    name: "Sucipto Tanro",
    title: "President Director",
    image: SUCIPTO_TANRO,
    type: 'director',
    nationality: "Indonesia",
    legalBasis: [
      "Appointed as President Director of the Company in accordance with the Deed of GMS No. 38 dated June 28, 2024, the Deed No. 186 dated June 25, 2021 with a term of office until the end of the 2029 GMS."
    ],
    workExperience: [
      "President Director of PT. Alakasa Alexindo Mitra Sejati and CEO of PT. Alakasa Extrusindo (2017-2021)",
      "President Director of PT. Jaya Inti Persada (2012 – 2016)",
      "General Manager Commercial & Business Development PT. Holcim Indonesia Tbk (2008 – 2011)",
      "Director of Operations PT. Pionir Beton Industri (1998 – 2008)",
      "Structural Engineer and Manager in several oil Contracting and Consulting companies (1987 – 1998)"
    ],
    education: [
      "Holds a Bachelor’s degree in Civil Engineering from the Bandung Institute of Technology (1987)"
    ],
    concurrentPositions: [
      "President Director of PT. Alakasa Andalan Mitra Sejati (formerly PT. Alakasa Alexindo Mitra Sejati)",
      "Director of PT. Rheem Indonesia"
    ]
  },
  {
    id: "fendra",
    name: "Fendra Hartanto",
    title: "Vice President Director",
    image: FENDRA_HARTANTO,
    type: 'director',
    nationality: "Indonesia",
    legalBasis: [
      "Appointed as Vice President Director of the Company in accordance with the Deed of GMS No. 38 dated June 28, 2024, the Deed No. 30 dated June 21, 2019 with a term of office until the end of the 2029 GMS."
    ],
    workExperience: [
      "Group Head of Finance & Accounting PT. Lion Power Energi (2016 – 2018)",
      "General Manager Business Control & Reporting PT. Atlas Resources Tbk (2012 – 2016)",
      "Head of Process Improvement Star Energy Ltd (2005 – 2012)",
      "Management Support Manager PT AIA Indonesia (2003 – 2005)",
      "Senior Internal Control PT. Argha Karya Prima Industry Tbk (2001 – 2003)",
      "Corporate Efficiency Team pada Asia Pulp & Paper, Sinar Mas Group (1998 – 2001)"
    ],
    education: [
      "Earned his Bachelor of Industrial Management & Technology from Parahyangan University in 1997."
    ],
    concurrentPositions: [
      "Director PT Alka Niaga Industri"
    ]
  },
  {
    id: "maradona",
    name: "Maradona Parhorasan Manurung",
    title: "Director",
    image: MARADONA_MANURUNG,
    type: 'director',
    nationality: "Indonesia",
    legalBasis: [
      "Appointment as Director of the Company in accordance with the Deed of GMS No. 38 dated June 28, 2024, the Deed No. 248 dated June 23, 2023 with a term of office until the end of the 2029 AGMS."
    ],
    workExperience: [
      "Audit committee of PT. Alakasa Industrindo Tbk (2019 – 2023)",
      "Finance & Accounting Manager PT. Alakasa Industrindo Tbk (2014 – 2018)",
      "Deputy Head of Accounting Department PT. Triputra Investindo Arya, Triputra Group (2014)",
      "Finance & Accounting Assistant Manager PT. Gesit Perkasa (2013)",
      "Finance Assistant Manager PT. Best World Indonesia, a subsidiary of Best World International Limited Singapore (2011 – 2013)",
      "Senior Accountant PT. Baradinamika Mudasukses, Baramulti Group (2010)",
      "Accounting Supervisor PT. Bahana Fortuna Niaga, Pintu Mas Mulia Kimia Group (2008 – 2010)"
    ],
    education: [
      "Holder of Bachelor of Economics (Accounting Major) from Institut Bisnis Nusantara (IBN), Jakarta in 2008"
    ],
    concurrentPositions: [
      "Commissioner of PT. Rheem Indonesia",
      "Commissioner of PT. Dharma Alumas Sakti"
    ]
  }
];

export const ManagementGallery = () => {
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(null);

  const ProfileCard = ({ profile }: { profile: ProfileData }) => (
    <div 
      className="group bg-white rounded-none border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative cursor-pointer"
      onClick={() => setSelectedProfile(profile)}
    >
      <div className="w-full aspect-[4/5] overflow-hidden relative bg-gray-100">
        <img 
          src={profile.image} 
          alt={profile.name} 
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-white relative z-10 border-t-4 border-transparent group-hover:border-primary transition-colors duration-500">
        <h3 className="text-lg md:text-xl font-bold text-navy mb-1 font-heading group-hover:text-primary transition-colors">{profile.name}</h3>
        <p className="text-sm text-steel font-light">{profile.title}</p>
        
        <div className="mt-8 flex items-center gap-2">
          <span className="text-sm text-primary font-bold tracking-wider uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
            View Profile 
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Board of Commissioners */}
      <div className="mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12 font-heading">
          Board of Commissioners
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {profiles.filter(p => p.type === 'commissioner').map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>

      <hr className="border-gray-200 mb-20" />

      {/* Board of Directors */}
      <div className="mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12 font-heading">
          Board of Director
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {profiles.filter(p => p.type === 'director').map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>

      {/* Modal Profile */}
      {selectedProfile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedProfile(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-sm">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProfile(null)}
              className="absolute top-4 right-4 z-50 bg-white/80 md:bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left side: Photo */}
            <div className="w-full md:w-1/3 shrink-0 bg-gray-50 flex flex-col p-6 md:p-8 border-r border-gray-100 items-center justify-start">
              <div className="w-full max-w-[280px] aspect-[4/5] rounded-lg overflow-hidden shadow-md bg-white">
                <img 
                  src={selectedProfile.image} 
                  alt={selectedProfile.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
              <div className="mb-8 border-b border-gray-100 pb-6">
                <h2 className="text-3xl font-bold text-navy font-heading mb-2">{selectedProfile.name}</h2>
                <p className="text-lg text-primary font-medium">{selectedProfile.title}</p>
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Nationality: {selectedProfile.nationality}
                </p>
              </div>

              <div className="space-y-8 text-sm text-[#555] leading-relaxed">
                
                {/* Legal Basis */}
                {selectedProfile.legalBasis.length > 0 && (
                  <div>
                    <h4 className="font-bold text-navy mb-3 uppercase tracking-wider text-xs flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span> Legal Basis of Appointment
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {selectedProfile.legalBasis.map((text, i) => <li key={i} className="pl-2">{text}</li>)}
                    </ul>
                  </div>
                )}

                {/* Work Experience */}
                {selectedProfile.workExperience.length > 0 && (
                  <div>
                    <h4 className="font-bold text-navy mb-3 uppercase tracking-wider text-xs flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span> Work Experience
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {selectedProfile.workExperience.map((text, i) => <li key={i} className="pl-2">{text}</li>)}
                    </ul>
                  </div>
                )}

                {/* Education */}
                {selectedProfile.education.length > 0 && (
                  <div>
                    <h4 className="font-bold text-navy mb-3 uppercase tracking-wider text-xs flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span> Education
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {selectedProfile.education.map((text, i) => <li key={i} className="pl-2">{text}</li>)}
                    </ul>
                  </div>
                )}

                {/* Concurrent Positions */}
                {selectedProfile.concurrentPositions.length > 0 && (
                  <div>
                    <h4 className="font-bold text-navy mb-3 uppercase tracking-wider text-xs flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span> Concurrent Positions
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {selectedProfile.concurrentPositions.map((text, i) => <li key={i} className="pl-2">{text}</li>)}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
