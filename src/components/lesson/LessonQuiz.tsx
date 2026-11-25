"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/types/lesson";

/**
 * An interactive quiz. It shows one question at a time.
 * After the learner picks an answer, it shows whether it was correct and why.
 * Everything is kept in this component's own state, so nothing is saved.
 */
export default function LessonQuiz({ questions }: { questions: QuizQuestion[] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) return null;

  const question = questions[current];
  const answered = selected !== null;
  const isLast = current === questions.length - 1;
  const isCorrect = answered && selected === question.correctIndex;

  function choose(index: number) {
    if (answered) return; // answers are locked once chosen
    setSelected(index);
    if (index === question.correctIndex) setScore((value) => value + 1);
  }

  function goNext() {
    if (isLast) {
      setFinished(true);
    } else {
      setCurrent((value) => value + 1);
      setSelected(null);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const message =
      score === questions.length
        ? "Excellent. You read this card with care."
        : score >= Math.ceil(questions.length / 2)
          ? "Good work. Revisit the sections you missed, then try again."
          : "A good start. Read the lesson again, then try the quiz once more.";
    return (
      <div className="lesson-quiz-result" role="status">
        <p className="lesson-quiz-score">
          {score} of {questions.length} correct
        </p>
        <p className="lesson-p">{message}</p>
        <button type="button" className="lesson-button secondary" onClick={restart}>
          Try again
        </button>
      </div>
    );
  }

  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="lesson-quiz">
      <p className="lesson-sublabel">
        Question {current + 1} of {questions.length}
      </p>
      <p className="lesson-quiz-question">{question.question}</p>

      <div className="lesson-options">
        {question.options.map((option, index) => {
          let state = "";
          if (answered) {
            if (index === question.correctIndex) state = "is-correct";
            else if (index === selected) state = "is-wrong";
            else state = "is-dim";
          }
          return (
            <button
              type="button"
              key={option}
              className={`lesson-option ${state}`}
              onClick={() => choose(index)}
              aria-pressed={selected === index}
            >
              <span className="letter" aria-hidden="true">{letters[index]}</span>
              <span>{option}</span>
              {answered && index === question.correctIndex && <span className="tag">Correct answer</span>}
              {answered && index === selected && index !== question.correctIndex && (
                <span className="tag">Your answer</span>
              )}
            </button>
          );
        })}
      </div>

      <div aria-live="polite">
        {answered && (
          <div className={`lesson-feedback ${isCorrect ? "good" : "miss"}`}>
            <strong>{isCorrect ? "Correct." : "Not quite."}</strong> {question.explanation}
          </div>
        )}
      </div>

      {answered && (
        <button type="button" className="lesson-button" onClick={goNext}>
          {isLast ? "See your result" : "Next question"}
        </button>
      )}
    </div>
  );
}