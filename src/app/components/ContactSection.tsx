"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa6";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatusType("error");
        setStatusMessage(data.error || "Hubo un error enviando el mensaje.");
        return;
      }

      setStatusType("success");
      setStatusMessage(
        "Mensaje enviado correctamente. André se pondrá en contacto contigo pronto."
      );

      form.reset();
    } catch (error) {
      console.error("Error enviando el formulario:", error);

      setStatusType("error");
      setStatusMessage(
        "Hubo un error enviando el mensaje. Inténtalo nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#020610] overflow-hidden border-t border-gray-800/50"
    >
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
            TRABAJEMOS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              JUNTOS
            </span>
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
              <h3 className="text-3xl font-bold text-white mb-4">
                ¿Tienes un proyecto en mente?
              </h3>

              <p className="text-gray-400 leading-relaxed max-w-md text-lg">
                Ya sea para gestionar tu comunidad, liderar una nueva campaña
                digital o coordinar tu próximo gran proyecto, estoy listo para
                ayudarte a alcanzar tus objetivos.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col space-y-6 pt-4"
            >
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:alexandrerb2002@gmail.com"
                    className="text-white text-lg font-medium hover:text-accent transition-colors"
                  >
                    alexandrerb2002@gmail.com
                  </a>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">
                    Teléfono
                  </p>

                  <a
                    href="tel:+50588424701"
                    className="text-white text-lg font-medium hover:text-accent transition-colors"
                  >
                    +505 88424701
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">
                    Ubicación
                  </p>

                  <p className="text-white text-lg font-medium">
                    Carazo, Nicaragua
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-4">
                Sígueme
              </p>

              <div className="flex gap-4">
                {[
                  {
                    icon: FaLinkedinIn,
                    href: "https://www.linkedin.com/in/andré-bustamante",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaFacebook,
                    href: "https://www.facebook.com/share/14aT12wSAUr/?mibextid=wwXIfr",
                    label: "Facebook",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/andrebustamante707?igsh=cjd5OW5rbnhvcG00&utm_source=qr",
                    label: "Instagram",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
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
                    name="name"
                    required
                    autoComplete="name"
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
                    name="email"
                    required
                    autoComplete="email"
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
                    name="message"
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                {/* Botón Enviar */}
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-3 uppercase tracking-wider shadow-[0_0_20px_rgba(29,78,216,0.3)] hover:shadow-[0_0_30px_rgba(29,78,216,0.5)] hover:bg-blue-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Mensaje de éxito o error */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 rounded-xl border px-4 py-4 text-sm font-medium leading-relaxed ${
                      statusType === "success"
                        ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                        : "border-red-400/30 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {statusType === "success" ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    )}

                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}