"use client";

const capabilities = [
  {
    title: "Mission Engine",
    points: [
      "Structured missions as system objects.",
      "Sequences, fallbacks, retries, escalation hooks.",
    ],
  },
  {
    title: "Capability-Based Abstraction",
    points: [
      "Vendor-neutral robot control through capabilities.",
      "Portable missions across heterogeneous fleets.",
    ],
  },
  {
    title: "Common Operating Picture (COP)",
    points: [
      "Unified decision context.",
      "Attention directed by material state change.",
    ],
  },
  {
    title: "Governance Engine",
    points: [
      "Policy enforcement.",
      "Escalation logic.",
      "Decision traceability.",
    ],
  },
];

const notList = [
  "a robot dashboard",
  "a fleet manager",
  "an autonomy runtime",
];

export default function Solution() {
  return (
    <section id="solution" className="relative py-32 px-6">
      <div
        className="absolute inset-0 opacity-[0.03]"
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
            Solution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            A <span className="text-accent">Command Layer</span> for Physical AI
          </h2>
        </div>

        {/* "PAI C2 is not" block */}
        <div className="max-w-2xl mx-auto mb-16 p-8 rounded-xl border border-border bg-surface/30 backdrop-blur-sm">
          <p className="text-sm font-mono text-muted mb-4 tracking-wide uppercase">
            PAI C2 is not:
          </p>
          <ul className="space-y-2 mb-6">
            {notList.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-muted">
                <span className="text-accent-red">✕</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-foreground font-medium">
            It is a mission-oriented command and governance layer operating above autonomy.
          </p>
        </div>

        {/* Core Capabilities heading */}
        <h3 className="text-center text-xl font-semibold text-foreground mb-10">
          Core Capabilities
        </h3>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-xl border border-border bg-surface/30 backdrop-blur-sm hover:border-accent/30 hover:bg-surface/60 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-mono font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-lg font-semibold text-foreground">
                  {cap.title}
                </h4>
              </div>
              <ul className="space-y-2">
                {cap.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
