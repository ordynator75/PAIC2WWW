"use client";

const copLayers = [
  "Spatial layer",
  "Robot state",
  "Events & alerts",
  "Active missions",
  "Human intervention status",
];

export default function COP() {
  return (
    <section id="cop" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono tracking-wide mb-6">
            COP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Unified Operational{" "}
            <span className="text-accent">Situation View</span>
          </h2>
        </div>

        {/* COP visual */}
        <div className="max-w-2xl mx-auto">
          <div className="p-10 rounded-xl border border-border bg-surface/30 backdrop-blur-sm">
            <p className="text-sm font-mono text-muted mb-6 tracking-wide uppercase">
              COP integrates:
            </p>
            <div className="space-y-3 mb-10">
              {copLayers.map((layer, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background/50 hover:border-accent/30 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-foreground font-medium">{layer}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8 space-y-3">
              <p className="text-muted text-sm flex items-center gap-3">
                <span className="text-accent-red">✕</span>
                Not data streams.
              </p>
              <p className="text-foreground font-semibold flex items-center gap-3">
                <span className="text-accent">✓</span>
                One decision context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
