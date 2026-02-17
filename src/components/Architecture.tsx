"use client";

const layers = [
  {
    name: "Audit & Memory Layer",
    description: "Incident graph, replay, structured traceability.",
  },
  {
    name: "Escalation Layer",
    description: "Supervised intervention (Human-over-the-loop).",
  },
  {
    name: "Policy Layer",
    description: "Boundaries, constraints, escalation rules.",
  },
  {
    name: "Command Layer",
    description: "Mission orchestration and intent management.",
  },
  {
    name: "Execution Layer",
    description: "Robots, edge autonomy, local AI stacks.",
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-32 px-6">
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
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono tracking-wide mb-6">
            Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Autonomy by <span className="text-accent">Default</span>
          </h2>
        </div>

        {/* Human Over the Loop concept */}
        <div className="max-w-2xl mx-auto mb-16 p-8 rounded-xl border border-border bg-surface/30 backdrop-blur-sm text-center">
          <h3 className="text-xl font-semibold text-accent mb-4">
            Human Over the Loop
          </h3>
          <p className="text-muted leading-relaxed">
            Autonomy executes within defined policies.
            <br />
            Human intervention occurs when thresholds are exceeded.
          </p>
        </div>

        {/* Logical Layers heading */}
        <h3 className="text-center text-lg font-semibold text-foreground mb-10 font-mono tracking-wide">
          Logical Layers
        </h3>

        {/* Architecture stack */}
        <div className="space-y-3">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-border bg-surface/30 backdrop-blur-sm hover:border-accent/30 hover:bg-surface/50 transition-all duration-300 overflow-hidden"
            >
              {/* Layer indicator line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20 group-hover:bg-accent/60 transition-colors" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 pl-8">
                {/* Layer number + name */}
                <div className="flex items-center gap-3 sm:w-64 shrink-0">
                  <span className="text-xs font-mono text-muted/60 w-5">
                    0{layers.length - i}
                  </span>
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                    {layer.name}
                  </span>
                </div>

                {/* Layer description */}
                <p className="text-sm text-muted leading-relaxed">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
