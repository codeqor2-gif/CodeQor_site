import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import MobileHero from "@/components/mobiledev/MobileHero";
import MobileServices from "@/components/mobiledev/MobileServices";
import MobilePlatforms from "@/components/mobiledev/MobilePlatforms";
import MobileCTA from "@/components/mobiledev/MobileCTA";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">
        <MobileHero />
        <MobileServices />
        <MobilePlatforms />
        <MobileCTA />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
