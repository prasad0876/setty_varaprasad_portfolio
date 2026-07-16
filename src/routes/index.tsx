import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certificates } from "@/components/Certificates";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ClientOnly } from "@/components/ClientOnly";
import { Scene3D } from "@/components/Scene3D";
import { useLenis } from "@/hooks/useLenis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Setty Varaprasad — Full Stack Developer Portfolio" },
      { name: "description", content: "Interactive 3D portfolio of Setty Varaprasad — CSE student and full stack developer building modern web experiences with React, Node.js and MongoDB." },
      { property: "og:title", content: "Setty Varaprasad — Full Stack Developer" },
      { property: "og:description", content: "Explore projects, skills and experience from a passionate full stack developer based in Guntur, India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  useLenis();
  return (
    <div className="relative min-h-screen">
      <LoadingScreen />
      <ClientOnly>
        <Scene3D />
        <CursorGlow />
      </ClientOnly>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
