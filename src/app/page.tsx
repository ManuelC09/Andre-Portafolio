import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoTicker from './components/LogoTicker';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection'; // <-- Importamos

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden bg-background">
      <Navbar />
      <HeroSection />
      
      <div className="w-full">
        <LogoTicker />
      </div>
      
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      
      {/* Sección de Contacto */}
      <div className="w-full">
        <ContactSection />
      </div>

      {/* Footer definitivo */}
      <footer className="w-full py-8 border-t border-gray-800/80 bg-[#020610] flex items-center justify-center relative z-10">
        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} André. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}