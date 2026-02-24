"use client";

const copLayers = [
  {
    name: "Spatial Layer",
    desc: "Real-time map & asset locations",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="10" y="20" width="60" height="45" rx="4" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="10" y1="35" x2="70" y2="35" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="10" y1="50" x2="70" y2="50" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="30" y1="20" x2="30" y2="65" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="50" y1="20" x2="50" y2="65" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="25" cy="30" r="3" fill="rgb(201,169,110)" fillOpacity="0.8" />
        <circle cx="25" cy="30" r="5" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
        <circle cx="45" cy="42" r="2.5" fill="rgb(201,169,110)" fillOpacity="0.6" />
        <circle cx="45" cy="42" r="4.5" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
        <circle cx="58" cy="55" r="2" fill="rgb(201,169,110)" fillOpacity="0.5" />
        <line x1="25" y1="30" x2="45" y2="42" stroke="rgb(201,169,110)" strokeWidth="0.7" strokeOpacity="0.3" strokeDasharray="2 2" />
        <line x1="45" y1="42" x2="58" y2="55" stroke="rgb(201,169,110)" strokeWidth="0.7" strokeOpacity="0.3" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: "Robot State",
    desc: "Position, status, health, activity",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <rect x="25" y="25" width="30" height="22" rx="4" stroke="rgb(201,169,110)" strokeWidth="1" strokeOpacity="0.6" fill="rgba(201,169,110,0.08)" />
        <rect x="30" y="48" width="8" height="10" rx="2" stroke="rgb(201,169,110)" strokeWidth="0.7" strokeOpacity="0.4" fill="rgba(201,169,110,0.05)" />
        <rect x="42" y="48" width="8" height="10" rx="2" stroke="rgb(201,169,110)" strokeWidth="0.7" strokeOpacity="0.4" fill="rgba(201,169,110,0.05)" />
        <circle cx="34" cy="33" r="2.5" fill="rgb(201,169,110)" fillOpacity="0.7" />
        <circle cx="46" cy="33" r="2.5" fill="rgb(201,169,110)" fillOpacity="0.7" />
        <line x1="40" y1="25" x2="40" y2="17" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="40" cy="15" r="2" fill="rgb(201,169,110)" fillOpacity="0.6" />
        <circle cx="40" cy="37" r="22" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3 3" />
        <rect x="27" y="41" width="26" height="2.5" rx="1" fill="rgba(201,169,110,0.15)" />
        <rect x="27" y="41" width="18" height="2.5" rx="1" fill="rgba(201,169,110,0.5)" />
      </svg>
    ),
  },
  {
    name: "Events & Alerts",
    desc: "Incidents, anomalies, warnings",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <path d="M40 18L58 55H22L40 18Z" stroke="rgb(201,169,110)" strokeWidth="1" strokeOpacity="0.6" fill="rgba(201,169,110,0.08)" />
        <text x="40" y="48" textAnchor="middle" fill="rgb(201,169,110)" fillOpacity="0.8" fontSize="16" fontWeight="bold">!</text>
        <circle cx="40" cy="40" r="28" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="40" cy="40" r="22" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.2" />
        <circle cx="18" cy="35" r="2" fill="rgb(239,68,68)" fillOpacity="0.7" />
        <circle cx="18" cy="35" r="4" stroke="rgb(239,68,68)" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
        <circle cx="60" cy="30" r="1.5" fill="rgb(245,158,11)" fillOpacity="0.7" />
        <circle cx="55" cy="58" r="1.5" fill="rgb(245,158,11)" fillOpacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Active Missions",
    desc: "Tasks, routes, priorities",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <path d="M15 58 Q25 30, 40 35 T65 20" stroke="rgb(201,169,110)" strokeWidth="1.2" strokeOpacity="0.5" fill="none" strokeDasharray="4 3" />
        <circle cx="15" cy="58" r="4" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.15)" />
        <circle cx="15" cy="58" r="1.5" fill="rgb(201,169,110)" fillOpacity="0.8" />
        <circle cx="40" cy="35" r="4" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.15)" />
        <circle cx="40" cy="35" r="1.5" fill="rgb(201,169,110)" fillOpacity="0.8" />
        <circle cx="65" cy="20" r="4" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.15)" />
        <circle cx="65" cy="20" r="1.5" fill="rgb(201,169,110)" fillOpacity="0.8" />
        <line x1="60" y1="50" x2="60" y2="62" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" />
        <path d="M60 50L68 53L60 56" fill="rgb(201,169,110)" fillOpacity="0.3" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    name: "Human Intervention Status",
    desc: "Operator actions, approvals, handover",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        <circle cx="35" cy="24" r="7" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.08)" />
        <path d="M22 55 Q22 38, 35 38 Q48 38, 48 55" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.06)" />
        <rect x="50" y="30" width="18" height="25" rx="2" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.4" fill="rgba(201,169,110,0.06)" />
        <rect x="53" y="34" width="12" height="7" rx="1" fill="rgba(201,169,110,0.15)" />
        <circle cx="56" cy="48" r="1.5" fill="rgb(34,197,94)" fillOpacity="0.6" />
        <circle cx="62" cy="48" r="1.5" fill="rgb(201,169,110)" fillOpacity="0.4" />
        <path d="M44 18L47 21L53 15" stroke="rgb(34,197,94)" strokeWidth="1.2" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="48" y1="42" x2="50" y2="42" stroke="rgb(201,169,110)" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="2 1" />
      </svg>
    ),
  },
];

export default function COP() {
  return (
    <section id="cop" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto">
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

        {/* Layer cards - single column, centered */}
        <div className="space-y-3">
          {copLayers.map((layer, i) => (
            <div
              key={i}
              className="group relative flex items-center gap-4 rounded-xl border border-accent/20 bg-surface/20 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 overflow-hidden"
              style={{ padding: "0.75rem 1rem 0.75rem 0.75rem" }}
            >
              {/* Illustration area */}
              <div
                className="flex-shrink-0 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center"
                style={{ width: "72px", height: "72px" }}
              >
                {layer.illustration}
              </div>
              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <h3 className="text-sm font-bold text-foreground tracking-tight">{layer.name}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom divider + statement */}
        <div className="mt-14">
          <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-6" />
          <div className="flex items-center justify-center gap-6">
            <p className="text-muted text-sm flex items-center gap-3">
              <span className="text-accent-red text-base">&#x2715;</span>
              Not data streams.
            </p>
            <span className="w-px h-5 bg-border" />
            <p className="text-foreground font-semibold text-sm flex items-center gap-3">
              <span className="text-accent text-base">&#x2713;</span>
              One decision context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
