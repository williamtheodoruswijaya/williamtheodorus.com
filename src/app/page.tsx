import { DesktopShortcuts } from "@/components/layout/desktop-shortcuts";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import { WindowFrame } from "@/components/ui/window-frame";

const Home = () => {
  return (
    <main className="site-shell os-shell">
      <Header />
      <div className="os-desktop">
        <DesktopShortcuts />
        <div className="site-container os-window-host">
          <WindowFrame
            title="William Theodorus.portfolio"
            subtitle="~/desktop/portfolio"
          >
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </WindowFrame>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
