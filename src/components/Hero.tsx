"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 animate-grid-fade">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,110,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06)_0%,transparent_70%)]" />

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Tag / Label */}
        <div className="animate-fade-in-up mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm text-sm text-muted font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            Physical AI Command &amp; Control
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-foreground">PAI C2</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in-up-delay-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-4">
          The Operational Layer for Scalable Autonomy.
        </p>

        {/* Supporting line */}
        <p className="animate-fade-in-up-delay-3 text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12">
          Turning autonomous systems into governable, mission-ready
          infrastructure.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#platform"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-background font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_24px_rgba(201,169,110,0.3)]"
          >
            Explore the Platform
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-accent/40 text-foreground font-semibold rounded-lg transition-all duration-200 bg-surface/30 hover:bg-surface/60 backdrop-blur-sm"
          >
            See Architecture
          </a>
          <a
            href="#nvidia"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:border-accent/40 text-muted hover:text-foreground font-semibold rounded-lg transition-all duration-200 bg-transparent hover:bg-surface/30"
          >
            NVIDIA Stack Integration
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up-delay-4">
        <div className="flex flex-col items-center gap-2 text-muted/50">
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-muted/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
