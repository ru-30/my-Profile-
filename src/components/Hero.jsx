import { ArrowDown, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";
import Reveal from "./Reveal";

const codeLines = [
  { n: 1, text: <span><span className="text-cyan-dim">const</span> <span className="text-white">engineer</span> = {"{"}</span> },
  { n: 2, text: <span className="pl-4">name: <span className="text-cyan">'Mugisha Espoir'</span>,</span> },
  { n: 3, text: <span className="pl-4">base: <span className="text-cyan">'Kigali, Rwanda'</span>,</span> },
  { n: 4, text: <span className="pl-4">focus: [<span className="text-cyan">'full-stack'</span>, <span className="text-cyan">'AI'</span>, <span className="text-cyan">'databases'</span>],</span> },
  { n: 5, text: <span className="pl-4">status: <span className="text-cyan">'final-year, open to work'</span>,</span> },
  { n: 6, text: <span className="pl-4">ship: () {"=>"} <span className="text-cyan">'practical software'</span>,</span> },
  { n: 7, text: <span>{"}"}</span> },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-900 pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* subtle grid + gradient glow, kept quiet in the background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#67c9d8 1px, transparent 1px), linear-gradient(90deg, #67c9d8 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-azure/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="font-mono text-sm text-cyan mb-4">{profile.location}</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-mist font-medium">{profile.title}</p>
          <p className="mt-6 max-w-md text-mist/90 leading-relaxed">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-cyan px-6 py-3 font-semibold text-navy-900 hover:bg-cyan-dim transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 font-semibold text-white hover:border-cyan hover:text-cyan transition-colors"
            >
              <Mail size={17} /> Contact Me
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          {/* Code editor mockup — the developer's native visual, in place of a generic headshot */}
          <div className="rounded-xl border border-white/10 bg-navy-800 shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-navy-700/60">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-mist/70">profile.js</span>
            </div>
            <pre className="code-scroll overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7 text-mist">
              {codeLines.map((line) => (
                <div key={line.n} className="flex gap-4">
                  <span className="select-none text-white/20 w-4 text-right">{line.n}</span>
                  <span>{line.text}</span>
                </div>
              ))}
            </pre>
          </div>

          {/* Elegant initials placeholder, secondary to the code panel */}
          <div className="absolute -bottom-6 -left-6 hidden sm:grid h-20 w-20 place-items-center rounded-lg border border-cyan/30 bg-navy-900 font-display text-xl font-bold text-cyan shadow-xl">
            {profile.initials}
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-mist/60 hover:text-cyan transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[11px] tracking-wide">scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
