import Navbar from "../components/Navbar";
import MarketingHero from "../components/MarketingHero";
import StatsBar from "../components/StatsBar";
import CategoryStrip from "../components/CategoryStrip";
import ServicesOverview from "../components/ServicesOverview";
import RideFeature from "../components/RideFeature";
import DriverFeature from "../components/DriverFeature";
import HowItWorks from "../components/HowItWorks";
import FeaturesStrip from "../components/FeaturesStrip";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content">
      <MarketingHero />
      <StatsBar variant="home" />
      <CategoryStrip />
      <ServicesOverview />
      <RideFeature />
      <DriverFeature />
      <HowItWorks />
      <FeaturesStrip />
      <CTASection variant="landing" />
      </main>
      <Footer variant="home" />
    </div>
  );
}
