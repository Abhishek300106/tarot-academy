import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  CONTENT (edit the text here without touching the layout below)     */
/* ------------------------------------------------------------------ */

const navLinks = [
  { label: "Learn", href: "#learn" },
  { label: "Practice", href: "#practice" },
  { label: "About", href: "#about" },
];

const roadmap = [
  {
    step: "01",
    title: "Foundations",
    description:
      "Understand how a Tarot deck is structured, how a reading flows, and how to build a calm, repeatable practice.",
    lessons: "8 lessons",
    symbol: "✦",
  },
  {
    step: "02",
    title: "Minor Arcana",
    description:
      "Walk through the four suits, from Ace to Ten, and learn how numbers and elements shape everyday meaning.",
    lessons: "40 lessons",
    symbol: "♢",
  },
  {
    step: "03",
    title: "Court Cards",
    description:
      "Meet the Pages, Knights, Queens and Kings, and learn to read them as personalities, moods and approaches.",
    lessons: "16 lessons",
    symbol: "♔",
  },
  {
    step: "04",
    title: "Major Arcana",
    description:
      "Explore the 22 cards of the Fool's journey and the big life themes and turning points they represent.",
    lessons: "22 lessons",
    symbol: "☾",
  },
];

const features = [
  {
    title: "Symbolism",
    description:
      "Learn why each image is there. Colors, figures and objects become a visual language you can actually read.",
    icon: "◈",
  },
  {
    title: "Upright & Reversed",
    description:
      "See both sides of every card side by side, with clear explanations instead of memorized keywords.",
    icon: "⇅",
  },
  {
    title: "Contextual Interpretation",
    description:
      "Practice how a card's meaning shifts with the question, its position, and the cards around it.",
    icon: "❖",
  },
  {
    title: "Quizzes",
    description:
      "Short, friendly checks after each lesson help the knowledge stick before you move on.",
    icon: "✓",
  },
];

const levels = [
  {
    name: "Beginner",
    tagline: "Build your footing",
    points: [
      "Card anatomy and deck structure",
      "Core meanings of each card",
      "Simple one- and three-card spreads",
    ],
  },
  {
    name: "Intermediate",
    tagline: "Connect the cards",
    points: [
      "Reading cards in combination",
      "Elements, numbers and suits together",
      "Reversals and nuanced interpretation",
    ],
  },
  {
    name: "Advanced",
    tagline: "Read with confidence",
    points: [
      "Telling a story across a full spread",
      "Framing questions with care",
      "Developing your own reading style",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  SMALL REUSABLE COMPONENTS                                          */
/* ------------------------------------------------------------------ */

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-[#F2CF6B] text-[#2B2418] hover:bg-[#EBC24F]"
      : "border border-[#E3D6B3] bg-white text-[#2B2418] hover:bg-[#FBF3DC]";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A67C1F]">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-[#6B6252]">
        {description}
      </p>
    </div>
  );
}

/* A decorative tarot card drawn with CSS (no images needed) */
function TarotCard({
  numeral,
  name,
  symbol,
  colors,
  className = "",
}: {
  numeral: string;
  name: string;
  symbol: string;
  colors: string; // Tailwind background classes for the card face
  className?: string;
}) {
  return (
    <div
      className={`flex h-64 w-40 flex-col items-center justify-between rounded-2xl border-4 border-white p-4 shadow-xl shadow-[#8a6a1f]/15 sm:h-80 sm:w-52 ${colors} ${className}`}
    >
      <span className="font-display text-sm tracking-widest text-[#2B2418]/70">
        {numeral}
      </span>
      <span className="text-6xl text-[#2B2418]/80 sm:text-7xl">{symbol}</span>
      <span className="font-display text-sm uppercase tracking-[0.2em] text-[#2B2418]/80">
        {name}
      </span>
    </div>
  );
}

function RoadmapCard({ item }: { item: (typeof roadmap)[number] }) {
  return (
    <div className="card-lift flex flex-col rounded-3xl border border-[#EADFC4] bg-white p-6">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm text-[#A67C1F]">{item.step}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBEFC4] text-lg">
          {item.symbol}
        </span>
      </div>
      <h3 className="font-display mt-6 text-xl">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B6252]">
        {item.description}
      </p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#8A7A57]">
        {item.lessons}
      </p>
    </div>
  );
}

function FeatureCard({ item }: { item: (typeof features)[number] }) {
  return (
    <div className="card-lift rounded-3xl border border-[#EADFC4] bg-[#FFFDF7] p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FBEFC4] text-xl">
        {item.icon}
      </span>
      <h3 className="font-display mt-5 text-lg">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B6252]">
        {item.description}
      </p>
    </div>
  );
}

