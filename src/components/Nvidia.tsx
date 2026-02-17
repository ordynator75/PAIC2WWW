"use client";

const integrations = [
  {
    category: "Simulation",
    name: "NVIDIA Isaac Sim",
    description:
      "Operational scenario validation before production deployment.",
  },
  {
    category: "World Modeling",
    name: "NVIDIA Cosmos",
    description:
      "Context-level signals for mission reasoning.",
  },
  {
    category: "AI Orchestration",
    name: "NVIDIA OSMO",
    description:
      "Structured retraining based on operational data.",
  },
  {
    category: "Local Compute",
    name: "NVIDIA DGX Spark",
    description:
      "Local inference and PoC environments.",
  },
  {
    category: "Edge Runtime",
    name: "NVIDIA Jetson Orin / Jetson Thor",
    description:
      "Edge autonomy execution supervised by C2.",
  },
];

export default function Nvidia() {
  return (
    <section id="nvidia" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono tracking-wide mb-6">
            NVIDIA Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            NVIDIA Physical AI Stack —{" "}
            <span className="text-accent">Technology We Leverage</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            PAI C2 is designed to integrate across the NVIDIA Physical AI stack.
          </p>
        </div>

        {/* Integration cards */}
        <div className="space-y-4">
          {integrations.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-border bg-surface/30 backdrop-blur-sm hover:border-accent/30 hover:bg-surface/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20 group-hover:bg-accent/60 transition-colors" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 pl-8">
                <div className="sm:w-56 shrink-0">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-accent/10 text-accent text-xs font-mono tracking-wide mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Positioning */}
        <div className="mt-16 max-w-2xl mx-auto p-8 rounded-xl border border-border bg-surface/30 backdrop-blur-sm">
          <div className="space-y-3 mb-8">
            <p className="text-foreground font-medium">
              <span className="text-accent">NVIDIA</span> provides perception, simulation, and compute.
            </p>
            <p className="text-foreground font-medium">
              <span className="text-accent">PAI C2</span> provides operational command.
            </p>
          </div>
          <p className="text-xs text-muted/60 leading-relaxed">
            NVIDIA, Isaac Sim, Jetson Orin, Jetson Thor, DGX Spark, Cosmos, and OSMO are trademarks of NVIDIA Corporation.
            PAI C2 is an independent platform and is not affiliated with or endorsed by NVIDIA.
          </p>
        </div>
      </div>
    </section>
  );
}
