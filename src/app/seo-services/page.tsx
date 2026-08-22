import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import SEOHero from "@/components/seo/SEOHero";
import SEOServices from "@/components/seo/SEOServices";
import SEOProcess from "@/components/seo/SEOProcess";
import SEOWhyChoose from "@/components/seo/SEOWhyChoose";
import SEOCTA from "@/components/seo/SEOCTA";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function SEOServicesPage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">
        <SEOHero />
        <SEOServices />
        <SEOProcess />
        <SEOWhyChoose />
        <SEOCTA />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
