import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesExpertise from "@/components/services/ServicesExpertise";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function ServicesPage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="overflow-hidden bg-[#f7fbff]">
        <ServicesHero />
        <ServicesExpertise />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
