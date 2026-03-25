import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Amenities from "@/components/Amenities";
import Visit from "@/components/Visit";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="grain-overlay">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <div className="section-divider" />
      <MenuSection />
      <div className="section-divider" />
      <Amenities />
      <div className="section-divider" />
      <Visit />
      <CTABand />
      <Footer />
      <div className="h-20 md:hidden" />
      <BottomNav />
    </div>
  );
};

export default Index;
