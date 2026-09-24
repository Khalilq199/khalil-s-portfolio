import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExperienceStrip from "@/components/ExperienceStrip";

const Index = () => {
  return (
    <div className="phase-site min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceStrip />
        <ExperienceSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
