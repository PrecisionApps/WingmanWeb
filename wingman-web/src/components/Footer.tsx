import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link 
              href="/" 
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              Wingman
            </Link>
            <p className="text-sm text-muted mt-2 max-w-xs">
              A better process for real connection. Not more options—better outcomes.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <Link href="#how-it-works" className="text-muted hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="#philosophy" className="text-muted hover:text-foreground transition-colors">
              Philosophy
            </Link>
            <Link href="#trust" className="text-muted hover:text-foreground transition-colors">
              Trust & Safety
            </Link>
            <Link href="/privacy" className="text-muted hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted hover:text-foreground transition-colors">
              Terms
            </Link>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Wingman. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with intention. Designed for depth.
          </p>
        </div>
      </div>
    </footer>
  );
}
