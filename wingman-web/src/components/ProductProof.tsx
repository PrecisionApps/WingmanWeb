export function ProductProof() {
  const steps = [
    {
      step: "01",
      title: "You share what matters",
      description: "In a private conversation, Wingman learns about your values, deal-breakers, and what you're actually looking for—not just demographics."
    },
    {
      step: "02",
      title: "We search thoughtfully",
      description: "No algorithms gaming for engagement. We find people whose values align with yours, one at a time."
    },
    {
      step: "03",
      title: "You meet one person",
      description: "When there's a genuine match, we introduce you with context. You decide if you want to connect—no pressure, no queue of options."
    },
    {
      step: "04",
      title: "You reflect and grow",
      description: "After meeting, capture what you learned. Over time, you understand yourself better—which leads to better connections."
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            What You'll Actually Experience
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            No mystery. No hidden mechanics. Here's exactly what happens 
            when you start using Wingman.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden sm:block" />
          
          <div className="space-y-8">
            {steps.map((item, i) => (
              <div 
                key={i} 
                className="relative flex gap-6 sm:gap-10"
              >
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl glass-panel-elevated flex items-center justify-center text-accent font-mono text-lg font-medium z-10">
                    {item.step}
                  </div>
                </div>
                
                <div className="flex-1 glass-panel rounded-2xl p-6 lg:p-8">
                  <span className="sm:hidden text-accent font-mono text-sm mb-2 block">
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="glass-panel-elevated rounded-2xl p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
              <span className="text-sm font-medium">Wingman Chat</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 text-sm">
                <p className="text-muted mb-1">Wingman</p>
                <p>I've been thinking about what you shared. When you mentioned wanting "someone intellectually curious"—could you tell me about a moment when you felt that spark with someone?</p>
              </div>
              <div className="bg-accent/10 rounded-xl p-4 text-sm ml-8">
                <p className="text-muted mb-1">You</p>
                <p>There was this conversation about urban design that went for three hours. We kept building on each other's ideas...</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-sm">
                <p className="text-muted mb-1">Wingman</p>
                <p>That's exactly what I needed to understand. You're not just looking for "smart"—you want collaborative thinking. Someone who builds with you, not at you.</p>
              </div>
            </div>
          </div>

          <div className="glass-panel-elevated rounded-2xl p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-pink-500" />
              <span className="text-sm font-medium">Reflection Journal</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-muted mb-2">After meeting Alex • Dec 14</p>
                <p className="text-sm mb-3">Felt comfortable immediately. The conversation flowed naturally, especially when we got into the topic of...</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400">Easy conversation</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400">Shared values</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-xs text-muted mb-2">Pattern noticed</p>
                <p className="text-sm">You tend to feel most connected with people who ask follow-up questions and remember details from earlier in the conversation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
