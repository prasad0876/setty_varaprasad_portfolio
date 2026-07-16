import { motion } from "framer-motion";
import { Award, Cloud, Database, Code, Trophy } from "lucide-react";
import { SectionHeading } from "./Section";

const certs = [
  { title: "AWS Training & Certification", org: "Amazon Web Services", icon: Cloud, color: "#ff9900" },
  { title: "React Certification", org: "Infosys Springboard", icon: Code, color: "#61DAFB" },
  { title: "DB2 Certification", org: "IBM", icon: Database, color: "#054ada" },
  { title: "Hackathon Participation", org: "University Level", icon: Trophy, color: "#c084fc" },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Certificates"
          title={<>Learning <span className="text-gradient">Milestones</span></>}
          description="Continuously leveling up through structured programs and community events."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl glass-strong p-6 transition-all hover:shadow-[0_20px_50px_-10px]"
              style={{ "--tw-shadow-color": c.color } as React.CSSProperties}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40" style={{ background: c.color }} />

              <div className="mb-4 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-border/70 bg-background/50 transition-transform group-hover:scale-110" style={{ boxShadow: `0 0 30px ${c.color}30` }}>
                  <c.icon className="h-6 w-6" style={{ color: c.color }} />
                </div>
                <Award className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="font-display text-base font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>

              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1 w-1 rounded-full" style={{ background: c.color }} />
                Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
