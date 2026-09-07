import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/portfolioData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-900/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-bold text-lg text-white"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid place-items-center w-9 h-9 rounded-md bg-cyan/10 border border-cyan/30 text-cyan text-sm">
            {profile.initials}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-mist">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-cyan transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md bg-cyan px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-cyan-dim transition-colors"
        >
          Let's talk
        </a>

        <button
          type="button"
          className="md:hidden text-white p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-900 border-t border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4 font-medium text-mist">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleLinkClick} className="block py-1 hover:text-cyan">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-2 inline-flex items-center rounded-md bg-cyan px-4 py-2 text-sm font-semibold text-navy-900"
              >
                Let's talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
