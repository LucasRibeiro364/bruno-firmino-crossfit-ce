import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudy from "@/components/CaseStudy";
import Philosophy from "@/components/Philosophy";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <CaseStudy />
      <Philosophy />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
