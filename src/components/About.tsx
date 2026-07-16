import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, Target, User } from "lucide-react";
import { SectionHeading } from "./Section";

function Counter({ to, label, suffix = "+" }: { to: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <div ref={ref} className="glass rounded-2xl p-5 text-center transition-all hover:border-neon-purple/50 hover:shadow-[0_0_30px_oklch(0.68_0.24_305/25%)]">
      <div className="font-display text-4xl font-bold text-gradient">
        {n}{suffix}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

const facts = [
  { icon: User, label: "Name", value: "Setty Varaprasad" },
  { icon: GraduationCap, label: "Currently", value: "B.Tech CSE, Vignan University" },
  { icon: MapPin, label: "Location", value: "Guntur, India" },
  { icon: Target, label: "Career Goal", value: "Apply technical skills and continuous learning to drive growth" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="About Me"
          title={<>The <span className="text-gradient">Developer</span> behind the pixels</>}
          description="A curious builder blending frontend polish with backend logic to ship interfaces that feel alive."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-3xl p-8">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm a passionate Computer Science Engineering student who enjoys building modern web
                applications and solving real-world problems. I continuously improve my skills in
                <span className="text-neon-cyan"> frontend</span> and
                <span className="text-neon-purple"> backend</span> development while learning new
                technologies. I love creating clean user interfaces, scalable applications, and
                interactive user experiences.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {facts.map((f) => (
                  <div key={f.label} className="group flex items-start gap-3 rounded-xl border border-border/60 bg-background/40 p-4 transition-colors hover:border-neon-blue/40">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-neon-cyan">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{f.label}</div>
                      <div className="text-sm text-foreground">{f.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 lg:col-span-2"
          >
            <Counter to={5} label="Projects Completed" />
            <Counter to={12} label="Technologies" />
            <Counter to={4} label="Certificates" />
            <Counter to={2} label="Years Learning" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
