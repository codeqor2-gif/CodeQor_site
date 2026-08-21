import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutMission from "@/components/about/AboutMission";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutProcess from "@/components/about/AboutProcess";
import AboutTech from "@/components/about/AboutTech";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function AboutPage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">
        <AboutHero />
        <AboutStory />
        <AboutMission />
        <AboutWhyChoose />
        <AboutProcess />
        <AboutTech />
        <AboutTeam />
        <AboutCTA />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}