import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteSection from "@/components/QuoteSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BauPro GmbH – Ihr Bauunternehmen für Hochbau, Tiefbau & Sanierung in Deutschland</title>
        <meta 
          name="description" 
          content="Professionelles Bauunternehmen mit 25+ Jahren Erfahrung. Hochbau, Tiefbau, Renovierung, Sanierung und Innenausbau nach DIN/VOB-Standards. Kostenloses Angebot anfordern!" 
        />
        <meta name="keywords" content="Bauunternehmen, Hochbau, Tiefbau, Sanierung, Renovierung, Innenausbau, Berlin, München, Hamburg, Köln" />
        <link rel="canonical" href="https://www.baupro-gmbh.de" />
        <html lang="de" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <TrustSection />
          <ServicesSection />
          <ProcessSection />
          <ProjectsSection />
          <TestimonialsSection />
          <QuoteSection />
          <AboutSection />
        </main>
        <Footer />
        <CookieBanner />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
