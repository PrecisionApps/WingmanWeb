"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
          aria-label="Wingman Home"
        >
          Wingman
        </Link>
        
        <div className="hidden sm:flex items-center gap-8">
          <Link 
            href="#how-it-works" 
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link 
            href="#philosophy" 
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Philosophy
          </Link>
          <Link 
            href="#trust" 
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Trust & Safety
          </Link>
        </div>

        <Link
          href="#get-started"
          className="px-5 py-2.5 text-sm font-medium rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
        >
          Get Access
        </Link>
      </nav>
    </header>
  );
}
