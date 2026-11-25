import type { CSSProperties } from "react";

const stages = [
  {
    number: 0,
    title: "Tarot Foundations",
    status: "completed",
    completed: 8,
    total: 8,
    time: "About 2 hours",
    description:
      "Meet the 78-card deck and learn the ideas every reading rests on: how the deck is organised, what the suits and elements mean, and how a reading works.",
    topics: ["The 78-card deck", "Major and Minor Arcana", "The four suits", "The four elements", "How a reading works", "Basic reading principles"],
  },
  {
    number: 1,
    title: "Minor Arcana",
    status: "in-progress",
    completed: 14,
    total: 40,
    time: "About 8 hours",
    description:
      "Walk through Wands, Cups, Swords and Pentacles from Ace to Ten, and see how suit symbolism, elements and number progression shape each card.",
    topics: ["Ace through Ten in every suit", "Suit symbolism", "Elemental associations", "Number progression"],
  },
  {
    number: 2,
    title: "Court Cards",
    status: "upcoming",
    completed: 0,
    total: 16,
    time: "About 3 hours",
    description:
      "Get to know the Pages, Knights, Queens and Kings as people, roles and ways of acting, and learn how they show up in a reading.",
    topics: ["Pages: the learners", "Knights: the pursuers", "Queens: the nurturers", "Kings: the masters", "Personalities and behaviour", "Court cards in readings"],
  },
  {
    number: 3,
    title: "Major Arcana",
    status: "upcoming",
    completed: 0,
    total: 22,
    time: "About 6 hours",
    description:
      "Follow the Fool’s Journey through all 22 Major Arcana cards, with their symbolism, upright and reversed meanings, and life themes.",
    topics: ["The Fool’s Journey", "Cards 0 to VII: Fool to Chariot", "Cards VIII to XIV: Strength to Temperance", "Cards XV to XXI: Devil to World", "Upright and reversed meanings", "Life themes and turning points"],
  },
  {
    number: 4,
    title: "Interpretation Skills",
    status: "upcoming",
    completed: 0,
    total: 12,
    time: "About 3 hours",
    description:
      "Turn card knowledge into real readings by reading in context, answering questions, and weaving several cards into one message.",
    topics: ["Context-based reading", "Answering questions", "Upright and reversed in context", "Combining cards"],
  },
  {
    number: 5,
    title: "Spreads and Practice",
    status: "upcoming",
    completed: 0,
    total: 10,
    time: "About 2.5 hours",
    description:
      "Practise with simple layouts first, then build up to spreads that tell a fuller story.",
    topics: ["One-card spread", "Two-card spread", "Three-card spread", "Past, Present, Future", "Situation, Challenge, Advice"],
  },
  {
    number: 6,
    title: "Assessment and Mastery",
    status: "upcoming",
    completed: 0,
    total: 6,
    time: "About 2 hours",
    description:
      "Bring everything together with mixed quizzes, real-life situations, mock readings and a final assessment.",
    topics: ["Mixed quizzes", "Real-life situations", "Card combinations", "Mock readings", "Final assessment"],
  },
];

const statusLabels = {
  completed: "Completed",
  "in-progress": "In progress",
  upcoming: "Upcoming",
};

function percent(completed: number, total: number) {
  return total ? Math.round((completed / total) * 100) : 0;
}

