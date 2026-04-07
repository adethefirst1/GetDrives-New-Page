import Navbar from "../components/Navbar";
import ServicesHero from "../components/ServicesHero";
import RideSection from "../components/RideSection";
import DeliverySection from "../components/DeliverySection";
import BusinessSection from "../components/BusinessSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main id="main-content">
      <ServicesHero />
      <RideSection />
      <DeliverySection />
      <BusinessSection />
      <CTASection variant="services" />
      </main>
      <Footer variant="home" />
    </div>
  );
}
