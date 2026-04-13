import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoTicker from './components/LogoTicker';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection'; // Importamos

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden bg-background">
      <Navbar />
      <HeroSection />
      <div className="w-full"><LogoTicker /></div>
      <AboutSection />
      <ExperienceSection />
      
      {/* Nueva sección de Proyectos */}
      <ProjectsSection />

      {/* Footer sencillo */}
      <footer id="contact" className="w-full py-10 border-t border-gray-800/50 bg-[#020610] text-center">
        <p className="text-gray-500">© 2026 André. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}