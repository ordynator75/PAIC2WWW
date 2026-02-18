"use client";

const copLayers = [
  {
    name: "Spatial Layer",
    desc: "Real-time map & asset locations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503-11.244l.006.006a7.948 7.948 0 013.741 6.738c0 3.597-2.4 6.634-5.69 7.592a.75.75 0 01-.37 0C9.65 21.384 7.25 18.347 7.25 14.75a7.948 7.948 0 013.741-6.738l.006-.006a.75.75 0 01.006 0z" />
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

export default function COP() {
  return (
    <section id="cop" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px]" />

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

        {/* Two-column layout: cards left, visualization right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: layer cards */}
          <div className="space-y-3">
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
                {/* Connector line hint (visible on lg) */}
                <div className="hidden lg:block absolute right-0 top-1/2 w-4 h-px bg-accent/30 translate-x-full" />
              </div>
            ))}
          </div>

          {/* Right: stylized COP visualization */}
          <div className="relative flex items-center justify-center" style={{ minHeight: "380px" }}>
            {/* Outer glow */}
            <div className="absolute inset-0 bg-accent/5 rounded-2xl blur-[60px]" />

            {/* Grid background */}
            <div
              className="absolute inset-4 rounded-xl opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,169,110,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.15) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Visualization container */}
            <div className="relative w-full h-full flex items-center justify-center rounded-xl border border-accent/20 bg-background/60 backdrop-blur-sm overflow-hidden" style={{ minHeight: "380px" }}>

              {/* Radar circles */}
              <div className="absolute w-64 h-64 rounded-full border border-accent/10" />
              <div className="absolute w-44 h-44 rounded-full border border-accent/15" />
              <div className="absolute w-24 h-24 rounded-full border border-accent/20" />

              {/* Pulsing dots - representing assets on the map */}
              <div className="absolute top-[20%] left-[25%] w-2.5 h-2.5 rounded-full bg-accent animate-pulse-glow" />
              <div className="absolute top-[35%] right-[20%] w-2 h-2 rounded-full bg-accent/70 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
              <div className="absolute bottom-[30%] left-[35%] w-2 h-2 rounded-full bg-accent/60 animate-pulse-glow" style={{ animationDelay: "1s" }} />
              <div className="absolute top-[55%] right-[35%] w-3 h-3 rounded-full bg-accent/80 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
              <div className="absolute bottom-[20%] right-[25%] w-2 h-2 rounded-full bg-accent/50 animate-pulse-glow" style={{ animationDelay: "2s" }} />

              {/* Connecting lines between dots */}
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
                <line x1="25%" y1="20%" x2="80%" y2="35%" stroke="rgb(201,169,110)" strokeWidth="1" />
                <line x1="25%" y1="20%" x2="35%" y2="70%" stroke="rgb(201,169,110)" strokeWidth="1" />
                <line x1="80%" y1="35%" x2="65%" y2="55%" stroke="rgb(201,169,110)" strokeWidth="1" />
                <line x1="65%" y1="55%" x2="75%" y2="80%" stroke="rgb(201,169,110)" strokeWidth="1" />
                <line x1="35%" y1="70%" x2="65%" y2="55%" stroke="rgb(201,169,110)" strokeWidth="1" />
              </svg>

              {/* Center COP label */}
              <div className="relative flex flex-col items-center gap-1.5 z-10">
                <div className="w-12 h-12 rounded-full border-2 border-accent bg-accent/10 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">COP</span>
              </div>

              {/* Status indicators */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
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
