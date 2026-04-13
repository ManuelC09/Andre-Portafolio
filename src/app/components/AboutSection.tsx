"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // <-- Importamos Variants
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  
  // Tipamos explícitamente con : Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      // ease como string simple, SIN corchetes
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      // ease como string simple, SIN corchetes
      transition: { duration: 1, ease: "easeOut", delay: 0.4 } 
    },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-gray-800/50">
      
      <div className="absolute inset-0 bg-glow-gradient opacity-60 translate-y-20 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full z-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: Texto */}
        <motion.div 
          className="flex flex-col items-start space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} 
        >
          {/* Tag */}
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1 text-xs font-medium uppercase tracking-widest text-accent bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm"
          >
            Sobre Mí
          </motion.span>

          {/* Título Principal Restaurado (Impactante) */}
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white"
          >
            COMMUNITY MANAGER <br />
            CON MÁS DE <span className="text-accent">3 AÑOS</span> DE EXPERIENCIA
          </motion.h2>

          {/* Párrafo 1 */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mt-4"
          >
            Me especializo en desarrollar comunidades digitales y en gestionar estrategias de contenido, basadas en organización, liderazgo y enfoque en resultados. Actualmente, estoy ampliando mis habilidades hacia el <span className="text-white font-medium">project management</span>, con el objetivo de liderar equipos, coordinar procesos y garantizar la entrega exitosa de cada proyecto.
          </motion.p>

          {/* Párrafo 2 */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed"
          >
            He liderado la estrategia digital de diversas marcas creando y gestionando comunidades online. Durante mi carrera, he diseñado campañas que impulsaron el crecimiento, coordinado calendarios de contenido, analizado métricas y trabajado de la mano con equipos creativos y de marketing.
          </motion.p>

          {/* Botón CTA */}
          <motion.div variants={itemVariants} className="pt-6">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(29, 78, 216, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-3.5 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-wider group shadow-lg shadow-primary/20 transition-all duration-300"
            >
              Ver mi experiencia
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* COLUMNA DERECHA: Imagen */}
        <motion.div 
          className="flex justify-center lg:justify-end relative"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-accent/15 blur-[100px] rounded-full scale-90 z-0" />
          
          <div className="relative z-10 w-full max-w-[400px] lg:max-w-[450px] aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border border-gray-800/50 bg-gray-900/10 backdrop-blur-sm shadow-2xl">
            <Image
              src="/andre_about.jpg"
              alt="Retrato de André para sección Sobre Mí"
              fill
              className="object-cover object-top p-0"
              sizes="(max-w-1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}