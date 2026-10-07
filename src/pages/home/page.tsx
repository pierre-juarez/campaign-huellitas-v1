import Navbar from '@/pages/home/components/Navbar';
import Hero from '@/pages/home/components/Hero';
import LimitedSpotsBanner from '@/pages/home/components/LimitedSpotsBanner';
import CampaignInfo from '@/pages/home/components/CampaignInfo';
import WhySterilize from '@/pages/home/components/WhySterilize';
import Requirements from '@/pages/home/components/Requirements';
import WhatsIncluded from '@/pages/home/components/WhatsIncluded';
import LocationSection from '@/pages/home/components/LocationSection';
import RegistrationCTA from '@/pages/home/components/RegistrationCTA';
import Footer from '@/pages/home/components/Footer';
import WhatsAppFloat from '@/pages/home/components/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <Hero />
        <LimitedSpotsBanner />
        <CampaignInfo />
        <WhySterilize />
        <Requirements />
        <WhatsIncluded />
        <LocationSection />
        <RegistrationCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}