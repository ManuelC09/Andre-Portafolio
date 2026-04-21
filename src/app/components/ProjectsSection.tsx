"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

// Datos de los 7 proyectos con el layout perfecto para el Bento Grid
const projects = [
  {
    id: 1,
    company: "AM:PM",
    category: "Comunicación & Estrategia",
    image: "/projects/ampm-thumb.jpg",
    slug: "ampm",
    span: "col-span-1 md:col-span-2 lg:col-span-2 h-[400px] md:h-[450px]" 
  },
  {
    id: 2,
    company: "Primitivo",
    category: "Lanzamiento & Cobertura",
    image: "/projects/primitivo-thumb.jpg",
    slug: "primitivo",
    span: "col-span-1 md:col-span-2 lg:col-span-2 h-[400px] md:h-[450px]" 
  },
  {
    id: 3,
    company: "Krispy Chicken",
    category: "Content Creation",
    image: "/projects/krispy-thumb.jpg",
    slug: "krispy",
    span: "col-span-1 md:col-span-1 lg:col-span-1 h-[400px]" 
  },
  {
    id: 4,
    company: "The Reef",
    category: "Cobertura de Eventos",
    image: "/projects/reef-thumb.jpg",
    slug: "reef",
    span: "col-span-1 md:col-span-2 lg:col-span-2 h-[400px]" 
  },
  {
    id: 5,
    company: "Forno Fiery",
    category: "Gestión de Redes",
    image: "/projects/forno-thumb.jpg", // <-- Recuerda agregar esta imagen en public/projects/
    slug: "forno",
    span: "col-span-1 md:col-span-1 lg:col-span-1 h-[400px]" 
  },
  {
    id: 6,
    company: "Miztura",
    category: "Planificación Visual",
    image: "/projects/miztura-thumb.jpg", // <-- Y esta
    slug: "miztura",
    span: "col-span-1 md:col-span-2 lg:col-span-2 h-[400px] md:h-[450px]" 
  },
  {
    id: 7,
    company: "Vinagre Rico",
    category: "Organización de Contenido",
    image: "/projects/vinagre-thumb.jpg", // <-- Y esta
    slug: "vinagre",
    span: "col-span-1 md:col-span-2 lg:col-span-2 h-[400px] md:h-[450px]" 
  }
];

export default function ProjectsSection() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#020610] overflow-hidden border-t border-gray-800/50 w-full">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full z-0 pointer-events-none" />
      
      <div className="w-full px-6 md:px-10 mb-20 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 text-xs font-medium uppercase tracking-widest text-accent bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm mb-4"
          >
            Showcase Exclusivo
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4"
          >
            PROYECTOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">DESTACADOS</span>
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-md text-base leading-relaxed"
        >
          Explora los casos de éxito, estrategias de contenido y campañas virales que he liderado para estas marcas reconocidas de Nicaragua.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-2 md:px-4 z-10 relative"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            variants={itemVariants}
            className={`${project.span} group rounded-3xl overflow-hidden relative`}
          >
            <Link href={`/projects/${project.slug}`} className="block w-full h-full relative z-10">
              <div className="relative w-full h-full bg-[#0a1128]/60 border border-gray-800/80 transition-all duration-500 hover:border-primary/50 group overflow-hidden">
                
                <Image 
                  src={project.image} 
                  alt={`Proyecto ${project.company}`}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[0.22, 1, 0.36, 1] group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#020610] via-[#020610]/50 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute inset-0 border-2 border-primary/0 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_30px_rgba(29,78,216,0.2)] pointer-events-none" />

                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <motion.div 
                      className="px-4 py-1.5 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white tracking-wide uppercase"
                      initial={{ y: 0, opacity: 1 }}
                      whileHover={{ y: -10, opacity: 0.8 }} 
                    >
                      {project.category}
                    </motion.div>
                    
                    <div className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center transform transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45 group-hover:scale-110 shadow-lg">
                      <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                  </div>

                  <div className="transform transition-transform duration-500 ease-[0.22, 1, 0.36, 1] group-hover:-translate-y-4">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 drop-shadow-2xl tracking-tighter">
                      {project.company}
                    </h3>
                    <div className="h-1 w-10 bg-primary rounded-full transform origin-left transition-all duration-500 ease-out group-hover:w-20" />
                  </div>
                </div>

                {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110 pointer-events-none z-0">
                  <div className="p-5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 text-white">
                    <PlayCircle className="w-10 h-10" />
                  </div>
                </div> */}

              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}