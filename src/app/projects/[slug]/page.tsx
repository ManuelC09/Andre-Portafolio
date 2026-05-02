"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

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
    images: [
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703352/Dive_into_the_freshness_and_tenderness_of_our_Salm%C3%B3n_Tartar_With_every_bite_experience_the_p_i2ayu1.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703352/Dive_into_the_freshness_and_tenderness_of_our_Salm%C3%B3n_Tartar_With_every_bite_experience_the_p_i2ayu1.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703349/Its_rum_time_at_Primitivo_Come_enjoy_the_best_rums_and_create_unforgettable_moments_with_gr_k9auhq.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703347/Savor_the_10_oz_Churrasco_at_Primitivo_Perfectly_cooked_tender_and_full_of_flavor._Pair_it_zusiam.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703346/Listo_para_un_toque_de_frescura_y_picante_Disfrut%C3%A1_nuestro_Aguachile_de_Camar%C3%B3n_una_explos_z0xqke.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703345/Let_the_rum_set_the_tone_A_glass_of_premium_rum_the_perfect_setting_and_all_the_style_only_dcjubn.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703343/Craving_pasta_Our_Fettuccini_Alfredo_with_Chicken_is_the_creamy_satisfying_dish_youve_been_ormqup.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703343/Start_your_week_with_a_board_worth_slowing_down_for.Fine_cheeses_curated_charcuterie_and_ju_silhuz.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703342/Venir_acompa%C3%B1ado_tiene_sus_beneficios._Almorz%C3%A1_con_un_grupo_de_4_o_m%C3%A1s_y_activ%C3%A1_un_25_de_desc_yzmihp.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703341/Light_bold_unforgettable._Savor_our_Salm%C3%B3n_al_Grill_and_turn_your_Monday_into_something_me_cvlp08.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703340/Los_domingos_se_disfrutan_diferente_en_Primitivo._Tra%C3%A9_a_los_peques_y_aprovech%C3%A1_nuestras_promo_bpt27n.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703340/Medallones_de_res_en_salsa_jalape%C3%B1a_6_oz._Corte_suave_salsa_intensa_y_una_combinaci%C3%B3n_que_imp_idocu4.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703338/Dos_platos_que_no_pod%C3%A9s_dejar_pasar-_Sashimi_y_Tuna_tataki._Para_quienes_buscan_algo_aut%C3%A9ntico_owykiu.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703337/For_those_who_truly_understand_steak._Our_10_oz_Churrasco_brings_together_precision_fire_and_icruw7.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703337/Not_your_average_fish_tacos._Bold_fresh_and_perfectly_crispy_made_to_turn_your_lunch_into_s_yqmfyn.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703336/Ya_probaste_nuestros_nuevos_platos_lunch_Nuevo_en_el_men%C3%BA-_Ensalada_Thai_con_Camarones_por_so_ppn6tw.jpg",
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
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099615/Si_solo_mostr%C3%A1s_las_prendas_que_compraste_legalmente_para_reventa_sin_afirmar_que_trabaj%C3%A1s_con_vuwufw.mp4",
    ],
    images: [
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703499/WhatsApp_Image_2026-04-21_at_5.57.15_PM_y32egc.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703498/WhatsApp_Image_2026-04-21_at_5.57.31_PM_pg38p8.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703497/WhatsApp_Image_2026-04-21_at_5.57.48_PM_htfjav.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703496/WhatsApp_Image_2026-04-21_at_5.58.01_PM_rkbakl.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703494/WhatsApp_Image_2026-04-21_at_5.58.34_PM_rccn1w.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703494/WhatsApp_Image_2026-04-21_at_5.58.11_PM_tbokq4.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703492/WhatsApp_Image_2026-04-21_at_5.58.34_PM_1_aoxpwe.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703491/WhatsApp_Image_2026-04-20_at_5.59.50_PM_nb4of4.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703490/WhatsApp_Image_2026-04-20_at_5.59.41_PM_urltxw.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703488/WhatsApp_Image_2026-04-20_at_6.00.03_PM_l0zlwd.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703488/WhatsApp_Image_2026-04-20_at_6.00.22_PM_ffekqf.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703486/WhatsApp_Image_2026-04-20_at_6.00.13_PM_r2gac9.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703485/WhatsApp_Image_2026-04-21_at_5.57.15_PM_1_faptmw.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703484/Reportan_presencia_de_flow_en_la_luna_Confirmamos-_es_Alex_Unique_nicaragua_gym_ropa_gbr4ns.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703483/Si_entren%C3%A1s_esto_es_para_vos.Nueva_colecci%C3%B3n_en_camino.Env%C3%ADos_a_toda_Nicaragua._nicaragua_gy_ad4iqt.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703482/Tu_rutina_no_se_detiene_y_tu_estilo_tampoco._En_Alex_Unique_tenemos_ropa_deportiva_%C3%BAnica_c%C3%B3mo_rnckun.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703480/A_las_7-00_PM_llega_lo_que_estabas_esperando.La_nueva_colecci%C3%B3n_de_Alex_Unique_ya_est%C3%A1_lista_p_iuonll.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703480/Nuevo_a%C3%B1o_nuevas_metas_Este_2025_comienza_con_el_pie_derecho_y_entrena_con_estilo_%EF%B8%8F__%EF%B8%8F._mfgyj9.jpg",
    ],
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
    images: [
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703405/La_energ%C3%ADa_de_anoche_fue_incre%C3%ADble_y_esto_es_solo_el_comienzo_La_vibra_en_La_Fiesta_An_aodlg4.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703404/La_energ%C3%ADa_de_anoche_fue_incre%C3%ADble_y_esto_es_solo_el_comienzo_La_vibra_en_La_Fiesta_An_1_cbysbt.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703403/La_energ%C3%ADa_de_anoche_fue_incre%C3%ADble_y_esto_es_solo_el_comienzo_La_vibra_en_La_Fiesta_An_2_tovyry.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703402/En_Reef_VIP_no_pasa_el_tiempo_pasa_la_m%C3%BAsica_y_con_ella_el_ritmo_la_energ%C3%ADa_y_todo_lo_dem%C3%A1s_jt7z0q.webp",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703401/Hay_un_punto_donde_la_m%C3%BAsica_te_envuelve_y_todo_se_hace_VIP._Ah%C3%AD_empieza_la_experiencia_Reef_VIP_r477tg.jpg",
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
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777099069/As%C3%AD_se_vivi%C3%B3_la_gran_entrega_de_premios_y_clausura_de_nuestra_campa%C3%B1a_Navidad_24-7_Volv%C3%A9_a_wcphut.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777702732/Las_nuevas_bebidas_del_momento_ya_llegaron_a_AMPM_Te_anim%C3%A1s_a_ser_de_los_primeros_en_pro_2_h2zafs.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777702734/As%C3%AD_vivimos_la_gran_apertura_de_AMPM_Puerto_Cabezas_Reviv%C3%AD_con_nosotros_los_mejores_momentos_1_nftqq8.mp4",
      "https://res.cloudinary.com/dackn5ysr/video/upload/v1777702735/Exclusivas_refrescantes_y_listas_para_vos_Ya_descubriste_tu_favorita_Ven%C3%AD_por_la_tuya_excl_2_dbyg2i.mp4",
    ],
    images: [
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703221/SaveClip.App_488889398_585397977847874_268071983258307314_n_ixuhtl.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703221/SaveClip.App_488658146_585398004514538_6701153640541228552_n_ueaoie.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703220/SaveClip.App_489115815_585398041181201_607984791702290982_n_nvcnlo.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703220/IMG_2406.JPG_gafylz.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703220/SaveClip.App_486652803_18453826840078580_7800665611929914129_n_pvv7gl.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703220/SaveClip.App_488937164_585398007847871_2510565817117272216_n_vfhsum.jpg",
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
    images: [

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
    images: [
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703587/Pastas_hechas_en_casa_en_Forno_Formas_distintas_misma_intenci%C3%B3n-hacerlo_bien_desde_el_inici_o0pdqe.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703586/Pastas_hechas_en_casa_en_Forno_Formas_distintas_misma_intenci%C3%B3n-hacerlo_bien_desde_el_inici_1_d4fcsx.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703585/Pastas_hechas_en_casa_en_Forno_Formas_distintas_misma_intenci%C3%B3n-hacerlo_bien_desde_el_inici_2_zs4u6b.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703584/Beef_al_Forno_Roast_beef_jugoso_provolone_derretido_y_focaccia_reci%C3%A9n_salida._No_hay_mucho_q_vsszod.jpg",
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
    images: [
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703633/Si_un_d%C3%ADa_dec%C3%ADs_que_no_quieres_pizza_es_por_que_nunca_has_probado_las_de_Miztura___%EF%B8%8FA_edodp5.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703632/Si_un_d%C3%ADa_dec%C3%ADs_que_no_quieres_pizza_es_por_que_nunca_has_probado_las_de_Miztura___%EF%B8%8FA_1_idx0ru.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703631/Si_un_d%C3%ADa_dec%C3%ADs_que_no_quieres_pizza_es_por_que_nunca_has_probado_las_de_Miztura___%EF%B8%8FA_2_sdyf6u.jpg",
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
    images: [
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703786/Nuestro_Vinagre_Rico_de_Manzana_es_M%C3%A1sQueUnVinagre.Descubr%C3%AD_3_formas_f%C3%A1ciles_de_usarlo_todos_tgexep.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703784/Sab%C3%ADas_que_pod%C3%A9s_desinfectar_tus_frutas_de_forma_natural_Con_Vinagre_Rico_lo_hac%C3%A9s_f%C3%A1cil_r%C3%A1_dyokvr.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703783/Cada_presentaci%C3%B3n_de_Vinagre_Rico_tiene_su_prop%C3%B3sito_perfecto-_Manzana_para_lo_fresco_Natura_vrmjkg.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703781/Cre%C3%ADas_que_el_vinagre_de_manzana_era_solo_para_ensaladas_Algunos_lo_usan_para_la_ropa_otros_mdcpui.jpg",
      "https://res.cloudinary.com/dackn5ysr/image/upload/v1777703780/Cre%C3%ADas_que_el_vinagre_de_manzana_era_solo_para_ensaladas_Algunos_lo_usan_para_la_ropa_otros_1_sfsrud.jpg",
    ],
    
  },
};

type Project = {
  name: string;
  role: string;
  description: string;
  platforms: string;
  videos: string[];
  images?: string[];
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function CustomVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
        onEnded={() => setIsPlaying(false)}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:scale-110 hover:bg-white/20 transition-all duration-300">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </button>
      )}

      <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between">
        <button
          type="button"
          onClick={togglePlay}
          className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/60 transition"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" />
          )}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/60 transition"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = projectData[slug as keyof typeof projectData] as Project;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#020610] text-white overflow-hidden">
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.18),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-12"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <span className="inline-block px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary bg-primary/10 border border-primary/20 rounded-full mb-5">
              Proyecto
            </span>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              {project.name}
            </h1>

            <p className="text-xl text-primary font-bold mb-4">
              {project.role}
            </p>

            <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
              {project.description}
            </p>

            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-gray-500">
              Plataformas: {project.platforms}
            </p>
          </motion.div>

          {/* VIDEOS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary bg-primary/10 border border-primary/20 rounded-full mb-5">
                Contenido en Video
              </span>

              <h2 className="text-3xl md:text-5xl font-black text-white">
                Videos realizados para{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  {project.name}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.videos.map((videoUrl, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative w-full aspect-[9/16] bg-gray-900/50 rounded-[2rem] overflow-hidden border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:border-primary/50 hover:shadow-[0_0_40px_rgba(29,78,216,0.2)] transition-all duration-500"
                >
                  {videoUrl.startsWith("http") ? (
                    <CustomVideo src={videoUrl} />
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

          {/* IMÁGENES */}
          {project.images && project.images.length > 0 && (
            <motion.div variants={fadeUp} className="mt-20">
              <div className="text-center mb-12">
                <span className="inline-block px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary bg-primary/10 border border-primary/20 rounded-full mb-5">
                  Portafolio Visual
                </span>

                <h2 className="text-3xl md:text-5xl font-black text-white">
                  Contenido visual & dirección creativa para{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                    {project.name}
                  </span>
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                  Una muestra de piezas visuales, diseños y contenido gráfico
                  desarrollado para diferentes formatos digitales.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.images.map((imageUrl, index) => (
                  <motion.button
                    type="button"
                    onClick={() => setSelectedImage(imageUrl)}
                    key={index}
                    variants={fadeUp}
                    className="relative w-full aspect-[4/5] bg-gray-900/50 rounded-[2rem] overflow-hidden border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:border-primary/50 hover:shadow-[0_0_40px_rgba(29,78,216,0.2)] transition-all duration-500 text-left"
                  >
                    <img
                      src={imageUrl}
                      alt={`Trabajo visual de André ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#020610] to-transparent pointer-events-none" />

                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-2">
                        Diseño Visual
                      </p>

                      {/* <h3 className="text-white text-xl font-bold">
                        Proyecto {index + 1}
                      </h3> */}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* MODAL DE IMAGEN */}
      {selectedImage && (
        <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center px-4">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-5xl w-full max-h-[90vh] rounded-[2rem] overflow-hidden border border-white/10 bg-[#020610] shadow-[0_0_80px_rgba(29,78,216,0.25)]"
          >
            <img
              src={selectedImage}
              alt="Imagen ampliada del portafolio"
              className="w-full max-h-[90vh] object-contain bg-black"
            />
          </motion.div>
        </div>
      )}
    </main>
  );
}