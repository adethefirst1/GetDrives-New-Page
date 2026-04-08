import Navbar from "../components/Navbar";
import DriverHero from "../components/DriverHero";
import { DOCUMENT_TITLES, useDocumentTitle } from "../useDocumentTitle";
import CategoryStrip from "../components/CategoryStrip";
import BenefitsSection from "../components/BenefitsSection";
import StepsSection from "../components/StepsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function DriveWithUsPage() {
  useDocumentTitle(DOCUMENT_TITLES.driveWithUs);

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content">
      <DriverHero />
      <CategoryStrip variant="marquee" />
      <BenefitsSection />
      <StepsSection />
      <CTASection variant="driver" />
      </main>
      <Footer variant="home" />
    </div>
  );
}
