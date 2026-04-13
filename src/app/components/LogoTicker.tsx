"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

// Lista de logos (duplicada internamente en el JSX para el efecto infinito)
const logos = [
  { src: '/logos/ampm.png', alt: 'am:pm' },
  { src: '/logos/krispy.png', alt: 'Krispy' },
  { src: '/logos/AlexUnique.png', alt: 'Alex Unique Shop' },
  { src: '/logos/reef.jpg', alt: 'Reef' },
  { src: '/logos/Miztura.png', alt: 'Miztu' },
  { src: '/logos/Primitivo.png', alt: 'Primitivo' },
];

export default function LogoTicker() {
  return (
    <section className="py-12 bg-[#020610] border-t border-b border-gray-800/50 overflow-hidden relative">
      
      {/* Sombras a los lados para que los logos desaparezcan suavemente */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020610] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020610] to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-500">
          Marcas que han confiado en mi trabajo
        </p>
      </div>

      {/* Contenedor del Ticker Animado */}
      <div className="flex w-[200%] md:w-[150%] lg:w-[100%]">
        <motion.div 
          className="flex flex-none items-center gap-12 md:gap-20 pr-12 md:pr-20"
          // Animación de 0% a -50% para crear el bucle infinito perfecto
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25, // Cambia este número para hacerlo más rápido o más lento
            repeat: Infinity 
          }}
        >
          {/* Mapeamos los logos dos veces para que la transición sea continua */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="relative w-28 h-16 md:w-36 md:h-20 flex-shrink-0 group"
            >
              <Image 
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain filter grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 cursor-pointer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}