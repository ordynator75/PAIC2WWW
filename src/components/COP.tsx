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

        {/* COP concentric layers visual */}
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-center justify-center" style={{ height: "420px" }}>
            {/* Concentric rings - outermost to innermost */}
            {copLayers.map((layer, i) => {
              const size = 100 - i * 16; // 100%, 84%, 68%, 52%, 36%
              const opacity = 0.12 + i * 0.06;
              return (
                <div
                  key={i}
                  className="absolute rounded-2xl border border-accent/20 flex items-start justify-center pt-3"
                  style={{
                    width: `${size}%`,
                    height: `${size}%`,
                    backgroundColor: `rgba(201,169,110,${opacity * 0.15})`,
                  }}
                >
                  <span className="text-[0.65rem] sm:text-xs font-mono tracking-wide text-accent/70 uppercase">
                    {layer}
                  </span>
                </div>
              );
            })}

            {/* Center: COP hub */}
            <div className="absolute flex flex-col items-center justify-center gap-2 z-10">
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-lg font-bold tracking-tight text-foreground">COP</span>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-8 max-w-md mx-auto space-y-3">
            <p className="text-muted text-sm flex items-center gap-3">
              <span className="text-accent-red">&#x2715;</span>
              Not data streams.
            </p>
            <p className="text-foreground font-semibold flex items-center gap-3">
              <span className="text-accent">&#x2713;</span>
              One decision context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
