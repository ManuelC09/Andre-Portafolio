"use client";

import { motion, Variants } from 'framer-motion';
import { Mail, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

export default function ContactSection() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  // Función temporal para evitar que la página se recargue al dar "Enviar"
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Interfaz lista! El backend se conectará más adelante.");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#020610] overflow-hidden border-t border-gray-800/50">
      
      {/* Efectos de fondo */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 text-xs font-medium uppercase tracking-widest text-accent bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm mb-4"
          >
            Ponte en Contacto
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            TRABAJEMOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">JUNTOS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* COLUMNA IZQUIERDA: Info de Contacto */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h3>
              <p className="text-gray-400 leading-relaxed max-w-md text-lg">
                Ya sea para gestionar tu comunidad, liderar una nueva campaña digital o coordinar tu próximo gran proyecto, estoy listo para ayudarte a alcanzar tus objetivos.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col space-y-6 pt-4">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:hola@andre.com" className="text-white text-lg font-medium hover:text-accent transition-colors">
                    hola@andre.com
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Ubicación</p>
                  <p className="text-white text-lg font-medium">
                    Carazo, Nicaragua
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-4">Sígueme</p>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedinIn, href: "#" },
                  { icon: FaXTwitter, href: "#" },
                  { icon: FaInstagram, href: "#" },
                ].map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* COLUMNA DERECHA: Formulario Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-[#0a1128]/50 backdrop-blur-xl border border-gray-800/80 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group"
            >
              {/* Brillo interno de la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                {/* Input Nombre */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Input Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>

                {/* Input Mensaje */}
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                  </div>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {/* Botón Enviar */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-3 uppercase tracking-wider shadow-[0_0_20px_rgba(29,78,216,0.3)] hover:shadow-[0_0_30px_rgba(29,78,216,0.5)] hover:bg-blue-600 transition-all duration-300"
                >
                  Enviar Mensaje
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}