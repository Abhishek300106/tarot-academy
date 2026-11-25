/**
 * The "shape" of one Tarot card lesson.
 *
 * Every card lesson (all 78) is a plain object that follows this shape.
 * The lesson page reads this object and turns it into the page, so writing a
 * new lesson means writing a new data file, not new page code.
 */

/** One multiple-choice quiz question. */
export type QuizQuestion = {
  question: string;
  options: string[];
  /** Position of the correct answer in `options`. The first option is 0. */
  correctIndex: number;
  /** Shown after the learner answers, whether they were right or wrong. */
  explanation: string;
};

/** A situation and how the card reads there (used by love, career, growth). */
export type ThemeContext = {
  label: string;
  reading: string;
};

/** Used for the Love, Career and Personal growth sections. */
export type ThemeSection = {
  paragraphs: string[];
  contexts: ThemeContext[];
};

export type CardLesson = {
  /** Must match the card's slug in src/data/curriculum.ts, e.g. "five-of-cups". */
  slug: string;
  readingTime: string;
  /** What the card's number adds, e.g. "Five: disruption". Optional for Major Arcana. */
  numberTheme?: string;
  /** One or two sentences shown under the title. */
  subtitle: string;
  /** The short "Remember this" takeaway shown near the top. */
  remember: string;

  // 1. Introduction and core theme
  intro: { paragraphs: string[]; coreTheme: string };

  // 2. Important visual symbolism
  symbolism: { title: string; meaning: string; inReading: string }[];

  // 3. Upright meaning
  upright: {
    summary: string;
    paragraphs: string[];
    keyPoints: string[];
    commonMisreading: string;
  };

  // 4. Reversed meaning
  reversed: {
    summary: string;
    interpretations: { title: string; text: string }[];
    howToTell: string;
    note: string;
  };

  // 5, 6, 7. Love, career, personal growth
  love: ThemeSection;
  career: ThemeSection;
  growth: ThemeSection;

  // 8. Real-life examples
  examples: {
    title: string;
    scenario: string;
    question: string;
    reading: string;
    takeaway: string;
  }[];

  // 9. Questions someone might ask in a reading
  questions: { question: string; suggests: string; context: string }[];

  // 10. The response, interpretation, or energy this card suggests
  response: {
    energy: string;
    paragraphs: string[];
    contextShifts: { context: string; shift: string }[];
    avoid: string;
  };

  // 11. Practice exercise
  practice: {
    title: string;
    intro: string;
    steps: string[];
    reflection: string;
  };

  // 12. Short quiz
  quiz: QuizQuestion[];
};