import { GraduationCap, PlusCircle } from "lucide-react";
import { education, journey } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">Education</h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-16">
          {/* Education timeline */}
          <div>
            <ol className="relative border-l border-ink/15 pl-8">
              {education.map((item, i) => (
                <Reveal as="li" key={item.degree} delay={i * 80} className="relative pb-8 last:pb-0">
                  <span className="absolute left-[-2.35rem] top-1 grid h-6 w-6 place-items-center rounded-full bg-navy-900 text-cyan">
                    <GraduationCap size={13} />
                  </span>
                  <p className="font-mono text-xs text-azure">{item.status}</p>
                  <h3 className="mt-1 font-display font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-1 text-sm text-slate">{item.institution}</p>
                  <p className="text-xs text-slate/70">{item.period}</p>
                </Reveal>
              ))}

              <Reveal as="li" delay={education.length * 80} className="relative">
                <span className="absolute left-[-2.35rem] top-1 grid h-6 w-6 place-items-center rounded-full border border-dashed border-ink/25 text-slate">
                  <PlusCircle size={13} />
                </span>
                <p className="font-display text-sm text-slate/70 italic">
                   Certificate in Frontend Development at Solvit Africa
                </p>
              </Reveal>
            </ol>
          </div>

          {/* Journey / experience timeline */}
          <div>
            <h3 className="font-display font-semibold text-lg text-ink mb-6">My Journey</h3>
            <ol className="relative border-l border-ink/15 pl-8">
              {journey.map((step, i) => (
                <Reveal as="li" key={step.phase} delay={i * 70} className="relative pb-7 last:pb-0">
                  <span className="absolute left-[-2.35rem] top-1 grid h-6 w-6 place-items-center rounded-full bg-white border border-azure/40 font-mono text-[11px] text-azure">
                    {i + 1}
                  </span>
                  <h4 className="font-display font-semibold text-ink text-sm">{step.phase}</h4>
                  <p className="mt-1 text-sm text-slate leading-relaxed">{step.detail}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
