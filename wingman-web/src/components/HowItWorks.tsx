export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            The Two-Screen Philosophy
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Dating apps give you infinite choices and zero guidance. 
            Wingman gives you one conversation that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="glass-panel rounded-2xl p-8 lg:p-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Wingman Chat</h3>
            <p className="text-muted mb-6">
              Your personal guide through the entire process. Not a chatbot—a thoughtful 
              companion that learns what you actually want.
            </p>
            <ul className="space-y-3">
              {[
                "Learning — Understanding what matters to you",
                "Searching — Finding someone aligned with your values",
                "Introduction — Presenting one person at a time",
                "Coordination — Helping plan your first meeting",
                "Debrief — Reflecting on how it went"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-8 lg:p-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/30 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Reflection Journal</h3>
            <p className="text-muted mb-6">
              Optional depth for those who want it. A private space to process 
              your experiences—never weaponized, always yours.
            </p>
            <ul className="space-y-3">
              {[
                "Track patterns in what attracts you",
                "Notice what actually makes you happy",
                "Build self-awareness over time",
                "Export or delete anytime",
                "Never shared without explicit consent"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted text-sm max-w-xl mx-auto">
            No feeds to scroll. No profiles to swipe. Just a single, 
            focused conversation that moves at a human pace.
          </p>
        </div>
      </div>
    </section>
  );
}
