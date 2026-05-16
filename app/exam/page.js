"use client";

import { useState } from "react";

export default function ExamPage() {
  const [score, setScore] = useState(0);

  const question = {
    q: "What is 2 + 2?",
    options: ["1", "2", "3", "4"],
    answer: "4",
  };

  const checkAnswer = (option) => {
    if (option === question.answer) {
      setScore(score + 1);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>CBT Exam</h1>

      <h3>{question.q}</h3>

      {question.options.map((opt) => (
        <button
          key={opt}
          onClick={() => checkAnswer(opt)}
          style={{ display: "block", margin: "10px", padding: "10px" }}
        >
          {opt}
        </button>
      ))}

      <h2>Score: {score}</h2>
    </div>
  );
}