function LevelCard({
  level,
  index,
}: {
  level: (typeof levels)[number];
  index: number;
}) {
  return (
    <div className="card-lift relative rounded-3xl border border-[#EADFC4] bg-white p-7">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2CF6B] text-sm font-bold">
        {index + 1}
      </span>
      <h3 className="font-display mt-5 text-2xl">{level.name}</h3>
      <p className="mt-1 text-sm text-[#A67C1F]">{level.tagline}</p>
      <ul className="mt-5 space-y-3">
        {level.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm text-[#4A4234]">
            <span className="mt-0.5 text-[#C9972B]">✦</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE SECTIONS                                                      */
/* ------------------------------------------------------------------ */

function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#EFE4C8] bg-[#FFFDF7]/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2CF6B] text-sm">
              ✦
            </span>
            <span className="font-display text-lg font-semibold">
              Tarot Academy
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#4A4234] transition-colors hover:text-[#A67C1F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button href="/learn/roadmap">Start Learning</Button>
        </div>

        {/* Simple links row for small screens */}
        <nav className="flex justify-center gap-8 pb-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#4A4234]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-[#FBF6EA]">
      <Container>
        <div className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-2">
          <div className="fade-up text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A67C1F]">
              Tarot, taught properly
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Learn Tarot step by step, from first card to confident reading.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#6B6252] lg:mx-0">
              A calm, structured path through the whole deck. Understand the
              symbols, build real interpretation skills, and never wonder what
              to learn next.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="/learn/roadmap">Start Learning</Button>
              <Button href="#practice" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>

          {/* Fanned cards */}
          <div
            className="fade-up relative mx-auto flex h-80 w-full max-w-md items-center justify-center sm:h-[26rem]"
            aria-hidden="true"
          >
            <TarotCard
              numeral="XVIII"
              name="The Moon"
              symbol="☾"
              colors="bg-[#DCE6F5]"
              className="card-float absolute -translate-x-24 -rotate-12 sm:-translate-x-32"
            />
            <TarotCard
              numeral="XIX"
              name="The Sun"
              symbol="☀"
              colors="bg-[#FBE08A]"
              className="absolute z-10"
            />
            <TarotCard
              numeral="XVII"
              name="The Star"
              symbol="✦"
              colors="bg-[#D6EBE3]"
              className="card-float absolute translate-x-24 rotate-12 sm:translate-x-32"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="learn" className="scroll-mt-24 bg-[#FFFDF7] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Your learning roadmap"
          title="A clear path through the entire deck"
          description="Each stage builds on the last, so every card you learn has a place and a purpose."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item) => (
            <RoadmapCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function LearningExperience() {
  return (
    <section
      id="practice"
      className="scroll-mt-24 bg-[#FBF6EA] py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="The learning experience"
          title="Understand each card, don't just memorize it"
          description="Every lesson blends meaning, imagery and practice so your knowledge becomes real interpretation."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>

          {/* Mock lesson preview */}
          <div className="rounded-3xl border border-[#EADFC4] bg-white p-6 shadow-lg shadow-[#8a6a1f]/10 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-14 items-center justify-center rounded-lg border-2 border-white bg-[#FBE08A] text-2xl shadow">
                ☀
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A67C1F]">
                  Lesson preview
                </p>
                <h3 className="font-display text-xl">The Sun</h3>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#FFF8DF] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8A7A57]">
                  Upright
                </p>
                <p className="mt-1 text-sm text-[#4A4234]">
                  Joy, clarity, vitality and success.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F6F1E6] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8A7A57]">
                  Reversed
                </p>
                <p className="mt-1 text-sm text-[#4A4234]">
                  Temporary doubt or overly high expectations.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#EADFC4] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#A67C1F]">
                Quick check
              </p>
              <p className="mt-2 text-sm font-medium">
                What does the child on the horse most often represent?
              </p>
              <div className="mt-3 space-y-2 text-sm">
                {["Innocence and freedom", "Hidden fears", "A coming loss"].map(
                  (option, i) => (
                    <div
                      key={option}
                      className={`rounded-xl border px-4 py-2 ${
                        i === 0
                          ? "border-[#E3C25F] bg-[#FFF8DF]"
                          : "border-[#EFE4C8] bg-white"
                      }`}
                    >
                      {option}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Progression() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#FFFDF7] py-20 sm:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Your progression"
          title="Grow from curious beginner to confident reader"
          description="Tarot Academy meets you where you are and gently raises the challenge as your skills deepen."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {levels.map((level, index) => (
            <LevelCard key={level.name} level={level} index={index} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="#top">Begin your journey</Button>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#EFE4C8] bg-[#FBF6EA]">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-10 text-sm text-[#6B6252] sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F2CF6B] text-xs">
              ✦
            </span>
            <span className="font-display text-base font-semibold text-[#2B2418]">
              Tarot Academy
            </span>
          </div>
          <p>Tarot is a tool for reflection and learning.</p>
          <p>© {new Date().getFullYear()} Tarot Academy</p>
        </div>
      </Container>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  HOMEPAGE                                                           */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div id="top">
      <Navigation />
      <main>
        <Hero />
        <Roadmap />
        <LearningExperience />
        <Progression />
      </main>
      <Footer />
    </div>
  );
}