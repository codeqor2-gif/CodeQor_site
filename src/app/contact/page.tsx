import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export default function ContactPage() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="overflow-hidden bg-[#f7fbff]">
        <ContactHero />
        <ContactForm />
        <Contact />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
