"use client";

const copLayers = [
  {
    name: "Spatial Layer",
    desc: "Real-time map & asset locations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    name: "Robot State",
    desc: "Position, status, health, activity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5m7.5-1.5v1.5M3 9h18M3 13.5h18m-13.5 6h9m-9 0a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 014.5 7.5h15a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5" />
      </svg>
    ),
  },
  {
    name: "Events & Alerts",
    desc: "Incidents, anomalies, warnings",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    name: "Active Missions",
    desc: "Tasks, routes, priorities",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    name: "Human Intervention Status",
    desc: "Operator actions, approvals, handover",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

/* Y-positions for the 5 card connection endpoints (matching card vertical centers) */
const cardYPositions = [52, 120, 188, 256, 324];
/* X,Y targets inside the visualization for each connection line */
const vizTargets = [
  { x: 280, y: 60 },
  { x: 380, y: 110 },
  { x: 320, y: 200 },
  { x: 400, y: 260 },
  { x: 340, y: 330 },
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
            className="hidden lg:block absolute inset-0 w-full pointer-events-none"
            style={{ height: "380px" }}
            viewBox="0 0 960 380"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgb(201,169,110)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(201,169,110)" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            {cardYPositions.map((cy, i) => {
              const t = vizTargets[i];
              const startX = 430;
              const midX = startX + 40;
              return (
                <path
                  key={i}
                  d={`M ${startX} ${cy} C ${midX} ${cy}, ${t.x - 60} ${t.y}, ${t.x} ${t.y}`}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="1.5"
                />
              );
            })}
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-4 lg:gap-8 items-center">
            {/* Left: layer cards */}
            <div className="space-y-2">
              {copLayers.map((layer, i) => (
                <div
                  key={i}
                  className="group relative flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/30 backdrop-blur-sm hover:border-accent/30 hover:bg-surface/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    {layer.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <h3 className="text-sm font-semibold text-foreground">{layer.name}</h3>
                    </div>
                    <p className="text-xs text-muted">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: isometric-style COP visualization */}
            <div className="relative flex items-center justify-center" style={{ minHeight: "380px" }}>
              {/* Soft glow behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

              {/* Isometric tilted plane */}
              <div
                className="absolute"
                style={{
                  width: "340px",
                  height: "340px",
                  transform: "perspective(800px) rotateX(55deg) rotateZ(-45deg)",
                  transformOrigin: "center center",
                }}
              >
                {/* Grid floor */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(201,169,110,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.08) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    border: "1px solid rgba(201,169,110,0.1)",
                  }}
                />

                {/* Building blocks on the isometric plane */}
                <div className="absolute" style={{ bottom: "20%", left: "15%", width: "40px", height: "40px", background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.25)", borderRadius: "3px" }} />
                <div className="absolute" style={{ bottom: "45%", left: "55%", width: "55px", height: "35px", background: "rgba(201,169,110,0.12)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "3px" }} />
                <div className="absolute" style={{ bottom: "65%", left: "25%", width: "35px", height: "50px", background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "3px" }} />
                <div className="absolute" style={{ bottom: "30%", right: "15%", width: "45px", height: "30px", background: "rgba(201,169,110,0.13)", border: "1px solid rgba(201,169,110,0.22)", borderRadius: "3px" }} />
                <div className="absolute" style={{ bottom: "70%", right: "20%", width: "30px", height: "30px", background: "rgba(201,169,110,0.11)", border: "1px solid rgba(201,169,110,0.18)", borderRadius: "3px" }} />

                {/* Glowing path lines on the floor */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
                  <line x1="20%" y1="80%" x2="60%" y2="50%" stroke="rgb(201,169,110)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="60%" y1="50%" x2="30%" y2="30%" stroke="rgb(201,169,110)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="60%" y1="50%" x2="85%" y2="65%" stroke="rgb(201,169,110)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="85%" y1="65%" x2="75%" y2="25%" stroke="rgb(201,169,110)" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>

                {/* Pulsing asset markers on the plane */}
                <div className="absolute animate-pulse-glow" style={{ bottom: "78%", left: "18%", width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 12px rgba(201,169,110,0.6)" }} />
                <div className="absolute animate-pulse-glow" style={{ bottom: "48%", left: "58%", width: "10px", height: "10px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 14px rgba(201,169,110,0.7)", animationDelay: "0.5s" }} />
                <div className="absolute animate-pulse-glow" style={{ bottom: "28%", right: "17%", width: "8px", height: "8px", borderRadius: "50%", background: "rgba(201,169,110,0.8)", boxShadow: "0 0 10px rgba(201,169,110,0.5)", animationDelay: "1s" }} />
                <div className="absolute animate-pulse-glow" style={{ bottom: "63%", left: "28%", width: "7px", height: "7px", borderRadius: "50%", background: "rgba(201,169,110,0.7)", boxShadow: "0 0 10px rgba(201,169,110,0.4)", animationDelay: "1.5s" }} />
                <div className="absolute animate-pulse-glow" style={{ bottom: "68%", right: "22%", width: "9px", height: "9px", borderRadius: "50%", background: "rgba(201,169,110,0.9)", boxShadow: "0 0 12px rgba(201,169,110,0.5)", animationDelay: "2s" }} />
              </div>

              {/* COP hub floating above the map */}
              <div className="absolute flex flex-col items-center gap-1 z-20" style={{ bottom: "38%", left: "55%" }}>
                <div className="w-10 h-10 rounded-full border-2 border-accent bg-accent/15 flex items-center justify-center" style={{ boxShadow: "0 0 24px rgba(201,169,110,0.3)" }}>
                  <span className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
                </div>
                <span className="text-[0.65rem] font-mono font-bold tracking-widest text-accent uppercase">COP</span>
              </div>

              {/* Status indicators */}
              <div className="absolute bottom-3 left-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[0.6rem] font-mono text-muted">5 active</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="text-[0.6rem] font-mono text-muted">2 alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <p className="text-muted text-sm flex items-center gap-3">
            <span className="text-accent-red">&#x2715;</span>
            Not data streams.
          </p>
          <span className="w-px h-5 bg-border" />
          <p className="text-foreground font-semibold text-sm flex items-center gap-3">
            <span className="text-accent">&#x2713;</span>
            One decision context.
          </p>
        </div>
      </div>
    </section>
  );
}
