import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";

const POSTS = [
  {
    id: 1,
    title: "El auge de la construcción industrializada en España",
    date: "15 Mayo 2026",
    category: "Tendencias",
    excerpt: "La prefabricación y los sistemas modulares están redefiniendo los plazos y costes de construcción. Analizamos el estado del sector en nuestro país y hacia dónde se dirige.",
    img: blog1,
    readTime: "5 min lectura",
  },
  {
    id: 2,
    title: "Certificación BREEAM: qué significa y por qué importa",
    date: "3 Abril 2026",
    category: "Sostenibilidad",
    excerpt: "Cada vez más promotores exigen certificaciones ambientales. Explicamos qué evalúa BREEAM, cómo se obtiene y qué ventajas ofrece tanto al promotor como al usuario final.",
    img: blog2,
    readTime: "7 min lectura",
  },
  {
    id: 3,
    title: "Gestión de proyectos en entornos urbanos consolidados",
    date: "18 Febrero 2026",
    category: "Técnica",
    excerpt: "Construir en el centro de una ciudad implica retos logísticos, normativos y de vecindad que requieren experiencia y protocolo. Compartimos nuestra metodología.",
    img: blog3,
    readTime: "6 min lectura",
  },
];

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" ref={ref} className="py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Actualidad</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mt-3">
              Blog
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
            data-testid="link-all-posts"
          >
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-border">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-background group cursor-pointer"
              data-testid={`card-blog-${post.id}`}
            >
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white text-xs font-medium tracking-widest uppercase px-3 py-1">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                  Leer artículo <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
