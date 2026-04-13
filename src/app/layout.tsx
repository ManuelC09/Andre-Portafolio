import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// CONFIGURACIÓN DE SEO AVANZADA
export const metadata: Metadata = {
  // Configuración base (Reemplaza con la URL final de Vercel una vez desplegado)
  metadataBase: new URL('https://portafolio-andre.vercel.app'),
  
  title: {
    default: "André | Community & Project Manager",
    template: "%s | André"
  },
  description: "Estratega digital y Community Manager con más de 3 años de experiencia liderando marcas reconocidas. Especialista en gestión de contenido y Project Management.",
  
  keywords: [
    "Community Manager Nicaragua", 
    "Project Manager Digital", 
    "Estrategia de Contenido", 
    "Marketing Digital", 
    "Gestión de Redes Sociales",
    "André Portafolio"
  ],

  // OPEN GRAPH (Para WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: "André | Community & Project Manager",
    description: "Desarrollando comunidades digitales y gestionando estrategias de contenido con enfoque en resultados.",
    url: 'https://portafolio-andre.vercel.app',
    siteName: 'André Portfolio',
    locale: 'es_NI',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Crea una imagen de 1200x630px en public/ para el preview
        width: 1200,
        height: 630,
        alt: 'André - Community & Project Manager',
      },
    ],
  },

  // TWITTER / X CARDS
  twitter: {
    card: 'summary_large_image',
    title: "André | Community & Project Manager",
    description: "Estratega digital con experiencia en marcas de alto impacto.",
    images: ['/og-image.jpg'],
  },

  // ROBOTS (Para que Google lo indexe correctamente)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ICONOS
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Color de la barra de estado en móviles (para que combine con el diseño oscuro) */}
        <meta name="theme-color" content="#020610" />
      </head>
      <body className="min-h-full flex flex-col bg-[#020610] text-white selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}