export default function LearningRoadmapPage() {
  const totalLessons = stages.reduce((sum, stage) => sum + stage.total, 0);
  const completedLessons = stages.reduce((sum, stage) => sum + stage.completed, 0);
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);
  const currentStage = stages.find((stage) => stage.status === "in-progress") ?? stages[0];

  return (
    <div className="roadmap-page">
      <div className="roadmap-banner">Learning roadmap · Sample progress</div>

      <header className="roadmap-header">
        <div className="roadmap-wrap">
          <div className="roadmap-nav">
            <a href="/" className="roadmap-brand">
              <span className="roadmap-logo" aria-hidden="true">✦</span>
              <span>Tarot Academy</span>
            </a>
            <nav className="roadmap-links" aria-label="Main navigation">
              <a className="active" href="/learn/roadmap">Learn</a>
              <a href="/#practice">Practice</a>
              <a href="/#about">About</a>
            </nav>
            <a className="roadmap-button small" href="#stage-1">Continue Learning</a>
          </div>
          <nav className="roadmap-mobile-links" aria-label="Mobile navigation">
            <a className="active" href="/learn/roadmap">Learn</a>
            <a href="/#practice">Practice</a>
            <a href="/#about">About</a>
          </nav>
        </div>
      </header>

      <section className="roadmap-intro">
        <div className="roadmap-wrap">
          <p className="roadmap-eyebrow">Learning roadmap</p>
          <h1 className="roadmap-display">From your first card to a confident reading.</h1>
          <p className="roadmap-subtitle">
            Seven stages, each building on the last. Follow the recommended order,
            or open any stage when you’re curious.
          </p>
        </div>
      </section>

      <main className="roadmap-main">
        <div className="roadmap-wrap">
          <section className="roadmap-card roadmap-overall" aria-labelledby="overall-title">
            <div>
              <h2 className="roadmap-display overall-title" id="overall-title">Overall progress</h2>
              <div className="roadmap-progress-row">
                <span className="roadmap-big">{overallProgress}%</span>
                <span>{completedLessons} of {totalLessons} lessons</span>
              </div>
              <div className="roadmap-bar" role="progressbar" aria-valuenow={overallProgress} aria-valuemin={0} aria-valuemax={100} aria-label="Overall learning progress">
                <i style={{ width: `${overallProgress}%` }} />
              </div>
              <div className="roadmap-segments" aria-label="Progress by stage">
                {stages.map((stage) => (
                  <a
                    key={stage.number}
                    href={`#stage-${stage.number}`}
                    className={stage.status === "completed" ? "complete" : ""}
                    aria-label={`Stage ${stage.number}: ${stage.title}, ${percent(stage.completed, stage.total)} percent complete`}
                  >
                    <i style={{ width: `${percent(stage.completed, stage.total)}%` }} />
                  </a>
                ))}
              </div>
              <div className="roadmap-segment-caption"><span>Stage 0</span><span>Stage 6</span></div>
            </div>
            <div>
              <div className="roadmap-facts">
                <div><span>Current stage</span><strong>Stage {currentStage.number}: {currentStage.title}</strong></div>
                <div><span>Estimated time left</span><strong>About 22 hours</strong></div>
                <div className="last"><span>Up next</span><strong>The Five of Cups</strong></div>
              </div>
              <div className="roadmap-cta"><a className="roadmap-button" href="#stage-1">Continue Learning</a></div>
              <p className="roadmap-demo-note">Demonstration values — progress is not saved yet.</p>
            </div>
          </section>

          <ol className="roadmap-journey">
            {stages.map((stage) => {
              const stagePercent = percent(stage.completed, stage.total);
              const isCurrent = stage.status === "in-progress";
              const isComplete = stage.status === "completed";
              return (
                <li
                  key={stage.number}
                  id={`stage-${stage.number}`}
                  className={`roadmap-stage-row ${isComplete ? "completed" : ""} ${isCurrent ? "current" : ""}`}
                >
                  <span className="roadmap-node" aria-hidden="true">{isComplete ? "✓" : stage.number}</span>
                  <article className="roadmap-card roadmap-stage">
                    <div className="roadmap-stage-heading">
                      <div>
                        <p className="roadmap-stage-number">Stage {stage.number}</p>
                        <h2 className="roadmap-display">{stage.title}</h2>
                      </div>
                      <span className={`roadmap-pill ${stage.status}`}>{statusLabels[stage.status as keyof typeof statusLabels]}</span>
                    </div>
                    <p className="roadmap-description">{stage.description}</p>
                    <div className="roadmap-meta">
                      <span>{isComplete || isCurrent ? `${stage.completed} of ${stage.total} lessons` : `${stage.total} lessons`}</span>
                      <span>{stage.time}</span>
                    </div>

                    {isCurrent && (
                      <>
                        <div className="roadmap-progress-row stage-progress-row">
                          <span>Stage progress</span><span><strong>{stage.completed}</strong> of {stage.total} lessons</span>
                        </div>
                        <div className="roadmap-bar stage-bar" role="progressbar" aria-valuenow={stagePercent} aria-valuemin={0} aria-valuemax={100} aria-label={`${stage.title} progress`}>
                          <i style={{ width: `${stagePercent}%` }} />
                        </div>
                        <div className="roadmap-suits">
                          {[
                            { name: "Wands", symbol: "♣", color: "#FBD9B8", count: 10 },
                            { name: "Cups", symbol: "♡", color: "#D9ECF5", count: 4 },
                            { name: "Swords", symbol: "♠", color: "#E6E3F0", count: 0 },
                            { name: "Pentacles", symbol: "♢", color: "#DCEBCB", count: 0 },
                          ].map((suit) => (
                            <div className="roadmap-suit" style={{ "--suit-color": suit.color } as CSSProperties} key={suit.name}>
                              <div className="suit-title">{suit.name}<span aria-hidden="true">{suit.symbol}</span></div>
                              <p>{suit.count} of 10 lessons</p>
                              <div className="roadmap-bar suit-bar"><i style={{ width: `${suit.count * 10}%` }} /></div>
                            </div>
                          ))}
                        </div>
                        <div className="roadmap-next-lesson">
                          <div className="roadmap-tarot-card" aria-hidden="true"><span>V</span><b>♡</b><span>CUPS</span></div>
                          <div>
                            <p className="next-label">Recommended next lesson</p>
                            <h3 className="roadmap-display">The Five of Cups</h3>
                            <p className="next-detail">Cups, lesson 5 of 10 · About 12 minutes · Loss, regret and what remains.</p>
                          </div>
                          <a className="roadmap-button" href="#stage-1">Continue Learning</a>
                        </div>
                        <p className="roadmap-topics-label">What this stage covers</p>
                      </>
                    )}

                    <ul className="roadmap-topics">
                      {stage.topics.map((topic) => (
                        <li key={topic}><span aria-hidden="true">{isComplete ? "✓" : "✦"}</span>{topic}</li>
                      ))}
                    </ul>
                    <div className="roadmap-stage-actions">
                      {isComplete ? (
                        <a className="roadmap-button secondary" href="#stage-0">Review stage</a>
                      ) : isCurrent ? (
                        <a className="roadmap-button" href="#stage-1">Continue stage</a>
                      ) : (
                        <a className="roadmap-button secondary" href="#stage-2">Preview stage</a>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </main>

      <footer className="roadmap-footer">
        <div className="roadmap-wrap roadmap-footer-inner">
          <div className="roadmap-brand"><span className="roadmap-logo" aria-hidden="true">✦</span><span>Tarot Academy</span></div>
          <p>Tarot is a tool for reflection and learning.</p>
          <p>© {new Date().getFullYear()} Tarot Academy</p>
        </div>
      </footer>
    </div>
  );
}
