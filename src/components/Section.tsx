import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-neon-cyan">
        <span className="h-1 w-1 rounded-full bg-neon-cyan shadow-[0_0_8px_currentColor]" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-muted-foreground">{description}</p>}
    </motion.div>
  );
}
