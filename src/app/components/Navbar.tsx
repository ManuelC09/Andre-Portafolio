"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Estado para saber qué enlace está siendo "hovered" y animar la pastilla trasera
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // Efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enlaces en español con sus respectivos IDs
  const navLinks = [
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    // Header fijo con pointer-events-none para que no bloquee clics fuera del nav
    <header className="fixed top-0 w-full z-50 flex justify-center pointer-events-none px-4 md:px-0">
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        // pointer-events-auto reactiva los clics solo dentro del nav
        className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between w-full relative z-50
          ${scrolled
            ? 'max-w-4xl mt-4 md:mt-6 px-6 py-3 bg-[#0a1128]/80 backdrop-blur-xl border border-gray-700/50 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'max-w-7xl mt-0 px-6 md:px-10 py-6 bg-transparent border-transparent'
          }
        `}
      >
        {/* LOGO ANIMADO */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 group-hover:border-accent transition-colors"
          >
            <span className="text-accent font-bold text-lg">A</span>
          </motion.div>
          <span className="text-xl font-bold tracking-wide text-white group-hover:text-gray-200 transition-colors">
            André<span className="text-accent">.</span>
          </span>
        </Link>

        {/* NAVEGACIÓN DESKTOP CON HOVER ANIMADO */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredPath(link.href)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <span className="relative z-10">{link.name}</span>
              
              {/* Animación de la píldora trasera al hacer hover */}
              {hoveredPath === link.href && (
                <motion.div
                  layoutId="navHover" // layoutId conecta todos los elementos con el mismo ID para una transición fluida
                  className="absolute inset-0 bg-white/10 rounded-full z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* BOTÓN MENÚ MÓVIL ANIMADO */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ type: "spring" }}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </button>
      </motion.nav>

      {/* MENÚ DESPLEGABLE MÓVIL MODERNO */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[80px] left-4 right-4 bg-[#0a1128]/95 backdrop-blur-2xl border border-gray-800/80 rounded-3xl shadow-2xl p-6 flex flex-col gap-2 pointer-events-auto md:hidden z-40"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, type: "spring" }} // Stagger (cascada) para cada link
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 hover:pl-6 px-4 py-3 rounded-xl transition-all duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}