import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { HighlightStats } from '@/components/sections/HighlightStats';
import { BusinessCards } from '@/components/sections/BusinessCards';
import { InvestorRelations } from '@/components/sections/InvestorRelations';
import { NewsReports } from '@/components/sections/NewsReports';
import { GovernanceSection } from '@/components/sections/GovernanceSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <HighlightStats />
        <BusinessCards />
        <InvestorRelations />
        <NewsReports />
        <GovernanceSection />
      </main>
      <Footer />
    </>
  );
}
