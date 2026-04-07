import Navbar from "../components/Navbar";
import DriverHero from "../components/DriverHero";
import StatsBar from "../components/StatsBar";
import CategoryStrip from "../components/CategoryStrip";
import BenefitsSection from "../components/BenefitsSection";
import StepsSection from "../components/StepsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function DriveWithUsPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <DriverHero />
      <StatsBar variant="drive" />
      <CategoryStrip variant="simple" />
      <BenefitsSection />
      <StepsSection />
      <CTASection variant="driver" />
      <Footer variant="home" />
    </div>
  );
}
