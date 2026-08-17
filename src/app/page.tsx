import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Stats from "@/components/Stats";
import Technology from "@/components/Technology";
import Achievements from "@/components/Achievements";
import Services from "@/components/Services";
import Engagement from "@/components/Engagement";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">
        <Hero />
        <Clients />
        <Stats />
        <Technology />
        <Achievements />
        <Services />
        <Engagement />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
