import { useState } from "react";
import { Mail, Send, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/portfolioData";
import Reveal from "./Reveal";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend is wired up yet — this opens the visitor's email client
    // pre-filled with the message. Swap this for a real form handler
    // (e.g. Formspree, EmailJS, or your own API route) when ready.
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || "Portfolio contact");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="bg-navy-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Let's Work Together</h2>
          <p className="mt-4 max-w-sm text-mist leading-relaxed">
            Have a role, project, or idea in mind? I'd like to hear about it — send a message and I'll get
            back to you.
          </p>

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <a href="mailto:mgshspr@gmail.com" className="text-purple-400 hover:text-purple-300">
                  mgshspr@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <a href="tel:+250782324912" className="text-purple-400 hover:text-purple-300">
                  +250 782 324 912
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-bold mb-4">Connect with me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/ru-30/Portfolio.git" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                <GithubIcon className="text-purple-400" size={20} />
              </a>
              <a href="https://linkedin.com/in/mugisha-espoir-0483b2319" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center hover:bg-purple-500/30 transition-colors">
                <LinkedinIcon className="text-purple-400" size={20} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-navy-800 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="block text-sm font-medium text-mist mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md bg-navy-900 border border-white/10 px-3.5 py-2.5 text-white placeholder:text-mist/40 focus:border-cyan outline-none transition-colors"
                placeholder="Tell me a bit about the role or project..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-cyan px-6 py-3 font-semibold text-navy-900 hover:bg-cyan-dim transition-colors"
            >
              <Send size={16} /> Send Message
            </button>

            {sent && (
              <p className="mt-4 text-sm text-cyan-dim" role="status">
                Your email client should have opened with the message ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-mist mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-md bg-navy-900 border border-white/10 px-3.5 py-2.5 text-white placeholder:text-mist/40 focus:border-cyan outline-none transition-colors"
      />
    </div>
  );
}
