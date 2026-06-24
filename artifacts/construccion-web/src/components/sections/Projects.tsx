import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  cover: string;
  gallery: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Diseño de Baño en Madrid",
    subtitle: "Rehabilitación de Espacio Húmedo",
    date: "Noviembre 2024",
    description:
      "En esta intervención, buscamos transformar el baño en un espacio de relajación y modernidad. El proyecto destaca por la combinación de calidez y líneas minimalistas, logrando una atmósfera equilibrada y funcional. El diseño integra un mueble de baño acabado en madera natural que aporta textura y calidez, contrastando de manera elegante con la grifería y perfilería en negro mate. La zona de ducha se ha resuelto con una mampara de cristal minimalista que maximiza la amplitud visual, complementada con una iluminación LED indirecta que realza los revestimientos neutros.",
    cover: "https://res.cloudinary.com/dwplp85za/image/upload/v1782205653/rba%C3%B1o2.0_1_edtktu.webp",
    gallery: [
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782205765/rba%C3%B1o2.0_4_telnit.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782205748/rba%C3%B1o2.0_3_x7lvky.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782205731/reba%C3%B1o2.0_2_ryhr6g.webp",
    ],
  },
  {
    id: 2,
    title: "Reforma Integral: Cocina de Autor y Aseo con Carácter",
    subtitle: "Diseño, calidez y estilo rústico-contemporáneo en el hogar",
    date: "Mayo 2026",
    description:
      "Este proyecto es una muestra de cómo el diseño puede elevar estancias cotidianas a través de texturas y una paleta de colores cuidadosamente seleccionada. En la cocina, el protagonismo recae en los tonos verdes suaves y la madera natural, creando un ambiente acogedor y familiar. La distribución aprovecha al máximo la luz natural y ofrece un área de comedor integrada que invita al encuentro. Se ha buscado un equilibrio entre la estética clásica y la funcionalidad moderna.",
    cover: "https://res.cloudinary.com/dwplp85za/image/upload/v1782240616/rcasa2_qvox6b.jpg",
    gallery: [
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240646/rcasa1_i7mccg.jpg",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240645/rcasa3_czdrj4.jpg",
    ],
  },
  {
    id: 3,
    title: "Reforma Integral: Renovación Total de Cocina y Baño",
    subtitle: "De espacios obsoletos a ambientes modernos, luminosos y funcionales",
    date: "Abril 2022",
    description:
      "Este proyecto es un ejemplo contundente de cómo una planificación adecuada puede cambiar por completo la habitabilidad de un hogar. En la cocina, la metamorfosis es absoluta: de una configuración tradicional desgastada a una cocina de líneas puras y minimalistas. El baño también ha experimentado un cambio radical, sustituyendo la antigua bañera por un plato de ducha con mampara transparente, actualizando los revestimientos, el mueble de lavabo y la iluminación.",
    cover: "https://res.cloudinary.com/dwplp85za/image/upload/v1782240649/rcocina1_despues_guqsql.webp",
    gallery: [
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240648/rcocina3_antes_zw5ih0.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240648/rcocina1_antes_bqtrlb.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240648/rcocina2_antes_nebicr.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240649/rba%C3%B1o2_antes_qlm8yt.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240649/rcocina2_despues_uppbxz.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240649/rcocina3_despues_jvvijh.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240649/rba%C3%B1o2_despu%C3%A9s_oqf7xl.webp",
    ],
  },
  {
    id: 4,
    title: "Reforma Integral: Diseño de Vanguardia, Calidez y Funcionalidad",
    subtitle: "Transformación total de espacios interiores",
    date: "12 de septiembre de 2025",
    description:
      "Este proyecto se ha enfocado en maximizar la luminosidad y la armonía visual mediante una intervención integral. El elemento protagonista es la escalera, completamente renovada para convertirse en una pieza de diseño contemporáneo: combinación de escalones de madera natural con estructura metálica negra y cerramientos de vidrio. La zona social se ha integrado bajo un concepto de diseño limpio y minimalista, completado con una renovación completa del baño en estilo moderno.",
    cover: "https://res.cloudinary.com/dwplp85za/image/upload/v1782240648/rescalera1_voszwo.webp",
    gallery: [
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240648/rescalera2_owo2d8.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240647/rescalera3_grqbar.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240647/rescalera4_bs8ily.webp",
    ],
  },
  {
    id: 5,
    title: "Reforma Integral: Diseño, Calidez y Espacios Conectados",
    subtitle: "Renovación completa que equilibra la funcionalidad moderna",
    date: "15 de abril de 2025",
    description:
      "Este proyecto ha transformado la vivienda en un hogar contemporáneo, integrando soluciones de diseño a medida que aprovechan al máximo cada metro cuadrado. Se ha creado una zona exterior polivalente combinando áreas de descanso y ducha exterior. Los baños reflejan una estética sofisticada con muebles en acabados madera, grifería en negro mate, espejos retroiluminados e iluminación ambiental estratégica. Cada rincón ha sido optimizado con armarios y elementos de almacenamiento que mantienen el estilo.",
    cover: "https://res.cloudinary.com/dwplp85za/image/upload/v1782240644/casa1_thcahk.jpg",
    gallery: [
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240644/casa6_q9rdo1.jpg",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240644/reforma1_qzzdc9.jpg",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240647/rba%C3%B1o2.0_1_sgxk8v.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240647/reba%C3%B1o2.0_2_rstxru.webp",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240646/rba%C3%B1o2.1_2_hqd8at.jpg",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240646/rba%C3%B1o2.1_1_k59gf2.jpg",
    ],
  },
  {
    id: 6,
    title: "Reforma Integral: Del Caos Funcional a la Serenidad Moderna",
    subtitle: "Transformación radical que revaloriza la vivienda mediante la limpieza visual",
    date: "Junio 2025",
    description:
      "Este proyecto es un claro ejemplo de cómo una intervención integral puede alterar completamente la percepción y calidad de vida en un hogar. La propuesta se centra en eliminar la saturación visual sustituyendo elementos antiguos por una estética minimalista y luminosa. Se han unificado suelos mediante tarima de madera clara y la nueva cocina apuesta por tonos neutros y líneas puras. El baño marca un antes y después absoluto: grifería dorada mate, espejos circulares retroiluminados y revestimientos de gran formato.",
    cover: "https://res.cloudinary.com/dwplp85za/image/upload/v1782240645/rcasadespues_1_zbqcgc.jpg",
    gallery: [
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240645/rcasaantes_1_i2cpmp.jpg",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240645/rcasaantes_3_fv8boi.jpg",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240645/rcasadespues_2_un3xfi.jpg",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240645/rcasadespues_3_fjuy0k.jpg",
      "https://res.cloudinary.com/dwplp85za/image/upload/v1782240645/rcasa3_czdrj4.jpg",
    ],
  },
];

function GalleryModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const all = [project.cover, ...project.gallery];

  const prev = () => setCurrent((c) => (c - 1 + all.length) % all.length);
  const next = () => setCurrent((c) => (c + 1) % all.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl bg-primary rounded-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary-foreground/10">
          <div>
            <p className="text-xs text-accent tracking-widest uppercase">{project.subtitle}</p>
            <h3 className="font-display font-bold text-primary-foreground text-lg leading-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            data-testid="button-close-gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main image */}
        <div className="relative aspect-video bg-black overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={all[current]}
              alt={`Imagen ${current + 1}`}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Nav arrows */}
          {all.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                data-testid="button-gallery-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                data-testid="button-gallery-next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1">
            {current + 1} / {all.length}
          </div>
        </div>

        {/* Thumbnails */}
        {all.length > 1 && (
          <div className="flex gap-2 p-4 overflow-x-auto">
            {all.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`shrink-0 w-16 h-16 overflow-hidden border-2 transition-colors ${
                  i === current ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                }`}
                data-testid={`thumbnail-${i}`}
              >
                <img src={img} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <motion.article
        data-testid={`card-project-${project.id}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative overflow-hidden bg-card border border-border"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => setGalleryOpen(true)}>
          <motion.img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-white text-xs font-medium tracking-widest uppercase px-3 py-1">
              {project.subtitle}
            </span>
          </div>
          {/* View gallery hint */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/30"
          >
            <span className="bg-white/90 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-2">
              Ver galería
            </span>
          </motion.div>
        </div>

        <div className="p-6 relative">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">
                Completado: {project.date}
              </p>
              <h3 className="text-lg font-display font-bold text-foreground mb-3 tracking-tight leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>

          <button
            onClick={() => setGalleryOpen(true)}
            className="mt-5 inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
            data-testid={`button-saber-mas-${project.id}`}
          >
            Saber más <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.article>

      <AnimatePresence>
        {galleryOpen && (
          <GalleryModal project={project} onClose={() => setGalleryOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" ref={ref} className="py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Nuestro Portafolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter mt-3 mb-6">
            Proyectos Recientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Cada proyecto es una declaración de intenciones. Precisión técnica, materiales de primera y equipos que no admiten la mediocridad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
