"use client";

/* Each card has a detailed mini-scene SVG illustration */
const copLayers = [
  {
    name: "Spatial Layer",
    desc: "Real-time map & asset locations",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Map grid */}
        <rect x="10" y="20" width="60" height="45" rx="4" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="10" y1="35" x2="70" y2="35" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="10" y1="50" x2="70" y2="50" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="30" y1="20" x2="30" y2="65" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        <line x1="50" y1="20" x2="50" y2="65" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        {/* Location pins */}
        <circle cx="25" cy="30" r="3" fill="rgb(201,169,110)" fillOpacity="0.8" />
        <circle cx="25" cy="30" r="5" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />
        <circle cx="45" cy="42" r="2.5" fill="rgb(201,169,110)" fillOpacity="0.6" />
        <circle cx="45" cy="42" r="4.5" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
        <circle cx="58" cy="55" r="2" fill="rgb(201,169,110)" fillOpacity="0.5" />
        {/* Connection lines */}
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
        {/* Robot body */}
        <rect x="25" y="25" width="30" height="22" rx="4" stroke="rgb(201,169,110)" strokeWidth="1" strokeOpacity="0.6" fill="rgba(201,169,110,0.08)" />
        <rect x="30" y="48" width="8" height="10" rx="2" stroke="rgb(201,169,110)" strokeWidth="0.7" strokeOpacity="0.4" fill="rgba(201,169,110,0.05)" />
        <rect x="42" y="48" width="8" height="10" rx="2" stroke="rgb(201,169,110)" strokeWidth="0.7" strokeOpacity="0.4" fill="rgba(201,169,110,0.05)" />
        {/* Eyes */}
        <circle cx="34" cy="33" r="2.5" fill="rgb(201,169,110)" fillOpacity="0.7" />
        <circle cx="46" cy="33" r="2.5" fill="rgb(201,169,110)" fillOpacity="0.7" />
        {/* Antenna */}
        <line x1="40" y1="25" x2="40" y2="17" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" />
        <circle cx="40" cy="15" r="2" fill="rgb(201,169,110)" fillOpacity="0.6" />
        {/* Status ring */}
        <circle cx="40" cy="37" r="22" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3 3" />
        {/* Health bar */}
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
        {/* Warning triangle */}
        <path d="M40 18L58 55H22L40 18Z" stroke="rgb(201,169,110)" strokeWidth="1" strokeOpacity="0.6" fill="rgba(201,169,110,0.08)" />
        <text x="40" y="48" textAnchor="middle" fill="rgb(201,169,110)" fillOpacity="0.8" fontSize="16" fontWeight="bold">!</text>
        {/* Radar rings */}
        <circle cx="40" cy="40" r="28" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="40" cy="40" r="22" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.2" />
        {/* Alert dots */}
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
        {/* Route path */}
        <path d="M15 58 Q25 30, 40 35 T65 20" stroke="rgb(201,169,110)" strokeWidth="1.2" strokeOpacity="0.5" fill="none" strokeDasharray="4 3" />
        {/* Waypoints */}
        <circle cx="15" cy="58" r="4" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.15)" />
        <circle cx="15" cy="58" r="1.5" fill="rgb(201,169,110)" fillOpacity="0.8" />
        <circle cx="40" cy="35" r="4" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.15)" />
        <circle cx="40" cy="35" r="1.5" fill="rgb(201,169,110)" fillOpacity="0.8" />
        <circle cx="65" cy="20" r="4" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.15)" />
        <circle cx="65" cy="20" r="1.5" fill="rgb(201,169,110)" fillOpacity="0.8" />
        {/* Priority flag */}
        <line x1="60" y1="50" x2="60" y2="62" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" />
        <path d="M60 50L68 53L60 56" fill="rgb(201,169,110)" fillOpacity="0.3" stroke="rgb(201,169,110)" strokeWidth="0.5" strokeOpacity="0.5" />
        {/* Task list lines */}
        <rect x="18" y="18" width="18" height="2" rx="1" fill="rgb(201,169,110)" fillOpacity="0.2" />
        <rect x="18" y="23" width="14" height="2" rx="1" fill="rgb(201,169,110)" fillOpacity="0.15" />
      </svg>
    ),
  },
  {
    name: "Human Intervention Status",
    desc: "Operator actions, approvals, handover",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
        {/* Person silhouette */}
        <circle cx="35" cy="24" r="7" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.08)" />
        <path d="M22 55 Q22 38, 35 38 Q48 38, 48 55" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.5" fill="rgba(201,169,110,0.06)" />
        {/* Control panel */}
        <rect x="50" y="30" width="18" height="25" rx="2" stroke="rgb(201,169,110)" strokeWidth="0.8" strokeOpacity="0.4" fill="rgba(201,169,110,0.06)" />
        <rect x="53" y="34" width="12" height="7" rx="1" fill="rgba(201,169,110,0.15)" />
        <circle cx="56" cy="48" r="1.5" fill="rgb(34,197,94)" fillOpacity="0.6" />
        <circle cx="62" cy="48" r="1.5" fill="rgb(201,169,110)" fillOpacity="0.4" />
        {/* Approval check */}
        <path d="M44 18L47 21L53 15" stroke="rgb(34,197,94)" strokeWidth="1.2" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
        {/* Connection line person to panel */}
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

      <div className="relative z-10 max-w-6xl mx-auto">
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

        {/* Two-column layout with SVG connecting lines */}
        <div className="relative">
          {/* SVG overlay for golden connecting lines (desktop only) */}
          <svg
            className="hidden lg:block absolute inset-0 w-full pointer-events-none z-10"
            style={{ height: "520px" }}
            viewBox="0 0 1100 520"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <defs>
              <linearGradient id="copLineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgb(201,169,110)" stopOpacity="0.7" />
                <stop offset="50%" stopColor="rgb(201,169,110)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(201,169,110)" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            {/* 5 connecting lines from cards to visualization */}
            {[
              { cy: 52, tx: 720, ty: 90 },
              { cy: 152, tx: 800, ty: 180 },
              { cy: 252, tx: 750, ty: 260 },
              { cy: 352, tx: 830, ty: 340 },
              { cy: 452, tx: 770, ty: 420 },
            ].map((l, i) => (
              <path
                key={i}
                d={`M 480 ${l.cy} L 530 ${l.cy} Q 580 ${l.cy}, 600 ${(l.cy + l.ty) / 2} T ${l.tx} ${l.ty}`}
                stroke="url(#copLineGrad)"
                strokeWidth="1.5"
              />
            ))}
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-12 items-center">
            {/* Left: layer cards */}
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

            {/* Right: COP platform visualization */}
            <div className="relative flex items-center justify-center" style={{ minHeight: "480px" }}>
              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/8 rounded-full blur-[100px]" />

              {/* Concentric platform rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-accent/8" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-accent/12" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-accent/15" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border border-accent/20" />

              {/* Isometric center platform */}
              <div
                className="absolute top-1/2 left-1/2"
                style={{
                  width: "160px",
                  height: "160px",
                  transform: "translate(-50%, -50%) perspective(600px) rotateX(50deg) rotateZ(-45deg)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(201,169,110,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    border: "1px solid rgba(201,169,110,0.2)",
                    boxShadow: "0 0 40px rgba(201,169,110,0.1)",
                  }}
                />
                {/* Buildings */}
                <div className="absolute" style={{ bottom: "15%", left: "10%", width: "24px", height: "28px", background: "rgba(201,169,110,0.18)", border: "1px solid rgba(201,169,110,0.3)", borderRadius: "2px" }} />
                <div className="absolute" style={{ bottom: "40%", left: "50%", width: "30px", height: "20px", background: "rgba(201,169,110,0.14)", border: "1px solid rgba(201,169,110,0.25)", borderRadius: "2px" }} />
                <div className="absolute" style={{ bottom: "60%", left: "20%", width: "20px", height: "24px", background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "2px" }} />
                <div className="absolute" style={{ bottom: "25%", right: "10%", width: "26px", height: "18px", background: "rgba(201,169,110,0.16)", border: "1px solid rgba(201,169,110,0.28)", borderRadius: "2px" }} />
              </div>

              {/* Location pins scattered around the rings */}
              {/* Pin 1 - top right */}
              <div className="absolute animate-pulse-glow" style={{ top: "15%", right: "18%", width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 16px rgba(201,169,110,0.7)" }} />
              {/* Pin 2 - top left */}
              <div className="absolute" style={{ top: "22%", left: "20%", width: "8px", height: "8px", borderRadius: "50%", background: "rgba(34,197,94,0.7)", boxShadow: "0 0 12px rgba(34,197,94,0.4)" }} />
              {/* Pin 3 - mid right */}
              <div className="absolute animate-pulse-glow" style={{ top: "45%", right: "8%", width: "9px", height: "9px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 14px rgba(201,169,110,0.6)", animationDelay: "1s" }} />
              {/* Pin 4 - bottom left */}
              <div className="absolute animate-pulse-glow" style={{ bottom: "25%", left: "15%", width: "8px", height: "8px", borderRadius: "50%", background: "rgba(201,169,110,0.8)", boxShadow: "0 0 12px rgba(201,169,110,0.5)", animationDelay: "1.5s" }} />
              {/* Pin 5 - bottom right */}
              <div className="absolute" style={{ bottom: "18%", right: "22%", width: "7px", height: "7px", borderRadius: "50%", background: "rgb(239,68,68)", boxShadow: "0 0 10px rgba(239,68,68,0.4)" }} />
              {/* Pin 6 - center-top */}
              <div className="absolute animate-pulse-glow" style={{ top: "30%", left: "45%", width: "8px", height: "8px", borderRadius: "50%", background: "rgba(201,169,110,0.9)", boxShadow: "0 0 12px rgba(201,169,110,0.5)", animationDelay: "2s" }} />

              {/* Connection lines between pins */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.25 }}>
                <line x1="82%" y1="15%" x2="55%" y2="30%" stroke="rgb(201,169,110)" strokeWidth="1" />
                <line x1="20%" y1="22%" x2="45%" y2="30%" stroke="rgb(201,169,110)" strokeWidth="1" />
                <line x1="45%" y1="30%" x2="92%" y2="45%" stroke="rgb(201,169,110)" strokeWidth="1" />
                <line x1="15%" y1="75%" x2="45%" y2="30%" stroke="rgb(201,169,110)" strokeWidth="1" />
                <line x1="78%" y1="82%" x2="92%" y2="45%" stroke="rgb(201,169,110)" strokeWidth="1" />
              </svg>

              {/* Central COP hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-20">
                <div
                  className="w-11 h-11 rounded-full border-2 border-accent bg-accent/15 flex items-center justify-center"
                  style={{ boxShadow: "0 0 30px rgba(201,169,110,0.35), 0 0 60px rgba(201,169,110,0.15)" }}
                >
                  <span className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
                </div>
              </div>
            </div>
          </div>
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
