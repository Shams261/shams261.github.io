"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { navigation, resumeUrl } from "@/data/portfolio";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => { if (desktop.matches) setIsOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/95 backdrop-blur-md">
      <div className="page-container flex h-20 items-center justify-between gap-4">
        <a href="#home" onClick={() => setIsOpen(false)} className="text-lg font-bold tracking-tight">Software Engineer</a>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map(link => <a key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-black">{link.name}</a>)}
          <a href={resumeUrl} download="Shams_Resume.pdf" className="inline-flex items-center gap-2 text-sm font-semibold">Resume <ArrowDownToLine size={15} aria-hidden="true" /></a>
          <a href="#connect" className="button-primary">Let&apos;s Talk</a>
        </nav>
        <button ref={toggleRef} type="button" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-gray-100 lg:hidden">{isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen} className="border-t border-gray-100 bg-white lg:hidden">
        <div className="page-container flex flex-col gap-1 py-4">
          {navigation.map(link => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-lg px-2 py-3 font-medium text-gray-700 hover:bg-gray-50">{link.name}</a>)}
          <a href={resumeUrl} download="Shams_Resume.pdf" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-2 px-2 py-3 font-medium">Download Resume <ArrowDownToLine size={16} aria-hidden="true" /></a>
          <a href="#connect" onClick={() => setIsOpen(false)} className="button-primary mt-2">Let&apos;s Talk</a>
        </div>
      </nav>
    </header>
  );
}
