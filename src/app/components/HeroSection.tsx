"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6'; 

export default function HeroSection() {
  // Configuración de animación de entrada suave
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative min-h-screen w-full w-max-[1400px] flex items-center justify-center py-20 px-4 md:px-10 overflow-hidden">
      
      {/* FONDO CON GRADIENTE Y EFECTOS CIRCULARES */}
      <div className="absolute inset-0 bg-glow-gradient opacity-80" />
      
      {/* Efectos visuales de anillos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/10 rounded-full opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-accent/5 rounded-full opacity-30" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        
        {/* COLUMNA IZQUIERDA: Texto y Botones */}
        <motion.div 
          className="flex flex-col items-start space-y-6"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          {/* Pequeño tag superior */}
          <span className="inline-block px-4 py-1 text-xs font-medium uppercase tracking-widest text-gray-400 bg-gray-800/50 rounded-full border border-gray-700">
            Portafolio Profesional
          </span>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            HOLA, SOY <span className="text-white">ANDRÉ</span>
          </h1>

          {/* Subtítulo / Roles */}
          <p className="text-xl md:text-2xl font-semibold text-accent tracking-wide uppercase">
            Community Manager | Project Manager
          </p>

          {/* Descripción corta en Español */}
          <p className="text-base text-gray-300 max-w-lg leading-relaxed">
            Me especializo en hacer crecer comunidades online y gestionar estrategias digitales, impulsado por la organización, el liderazgo y los resultados. Ahora, mi objetivo es llevar estas habilidades al project management y liderar equipos exitosos.
          </p>

          {/* SECCIÓN DE LLAMADA A LA ACCIÓN (CTA) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4 w-full">
            {/* Botón principal */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-3.5 bg-primary text-white font-bold rounded-full text-sm uppercase tracking-wider group shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              Contáctame
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Íconos sociales */}
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              {[
                { icon: FaXTwitter, href: "#" },
                { icon: FaGithub, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-accent hover:bg-gray-800 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: Imagen */}
        <motion.div 
          className="flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full scale-75" />
          
          <div className="relative w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[450px] md:h-[560px]">
            <Image
              src="/profile.png" 
              alt="Retrato de André"
              fill
              priority 
              className="object-contain object-bottom" 
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}