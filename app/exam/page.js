"use client";

import { useState, useEffect } from "react";
import questions from "@/data/exam";

export default function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(40 * 60); // 40 minutes
  const [submitted, setSubmitted] = useState(false);

  // TIMER
  useEffect(() => {
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // FORMAT TIME
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // SELECT ANSWER
  const handleAnswer = (option) => {
    setAnswers({
      ...answers,
      [currentQuestion]: option,
    });
  };

  // NEXT
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // PREVIOUS
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // SUBMIT
  const submitExam = () => {
    setSubmitted(true);
  };

  // SCORE
  const score = questions.filter(
    (q, index) => answers[index] === q.answer
  ).length;

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-5">
        <h1 className="text-4xl font-bold mb-5">Exam Submitted</h1>

        <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            Your Score
          </h2>

          <p className="text-5xl font-bold text-green-400">
            {score} / {questions.length}
          </p>

          <p className="mt-4 text-gray-300">
            Percentage:{" "}
            {((score / questions.length) * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR NAVIGATION */}
      <div className="w-32 bg-zinc-950 p-3 overflow-y-auto border-r border-zinc-800">

        <h2 className="text-center font-bold mb-4">
          Questions
        </h2>

        <div className="grid grid-cols-2 gap-2">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestion(index)}
              className={`h-10 rounded font-bold transition-all
              ${
                currentQuestion === index
                  ? "bg-blue-600"
                  : answers[index]
                  ? "bg-green-600"
                  : "bg-zinc-800"
              }`}
            >
              {q.id}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-5">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl font-bold">
            CBT Examination
          </h1>

          <div className="bg-red-600 px-4 py-2 rounded-xl font-bold text-lg">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>

        {/* QUESTION CARD */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-bold mb-6">
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          {/* QUESTION */}
          <p className="text-lg mb-8 leading-8">
            {questions[currentQuestion].question}
          </p>

          {/* OPTIONS */}
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => {
              const letters = ["A", "B", "C", "D", "E", "F"];

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-4 rounded-xl border transition-all
                  ${
                    answers[currentQuestion] === option
                      ? "bg-green-600 border-green-400"
                      : "bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                  }`}
                >
                  <span className="font-bold mr-3">
                    {letters[index]}.
                  </span>

                  {option}
                </button>
              );
            })}
          </div>

          {/* BUTTONS */}
          <div className="flex justify-between mt-8">

            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="bg-zinc-700 px-6 py-3 rounded-xl font-bold disabled:opacity-50"
            >
              Previous
            </button>

            <div className="flex gap-3">

              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="bg-blue-600 px-6 py-3 rounded-xl font-bold"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={submitExam}
                  className="bg-green-600 px-6 py-3 rounded-xl font-bold"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
            }
