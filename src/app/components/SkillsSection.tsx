"use client";

import { motion, Variants } from 'framer-motion';
import { 
  Share2, 
  Target, 
  KanbanSquare, 
  PenTool, 
  Users, 
  CalendarCheck, 
  Crown, 
  MessageSquare, 
  Puzzle 
} from 'lucide-react';

// Lista de habilidades con sus respectivos íconos
const skills = [
  { name: "Gestión de Redes Sociales", icon: Share2, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Estrategia de Contenido", icon: Target, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { name: "Coordinación de Proyectos", icon: KanbanSquare, color: "text-purple-400", bg: "bg-purple-400/10" },
  { name: "Copywriting", icon: PenTool, color: "text-pink-400", bg: "bg-pink-400/10" },
  { name: "Trabajo en Equipo", icon: Users, color: "text-amber-400", bg: "bg-amber-400/10" },
  { name: "Organización", icon: CalendarCheck, color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { name: "Liderazgo", icon: Crown, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { name: "Comunicación", icon: MessageSquare, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "Resolución de Problemas", icon: Puzzle, color: "text-rose-400", bg: "bg-rose-400/10" },
];

export default function SkillsSection() {
  
  // Animación en cascada para el contenedor
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Animación de entrada para cada tarjeta
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-gray-800/50">
      
      {/* Fondo con destello sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 text-xs font-medium uppercase tracking-widest text-accent bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm mb-4"
          >
            Habilidades Clave
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            EXPERTISE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">& HERRAMIENTAS</span>
          </motion.h2>
        </div>

        {/* GRID DE HABILIDADES (3x3 en Desktop) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-[#0a1128]/40 backdrop-blur-md border border-gray-800/80 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#0a1128]/80 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(29,78,216,0.15)] hover:-translate-y-2 cursor-default overflow-hidden"
            >
              {/* Resplandor interno al pasar el ratón */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Contenedor del ícono */}
              <div className={`w-16 h-16 rounded-2xl ${skill.bg} border border-gray-700/50 flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-inner`}>
                <skill.icon className={`w-8 h-8 ${skill.color} transition-colors duration-300`} />
              </div>

              {/* Nombre de la habilidad */}
              <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
              
              {/* Pequeña línea decorativa animada */}
              <div className="w-8 h-1 bg-gray-700 rounded-full mt-4 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}