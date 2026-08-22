import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import WebHero from "@/components/webdev/WebHero";
import WebServices from "@/components/webdev/WebServices";
import WebTech from "@/components/webdev/WebTech";
import WebProcess from "@/components/webdev/WebProcess";
import WebWhyChoose from "@/components/webdev/WebWhyChoose";
import WebCTA from "@/components/webdev/WebCTA";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function WebDevelopmentPage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">
        <WebHero />
        <WebServices />
        <WebTech />
        <WebProcess />
        <WebWhyChoose />
        <WebCTA />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
