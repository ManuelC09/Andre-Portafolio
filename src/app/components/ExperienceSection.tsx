"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

// Datos actualizados con arreglos de logos por experiencia
const experiences = [
  {
    id: 1,
    role: "Project Manager & Lead Community Manager",
    company: "am:pm | Primitivo",
    period: "2024 - 2025",
    yearWatermark: "2025", // El año que irá gigante en el fondo
    description: "Liderazgo de equipos creativos y gestión integral de proyectos digitales. Planificación de calendarios de contenido, análisis de métricas de rendimiento (ROI) y coordinación en la ejecución de campañas de alto impacto a nivel nacional.",
    skills: ["Project Management", "Estrategia Digital", "Liderazgo de Equipos"],
    logos: ['/logos/ampm.png', '/logos/Primitivo.png']
  },
  {
    id: 2,
    role: "Social Media & Community Manager",
    company: "Krispy | Reef | Miztu",
    period: "2024 - 2025",
    yearWatermark: "2024",
    description: "Desarrollo y gestión de comunidades online. Diseño de contenido atractivo, moderación de canales digitales y ejecución de campañas de lanzamiento de productos, incrementando el engagement y la fidelización de la audiencia.",
    skills: ["Creación de Contenido", "Community Building", "Analytics"],
    logos: ['/logos/krispy.png', '/logos/reef.jpg', '/logos/Miztura.png']
  },
  {
    id: 3,
    role: "Creador de Contenido Digital",
    company: "Alex Unique Shop",
    period: "2020 - 2026",
    yearWatermark: "2020",
    description: "Desarrollo de la identidad visual y estrategias de posicionamiento de marca en redes sociales. Atención al cliente, gestión de crisis y construcción de relaciones sólidas con la comunidad local.",
    skills: ["Identidad Visual", "Atención al Cliente", "Social Media"],
    logos: ['/logos/AlexUnique.png']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-gray-800/50">
      
      {/* Efectos de fondo sutiles */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 text-xs font-medium uppercase tracking-widest text-accent bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm mb-4"
          >
            Mi Trayectoria
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            EXPERIENCIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">PROFESIONAL</span>
          </motion.h2>
        </div>

        {/* CONTENEDOR TIMELINE ALTERNO */}
        <div className="relative w-full">
          
          {/* LÍNEA CENTRAL ILUMINADA */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent/50 to-transparent transform md:-translate-x-1/2 z-0" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={exp.id} 
                className={`relative flex items-center justify-between w-full mb-16 md:mb-32 ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* NODO DEL TIMELINE */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute left-[40px] md:left-1/2 w-6 h-6 rounded-full bg-[#040B16] border-4 border-primary transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                >
                  <div className="absolute inset-1 bg-white rounded-full" />
                </motion.div>

                {/* ESPACIO OPUESTO: MARCA DE AGUA DEL AÑO (Llena el espacio en blanco) */}
                <div className={`hidden md:flex md:w-[45%] ${isEven ? 'justify-start pl-16' : 'justify-end pr-16'}`}>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.05, scale: 1 }} // Opacidad muy baja (5%) para ser un fondo sutil
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-8xl lg:text-[10rem] font-black text-white pointer-events-none select-none tracking-tighter"
                  >
                    {exp.yearWatermark}
                  </motion.span>
                </div>

                {/* TARJETA DE CONTENIDO */}
                <div className={`w-full pl-24 md:pl-0 md:w-[45%] ${
                  isEven ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                    className="relative bg-[#0a1128]/60 backdrop-blur-md border border-gray-800/80 p-8 rounded-3xl shadow-2xl hover:border-primary/50 hover:bg-[#0a1128]/80 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-6 text-sm text-gray-400 mb-6 font-medium">
                        
                        {/* BADGE CON LOGOS DE EMPRESAS */}
                        <span className="flex items-center gap-3 text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                          <div className="flex items-center -space-x-2">
                            {exp.logos.map((logo, i) => (
                              <div key={i} className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-[#0a1128] bg-white shadow-sm">
                                <Image 
                                  src={logo} 
                                  alt="Logo empresa" 
                                  fill 
                                  className="object-contain p-0.5" 
                                />
                              </div>
                            ))}
                          </div>
                          <span className="ml-1 tracking-wide">{exp.company}</span>
                        </span>

                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-8 text-[15px]">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2.5">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-4 py-1.5 text-xs font-semibold text-gray-300 bg-gray-900 border border-gray-700 rounded-lg group-hover:border-gray-500 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}