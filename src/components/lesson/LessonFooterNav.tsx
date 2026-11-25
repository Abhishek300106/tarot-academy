"use client";

import { useState } from "react";
import Link from "next/link";

type NavCard = { slug: string; name: string };

/**
 * Bottom of the lesson: previous / next lesson links and a "Mark complete" button.
 * "Complete" is remembered only while this page is open (no saving yet).
 */
export default function LessonFooterNav({
  lessonName,
  previous,
  next,
}: {
  lessonName: string;
  previous: NavCard | null;
  next: NavCard | null;
}) {
  const [complete, setComplete] = useState(false);

  return (
    <div className={`lesson-nav-card ${complete ? "is-complete" : ""}`}>
      <div className="lesson-nav-row">
        <div className="slot start">
          {previous && (
            <Link className="lesson-button secondary" href={`/learn/cards/${previous.slug}`}>
              ← {previous.name}
            </Link>
          )}
        </div>

        <button
          type="button"
          className={`lesson-button complete ${complete ? "done" : ""}`}
          onClick={() => setComplete((value) => !value)}
          aria-pressed={complete}
        >
          {complete ? "✓ Lesson complete" : "Mark lesson complete"}
        </button>

        <div className="slot end">
          {next && (
            <Link className="lesson-button" href={`/learn/cards/${next.slug}`}>
              {next.name} →
            </Link>
          )}
        </div>
      </div>

      <p className="lesson-nav-note" role="status">
        {complete
          ? `Nice work. ${lessonName} is marked complete on this page. Progress isn’t saved yet, so it resets if you reload.`
          : "When you’ve finished the lesson and quiz, mark it complete. You can undo this at any time."}
      </p>
    </div>
  );
}