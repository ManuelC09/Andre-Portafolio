"use client";

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react'; 
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa6';
import { motion, Variants } from 'framer-motion'; // <-- Importamos Variants aquí

// Base de datos actualizada con todas las marcas y arrays para las URLs de los videos
const projectData = {
  "primitivo": {
    name: "Primitivo",
    role: "Community & Project Manager",
    description: "Trabajé como Community Manager, desarrollando contenido, bitácoras, coordinación con diseño, participación en producciones fotográficas y coberturas de eventos, además de brindar apoyo temporal como Project Manager.",
    platforms: "Instagram, TikTok",
    videos: [
      "https://res.cloudinary.com/demo/video/upload/v1690000000/ejemplo1.mp4", 
      "https://res.cloudinary.com/demo/video/upload/v1690000000/ejemplo2.mp4"
    ] 
  },
  "reef": {
    name: "The Reef",
    role: "Community Manager",
    description: "Encargado de la planificación de contenido, coordinación con diseño, coberturas de eventos y comunicación directa con la gerente de marketing para alinear estrategias y objetivos.",
    platforms: "Instagram, TikTok",
    videos: ["link-video-aqui.mp4", "link-video-aqui.mp4"]
  },
  "ampm": {
    name: "AM:PM",
    role: "Community Manager",
    description: "Gestioné la comunicación digital de la marca ejecutando estrategias de contenido enfocadas en fortalecer su presencia en redes. Realicé coberturas de eventos y activaciones generando contenido en tiempo real. También coordiné con embajadores de la marca y el equipo creativo para asegurar la consistencia en la comunicación y ejecución efectiva de campañas.",
    platforms: "Instagram, TikTok, Facebook",
    videos: ["link-video-aqui.mp4", "link-video-aqui.mp4", "link-video-aqui.mp4"]
  },
  "krispy": {
    name: "Krispy Chicken",
    role: "Community Manager",
    description: "Gestionando la planificación y ejecución de contenido en redes sociales. Trabajé en la creación de copys y en coordinación directa con el diseñador para desarrollar piezas visuales alineadas a la identidad de la marca, asegurando consistencia en la comunicación digital.",
    platforms: "Instagram, TikTok",
    videos: ["link-video-aqui.mp4", "link-video-aqui.mp4"]
  },
  "forno": {
    name: "Forno Fiery",
    role: "Community Manager",
    description: "Estuve a cargo de la gestión de redes sociales, desarrollando contenido enfocado en resaltar la propuesta de la marca. Colaboré estrechamente con el equipo de diseño en la producción de contenido visual, manteniendo una línea gráfica coherente y atractiva.",
    platforms: "Instagram",
    videos: ["link-video-aqui.mp4"]
  },
  "miztura": {
    name: "Miztura",
    role: "Community Manager",
    description: "Desempeñé el rol encargándome de la planificación de contenido, redacción de copys y coordinación con el diseñador para la creación de piezas. Mi enfoque fue mantener una comunicación clara y alineada con el estilo de la marca.",
    platforms: "Instagram, TikTok",
    videos: ["link-video-aqui.mp4", "link-video-aqui.mp4"]
  },
  "vinagre": {
    name: "Vinagre Rico",
    role: "Community Manager",
    description: "Responsable de la gestión de redes sociales, trabajando en la organización de contenido y desarrollo de copys. Además, colaboré con el diseñador en la creación de materiales visuales, asegurando una comunicación consistente y acorde a la identidad de la marca.",
    platforms: "Instagram, Facebook",
    videos: ["link-video-aqui.mp4"]
  }
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = use(params);
  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-white bg-[#020610]">Proyecto no encontrado</div>;
  }

  // Tipamos explícitamente con : Variants para que TypeScript no se queje
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-[#020610] pt-24 pb-20 px-6 md:px-10 overflow-hidden relative">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[150px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <div className="p-2.5 rounded-full bg-gray-900/50 border border-gray-800 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium tracking-wide">Volver al Portafolio</span>
          </Link>
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
          }}
          className="mb-20"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            {project.name}
          </motion.h1>
          <motion.div variants={fadeUp} className="w-full h-[1px] bg-gradient-to-r from-primary/50 via-gray-800 to-transparent mb-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={fadeUp} className="md:col-span-2">
              <h3 className="text-xl text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                El Reto / Lo que hice
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                {project.description}
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-[#0a1128]/50 backdrop-blur-md p-8 rounded-3xl border border-gray-800/80 shadow-2xl">
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Rol Asignado</h4>
              <p className="text-accent font-semibold mb-8 text-lg">{project.role}</p>
              
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Plataformas</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white font-medium">
                {/* Íconos dinámicos: Solo aparecen si la plataforma está en el texto */}
                <div className="flex items-center gap-2.5 bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-800 w-fit">
                  {project.platforms.includes('Instagram') && <FaInstagram className="w-5 h-5 text-pink-500 drop-shadow-md" />}
                  {project.platforms.includes('TikTok') && <FaTiktok className="w-4 h-4 text-white drop-shadow-md" />}
                  {project.platforms.includes('Facebook') && <FaFacebookF className="w-4 h-4 text-blue-500 drop-shadow-md" />}
                </div>
                
                {/* Texto de las plataformas */}
                <span className="text-gray-300 text-sm">{project.platforms}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            Contenido Destacado <Play className="w-5 h-5 text-primary fill-primary" />
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.videos.map((videoUrl, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp}
                className="relative w-full aspect-[9/16] bg-gray-900/50 rounded-[2rem] overflow-hidden border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:border-primary/50 hover:shadow-[0_0_40px_rgba(29,78,216,0.2)] transition-all duration-500"
              >
                {videoUrl.startsWith('http') ? (
                  <video 
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1128] gap-4 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center animate-pulse">
                      <Play className="w-6 h-6 text-gray-500 ml-1" />
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Falta subir video {index + 1} a Cloudinary</p>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020610] to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}