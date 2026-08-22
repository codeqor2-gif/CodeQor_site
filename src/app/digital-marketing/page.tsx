import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/marketing/MarketingHero";
import MarketingServices from "@/components/marketing/MarketingServices";
import MarketingProcess from "@/components/marketing/MarketingProcess";
import MarketingWhyChoose from "@/components/marketing/MarketingWhyChoose";
import MarketingCTA from "@/components/marketing/MarketingCTA";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function DigitalMarketingPage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">
        <MarketingHero />
        <MarketingServices />
        <MarketingProcess />
        <MarketingWhyChoose />
        <MarketingCTA />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
