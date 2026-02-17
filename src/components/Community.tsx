"use client";

const cities = [
  { name: "Warsaw", status: "Active Hub", x: 55.5, y: 28 },
  { name: "Tokyo", status: "Planned", x: 84, y: 35 },
  { name: "Los Angeles", status: "Planned", x: 15, y: 38 },
];

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

        {/* World map */}
        <div className="relative w-full rounded-xl border border-border bg-surface/30 backdrop-blur-sm overflow-hidden p-8">
          <div className="relative w-full" style={{ paddingBottom: "45%" }}>
            {/* Simplified world map outline using SVG */}
            <svg
              viewBox="0 0 1000 450"
              className="absolute inset-0 w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid lines */}
              {[...Array(9)].map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={i * 56.25}
                  x2="1000"
                  y2={i * 56.25}
                  stroke="rgba(201,169,110,0.06)"
                  strokeWidth="0.5"
                />
              ))}
              {[...Array(17)].map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 62.5}
                  y1="0"
                  x2={i * 62.5}
                  y2="450"
                  stroke="rgba(201,169,110,0.06)"
                  strokeWidth="0.5"
                />
              ))}

              {/* Simplified continent outlines */}
              {/* North America */}
              <path
                d="M50,80 L120,50 L200,55 L240,80 L250,120 L240,160 L200,200 L180,230 L160,200 L120,180 L80,160 L50,120 Z"
                fill="rgba(201,169,110,0.06)"
                stroke="rgba(201,169,110,0.12)"
                strokeWidth="1"
              />
              {/* South America */}
              <path
                d="M200,240 L240,230 L270,260 L280,310 L260,370 L230,400 L200,380 L190,330 L180,280 Z"
                fill="rgba(201,169,110,0.06)"
                stroke="rgba(201,169,110,0.12)"
                strokeWidth="1"
              />
              {/* Europe */}
              <path
                d="M440,60 L500,50 L560,55 L580,80 L570,110 L540,130 L500,140 L460,130 L440,100 Z"
                fill="rgba(201,169,110,0.06)"
                stroke="rgba(201,169,110,0.12)"
                strokeWidth="1"
              />
              {/* Africa */}
              <path
                d="M460,150 L520,140 L570,160 L580,220 L570,300 L540,350 L500,370 L470,340 L450,280 L440,200 Z"
                fill="rgba(201,169,110,0.06)"
                stroke="rgba(201,169,110,0.12)"
                strokeWidth="1"
              />
              {/* Asia */}
              <path
                d="M580,40 L700,30 L800,50 L860,80 L880,130 L850,170 L800,180 L740,160 L680,140 L620,120 L590,80 Z"
                fill="rgba(201,169,110,0.06)"
                stroke="rgba(201,169,110,0.12)"
                strokeWidth="1"
              />
              {/* Australia */}
              <path
                d="M780,300 L850,290 L900,310 L910,350 L880,380 L830,390 L790,370 L770,340 Z"
                fill="rgba(201,169,110,0.06)"
                stroke="rgba(201,169,110,0.12)"
                strokeWidth="1"
              />

              {/* City markers */}
              {cities.map((city, i) => (
                <g key={i}>
                  {/* Pulse ring */}
                  <circle
                    cx={city.x * 10}
                    cy={city.y * 10 + 50}
                    r={city.status === "Active Hub" ? 16 : 12}
                    fill="none"
                    stroke={city.status === "Active Hub" ? "rgba(201,169,110,0.4)" : "rgba(201,169,110,0.2)"}
                    strokeWidth="1"
                  >
                    <animate
                      attributeName="r"
                      values={city.status === "Active Hub" ? "8;20;8" : "6;14;6"}
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Core dot */}
                  <circle
                    cx={city.x * 10}
                    cy={city.y * 10 + 50}
                    r={city.status === "Active Hub" ? 5 : 3.5}
                    fill={city.status === "Active Hub" ? "#C9A96E" : "rgba(201,169,110,0.5)"}
                  />
                  {/* Label */}
                  <text
                    x={city.x * 10}
                    y={city.y * 10 + 50 + 24}
                    textAnchor="middle"
                    fill="#F5F0E8"
                    fontSize="12"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                  >
                    {city.name}
                  </text>
                  <text
                    x={city.x * 10}
                    y={city.y * 10 + 50 + 38}
                    textAnchor="middle"
                    fill={city.status === "Active Hub" ? "#C9A96E" : "#8A8070"}
                    fontSize="9"
                    fontFamily="JetBrains Mono, monospace"
                    letterSpacing="0.1em"
                  >
                    {city.status.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>
          </div>
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
