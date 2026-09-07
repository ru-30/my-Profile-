import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-mono text-xs text-mist/60">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-mist/70 hover:text-cyan transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-mist/70 hover:text-cyan transition-colors">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-mist/70 hover:text-cyan transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
