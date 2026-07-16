import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./Section";

const education = [
  { degree: "B.Tech — Computer Science Engineering", school: "Vignan University", period: "2023 – 2027", status: "Current" },
  { degree: "Intermediate", school: "Sri Chaitanya Junior College", period: "2021 – 2023" },
  { degree: "SSC", school: "Narayana E-Techno School", period: "2020 – 2021" },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Education"
          title={<>Academic <span className="text-gradient">Path</span></>}
        />

        <div className="relative">
          <div className="absolute left-6 top-2 h-full w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />
          <div className="space-y-6">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                <span className="absolute left-0 top-2 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 backdrop-blur-sm">
                  <GraduationCap className="h-5 w-5 text-neon-cyan" />
                </span>
                <div className="glass-strong rounded-2xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{e.degree}</h3>
                    {e.status && (
                      <span className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-neon-cyan">
                        {e.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-neon-purple">{e.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
