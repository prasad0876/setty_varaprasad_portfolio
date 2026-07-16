import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Torus, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";
import { ClientOnly } from "./ClientOnly";

const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];

function useTypewriter(words: string[], speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), pause);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setI((n) => n + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

function Avatar3D() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group ref={group}>
      {/* holographic rings */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Torus args={[2.2, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={2} />
        </Torus>
      </Float>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <Torus args={[1.8, 0.02, 16, 100]} rotation={[Math.PI / 2.4, 0.5, 0]}>
          <meshStandardMaterial color="#7c4dff" emissive="#7c4dff" emissiveIntensity={2} />
        </Torus>
      </Float>
      <Float speed={1.8} rotationIntensity={1} floatIntensity={1}>
        <Torus args={[2.5, 0.015, 16, 100]} rotation={[Math.PI / 3, -0.4, 0.3]}>
          <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={2} />
        </Torus>
      </Float>
      {/* core sphere */}
      <Sphere args={[1.1, 96, 96]}>
        <MeshDistortMaterial
          color="#7c4dff"
          emissive="#7c4dff"
          emissiveIntensity={0.4}
          distort={0.35}
          speed={2.5}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
      {/* orbiting particles */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <Float key={i} speed={2 + i * 0.1} floatIntensity={0.5}>
            <mesh position={[Math.cos(angle) * 2.8, Math.sin(angle) * 0.5, Math.sin(angle) * 2.8]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={3} />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

function AvatarCanvas() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} color="#7c4dff" intensity={3} />
      <pointLight position={[-5, -5, 5]} color="#00e5ff" intensity={2.5} />
      <Suspense fallback={null}>
        <Avatar3D />
      </Suspense>
    </Canvas>
  );
}

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 md:pt-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neon-purple/20 animate-glow-pulse" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-10 md:px-8 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
            <span className="text-muted-foreground">Available for opportunities</span>
            <span className="ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-neon-cyan shadow-[0_0_10px_currentColor]" />
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <br />
            <span className="text-gradient text-glow">Setty Varaprasad</span>
          </h1>

          <div className="mt-6 flex items-center gap-2 font-mono text-lg text-muted-foreground sm:text-xl">
            <span className="text-neon-cyan">{">"}</span>
            <span className="text-foreground">{typed}</span>
            <span className="inline-block h-6 w-[2px] animate-blink bg-neon-cyan" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Computer Science Engineering student from Guntur, India — crafting modern web experiences,
            scalable backends, and interactive interfaces with a passion for clean code and continuous learning.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Setty_Varaprasad_Resume.pdf"
              download
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon-blue via-primary to-neon-purple px-6 py-3 text-sm font-semibold text-background shadow-[0_0_30px_oklch(0.72_0.2_260/60%)] transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Download Resume
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-all hover:border-neon-cyan/60 hover:text-neon-cyan"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div>
              <div className="font-display text-2xl font-bold text-foreground">2+</div>
              <div>Years Learning</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-bold text-foreground">10+</div>
              <div>Technologies</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-bold text-foreground">4+</div>
              <div>Certificates</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square w-full max-w-[560px] justify-self-center lg:justify-self-end"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue/30 via-neon-purple/20 to-neon-cyan/30 blur-3xl" />
          <div className="relative h-full w-full">
            <ClientOnly fallback={<div className="h-full w-full rounded-full bg-primary/10" />}>
              <AvatarCanvas />
            </ClientOnly>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="tracking-widest">SCROLL</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
