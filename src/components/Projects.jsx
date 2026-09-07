import { ExternalLink, FolderGit2, Brain, Landmark, Database, LayoutDashboard } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data/portfolioData";
import Reveal from "./Reveal";

const icons = {
  "doc-ai": Brain,
  securebank: Landmark,
  novabank: Database,
  "react-dashboard": LayoutDashboard,
};

export default function Projects() {
  return (
    <section id="projects" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink">Projects</h2>
          <p className="mt-3 max-w-xl text-slate">
            A selection of systems I've designed and built, spanning AI, and frontend
            Development.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = icons[project.id] ?? FolderGit2;
            return (
              <Reveal key={project.id} delay={i * 70}>
                <article className="h-full flex flex-col rounded-lg overflow-hidden border border-ink/10 bg-white">
                  {/* Placeholder visual — replace with a real project screenshot */}
                  <div className="relative h-40 bg-navy-900 flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #3b82f6 0%, transparent 60%)",
                      }}
                    />
                    <Icon className="relative text-cyan" size={40} strokeWidth={1.5} />
                    <span className="absolute bottom-2 right-3 font-mono text-[10px] text-mist/50">
                      image placeholder — replace me
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display font-semibold text-lg text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate leading-relaxed flex-1">{project.description}</p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded border border-ink/10 bg-paper-dim px-2 py-1 font-mono text-[11px] text-slate"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 px-3 py-2 text-ink hover:border-azure hover:text-azure transition-colors"
                      >
                        <GithubIcon size={16} /> GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 px-3 py-2 text-ink hover:border-azure hover:text-azure transition-colors"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a
                        href={`#${project.id}`}
                        className="inline-flex items-center gap-1.5 rounded-md bg-navy-900 px-3 py-2 text-white hover:bg-navy-800 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-6 font-mono text-xs text-slate/70">
          Note: GitHub, live demo, and image placeholders above use example URLs — see the README for how to
          replace them with your real links and screenshots.
        </p>
      </div>
    </section>
  );
}
