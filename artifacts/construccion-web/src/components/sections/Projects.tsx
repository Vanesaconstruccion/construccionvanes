import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

const PROJECTS = [
  {
    id: 1,
    title: "Torre Meridiana",
    date: "Completado: Diciembre 2023",
    category: "Obra Civil",
    description: "Complejo de oficinas de 28 plantas con estructura de hormigón armado y fachada ventilada en vidrio reflectante. Superficie construida: 45.000 m².",
    img: project1,
  },
  {
    id: 2,
    title: "Centro Comercial Ágora",
    date: "Completado: Marzo 2023",
    category: "Proyectos Comerciales",
    description: "Desarrollo de centro comercial con 180 locales, 4 plantas y cubierta verde transitable. Estructura metálica con soluciones pasivas de climatización.",
    img: project2,
  },
  {
    id: 3,
    title: "Residencial El Pinar",
    date: "Completado: Julio 2022",
    category: "Obra Residencial",
    description: "84 viviendas de protección oficial con certificación energética A+. Sistema constructivo industrializado con paneles prefabricados y cubierta fotovoltaica.",
    img: project3,
  },
  {
    id: 4,
    title: "Hospital Universitario Norte",
    date: "Completado: Enero 2022",
    category: "Infraestructura",
    description: "Ampliación de 12.000 m² del área de urgencias y UCI. Construcción en obra nueva adyacente a edificio en funcionamiento con gestión de interferencias.",
    img: project4,
  },
  {
    id: 5,
    title: "Pasaje Vienés",
    date: "Completado: Septiembre 2021",
    category: "Rehabilitación",
    description: "Rehabilitación integral de edificio catalogado del siglo XIX. Restauración de fachada historicista y adaptación del interior a uso hotelero de 5 estrellas.",
    img: project5,
  },
  {
    id: 6,
    title: "Parque Logístico Sur",
    date: "Completado: Abril 2021",
    category: "Industrial",
    description: "Plataforma logística de 80.000 m² con 6 naves modulares, zona de oficinas y red de servicios. Pavimentación industrial reforzada para cargas de 5T/m².",
    img: project6,
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      data-testid={`card-project-${project.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-card border border-border cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white text-xs font-medium tracking-widest uppercase px-3 py-1">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">{project.date}</p>
            <h3 className="text-xl font-display font-bold text-foreground mb-3 tracking-tight">{project.title}</h3>
            <motion.p
              className="text-sm text-muted-foreground leading-relaxed"
              initial={false}
              animate={{ opacity: hovered ? 1 : 0.7 }}
            >
              {project.description}
            </motion.p>
          </div>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 w-10 h-10 bg-accent flex items-center justify-center mt-1"
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>
      </div>
    </motion.article>
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
