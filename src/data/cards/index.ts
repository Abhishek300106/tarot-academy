/**
 * The list of lessons that have been written so far.
 *
 * To add the next lesson:
 *   1. Create a new file in this folder (copy five-of-cups.ts and rewrite it).
 *   2. Import it below and add it to the `lessons` list.
 * The page, navigation and roadmap links need no other changes.
 */
import type { CardLesson } from "@/types/lesson";
import { fiveOfCups } from "./five-of-cups";

const lessons: CardLesson[] = [fiveOfCups];

export function getLessonBySlug(slug: string): CardLesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}