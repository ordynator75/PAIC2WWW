"use client";

const overlayIncludes = [
  "Rules of Engagement (ROE)",
  "Escalation ladders (AI → operator → supervisor)",
  "Evidence bundling (context snapshot + timeline)",
  "Compliance workflows",
  "Privacy enforcement & redaction",
  "SLA & certification support",
];

export default function SecurityOverlay() {
  return (
    <section id="security" className="relative py-32 px-6">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono tracking-wide mb-6">
            Open Core
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Open Core +{" "}
            <span className="text-accent">Security Overlay</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: explanation */}
          <div className="space-y-6">
            <div className="p-8 rounded-xl border border-border bg-surface/30 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Security Overlay
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                The Security Overlay extends the same Core with domain-specific
                logic — without changing the architecture.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                The Security Overlay adds:
              </p>
              <ul className="mt-3 space-y-1 text-muted text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  contextual security logic
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  operational playbooks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  accountability rules
                </li>
              </ul>
            </div>

            {/* Key Principle */}
            <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 backdrop-blur-sm">
              <p className="text-sm font-mono text-muted tracking-wide uppercase mb-2">
                Key Principle
              </p>
              <p className="text-foreground font-medium leading-relaxed">
                The Core remains open. High-accountability logic lives in the Security Overlay.
              </p>
            </div>
          </div>

          {/* Right: Security Overlay Includes */}
          <div className="p-8 rounded-xl border border-border bg-surface/30 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Security Overlay Includes:
            </h3>
            <div className="space-y-3">
              {overlayIncludes.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background/50 hover:border-accent/30 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-foreground text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
