import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.png";

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroImg}
            alt="Construcción moderna al atardecer"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <div className="inline-block bg-accent/20 border border-accent/50 backdrop-blur-md px-4 py-1.5 mb-6">
              <span className="text-accent font-medium tracking-widest text-sm uppercase">Excelencia en Construcción</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-[1.1] mb-6">
              FORJAMOS EL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">FUTURO.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed">
              Desde 2009, transformamos visiones ambiciosas en realidades tangibles. 
              Arquitectura monumental y precisión técnica para proyectos que definen el paisaje.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-8 text-base tracking-wide"
                onClick={() => handleScroll("#proyectos")}
              >
                Ver Proyectos
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-8 text-base tracking-wide"
                onClick={() => handleScroll("#contacto")}
              >
                Contáctanos
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Descubrir</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
