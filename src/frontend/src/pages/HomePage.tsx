import AnnouncementBar from "../components/AnnouncementBar";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyChoose />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
