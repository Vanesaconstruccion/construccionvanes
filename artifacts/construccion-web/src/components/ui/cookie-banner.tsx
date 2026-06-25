import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "mivanjar_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent) return;
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
          role="dialog"
          aria-label="Banner de cookies"
          aria-live="polite"
        >
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground shadow-2xl border border-primary-foreground/10 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <Cookie className="w-8 h-8 text-accent shrink-0 hidden md:block" />

            <div className="flex-1 text-sm leading-relaxed text-primary-foreground/90">
              <span className="font-semibold text-primary-foreground">Este sitio usa cookies.</span>{" "}
              Utilizamos cookies propias esenciales para el correcto funcionamiento de la web. Al continuar navegando, acepta su uso.{" "}
              <Link href="/cookies" className="text-accent hover:underline underline-offset-2">
                Más información
              </Link>
              .
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={reject}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-2"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="bg-accent hover:bg-accent/90 text-white text-sm font-medium px-5 py-2.5 transition-colors"
              >
                Aceptar todas
              </button>
              <button
                onClick={reject}
                aria-label="Cerrar banner"
                className="text-primary-foreground/40 hover:text-primary-foreground transition-colors ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
