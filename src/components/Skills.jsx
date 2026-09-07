import { skillGroups } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="bg-navy-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Technical Skills</h2>
          <p className="mt-3 max-w-xl text-mist">
            The languages, frameworks, and tools I use to take a project from idea to something running in
            production.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 60}>
              <div className="h-full rounded-lg border-l-2 border-cyan bg-navy-800 p-6">
                <h3 className="font-display font-semibold text-white">{group.title}</h3>
                <p className="mt-1.5 text-sm text-mist/80">{group.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-cyan-dim"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
