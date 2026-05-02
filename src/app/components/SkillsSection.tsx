"use client";

import { motion, Variants } from "framer-motion";
import {
  Share2,
  Target,
  KanbanSquare,
  PenTool,
  Users,
  CalendarCheck,
  Video,
  BarChart3,
  ClipboardList,
  Bot,
  Search,
  Pencil,
  TrendingUp,
  Rocket,
} from "lucide-react";

const skills = [
  { name: "Gestión de Redes Sociales", icon: Share2, color: "text-blue-400", bg: "bg-blue-500/10" },
  { name: "Estrategia de Contenido", icon: Target, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { name: "Coordinación de Proyectos", icon: KanbanSquare, color: "text-purple-400", bg: "bg-purple-500/10" },
  { name: "Copywriting", icon: PenTool, color: "text-pink-400", bg: "bg-pink-500/10" },
  { name: "Trabajo en Equipo", icon: Users, color: "text-amber-400", bg: "bg-amber-500/10" },
  { name: "Organización", icon: CalendarCheck, color: "text-indigo-400", bg: "bg-indigo-500/10" },
];

const toolGroups = [
  {
    title: "CREACIÓN DE CONTENIDO",
    icon: Video,
    color: "text-blue-400",
    line: "bg-blue-400",
    tools: [
      { name: "CapCut", icon: "/tools/capcut.png" },
      { name: "Canva", icon: "/tools/canva.png" },
      { name: "Google Slides", icon: "/tools/google-slides.png" },
    ],
  },
  {
    title: "ANALÍTICA & GESTIÓN",
    icon: BarChart3,
    color: "text-green-400",
    line: "bg-green-400",
    tools: [
      { name: "Metricool", icon: "/tools/metricool.png" },
      { name: "Meta Business Suite", icon: "/tools/meta.png" },
    ],
  },
  {
    title: "PROJECT MANAGEMENT",
    icon: ClipboardList,
    color: "text-orange-400",
    line: "bg-orange-400",
    tools: [
      { name: "Asana", icon: "/tools/asana.png" },
      { name: "Monday", icon: "/tools/monday.png" },
    ],
  },
  {
    title: "IA & AUTOMATIZACIÓN",
    icon: Bot,
    color: "text-purple-400",
    line: "bg-purple-400",
    tools: [
      { name: "ChatGPT", icon: "/tools/chatgpt.png" },
    ],
  },
];

const workflow = [
  { label: "Estrategia", icon: Search, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Producción", icon: Pencil, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { label: "Optimización", icon: TrendingUp, color: "text-amber-400", bg: "bg-amber-500/10" },
  { label: "Escalabilidad", icon: Rocket, color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 22,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#020817] overflow-hidden border-t border-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.20),transparent_45%)]" />
      <div className="absolute top-1/2 left-1/2 h-[650px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 bg-blue-500/10 border border-blue-400/20 rounded-full mb-5">
            Habilidades Clave
          </span>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            EXPERTISE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
              & HERRAMIENTAS
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mb-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="group min-h-[190px] rounded-2xl border border-white/10 bg-[#071126]/70 backdrop-blur-xl p-7 flex flex-col items-center justify-center text-center hover:border-blue-500/40 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${skill.bg} border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
              </div>

              <h3 className="text-lg font-bold text-white leading-tight">
                {skill.name}
              </h3>

              <div className="w-8 h-1 rounded-full bg-white/20 mt-5 group-hover:w-14 group-hover:bg-blue-500 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-white/10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <span className="inline-block px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 bg-blue-500/10 border border-blue-400/20 rounded-full mb-4">
              Herramientas & Workflow
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Herramientas que utilizo para crear, analizar y gestionar contenido.
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6"
          >
            {toolGroups.map((group, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="rounded-2xl border border-white/10 bg-[#071126]/70 backdrop-blur-xl p-7 text-center hover:border-white/20 transition-all duration-300"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  <group.icon className={`w-10 h-10 mx-auto mb-4 ${group.color}`} />
                </motion.div>

                <h4 className={`text-sm font-black tracking-wide mb-4 ${group.color}`}>
                  {group.title}
                </h4>

                <div className={`h-[2px] w-28 mx-auto rounded-full ${group.line} mb-6`} />

                <div className="flex justify-center gap-5 flex-wrap">
                  {group.tools.map((tool, i) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 18, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: i * 0.08,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -8,
                        scale: 1.06,
                        transition: { duration: 0.2 },
                      }}
                      className="flex flex-col items-center gap-3 group/tool"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/30 p-3 group-hover/tool:shadow-blue-500/20 transition-all duration-300">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <p className="text-sm font-bold text-white max-w-[95px] group-hover/tool:text-blue-300 transition-colors">
                        {tool.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-2xl border border-white/10 bg-[#071126]/80 backdrop-blur-xl p-6 flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Target className="w-10 h-10 text-blue-500" />
              </motion.div>

              <span className="text-blue-400 font-black uppercase tracking-wide">
                Enfoque de Trabajo
              </span>
            </div>

            <div className="hidden lg:block h-10 w-px bg-white/20" />

            <div className="flex flex-wrap items-center justify-center gap-5">
              {workflow.map((step, index) => (
                <div key={step.label} className="flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    className={`w-12 h-12 rounded-xl ${step.bg} border border-white/10 flex items-center justify-center`}
                  >
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </motion.div>

                  <span className="text-white font-bold">{step.label}</span>

                  {index < workflow.length - 1 && (
                    <span className="hidden md:block text-white/30 text-3xl">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}