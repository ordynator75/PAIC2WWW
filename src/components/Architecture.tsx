"use client";

const layers = [
  {
    label: "Applications",
    color: "accent",
    items: ["Mission Control UI", "Fleet Manager", "Analytics Dashboard", "Policy Editor"],
  },
  {
    label: "API Gateway",
    color: "accent",
    items: ["REST / gRPC", "WebSocket Streams", "Auth & RBAC", "Rate Limiting"],
  },
  {
    label: "Core Services",
    color: "accent",
    items: ["Orchestrator", "Task Scheduler", "State Manager", "Safety Engine"],
  },
  {
    label: "Infrastructure",
    color: "accent",
    items: ["Edge Runtime", "Cloud Compute", "Message Bus", "Data Lake"],
  },
  {
    label: "Hardware Layer",
    color: "accent",
    items: ["NVIDIA Jetson / IGX", "Sensors & Actuators", "Network Fabric", "GPU Clusters"],
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono tracking-wide mb-6">
            Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Built in <span className="text-accent">layers</span>, deployed as one
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A modular, layered architecture that scales from a single robot to
            thousands of autonomous agents across geographies.
          </p>
        </div>

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
                {/* Layer name */}
                <div className="flex items-center gap-3 sm:w-48 shrink-0">
                  <span className="text-xs font-mono text-muted/60 w-5">
                    0{layers.length - i}
                  </span>
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                    {layer.label}
                  </span>
                </div>

                {/* Layer items */}
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 rounded-md border border-border bg-background/50 text-sm text-muted group-hover:text-foreground group-hover:border-border transition-colors font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connector lines visual */}
        <div className="mt-16 flex items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
            <span className="text-xs font-mono text-muted/50 tracking-wide">EDGE</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
            <span className="text-xs font-mono text-muted/50 tracking-wide">CLOUD</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
            <span className="text-xs font-mono text-muted/50 tracking-wide">FLEET</span>
          </div>
        </div>
      </div>
    </section>
  );
}
