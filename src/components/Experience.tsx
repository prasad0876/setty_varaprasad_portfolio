import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeading } from "./Section";

const experiences = [
  {
    title: "Frontend Developer",
    org: "Future Fashion E-Commerce Website",
    period: "Feb 2025 – May 2025",
    points: ["Built responsive UI with HTML, CSS, JS", "Integrated Firebase authentication", "Implemented shopping cart flow"],
  },
  {
    title: "Backend Developer",
    org: "MovieFlix — Recommendation System",
    period: "Jul 2025 – May 2026",
    points: ["Designed MongoDB database schema", "Developed REST APIs with Node & Express", "Connected personalized recommendation engine"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Experience"
          title={<>Project <span className="text-gradient">Journey</span></>}
          description="Hands-on experience shipping real projects across the stack."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent md:left-1/2" />

          <div className="space-y-10">
            {experiences.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative pl-14 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                <span className={`absolute left-4 top-4 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple shadow-[0_0_20px_oklch(0.72_0.2_260/80%)] md:left-auto ${i % 2 === 0 ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-background" />
                </span>

                <div className="glass-strong rounded-2xl p-6 transition-all hover:border-neon-purple/50 hover:shadow-[0_10px_40px_oklch(0.68_0.24_305/25%)]">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {e.period}
                  </div>
                  <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-neon-cyan">
                    <Briefcase className="h-3.5 w-3.5" />
                    {e.org}
                  </div>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-neon-purple" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
