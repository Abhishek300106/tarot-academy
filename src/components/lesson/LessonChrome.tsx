import type { ReactNode } from "react";
import Link from "next/link";

/**
 * The shared frame for lesson pages: top banner, header, and footer.
 * It matches the header and footer used on the roadmap page.
 */
export default function LessonChrome({ children }: { children: ReactNode }) {
  return (
    <div className="lesson-page" id="top">
      <div className="lesson-banner">Sample lesson · Progress is not saved yet</div>

      <header className="lesson-header">
        <div className="lesson-wrap">
          <div className="lesson-nav">
            <Link href="/" className="lesson-brand">
              <span className="lesson-logo" aria-hidden="true">✦</span>
              <span>Tarot Academy</span>
            </Link>
            <nav className="lesson-links" aria-label="Main navigation">
              <Link className="active" href="/learn/roadmap">Learn</Link>
              <Link href="/#practice">Practice</Link>
              <Link href="/#about">About</Link>
            </nav>
            <Link className="lesson-button small" href="/learn/roadmap">Roadmap</Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="lesson-footer">
        <div className="lesson-wrap lesson-footer-inner">
          <div className="lesson-brand">
            <span className="lesson-logo" aria-hidden="true">✦</span>
            <span>Tarot Academy</span>
          </div>
          <p>Tarot is a tool for reflection and learning.</p>
          <p>© 2026 Tarot Academy</p>
        </div>
      </footer>
    </div>
  );
}