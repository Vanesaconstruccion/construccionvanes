import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Target, Users, Award, Leaf, Handshake } from "lucide-react";

const TIMELINE = [
  {
    year: "2023",
    title: "Orígenes y Visión",
    desc: "Unión de un equipo experto con años de trayectoria para crear un nuevo proyecto de reformas integrales. Nace con el propósito de transformar espacios con rigor técnico y visión actual.",
  },
  {
    year: "2024",
    title: "Consolidación",
    desc: "Especialización en reformas integrales y modernización de espacios residenciales. Primeros proyectos entregados con la máxima satisfacción del cliente.",
  },
  {
    year: "2025",
    title: "Compromiso",
    desc: "Crecimiento constante, manteniendo la precisión técnica y la satisfacción del cliente como pilar central. Ampliación del portfolio con proyectos de mayor envergadura.",
  },
  {
    year: "2026",
    title: "Presente",
    desc: "Un equipo consolidado y cualificado, transformando inmuebles con una mirada actual y materiales de alta calidad. Referentes en reformas integrales en Madrid.",
  },
];

const VALUES = [
  { icon: Shield, label: "Integridad", desc: "Transparencia y honestidad en cada contrato, cada presupuesto, cada conversación." },
  { icon: Target, label: "Precisión", desc: "Los plazos se cumplen. Los presupuestos se respetan. La calidad no se negocia." },
  { icon: Users, label: "Equipo", desc: "Pequeño grupo de profesionales comprometidos. Seleccionamos a los mejores y los formamos para serlo aún más." },
  { icon: Award, label: "Excelencia", desc: "Solo entregamos lo que enorgullece. Nunca lo que simplemente cumple." },
  { icon: Leaf, label: "Sostenibilidad", desc: "Construimos el presente sin hipotecar el futuro. Eficiencia energética en cada proyecto." },
  { icon: Handshake, label: "Compromiso", desc: "Nuestra relación con el cliente no termina en la entrega de llaves." },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <section id="conocenos" className="overflow-hidden">
      {/* Quiénes somos */}
      <div ref={ref} className="py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="text-accent text-sm font-medium tracking-widest uppercase">Quiénes Somos</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mt-3 mb-8">
                Experiencia que transforma,<br />resultados que perduran.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Somos un equipo de albañiles altamente cualificados que combinamos la frescura de un proyecto joven con la solidez de una trayectoria consolidada en el sector. Aunque como marca actual llevamos poco más de un año, cada uno de nuestros profesionales acumula años de experiencia real en obra, forjada en proyectos de construcción de gran envergadura.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nuestra especialidad son las reformas integrales: transformamos espacios obsoletos en ambientes modernos, funcionales y habitables que reflejan la visión de cada cliente. Trabajamos con materiales de vanguardia, seleccionados por su durabilidad, estética y rendimiento, garantizando un resultado que supera las expectativas tanto en forma como en fondo.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Desde la demolición y el replanteo inicial hasta el último acabado, gestionamos cada fase con la misma atención al detalle. Nuestro enfoque es siempre integral: un único interlocutor, un único equipo, un único nivel de exigencia. Así evitamos incoherencias y garantizamos que cada decisión técnica esté alineada con el diseño y el presupuesto acordado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Somos un equipo cercano, accesible y comprometido. Lo suficientemente especializados para abordar reformas complejas con solvencia técnica, y lo suficientemente flexibles para adaptarnos a las necesidades reales de cada cliente. Porque para nosotros, cada inmueble que entra en nuestras manos es una oportunidad de demostrar que la maestría artesanal y la visión contemporánea pueden ir de la mano.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                    className="flex gap-6"
                    data-testid={`timeline-item-${item.year}`}
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-10 h-10 flex items-center justify-center font-display font-bold text-xs z-10 ${i === TIMELINE.length - 1 ? "bg-accent text-white" : "bg-background border-2 border-border text-foreground"}`}>
                        {item.year.slice(-2)}
                      </div>
                    </div>
                    <div className="pb-2">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-accent font-bold text-sm">{item.year}</span>
                        <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div ref={valuesRef} className="py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Lo Que Nos Define</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mt-3">Nuestros Valores</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-primary p-8 hover:bg-primary-foreground/5 transition-colors"
                data-testid={`value-${value.label.toLowerCase()}`}
              >
                <value.icon className="w-8 h-8 text-accent mb-5" />
                <h3 className="font-display font-bold text-xl mb-3">{value.label}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
