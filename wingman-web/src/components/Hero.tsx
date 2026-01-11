import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase text-muted bg-white/5 rounded-full border border-white/10">
            A different approach to dating
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
          <span className="text-gradient">You don't need more options.</span>
          <br />
          <span className="text-gradient-accent">You need a better process.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          Wingman replaces the firehose with a conversation. An anti-dopamine 
          experience designed for trust, pacing, and real outcomes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#get-started"
            className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-full bg-accent text-white glow-accent hover:opacity-90 transition-all"
          >
            Request Early Access
          </Link>
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            See How It Works
          </Link>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="glass-panel-elevated rounded-2xl p-8 max-w-2xl mx-auto animate-float">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-muted mb-1">Wingman</p>
                <p className="text-foreground leading-relaxed">
                  I noticed you mentioned wanting someone who values deep conversation. 
                  I found someone who shares that priority. Want me to tell you more about them 
                  before we consider an introduction?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
