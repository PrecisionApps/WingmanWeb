"use client";

import { useState } from "react";

export function ClosingCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="get-started" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
          Ready for a different approach?
        </h2>
        <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
          Wingman is currently in early access. Join the waitlist and we'll 
          reach out when there's space.
        </p>

        {status === "success" ? (
          <div className="glass-panel-elevated rounded-2xl p-8 inline-block">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-lg font-medium mb-1">You're on the list</p>
            <p className="text-sm text-muted">We'll be in touch when there's space for you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="flex-1 px-5 py-4 rounded-full bg-white/5 border border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 rounded-full bg-accent text-white font-medium glow-accent hover:opacity-90 disabled:opacity-50 transition-all"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
        )}

        <p className="mt-6 text-xs text-muted">
          No spam. No selling your email. Just a heads-up when we're ready for you.
        </p>

        <div className="mt-16 section-divider" />

        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-left">
          <div>
            <p className="text-2xl font-semibold mb-1 text-gradient-accent">One</p>
            <p className="text-sm text-muted">Person introduced at a time. Quality over quantity.</p>
          </div>
          <div>
            <p className="text-2xl font-semibold mb-1 text-gradient-accent">Zero</p>
            <p className="text-sm text-muted">Feeds, swipes, or FOMO notifications. By design.</p>
          </div>
          <div>
            <p className="text-2xl font-semibold mb-1 text-gradient-accent">Yours</p>
            <p className="text-sm text-muted">Data stays yours. Export or delete anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
