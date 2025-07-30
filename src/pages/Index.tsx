
import Header from "@/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedActions from "@/components/FeaturedActions";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedActions />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
