import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      <svg
        className="animate-wave absolute -top-1 left-0 h-16 w-[200%] text-neon-purple/20"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path d="M0,50 C300,100 600,0 900,50 C1050,75 1150,25 1200,50 L1200,100 L0,100 Z" fill="currentColor" />
      </svg>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 pb-8 pt-16 text-center md:px-8">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Setty Varaprasad. All rights reserved.
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          Made with <Heart className="h-3.5 w-3.5 fill-neon-pink text-neon-pink animate-pulse" /> by
          <span className="text-gradient font-semibold">Setty Varaprasad</span>
        </div>
      </div>
    </footer>
  );
}
