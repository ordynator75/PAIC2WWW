export default function Footer() {
  return (
    <footer className="relative border-t border-border py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Positioning statement */}
        <div className="mb-12">
          <p className="text-lg text-muted mb-2">
            Physical AI is scaling rapidly.
          </p>
          <p className="text-lg text-muted mb-8">
            Operational governance is not.
          </p>
          <p className="text-xl font-semibold text-foreground mb-8">
            PAI C2 defines a new category:
            <br />
            <span className="text-accent">Physical AI Command & Control.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-mono tracking-wide text-muted">
            <span>Vendor-neutral.</span>
            <span className="w-1 h-1 rounded-full bg-accent/40" />
            <span>Mission-oriented.</span>
            <span className="w-1 h-1 rounded-full bg-accent/40" />
            <span>Governance-ready.</span>
          </div>
        </div>

        {/* Nav + copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold text-foreground tracking-tight">
            PAI C2
          </span>
          <nav className="flex items-center gap-6">
            <a href="#problem" className="text-sm text-muted hover:text-foreground transition-colors">Problem</a>
            <a href="#solution" className="text-sm text-muted hover:text-foreground transition-colors">Solution</a>
            <a href="#architecture" className="text-sm text-muted hover:text-foreground transition-colors">Architecture</a>
            <a href="#ai-stack" className="text-sm text-muted hover:text-foreground transition-colors">AI Robotic Stack</a>
          </nav>
          <p className="text-xs text-muted/60 font-mono">
            &copy; 2026 PAI C2
          </p>
        </div>
      </div>
    </footer>
  );
}
