import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import QuizSection from "@/components/QuizSection";
import InfoSection from "@/components/InfoSection";
import HelplineSection from "@/components/HelplineSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <VideoSection />
    <QuizSection />
    <InfoSection />
    <HelplineSection />
    <Footer />
  </div>
);

export default Index;
