import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./Section";
import {
  SiJavascript, SiPython, SiReact, SiAngular, SiNodedotjs, SiExpress, SiMongodb,
  SiFirebase, SiGit, SiGithub, SiHtml5, SiCss, SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Code2 } from "lucide-react";

type Skill = { name: string; level: number; icon: React.ElementType; color: string };

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 85, icon: FaJava, color: "#f89820" },
      { name: "Python", level: 80, icon: SiPython, color: "#4B8BBE" },
      { name: "SQL", level: 82, icon: SiMysql, color: "#00758F" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95, icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", level: 90, icon: SiCss, color: "#264de4" },
      { name: "JavaScript", level: 88, icon: SiJavascript, color: "#f7df1e" },
      { name: "React", level: 85, icon: SiReact, color: "#61DAFB" },
      { name: "Angular", level: 70, icon: SiAngular, color: "#DD0031" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80, icon: SiNodedotjs, color: "#8CC84B" },
      { name: "Express", level: 78, icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", level: 82, icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", level: 75, icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 85, icon: SiGit, color: "#F05032" },
      { name: "GitHub", level: 88, icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", level: 92, icon: Code2, color: "#007ACC" },
    ],
  },
];

function CircularSkill({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [progress, setProgress] = useState(0);
  const Icon = skill.icon;

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setProgress(skill.level), delay);
    return () => clearTimeout(t);
  }, [inView, skill.level, delay]);

  const r = 34;
  const c = 2 * Math.PI * r;
  const offset = c - (progress / 100) * c;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="group flex flex-col items-center gap-3 rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-[0_10px_40px_oklch(0.72_0.2_260/30%)]"
    >
      <div className="relative h-20 w-20">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={r} className="fill-none stroke-border" strokeWidth="4" />
          <circle
            cx="40"
            cy="40"
            r={r}
            className="fill-none"
            stroke="url(#skillGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
          />
          <defs>
            <linearGradient id="skillGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#7c4dff" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          {(() => { const I = skill.icon as React.ComponentType<{ className?: string; style?: React.CSSProperties }>; return <I className="h-8 w-8" style={{ color: skill.color }} />; })()}
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm font-semibold">{skill.name}</div>
        <div className="font-mono text-xs text-muted-foreground">{progress}%</div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Skills"
          title={<>My <span className="text-gradient">Tech Stack</span></>}
          description="Tools and technologies I use to bring ideas to life."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-strong rounded-3xl p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-gradient-to-b from-neon-cyan to-neon-purple" />
                <h3 className="font-display text-xl font-semibold">{cat.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
                {cat.skills.map((s, i) => (
                  <CircularSkill key={s.name} skill={s} delay={i * 120} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
