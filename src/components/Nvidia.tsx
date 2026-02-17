"use client";

const integrations = [
  {
    name: "NVIDIA Jetson",
    tag: "Edge AI",
    description:
      "Native support for Jetson Orin and next-gen modules. Run inference, perception, and decision-making at the edge with full PAI C2 agent runtime.",
  },
  {
    name: "NVIDIA Isaac",
    tag: "Simulation",
    description:
      "Tight integration with Isaac Sim for digital twin environments. Test fleet behaviors, train policies, and validate missions before real-world deployment.",
  },
  {
    name: "NVIDIA Metropolis",
    tag: "Vision AI",
    description:
      "Leverage Metropolis vision pipelines for perception at scale. Seamless video analytics integration for surveillance, inspection, and monitoring use cases.",
  },
  {
    name: "NVIDIA IGX",
    tag: "Industrial",
    description:
      "Enterprise-grade edge computing with IGX Orin. Built for industrial environments requiring functional safety (ISO 13849) and real-time determinism.",
  },
  {
    name: "NVIDIA cuOpt",
    tag: "Optimization",
    description:
      "GPU-accelerated route optimization and task scheduling. Solve complex fleet logistics problems in real-time across thousands of agents.",
  },
  {
    name: "NVIDIA CUDA & TensorRT",
    tag: "Inference",
    description:
      "Accelerated model inference with TensorRT and CUDA. Optimize perception and planning models for maximum throughput on NVIDIA GPUs.",
  },
];

export default function Nvidia() {
  return (
    <section id="nvidia" className="relative py-32 px-6">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono tracking-wide mb-6">
            NVIDIA Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Powered by{" "}
            <span className="text-accent">NVIDIA</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Deep integration across the NVIDIA ecosystem — from edge inference on
            Jetson to large-scale simulation with Isaac and fleet optimization
            with cuOpt.
          </p>
        </div>

        {/* Integration cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-xl border border-border bg-surface/30 backdrop-blur-sm hover:border-accent/30 hover:bg-surface/50 transition-all duration-300"
            >
              {/* Tag */}
              <span className="inline-block px-2.5 py-1 rounded-md bg-accent/10 text-accent text-xs font-mono tracking-wide mb-4">
                {item.tag}
              </span>

              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {item.name}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-xl border border-border bg-surface/30 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-accent/60 animate-pulse-glow" />
            <p className="text-muted text-sm">
              PAI C2 is an <span className="text-foreground font-medium">NVIDIA Inception</span> partner.
              Full Jetson, Isaac & Metropolis certification in progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
