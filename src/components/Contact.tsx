import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Code2 } from "lucide-react";
import { SectionHeading } from "./Section";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">Connect</span></>}
          description="Open to internships, collaborations and interesting problems to solve."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-strong h-full rounded-3xl p-8">
              <h3 className="font-display text-2xl font-semibold">Reach out</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Whether you have a project idea or just want to chat about tech — my inbox is open.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-neon-cyan">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="text-sm">setty.varaprasad@example.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-neon-cyan">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Location</div>
                    <div className="text-sm">Guntur, India</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 text-[11px] uppercase tracking-widest text-muted-foreground">Follow me</div>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/varaprasadsetty/", label: "LinkedIn" },
                    { icon: Github, href: "https://github.com/prasad0876/", label: "GitHub" },
                    { icon: Code2, href: "#", label: "LeetCode" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="group grid h-11 w-11 place-items-center rounded-xl glass transition-all hover:-translate-y-1 hover:border-neon-cyan/60 hover:text-neon-cyan hover:shadow-[0_0_20px_oklch(0.85_0.16_200/40%)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                setSent(true);
                setTimeout(() => setSent(false), 3000);
                (e.target as HTMLFormElement).reset();
              }, 1200);
            }}
            className="glass-strong space-y-5 rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-muted-foreground">Name</span>
                <input required type="text" placeholder="Your name" className="w-full rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-neon-cyan/60 focus:shadow-[0_0_0_3px_oklch(0.85_0.16_200/15%)]" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-muted-foreground">Email</span>
                <input required type="email" placeholder="you@email.com" className="w-full rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-neon-cyan/60 focus:shadow-[0_0_0_3px_oklch(0.85_0.16_200/15%)]" />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs font-medium text-muted-foreground">Message</span>
              <textarea required rows={6} placeholder="Tell me about your project..." className="w-full resize-none rounded-xl border border-border/70 bg-background/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-neon-cyan/60 focus:shadow-[0_0_0_3px_oklch(0.85_0.16_200/15%)]" />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-neon-blue via-primary to-neon-purple px-6 py-3.5 text-sm font-semibold text-background shadow-[0_0_30px_oklch(0.72_0.2_260/40%)] transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              {sent ? "Message sent ✨" : sending ? "Sending..." : (<><Send className="h-4 w-4" /> Send Message</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
