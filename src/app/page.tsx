import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";

const Home = () => {
  return (
    <main className="site-shell">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
