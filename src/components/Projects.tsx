import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { SectionHeading } from "./Section";
import { SiHtml, SiCss, SiJavascript, SiFirebase, SiNodedotjs, SiExpress, SiMongodb, SiReact } from "react-icons/si";

const projects = [
  {
    title: "Future Fashion",
    subtitle: "E-Commerce Website",
    role: "Frontend Developer",
    description:
      "Responsive e-commerce platform with login system, Firebase authentication, shopping cart and smooth UI animations.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    icons: [SiHtml, SiCss, SiJavascript, SiFirebase],
    gradient: "from-neon-cyan/30 via-neon-blue/20 to-transparent",
    accent: "#22d3ee",
  },
  {
    title: "MovieFlix",
    subtitle: "Movie Recommendation System",
    role: "Backend Developer",
    description:
      "Backend architecture with MongoDB, REST APIs, user profile storage and personalized movie recommendations connecting frontend and backend seamlessly.",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    icons: [SiNodedotjs, SiExpress, SiMongodb, SiReact],
    gradient: "from-neon-purple/30 via-neon-pink/20 to-transparent",
    accent: "#c084fc",
  },
];

function LaptopMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full">
      <div className="mx-auto w-full max-w-md">
        <div
          className="relative overflow-hidden rounded-t-xl border border-border/70 bg-background/60 p-2"
          style={{ boxShadow: `0 20px 60px ${accent}20` }}
        >
          <div className="flex gap-1.5 px-2 pb-2">
            <span className="h-2 w-2 rounded-full bg-red-500/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
            <span className="h-2 w-2 rounded-full bg-green-500/70" />
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-md bg-gradient-to-br from-background via-secondary/50 to-background p-3">
            <div className="grid h-full grid-cols-6 gap-2">
              <div className="col-span-2 space-y-1.5">
                <div className="h-2 w-full rounded" style={{ background: `${accent}80` }} />
                <div className="h-2 w-2/3 rounded bg-border" />
                <div className="mt-2 h-16 rounded bg-border/60" />
                <div className="h-2 w-full rounded bg-border" />
                <div className="h-2 w-1/2 rounded bg-border" />
              </div>
              <div className="col-span-4 grid grid-cols-2 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded bg-border/50 p-2">
                    <div className="mb-1 h-10 rounded" style={{ background: `linear-gradient(135deg, ${accent}40, transparent)` }} />
                    <div className="h-1.5 w-3/4 rounded bg-border" />
                    <div className="mt-1 h-1.5 w-1/2 rounded" style={{ background: `${accent}90` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-2 w-full rounded-b-2xl bg-gradient-to-b from-border to-transparent" />
        <div className="mx-auto -mt-1 h-1.5 w-1/3 rounded-b-md bg-border/60" />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Projects"
          title={<>Featured <span className="text-gradient">Work</span></>}
          description="Selected projects where I combined design thinking with technical execution."
        />

        <div className="grid gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl glass-strong p-8 lg:p-10 ${i % 2 === 1 ? "lg:[&>div]:flex-row-reverse" : ""}`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60`} />
              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: p.accent }} />

              <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
                <div className="flex-1">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-mono uppercase tracking-widest" style={{ color: p.accent }}>
                    <Sparkles className="h-3 w-3" />
                    {p.role}
                  </div>
                  <h3 className="font-display text-3xl font-bold sm:text-4xl">
                    {p.title}
                    <span className="block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-lg font-medium text-transparent sm:text-xl">
                      {p.subtitle}
                    </span>
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t, idx) => {
                      const Icon = p.icons[idx];
                      return (
                        <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs">
                          {Icon && <Icon className="h-3.5 w-3.5" />}
                          {t}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold transition-colors hover:text-neon-cyan">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </div>
                </div>

                <div className="w-full flex-1 transition-transform duration-500 group-hover:-translate-y-2 lg:w-auto">
                  <LaptopMockup accent={p.accent} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
