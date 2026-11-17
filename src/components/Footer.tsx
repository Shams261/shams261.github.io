"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import { navigation, resumeUrl } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";

export default function Footer() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formId) throw new Error("Contact form unavailable");
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Message could not be sent");
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  }

  return (
    <footer id="connect" className="bg-[#0a0a0a] text-white">
      <div className="page-container py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-400">Have an opportunity in mind?</p>
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">LET&apos;S TALK.</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-300">I&apos;m open to full-stack and software engineering opportunities. Reach out about your team, a role, or a product you&apos;re building.</p>
            <a href="mailto:shamsshoaib261@gmail.com" className="mt-7 inline-flex min-h-11 max-w-full items-center gap-2 text-sm font-medium underline decoration-gray-500 underline-offset-4 sm:text-base"><Mail size={18} className="shrink-0" aria-hidden="true" /><span className="break-all">shamsshoaib261@gmail.com</span></a>
            <div className="mt-5 flex flex-wrap gap-5">
              {[{ label: "LinkedIn", href: "https://www.linkedin.com/in/shamstabrez-ca/" }, { label: "GitHub", href: "https://github.com/Shams261" }].map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm text-gray-300 hover:text-white">{link.label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
              <a href={resumeUrl} download="Shams_Resume.pdf" className="inline-flex min-h-11 items-center text-sm text-gray-300 hover:text-white">Download Resume</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} aria-label="Contact Shams" aria-busy={status === "sending"} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="contact-name" className="mb-2 block text-sm text-gray-200">Your name</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} value={formData.name} onChange={event => setFormData({ ...formData, name: event.target.value })} className="contact-input" /></div>
              <div><label htmlFor="contact-email" className="mb-2 block text-sm text-gray-200">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} value={formData.email} onChange={event => setFormData({ ...formData, email: event.target.value })} className="contact-input" /></div>
            </div>
            <div><label htmlFor="contact-message" className="mb-2 block text-sm text-gray-200">Your message</label><textarea id="contact-message" name="message" required maxLength={5000} rows={5} placeholder="Tell me about the role, your team, or your project." value={formData.message} onChange={event => setFormData({ ...formData, message: event.target.value })} className="contact-input resize-y" /></div>
            <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200 disabled:cursor-wait disabled:opacity-60">{status === "sending" ? "Sending…" : "Send Message"}</button>
            <div aria-live="polite" aria-atomic="true" className="text-sm leading-relaxed">
              {status === "success" && <p className="text-green-300">Message sent. Thank you for reaching out!</p>}
              {status === "error" && <p className="text-red-300">Your message couldn&apos;t be sent. Please try again or <a href="mailto:shamsshoaib261@gmail.com" className="underline underline-offset-4">email me directly</a>.</p>}
            </div>
          </form>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Shams Tabrez</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">{navigation.map(link => <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center text-sm text-gray-300 hover:text-white">{link.name}</a>)}</nav>
          <a href="#home" className="inline-flex min-h-11 items-center gap-2 text-sm text-gray-300">Back to top<ArrowUp size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
