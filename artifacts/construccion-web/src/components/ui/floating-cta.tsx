import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const el = document.querySelector("#contacto");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleClick}
          data-testid="button-floating-cta"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-accent text-white shadow-xl px-5 py-3.5 font-display font-semibold text-sm tracking-wide uppercase"
          style={{ boxShadow: "0 8px 32px 0 rgba(0,170,180,0.25)" }}
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          Pedir Presupuesto
        </motion.button>
      )}
    </AnimatePresence>
  );
}
