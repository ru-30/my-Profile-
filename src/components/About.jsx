import { GraduationCap, Compass, Sparkles, Target } from "lucide-react";
import { profile } from "../data/portfolioData";
import Reveal from "./Reveal";

const points = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "7th Semester Information Management / IT student at AUCA.",
  },
  {
    icon: Compass,
    title: "Career interests",
    text: "Full-stack development, AI-driven systems, and database engineering.",
  },
  {
    icon: Sparkles,
    title: "Technical interests",
    text: "Intelligent document processing, applied machine learning, and clean architecture.",
  },
  {
    icon: Target,
    title: "Goals",
    text: "Land a first Web sites Development role and keep building solutions that matter.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid md:grid-cols-[1fr_1.1fr] gap-14 items-start">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">About Me</h2>
          <p className="mt-5 text-slate leading-relaxed">{profile.about}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-lg border border-ink/10 bg-white p-5">
                <p.icon className="text-azure" size={22} strokeWidth={1.75} />
                <h3 className="mt-3 font-display font-semibold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-sm text-slate leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
