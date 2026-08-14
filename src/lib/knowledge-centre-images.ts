export type KnowledgeImage = {
  src: string;
  alt: string;
  source: string;
  href: string;
};

export const KNOWLEDGE_CENTRE_IMAGES: Record<string, KnowledgeImage> = {
  "flow-measurement": {
    src: "https://www.gaimc.com/editor/image/20251114/20251114131416_4958.png",
    alt: "Industrial flow meter installed on a process pipeline",
    source: "GAIMC Industrial",
    href: "https://www.gaimc.com/Newsinfo/flow-meter-troubleshooting-guide",
  },
  "level-measurement": {
    src: "https://www.skeic.com/wp-content/uploads/2021/09/80GHz-Radar-Level-Transmitter-application-400x541.jpg",
    alt: "Radar level transmitter installed on an industrial storage tank",
    source: "SKE Measurement",
    href: "https://www.skeic.com/portfolio-items/radar-liquid-level-transmitter/",
  },
  "pressure-temperature": {
    src: "https://static.wixstatic.com/media/ee47d2_3111bda0fe0f45cbafb9f3b4db471034~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ee47d2_3111bda0fe0f45cbafb9f3b4db471034~mv2.jpg",
    alt: "Industrial technician checking process instrumentation and measurement equipment",
    source: "Instrutemp",
    href: "https://www.instrutemp.com.br/post/voc%C3%AA-sabe-o-que-%C3%A9-metrologia-industrial",
  },
  "process-analysis": {
    src: "https://fr.secauto.clemessy.com/uploads/pics/Equipements_d_analyse_pour_le_controle_de_l_eau_sur_une_usine_d_uree__Montage_sur_chassis_inox.jpg",
    alt: "Industrial water quality analysis skid with online process analyzers",
    source: "Clemessy SEC Automation",
    href: "https://fr.secauto.clemessy.com/activites/systemes-danalyse-industrielle/mesures-de-la-qualite-de-leau/",
  },
  "automation-connectivity": {
    src: "https://www.incontrol.co.uk/app/uploads/seoblog-plcsystemintegratorv3-02-w700h700-437x437.png",
    alt: "Industrial PLC control panel with automation modules and wiring",
    source: "InControl Systems",
    href: "https://www.incontrol.co.uk/news/choosing-the-right-plc-systems-integrator-what-to-look-for-in-a-reliable-partner/",
  },
  "valves-flow-control": {
    src: "https://www.electricactuator-valve.com/uploads/20217/news/n202603301505293c25b.jpg",
    alt: "Electric actuator mounted on an industrial pipeline valve",
    source: "Freya Electric Actuator",
    href: "https://www.electricactuator-valve.com/news/90-degree-rotation-electric-drive-actuator-85491867.html",
  },
  "pumps-dosing": {
    src: "https://cdn.fastpixel.io/fp/ret_img%2Bv_a2a8%2Bw_1242%2Bh_828%2Bq_lossy%2Bto_webp/midwestcompressorsystems.com%2Fweb%2Fwp-content%2Fuploads%2F2026%2F03%2FIndustrial-Pumps.jpg",
    alt: "Industrial centrifugal pump and motor assembly",
    source: "Midwest Compressor Systems",
    href: "https://midwestcompressorsystems.com/industrial-pumps/",
  },
  "flange-protection": {
    src: "https://www.flangeguards.mx/images/home_diseno_fabricacion.webp",
    alt: "Transparent industrial flange guard installed around a pipe flange",
    source: "FLANPRO",
    href: "https://www.flangeguards.mx/",
  },
  "compressed-air-energy-efficiency": {
    src: "https://www.ogengineering.com.tr/assets/img/bas%C4%B1nc/bas%C4%B1nc.jpg",
    alt: "Industrial compressed air compressors and distribution piping",
    source: "OG Engineering",
    href: "https://www.ogengineering.com.tr/bas%C4%B1nc.html",
  },
  "engineering-practice": {
    src: "https://instrumentacionycontrol.net/wp-content/uploads/2020/10/Instrumentacion_Industrial.jpg",
    alt: "Industrial technician testing process instrumentation in a plant",
    source: "Instrumentación y Control",
    href: "https://instrumentacionycontrol.net/sp-curso-de-instrumentacion-industrial-normal/",
  },
};

export function getKnowledgeImage(slug: string) {
  return KNOWLEDGE_CENTRE_IMAGES[slug];
}
