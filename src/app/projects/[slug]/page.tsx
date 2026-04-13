import Link from 'next/link';
import { ArrowLeft, PlayCircle } from 'lucide-react'; // <-- Aquí agregamos PlayCircle

// Simulamos una base de datos. Aquí puedes detallar lo de cada marca.
const projectData = {
  "primitivo": {
    name: "Primitivo",
    role: "Gestión de Contenido & Cobertura",
    description: "Para Primitivo, desarrollé una estrategia visual enfocada en resaltar la exclusividad y el ambiente del lugar. Coordiné la grabación de reels dinámicos que muestran la experiencia gastronómica y la coctelería, logrando aumentar el alcance orgánico en un 40% durante el primer mes de campaña.",
    videos: ["video1.mp4", "video2.mp4"] 
  },
  "krispy": {
    name: "Krispy",
    role: "Content Creation (Reels)",
    description: "Lideré la producción de contenido viral (estilo POV) para TikTok e Instagram Reels. El objetivo fue mostrar el producto (pollo frito) de una manera antojable y cercana al público nicaragüense, generando una alta tasa de engagement e interacción directa con la comunidad.",
    videos: ["video3.mp4", "video4.mp4"]
  },
  "reef": {
    name: "The Reef",
    role: "Cobertura de Eventos",
    description: "Cobertura dinámica de eventos y creación de contenido en tiempo real para mantener a la audiencia cautiva y aumentar la asistencia a futuras ediciones.",
    videos: ["video5.mp4"]
  },
  "ampm": {
    name: "am:pm",
    role: "Campaña Digital",
    description: "Diseño y ejecución de campaña digital para promocionar nuevas aperturas y productos clave, impulsando el tráfico a las sucursales.",
    videos: ["video6.mp4"]
  }
};

// En Next.js 15+, params es una promesa, por lo que la función debe ser asíncrona
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // Esperamos los parámetros de la URL de forma segura
  const { slug } = await params;
  const project = projectData[slug as keyof typeof projectData];

  // Si alguien pone una URL incorrecta
  if (!project) {
    return <div className="min-h-screen flex items-center justify-center text-white">Proyecto no encontrado</div>;
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Botón de regreso */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors mb-12 group"
        >
          <div className="p-2 rounded-full border border-gray-800 group-hover:border-accent group-hover:bg-accent/10 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Volver al Portafolio
        </Link>

        {/* Cabecera del Proyecto */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            {project.name}
          </h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-gray-800 to-transparent mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <h3 className="text-xl text-white font-semibold mb-4">El Reto / Lo que hice</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
              <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Rol</h4>
              <p className="text-accent font-medium mb-6">{project.role}</p>
              
              <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Plataformas</h4>
              <p className="text-white font-medium">Instagram, TikTok</p>
            </div>
          </div>
        </div>

        {/* Galería de Multimedia */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Contenido Destacado</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative w-full aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-xl group">
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                  <PlayCircle className="w-12 h-12 text-gray-700 group-hover:text-accent transition-colors" />
                  <span className="text-gray-600 text-sm">Espacio para Video {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}