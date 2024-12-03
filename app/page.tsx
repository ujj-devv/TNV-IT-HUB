import Footer from "@/components/global/Footer/Footer";
import Navbar from "@/components/global/Navbar/Navbar";
import ClientsLogos from "@/components/pages/Home/ClientsSection/ClientsSection";
import Contact from "@/components/pages/Home/ContactSection/ContactSection";
import Features from "@/components/pages/Home/FeaturesSection/FeaturesSection";
import HeroSection from "@/components/pages/Home/HeroSection/HeroSection";
import ServicesSection from "@/components/pages/Home/ServicesSection/ServicesSection";
import Testimonials from "@/components/pages/Home/TestimonialSection/TestimonialSection";
import Sectors from "@/components/pages/Home/Sectors/Sectors";
import ApproachSection from "@/components/pages/Home/ApproachSection/ApproachSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Sectors />
      <ApproachSection />
      <Features />
      <Testimonials />
      <ClientsLogos />
      <Contact />
      {/* <FAQ/>
      <Blog/>
      <CTA/> */}
      <Footer />
    </div>
  );
}
