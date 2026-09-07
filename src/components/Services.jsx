import {
  Code2,
  Layers,
  PenTool,
  Database,
  BrainCircuit,
  Wrench,
  MessagesSquare,
} from "lucide-react";
import { services } from "../data/portfolioData";
import Reveal from "./Reveal";

const icons = [Code2, Layers, PenTool, Database, BrainCircuit, Wrench, MessagesSquare];

export default function Services() {
  return (
    <section id="services" className="bg-navy-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">What I Do</h2>
          <p className="mt-3 max-w-xl text-mist">
            Ways I can help on a project, a team, or a product.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={service.title} delay={i * 60}>
                <div className="flex gap-4">
                  <div className="shrink-0 grid place-items-center h-11 w-11 rounded-md bg-cyan/10 border border-cyan/25 text-cyan">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white">{service.title}</h3>
                    <p className="mt-1.5 text-sm text-mist/80 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
