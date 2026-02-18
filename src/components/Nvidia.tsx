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
    <section id="ai-stack" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono tracking-wide mb-6">
            AI Robotic Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            C2-Centric{" "}
            <span className="text-accent">Architecture</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            PAI C2 orchestrates the full AI stack from a single command layer.
          </p>
        </div>

        {/* C2-Centric Architecture Diagram */}
        <div className="flex flex-col items-center">
          {/* Hub: PAI C2 */}
          <div className="flex items-center gap-3 px-10 py-5 rounded-xl border-2 border-accent bg-accent/8 backdrop-blur-sm z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-xl font-bold tracking-tight text-foreground">PAI C2</span>
          </div>

          {/* Connector lines */}
          <div className="relative w-full h-14 hidden md:block">
            {/* Vertical line from hub */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1/2 bg-accent/30" />
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-accent/30" />
            {/* 5 vertical drops */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-1/2 flex justify-between">
              {integrations.map((_, i) => (
                <div key={i} className="w-0.5 h-full bg-accent/30" />
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full" style={{ paddingLeft: "0%", paddingRight: "0%" }}>
            {integrations.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-surface/30 backdrop-blur-sm hover:border-accent/30 hover:bg-surface/50 transition-all duration-300 p-5 flex flex-col gap-2 text-center"
              >
                <span className="self-center inline-block px-2 py-0.5 rounded-md bg-accent/10 text-accent text-[0.625rem] font-mono tracking-wide uppercase">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold text-foreground leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-xs text-muted/60 leading-relaxed">
            NVIDIA, Isaac Sim, Jetson Orin, Jetson Thor, DGX Spark, Cosmos, and OSMO are trademarks of NVIDIA Corporation.
            PAI C2 is an independent platform and is not affiliated with or endorsed by NVIDIA.
          </p>
        </div>
      </div>
    </section>
  );
}
