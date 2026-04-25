"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa6";
import { motion, Variants } from "framer-motion"; // <-- Importamos Variants aquí

// Base de datos actualizada con todas las marcas y arrays para las URLs de los videos
const projectData = {
  primitivo: {
    name: "Primitivo",
    role: "Community & Project Manager",
    description:
      "Trabajé como Community Manager, desarrollando contenido, bitácoras, coordinación con diseño, participación en producciones fotográficas y coberturas de eventos, además de brindar apoyo temporal como Project Manager.",
    platforms: "Instagram, TikTok",
    videos: [
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098739/As%C3%AD_se_vivi%C3%B3_el_lanzamiento_de_nuestro_Men%C3%BA_Lunch._Nuevos_platos_promociones_especiales_y_una_bgod1c.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098741/Fridays_are_for_friends_fun_and_cocktails._Let_s_make_this_Friday_one_to_remember_at_Prim_kxbulu.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098741/Two_new_dishes._One_unforgettable_experience._Introducing_Tuna_Tataki_and_Sashimi..bold_fres_jvswco.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098743/The_right_place_the_right_person_the_perfect_moment_That_s_what_Fridays_are_made_for.Tonight_dnamlc.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098744/Friday_at_Primitivo-_fire_passion_and_a_plate_that_speaks_for_itself.This_is_how_flavor_is_kw8k9o.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098744/Good_vibes_and_great_food._Fridays_are_meant_for_unforgettable_moments._Join_us_today_and_mak_co4il0.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098745/Busc%C3%A1s_algo_fresco_y_especial_Nuestro_nuevo_sashimi_combina_camar%C3%B3n_at%C3%BAn_salm%C3%B3n_y_corvina_so_k5ju7b.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098745/Maee..._esto_es_Primitivo_obvio_que_estamos_en_el_top_PrimitivoExperience_Cocktails_Top_zbfnhl.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098746/Fridays_hit_different_at_Primitivo._Live_music_events_signature_dishes_cocktails_and_that_sjs5ov.mp4",
    ],
  },
  alexUnique: {
  name: "Alex Unique",
  role: "Fundador & Gestor de Marca",
  description:
    "Fundador de emprendimiento de ropa deportiva. A cargo de la gestión integral: creación de contenido, estrategia digital, manejo de redes sociales, atención a clientes y desarrollo de identidad de marca para conectar con la audiencia y generar ventas.",
  platforms: "Instagram, TikTok",
  videos: [
    "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099601/Joggers_que_combinan_con_todoBuzos_que_no_pasan_desapercibidosY_s%C3%AD_solo_en_Alex_Unique_AlexU_c3myau.mp4",
    "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099603/Nueva_colecci%C3%B3n_Env%C3%ADos_por_medio_de_Cargotrans_7-00_P.M_%EF%B8%8F_l8nvow.mp4",
    "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099605/Si_te_tom%C3%A1s_el_gym_en_serio_tu_outfit_tambi%C3%A9n_deber%C3%ADa_estar_a_la_altura.Nueva_colecci%C3%B3n_disponib_gaaxph.mp4",
    "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099606/Nuevos_shorts_en_Alex_Unique_Comodidad_y_estilo_para_entrenar_o_andar_casual_en_cualquier_cn1n7k.mp4",
    "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099607/%C3%9Altima_colecci%C3%B3n_del_a%C3%B1o_Env%C3%ADos_a_toda_Nicaragua_vppxeb.mp4",
    "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099608/Comodidad_y_estilo_en_un_solo_fit.Nuestros_Joggers_Alex_Unique_son_perfectos_para_entrenar_s_qh3doc.mp4",
    "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099608/Los_mejores_joggers_y_shorts_para_gym_y_ocasiones_casuales_est%C3%A1n_en_Alex_Unique._%EF%B8%8F__%EF%B8%8F_Compr_scifph.mp4",
    "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099612/Unboxing_de_la_mercader%C3%ADa_de_esta_semana_unboxing_ropa_ropadeportiva_gym_nicaragua_nnpjzc.mp4",
    "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099615/Si_solo_mostr%C3%A1s_las_prendas_que_compraste_legalmente_para_reventa_sin_afirmar_que_trabaj%C3%A1s_con_vuwufw.mp4"
  ]
},
  reef: {
    name: "The Reef",
    role: "Community Manager",
    description:
      "Encargado de la planificación de contenido, coordinación con diseño, coberturas de eventos y comunicación directa con la gerente de marketing para alinear estrategias y objetivos.",
    platforms: "Instagram, TikTok",
    videos: [
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098200/No_fue_en_Reef_VIP..._De_verdad_salisteHay_lugares_y_est%C3%A1_el_lugar.Donde_la_m%C3%BAsica_vibra_dife_1_tojihy.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098203/IMG_2414_xerep6.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098204/IMG_2413_imwgp7.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098204/IMG_2417_2_piyvhw.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098210/IMG_2416_4_tvyn2m.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098210/This_is_your_sign_to_lose_control.Si_est%C3%A1s_leyendo_esto_ya_sab%C3%A9s_lo_que_toca-Shots_ritmo_y_cer_a68gvu.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098215/IMG_2415_m2wold.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098219/The_Reef_became_the_runway_%EF%B8%8FPasos_firmes_luces_encendidas_y_puro_estilo_caminando_en_cada_rinc%C3%B3_jg0zrv.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098221/Feb_14_at_Reef_A_night_to_remember._Insane_energy_endless_drinks_a_party_that_went_all_mlq7mo.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777098223/The_best_parties_happen_here._No_questions._No_doubts._Just_vibes._Energy_that_never_stop_hp3bpp.mp4",
    ],
  },
  ampm: {
    name: "AM:PM",
    role: "Community Manager",
    description:
      "Gestioné la comunicación digital de la marca ejecutando estrategias de contenido enfocadas en fortalecer su presencia en redes. Realicé coberturas de eventos y activaciones generando contenido en tiempo real. También coordiné con embajadores de la marca y el equipo creativo para asegurar la consistencia en la comunicación y ejecución efectiva de campañas.",
    platforms: "Instagram, TikTok, Facebook",
    videos: [
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099061/Una_explosi%C3%B3n_morada_te_espera...Fanta_Uva_lleg%C3%B3_en_versi%C3%B3n_lata_y_est%C3%A1_m%C3%A1s_cool_que_nunca._ei3bt8.mp4",
  "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099061/Hoy_no_es_un_d%C3%ADa_cualquiera_Es_el_D%C3%ADa_del_Hot_Dog_y_en_AMPM_lo_celebramos_con_nuestra_pro_qgpyc6.mp4",
  "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099067/AQM-nB8schhmY_HUd9NAtNeQGW-1jUmxa6LyamI0ojIVT5PyvFpyTzXvOHA8cimjwKABv5pHv0zLF__ghZoo1gnQVzqsyaSB68aDDI3udEWyPQ_1_axvvul.mp4",
  "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099069/As%C3%AD_se_vivi%C3%B3_la_gran_entrega_de_premios_y_clausura_de_nuestra_campa%C3%B1a_Navidad_24-7_Volv%C3%A9_a_wcphut.mp4"

    ],
  },
  krispy: {
    name: "Krispy Chicken",
    role: "Community Manager",
    description:
      "Gestionando la planificación y ejecución de contenido en redes sociales. Trabajé en la creación de copys y en coordinación directa con el diseñador para desarrollar piezas visuales alineadas a la identidad de la marca, asegurando consistencia en la comunicación digital.",
    platforms: "Instagram, TikTok",
    videos: [
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097698/WhatsApp_Video_2026-03-09_at_3.31.43_PM_w4zxub.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097698/No_todos_los_sabores_est%C3%A1n_hechos_para_mezclarse.Pero_este_s%C3%AD.Hot_Honey_Sandwich._Dulce_picante_bvirrm.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097697/Se_escucha_el_crujiente_se_siente_lo_jugosoy_el_sabor_se_queda.As%C3%AD_es_el_pollo_en_Krispy_Chicken_jy3nx7.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097696/No_somos_antojo._Somos_adicci%C3%B3n._Plaza_Santa_Mar%C3%ADa_Las_Colinas_Crunchy_Antojo_Krispy_N_bjqqls.mp4",
    ],
  },
  forno: {
    name: "Forno Fiery",
    role: "Community Manager",
    description:
      "Estuve a cargo de la gestión de redes sociales, desarrollando contenido enfocado en resaltar la propuesta de la marca. Colaboré estrechamente con el equipo de diseño en la producción de contenido visual, manteniendo una línea gráfica coherente y atractiva.",
    platforms: "Instagram",
    videos: [
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097534/Una_pasta_no_alcanza_Por_eso_hicimos_varias.Eleg%C3%AD_tu_favorita._nicaragua_1_vqs61o.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097538/Cuando_quer%C3%A9s_comer_biensin_resignar_sabor_ni_energ%C3%ADa_Pastas_hechas_al_horno_pensadas_para_di_1_ntmxqq.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097542/Cuando_el_proceso_se_hace_con_calma_el_resultado_se_siente_distinto_Pastas_hechas_desde_cero_1_jtzc9x.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097543/No_colaps%C3%B3_el_sistema_colapsamos_nosotros_de_tanta_felicidad_Gracias_por_cada_pedido_por_la_1_nyrcvf.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097544/Elegimos_hacerlo_diferente.Cada_pasta_pasa_por_un_proceso_completo_antes_de_llegar_a_tus_manos_lxhpve.mp4",
    ],
  },
  miztura: {
    name: "Miztura",
    role: "Community Manager",
    description:
      "Desempeñé el rol encargándome de la planificación de contenido, redacción de copys y coordinación con el diseñador para la creación de piezas. Mi enfoque fue mantener una comunicación clara y alineada con el estilo de la marca.",
    platforms: "Instagram, TikTok",
    videos: [
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097116/No_necesit%C3%A1s_pasaporte_para_viajar._Solo_buen_apetito.En_Miztura_cada_plato_es_una_parada_disti_3_sqt0sk.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097114/Colores_sabores_y_culturas_que_al_mezclarse_cuentan_una_sola_historia.Cada_plato_es_el_result_pjlr9g.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097114/El_sushi_tambi%C3%A9n_se_vive_detr%C3%A1s_de_cocina_Aqu%C3%AD_te_mostramos_c%C3%B3mo_se_prepara_paso_a_paso_co_ydtydg.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097113/Los_tacos_de_suadero_m%C3%A1s_chilangos_de_Managua.Lentos_jugosos_y_llenos_de_calle.Un_bocado_y_ya_e_1_e91xgg.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097111/En_Miztura_cocinamos_para_los_que_buscan_intensidad_frescura_y_ese_toque_atrevido_que_te_saca_1_kreria.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097109/No_necesit%C3%A1s_pasaporte_para_viajar._Solo_buen_apetito.En_Miztura_cada_plato_es_una_parada_disti_2_tagaaf.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097108/En_Miztura_cocinamos_para_los_que_buscan_intensidad_frescura_y_ese_toque_atrevido_que_te_saca_ddddi3.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097108/El_sushi_tambi%C3%A9n_puede_ser_una_experiencia_En_Miztura_mezclamos_t%C3%A9cnicas_culturas_y_mucho_s_1_xwrhud.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097106/En_Miztura_cocinamos_para_los_que_buscan_intensidad_frescura_y_ese_toque_atrevido_que_te_saca_2_jb8whp.mp4",
    ],
  },
  vinagre: {
    name: "Vinagre Rico",
    role: "Community Manager",
    description:
      "Responsable de la gestión de redes sociales, trabajando en la organización de contenido y desarrollo de copys. Además, colaboré con el diseñador en la creación de materiales visuales, asegurando una comunicación consistente y acorde a la identidad de la marca.",
    platforms: "Instagram, Facebook",
    videos: [
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097867/Cabello_brillante_y_sin_frizz_con_Vinagre_Rico_Prepar%C3%A1_la_mezcla--_2_cucharadas_de_Vinagre_Ri_w47par.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097868/Con_Vinagre_Rico_la_soluci%C3%B3n_est%C3%A1_en_tus_manos._Sabor_en_tus_recetas._Limpieza_en_tu_hogar._bwzvap.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097868/Un_toque_%C3%BAnico_en_cada_receta._Transform%C3%A1_lo_simple_en_algo_extraordinario_con_Vinagre_Rico_Co_v57qye.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097868/Vinagre_Rico_le_da_a_tus_platillos_favoritos_ese_toque_especial_que_transforma_cada_bocado_Nat_gkjomz.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097868/Y_vos_con_cu%C3%A1l_lo_combin%C3%A1s_%EF%B8%8F_Descubr%C3%AD_c%C3%B3mo_Vinagre_Rico_realza_todos_tus_platillos._Anima_tz1veb.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777097868/Detr%C3%A1s_de_cada_botella_de_Vinagre_Rico_hay_soluciones_simples_y_efectivas._Natural_vers%C3%A1til_y_fth4i2.mp4",
    ],
  },
};

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#020610]">
        Proyecto no encontrado
      </div>
    );
  }

  // Tipamos explícitamente con : Variants para que TypeScript no se queje
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-[#020610] pt-24 pb-20 px-6 md:px-10 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[150px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <div className="p-2.5 rounded-full bg-gray-900/50 border border-gray-800 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium tracking-wide">
              Volver al Portafolio
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="mb-20"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            {project.name}
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="w-full h-[1px] bg-gradient-to-r from-primary/50 via-gray-800 to-transparent mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={fadeUp} className="md:col-span-2">
              <h3 className="text-xl text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                El Reto / Lo que hice
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#0a1128]/50 backdrop-blur-md p-8 rounded-3xl border border-gray-800/80 shadow-2xl"
            >
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">
                Rol Asignado
              </h4>
              <p className="text-accent font-semibold mb-8 text-lg">
                {project.role}
              </p>

              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">
                Plataformas
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white font-medium">
                {/* Íconos dinámicos: Solo aparecen si la plataforma está en el texto */}
                <div className="flex items-center gap-2.5 bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-800 w-fit">
                  {project.platforms.includes("Instagram") && (
                    <FaInstagram className="w-5 h-5 text-pink-500 drop-shadow-md" />
                  )}
                  {project.platforms.includes("TikTok") && (
                    <FaTiktok className="w-4 h-4 text-white drop-shadow-md" />
                  )}
                  {project.platforms.includes("Facebook") && (
                    <FaFacebookF className="w-4 h-4 text-blue-500 drop-shadow-md" />
                  )}
                </div>

                {/* Texto de las plataformas */}
                <span className="text-gray-300 text-sm">
                  {project.platforms}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
            Contenido Destacado{" "}
            <Play className="w-5 h-5 text-primary fill-primary" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.videos.map((videoUrl, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative w-full aspect-[9/16] bg-gray-900/50 rounded-[2rem] overflow-hidden border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:border-primary/50 hover:shadow-[0_0_40px_rgba(29,78,216,0.2)] transition-all duration-500"
              >
                {videoUrl.startsWith("http") ? (
                  <video
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a1128] gap-4 p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center animate-pulse">
                      <Play className="w-6 h-6 text-gray-500 ml-1" />
                    </div>
                    <p className="text-gray-500 text-sm font-medium">
                      Falta subir video {index + 1} a Cloudinary
                    </p>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020610] to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
