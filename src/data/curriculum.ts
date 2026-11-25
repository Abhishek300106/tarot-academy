/**
 * The complete list of all 78 Tarot cards, in learning order.
 *
 * This is NOT the lesson content. It is the "table of contents": it knows each
 * card's name, where it sits in the roadmap, and how its card picture looks.
 * The lesson page uses it for breadcrumbs, "Lesson 5 of 10" and the
 * previous / next buttons, even for cards whose lessons are not written yet.
 *
 * Order: Minor Arcana (Wands, Cups, Swords, Pentacles, Ace to Ten),
 * then Court Cards (Pages, Knights, Queens, Kings), then Major Arcana.
 * To change the order, change the order of the lists below.
 */

export type CardSummary = {
  slug: string;
  name: string;
  arcana: "major" | "minor";
  /** "Cups", "Court Cards" or "Major Arcana". */
  group: string;
  /** Position inside the group, starting at 1. */
  groupPosition: number;
  groupSize: number;
  /** "Minor Arcana", "Court Cards" or "Major Arcana". */
  stageName: string;
  /** "Stage 1: Minor Arcana" (matches the roadmap). */
  stageLabel: string;
  element?: string;
  /** Small label at the top of the card picture. */
  topLabel: string;
  symbol: string;
  /** Small label at the bottom of the card picture. */
  bottomLabel: string;
  color: string;
};

const suits = [
  { name: "Wands", symbol: "♣", color: "#FBD9B8", element: "Fire" },
  { name: "Cups", symbol: "♡", color: "#D9ECF5", element: "Water" },
  { name: "Swords", symbol: "♠", color: "#E6E3F0", element: "Air" },
  { name: "Pentacles", symbol: "♢", color: "#DCEBCB", element: "Earth" },
];

const numberRanks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const courtRanks = ["Page", "Knight", "Queen", "King"];
const roman = [
  "0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI",
];
const majorNames = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World",
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function buildCurriculum(): CardSummary[] {
  // Stage 1: Minor Arcana, 40 cards
  const minor: CardSummary[] = suits.flatMap((suit) =>
    numberRanks.map((rank, index) => {
      const name = `${rank} of ${suit.name}`;
      return {
        slug: toSlug(name),
        name,
        arcana: "minor" as const,
        group: suit.name,
        groupPosition: index + 1,
        groupSize: numberRanks.length,
        stageName: "Minor Arcana",
        stageLabel: "Stage 1: Minor Arcana",
        element: suit.element,
        topLabel: roman[index + 1],
        symbol: suit.symbol,
        bottomLabel: suit.name.toUpperCase(),
        color: suit.color,
      };
    })
  );

  // Stage 2: Court Cards, 16 cards (all Pages, then all Knights, and so on)
  const courts: CardSummary[] = courtRanks.flatMap((rank, rankIndex) =>
    suits.map((suit, suitIndex) => {
      const name = `${rank} of ${suit.name}`;
      return {
        slug: toSlug(name),
        name,
        arcana: "minor" as const,
        group: "Court Cards",
        groupPosition: rankIndex * suits.length + suitIndex + 1,
        groupSize: courtRanks.length * suits.length,
        stageName: "Court Cards",
        stageLabel: "Stage 2: Court Cards",
        element: suit.element,
        topLabel: rank.toUpperCase(),
        symbol: suit.symbol,
        bottomLabel: suit.name.toUpperCase(),
        color: suit.color,
      };
    })
  );

  // Stage 3: Major Arcana, 22 cards
  const major: CardSummary[] = majorNames.map((name, index) => ({
    slug: toSlug(name),
    name,
    arcana: "major" as const,
    group: "Major Arcana",
    groupPosition: index + 1,
    groupSize: majorNames.length,
    stageName: "Major Arcana",
    stageLabel: "Stage 3: Major Arcana",
    topLabel: roman[index],
    symbol: "✦",
    bottomLabel: name.toUpperCase(),
    color: "#FBE08A",
  }));

  return [...minor, ...courts, ...major];
}

export const curriculum: CardSummary[] = buildCurriculum();

export function getCardBySlug(slug: string): CardSummary | undefined {
  return curriculum.find((card) => card.slug === slug);
}

/** The cards just before and after this one in the learning order. */
export function getAdjacentCards(slug: string): {
  previous: CardSummary | null;
  next: CardSummary | null;
} {
  const index = curriculum.findIndex((card) => card.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? curriculum[index - 1] : null,
    next: index < curriculum.length - 1 ? curriculum[index + 1] : null,
  };
}