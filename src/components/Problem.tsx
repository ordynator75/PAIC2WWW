"use client";

const problems = [
  {
    title: "Dashboards instead of operations",
    points: [
      "Visibility without structured mission logic.",
      "Ad-hoc operator decisions.",
      "No accumulated operational intelligence.",
    ],
  },
  {
    title: "Vendor-bound integrations",
    points: [
      "Every robot = new integration.",
      "No portable mission layer.",
    ],
  },
  {
    title: "Scale creates fatigue",
    points: [
      "More robots → more alerts → reduced operator efficiency.",
    ],
  },
  {
    title: "No accountability layer",
    points: [
      "No structured decision trace.",
      "No governance-ready deployment model.",
    ],
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-32 px-6">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono tracking-wide mb-6">
            Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Autonomous robots{" "}
            <span className="text-accent-red">do not scale</span>{" "}
            operationally.
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-xl border border-border bg-surface/30 backdrop-blur-sm hover:border-accent-red/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {problem.title}
              </h3>
              <ul className="space-y-2">
                {problem.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-red/60 mt-2 shrink-0" />
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
