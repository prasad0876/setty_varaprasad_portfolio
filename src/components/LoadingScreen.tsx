import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[999] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-24 w-24">
              <span className="absolute inset-0 rounded-full border-2 border-neon-cyan/30" />
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-cyan"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-2 rounded-full border-2 border-transparent border-t-neon-purple"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-gradient font-display text-xl font-black">SV</span>
              </div>
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">Initializing</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
