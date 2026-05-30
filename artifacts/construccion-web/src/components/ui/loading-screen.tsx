import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100px" }}
              transition={{ duration: 1, ease: "circOut" }}
              className="w-1 bg-accent mb-8"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter"
            >
              CONSTRUYE
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="text-muted-foreground mt-4 tracking-widest text-sm uppercase"
            >
              Desde 2009
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
