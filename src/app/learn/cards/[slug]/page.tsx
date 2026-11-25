
import Link from "next/link";
import { notFound } from "next/navigation";
export const instant = false;
import CardVisual from "@/components/lesson/CardVisual";
import LessonChrome from "@/components/lesson/LessonChrome";
import LessonFooterNav from "@/components/lesson/LessonFooterNav";
import LessonQuiz from "@/components/lesson/LessonQuiz";

import { getLessonBySlug } from "@/data/cards";
import {
  getCardBySlug,
  getAdjacentCards,
} from "@/data/curriculum";

export default async function CardLessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const lesson = getLessonBySlug(slug);
  const card = getCardBySlug(slug);

  if (!lesson || !card) {
    notFound();
  }

  const { previous, next } = getAdjacentCards(slug);

  return (
    <LessonChrome>
      <main className="lesson-wrap">
        <div className="lesson-breadcrumb">
          <Link href="/learn/roadmap">Learning roadmap</Link>
          <span aria-hidden="true"> / </span>
          <span>{card.stageName}</span>
          <span aria-hidden="true"> / </span>
          <span>{card.name}</span>
        </div>

        <section className="lesson-hero">
          <div className="lesson-hero-content">
            <p className="lesson-sublabel">
              {card.stageLabel} · {card.group}
            </p>

            <h1 className="lesson-title">{card.name}</h1>

            <p className="lesson-p">{lesson.subtitle}</p>

            <div className="lesson-meta">
              <span>{lesson.readingTime}</span>
              <span>{card.groupPosition} of {card.groupSize}</span>
            </div>

            <div className="lesson-remember">
              <strong>Remember this</strong>
              <p>{lesson.remember}</p>
            </div>
          </div>

          <CardVisual
            topLabel={card.topLabel}
            symbol={card.symbol}
            bottomLabel={card.bottomLabel}
            color={card.color}
          />
        </section>

        <div className="lesson-layout">
          <aside className="lesson-sidebar">
            <p className="lesson-sublabel">IN THIS LESSON</p>
            <nav aria-label="Lesson sections">
              <a href="#introduction">Know the card</a>
              <a href="#symbolism">Visual symbolism</a>
              <a href="#upright">Upright meaning</a>
              <a href="#reversed">Reversed meaning</a>
              <a href="#love">Love and relationships</a>
              <a href="#career">Career and work</a>
              <a href="#growth">Personal growth</a>
              <a href="#examples">Real-life examples</a>
              <a href="#questions">Questions in a reading</a>
              <a href="#response">Reading the energy</a>
              <a href="#practice">Practice</a>
              <a href="#quiz">Quiz</a>
            </nav>
          </aside>

          <div className="lesson-content">
            <section id="introduction" className="lesson-section">
              <p className="lesson-sublabel">01 · KNOW THE CARD</p>
              <h2>Core theme</h2>

              {lesson.intro.paragraphs.map((paragraph, index) => (
                <p className="lesson-p" key={index}>
                  {paragraph}
                </p>
              ))}

              <div className="lesson-highlight">
                <strong>The heart of this card</strong>
                <p>{lesson.intro.coreTheme}</p>
              </div>

              {lesson.numberTheme && (
                <p className="lesson-note">
                  <strong>Numerology connection:</strong>{" "}
                  {lesson.numberTheme}
                </p>
              )}
            </section>

            <section id="symbolism" className="lesson-section">
              <p className="lesson-sublabel">02 · KNOW THE CARD</p>
              <h2>Visual symbolism</h2>

              {lesson.symbolism.map((item, index) => (
                <article className="lesson-symbol" key={index}>
                  <h3>{item.title}</h3>
                  <p className="lesson-p">{item.meaning}</p>
                  <p className="lesson-note">
                    <strong>In a reading:</strong> {item.inReading}
                  </p>
                </article>
              ))}
            </section>

            <section id="upright" className="lesson-section">
              <p className="lesson-sublabel">03 · READ THE CARD</p>
              <h2>Upright meaning</h2>

              <div className="lesson-highlight">
                <strong>{lesson.upright.summary}</strong>
              </div>

              {lesson.upright.paragraphs.map((paragraph, index) => (
                <p className="lesson-p" key={index}>
                  {paragraph}
                </p>
              ))}

              <ul className="lesson-list">
                {lesson.upright.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="lesson-note">
                <strong>Common misreading</strong>
                <p>{lesson.upright.commonMisreading}</p>
              </div>
            </section>

            <section id="reversed" className="lesson-section">
              <p className="lesson-sublabel">04 · READ THE CARD</p>
              <h2>Reversed meaning</h2>

              <div className="lesson-highlight">
                <strong>{lesson.reversed.summary}</strong>
              </div>

              {lesson.reversed.interpretations.map((item, index) => (
                <article className="lesson-symbol" key={index}>
                  <h3>{item.title}</h3>
                  <p className="lesson-p">{item.text}</p>
                </article>
              ))}

              <div className="lesson-note">
                <strong>How to tell which interpretation fits</strong>
                <p>{lesson.reversed.howToTell}</p>
              </div>

              <p className="lesson-p">{lesson.reversed.note}</p>
            </section>

            <section id="love" className="lesson-section">
              <p className="lesson-sublabel">05 · APPLY IT</p>
              <h2>Love and relationships</h2>

              {lesson.love.paragraphs.map((paragraph, index) => (
                <p className="lesson-p" key={index}>
                  {paragraph}
                </p>
              ))}

              {lesson.love.contexts.map((context, index) => (
                <article className="lesson-context" key={index}>
                  <h3>{context.label}</h3>
                  <p className="lesson-p">{context.reading}</p>
                </article>
              ))}
            </section>

            <section id="career" className="lesson-section">
              <p className="lesson-sublabel">06 · APPLY IT</p>
              <h2>Career and work</h2>

              {lesson.career.paragraphs.map((paragraph, index) => (
                <p className="lesson-p" key={index}>
                  {paragraph}
                </p>
              ))}

              {lesson.career.contexts.map((context, index) => (
                <article className="lesson-context" key={index}>
                  <h3>{context.label}</h3>
                  <p className="lesson-p">{context.reading}</p>
                </article>
              ))}
            </section>

            <section id="growth" className="lesson-section">
              <p className="lesson-sublabel">07 · APPLY IT</p>
              <h2>Personal growth</h2>

              {lesson.growth.paragraphs.map((paragraph, index) => (
                <p className="lesson-p" key={index}>
                  {paragraph}
                </p>
              ))}

              {lesson.growth.contexts.map((context, index) => (
                <article className="lesson-context" key={index}>
                  <h3>{context.label}</h3>
                  <p className="lesson-p">{context.reading}</p>
                </article>
              ))}
            </section>

            <section id="examples" className="lesson-section">
              <p className="lesson-sublabel">08 · USE IT IN A READING</p>
              <h2>Real-life examples</h2>

              {lesson.examples.map((example, index) => (
                <article className="lesson-example" key={index}>
                  <h3>{example.title}</h3>
                  <p className="lesson-note">{example.scenario}</p>

                  <p className="lesson-question">
                    {example.question}
                  </p>

                  <p className="lesson-p">{example.reading}</p>

                  <div className="lesson-highlight">
                    <strong>Takeaway</strong>
                    <p>{example.takeaway}</p>
                  </div>
                </article>
              ))}
            </section>

            <section id="questions" className="lesson-section">
              <p className="lesson-sublabel">09 · USE IT IN A READING</p>
              <h2>Questions someone might ask</h2>

              {lesson.questions.map((item, index) => (
                <article className="lesson-example" key={index}>
                  <p className="lesson-question">{item.question}</p>
                  <p className="lesson-p">{item.suggests}</p>
                  <p className="lesson-note">
                    <strong>Context:</strong> {item.context}
                  </p>
                </article>
              ))}
            </section>

            <section id="response" className="lesson-section">
              <p className="lesson-sublabel">10 · USE IT IN A READING</p>
              <h2>Reading the energy</h2>

              <div className="lesson-highlight">
                <strong>Suggested energy</strong>
                <p>{lesson.response.energy}</p>
              </div>

              {lesson.response.paragraphs.map((paragraph, index) => (
                <p className="lesson-p" key={index}>
                  {paragraph}
                </p>
              ))}

              {lesson.response.contextShifts.map((item, index) => (
                <article className="lesson-context" key={index}>
                  <h3>{item.context}</h3>
                  <p className="lesson-p">{item.shift}</p>
                </article>
              ))}

              <div className="lesson-note">
                <strong>What to avoid</strong>
                <p>{lesson.response.avoid}</p>
              </div>
            </section>

            <section id="practice" className="lesson-section">
              <p className="lesson-sublabel">11 · PRACTICE</p>
              <h2>{lesson.practice.title}</h2>

              <p className="lesson-p">{lesson.practice.intro}</p>

              <ol className="lesson-list">
                {lesson.practice.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>

              <div className="lesson-highlight">
                <strong>Reflect on this</strong>
                <p>{lesson.practice.reflection}</p>
              </div>
            </section>

            <section id="quiz" className="lesson-section">
              <p className="lesson-sublabel">12 · CHECK YOUR UNDERSTANDING</p>
              <h2>Lesson quiz</h2>

              <p className="lesson-p">
                Test your understanding of the card's symbolism,
                interpretation, and reading context.
              </p>

              <LessonQuiz questions={lesson.quiz} />
            </section>

            <LessonFooterNav
              lessonName={card.name}
              previous={
                previous
                  ? { slug: previous.slug, name: previous.name }
                  : null
              }
              next={
                next ? { slug: next.slug, name: next.name } : null
              }
            />
          </div>
        </div>
      </main>
    </LessonChrome>
  );
}
