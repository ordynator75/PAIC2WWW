"use client";

const principles = [
  "Open Core development",
  "Community-driven capability standards",
  "AI-native development workflows",
  "Validation on real robots and deployments",
];

export default function Community() {
  return (
    <section id="community" className="relative py-32 px-6">
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
            Community
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Community &{" "}
            <span className="text-accent">Development Model</span>
          </h2>
        </div>

        {/* Supporting text */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted mb-8 leading-relaxed">
            PAI C2 is developed as an evolving operational standard:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {principles.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-surface/30"
              >
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-accent font-semibold">
            Built publicly. Validated operationally. Evolving as a standard.
          </p>
        </div>
      </div>
    </section>
  );
}
