import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Hammer, PaintBucket, LayoutGrid } from "lucide-react";

const SERVICES = [
  {
    icon: Hammer,
    title: "Reformas Integrales",
    desc: "Transformación total de espacios. Desde la demolición y el desescombro hasta el replanteo técnico con planos detallados. Ejecutamos reformas integrales que modernizan tu inmueble con precisión.",
    features: ["Demolición profesional", "Gestión de desescombro", "Replanteo con planos técnicos"],
  },
  {
    icon: PaintBucket,
    title: "Albañilería y Acabados",
    desc: "Especialistas en el detalle. Aplicamos acabados de alta calidad en pintura, suelos y alicatados, garantizando un resultado impecable. Contamos con experiencia en apoyo a gremios como fontanería y electricidad.",
    features: ["Pintura y alicatados", "Colocación de tarimas", "Apoyo integral a instalaciones"],
  },
  {
    icon: LayoutGrid,
    title: "Montaje y Equipamiento",
    desc: "Soluciones estructurales y funcionales. Especialistas en estructuras de pladur, trasdosados y montaje de mobiliario. Adaptamos el espacio a tus necesidades con soluciones prácticas y actuales.",
    features: ["Estructuras de pladur", "Montaje de mobiliario", "Soluciones a medida"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" ref={ref} className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Qué Hacemos</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter mt-3 mb-6">
            Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Desde el primer replanteo hasta la última llave. Ofrecemos gestión integral de proyecto para que el cliente solo tenga que preocuparse de disfrutar el resultado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-border">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-background p-8 group hover:bg-primary transition-colors duration-300"
              data-testid={`service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/70 text-sm leading-relaxed mb-6 transition-colors">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary-foreground/60 transition-colors">
                    <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
