export default function Footer() {
  return (
    <footer className="relative border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold text-foreground tracking-tight">
              PAI C2
            </span>
            <span className="text-sm text-muted">
              The Operational Layer for Scalable Autonomy
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#platform"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Platform
            </a>
            <a
              href="#architecture"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Architecture
            </a>
            <a
              href="#nvidia"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              NVIDIA Stack
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted/60 font-mono">
            &copy; 2026 PAI C2. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
