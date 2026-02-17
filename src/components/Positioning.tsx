"use client";

type Support = "yes" | "partial" | "no";

interface Row {
  capability: string;
  dashboard: Support;
  fleet: Support;
  paic2: Support;
}

const rows: Row[] = [
  { capability: "Telemetry & visualization", dashboard: "yes", fleet: "yes", paic2: "yes" },
  { capability: "Teleoperation", dashboard: "yes", fleet: "partial", paic2: "yes" },
  { capability: "Fleet coordination", dashboard: "no", fleet: "yes", paic2: "yes" },
  { capability: "Task scheduling", dashboard: "no", fleet: "yes", paic2: "yes" },
  { capability: "Mission model (structured intent)", dashboard: "no", fleet: "partial", paic2: "yes" },
  { capability: "Decision as system object", dashboard: "no", fleet: "no", paic2: "yes" },
  { capability: "Policy enforcement", dashboard: "no", fleet: "no", paic2: "yes" },
  { capability: "Escalation logic", dashboard: "no", fleet: "no", paic2: "yes" },
  { capability: "Human-over-the-loop", dashboard: "no", fleet: "no", paic2: "yes" },
  { capability: "Incident abstraction", dashboard: "no", fleet: "no", paic2: "yes" },
  { capability: "Audit & replay", dashboard: "no", fleet: "partial", paic2: "yes" },
  { capability: "Governance layer", dashboard: "no", fleet: "no", paic2: "yes" },
];

function Cell({ value }: { value: Support }) {
  if (value === "yes") {
    return <span className="text-accent font-medium">&#10003;</span>;
  }
  if (value === "partial") {
    return <span className="text-muted">&#9673;</span>;
  }
  return <span className="text-muted/40">—</span>;
}

export default function Positioning() {
  return (
    <section id="positioning" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border bg-surface/50 text-sm text-muted font-mono tracking-wide mb-6">
            Positioning
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Observability vs{" "}
            <span className="text-accent">Command & Governance</span>
          </h2>
        </div>

        {/* Comparison table */}
        <div className="rounded-xl border border-border bg-surface/30 backdrop-blur-sm overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 pl-6 text-muted font-mono text-xs tracking-wide uppercase">
                  Capability
                </th>
                <th className="text-center p-4 text-muted font-mono text-xs tracking-wide uppercase w-32">
                  Robot Dashboard
                </th>
                <th className="text-center p-4 text-muted font-mono text-xs tracking-wide uppercase w-32">
                  Fleet Mgmt
                </th>
                <th className="text-center p-4 pr-6 text-accent font-mono text-xs tracking-wide uppercase w-32">
                  PAI C2
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 last:border-b-0 hover:bg-surface/40 transition-colors"
                >
                  <td className="p-4 pl-6 text-foreground">{row.capability}</td>
                  <td className="p-4 text-center">
                    <Cell value={row.dashboard} />
                  </td>
                  <td className="p-4 text-center">
                    <Cell value={row.fleet} />
                  </td>
                  <td className="p-4 pr-6 text-center">
                    <Cell value={row.paic2} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Short positioning */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div className="px-6 py-4 rounded-lg border border-border bg-surface/30">
            <p className="text-sm text-muted">
              <span className="font-semibold text-foreground">Dashboard</span> = visibility.
            </p>
          </div>
          <div className="px-6 py-4 rounded-lg border border-border bg-surface/30">
            <p className="text-sm text-muted">
              <span className="font-semibold text-foreground">Fleet Management</span> = coordination.
            </p>
          </div>
          <div className="px-6 py-4 rounded-lg border border-accent/30 bg-accent/5">
            <p className="text-sm">
              <span className="font-semibold text-accent">PAI C2</span>{" "}
              <span className="text-foreground">= command & governance.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
