import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <ContactSection />
      <CTASection variant="about" />
      <Footer variant="about" />
    </div>
  );
}
