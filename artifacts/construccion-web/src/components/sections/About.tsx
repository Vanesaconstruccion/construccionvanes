import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Target, Users, Award, Leaf, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIMELINE = [
  { year: "2009", title: "Fundación", desc: "Construye S.L. nace en Madrid con un equipo de 8 ingenieros con una visión clara: calidad sin compromisos." },
  { year: "2012", title: "Primera Gran Obra", desc: "Finalización del primer proyecto de infraestructura pública: el Polideportivo Municipal de Leganés." },
  { year: "2015", title: "Certificación ISO", desc: "Obtención de las certificaciones ISO 9001, ISO 14001 y OHSAS 18001. Crecimiento hasta 80 empleados." },
  { year: "2018", title: "Expansión Nacional", desc: "Apertura de delegaciones en Barcelona, Sevilla y Bilbao. Portfolio supera los 100 proyectos completados." },
  { year: "2021", title: "Construcción Sostenible", desc: "Lanzamiento de la línea de construcción sostenible Construye Verde, con certificación BREEAM en todos los proyectos." },
  { year: "2024", title: "Hoy", desc: "Más de 200 proyectos entregados, 150 profesionales en plantilla y una reputación construida ladrillo a ladrillo." },
];

const VALUES = [
  { icon: Shield, label: "Integridad", desc: "Transparencia y honestidad en cada contrato, cada presupuesto, cada conversación." },
  { icon: Target, label: "Precisión", desc: "Los plazos se cumplen. Los presupuestos se respetan. La calidad no se negocia." },
  { icon: Users, label: "Equipo", desc: "150 profesionales comprometidos. Seleccionamos a los mejores y los formamos para serlo aún más." },
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
      {/* Historia */}
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
                Más de 15 años<br />construyendo confianza.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                En 2009, un grupo de ingenieros y arquitectos decidieron que el sector de la construcción merecía más rigor, más transparencia y más ambición estética. Así nació Construye.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nuestra misión es transformar proyectos complejos en realidades tangibles que superen las expectativas de cada cliente. Trabajamos con precisión milimétrica, materiales certificados y equipos que comprenden que su nombre queda inscrito en cada estructura que levantan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Somos una empresa mediana con vocación de excelencia: lo suficientemente grandes para abordar cualquier proyecto, lo suficientemente ágiles para tratarte como si fuera el único.
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

      {/* Trabaja con nosotros */}
      <div className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter mb-3">
                Trabaja con Nosotros
              </h2>
              <p className="text-white/80 max-w-xl">
                Buscamos profesionales que compartan nuestra obsesión por la calidad. Ingenieros, arquitectos, jefes de obra, técnicos de instalaciones y personal administrativo.
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-accent rounded-none h-14 px-10 text-base tracking-wide shrink-0"
              data-testid="button-trabaja"
            >
              Ver Ofertas de Empleo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
