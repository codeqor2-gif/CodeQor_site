import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function IndustriesPage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="overflow-hidden bg-[#f7fbff]">
        <IndustriesHero />
        <IndustriesGrid />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
