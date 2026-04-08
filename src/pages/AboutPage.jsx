import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";
import MissionVision from "../components/MissionVision";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function AboutPage() {
  useDocumentTitle(DOCUMENT_TITLES.about);

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content">
      <AboutHero />
      <MissionVision />
      <TeamSection />
      <ContactSection />
      <CTASection variant="about" />
      </main>
      <Footer variant="about" />
    </div>
  );
}
