"use client";

import { useState, useEffect } from "react";

const questions = [
{
id: 1,
question: "If z = (1+i)/(1-i), find z^20",
options: ["1", "-1", "i", "-i", "0", "2^10"],
answer: "1"
},
{
id: 2,
question: "Convert 315° to radians",
options: ["5π/6", "7π/4", "3π/2", "11π/6", "9π/4", "5π/4"],
answer: "7π/4"
},
{
id: 3,
question: "Evaluate ΣC(10,k) from k=0 to 10",
options: ["512", "1024", "2048", "4096", "256", "1000"],
answer: "1024"
},
{
id: 4,
question: "If z² + 2z + 5 = 0, find |z|",
options: ["1", "2", "√5", "5", "2√5", "4"],
answer: "√5"
},
{
id: 5,
question: "Solve 2sin²x − 3sinx + 1 = 0",
options: ["30°,150°,90°","45°,135°","90°,270°","0°,180°","60°,120°","30°,60°"],
answer: "30°,150°,90°"
},
{
id: 6,
question: "Find the sum of GP: 2 + 6 + 18 + ... up to 8 terms",
options: ["6560", "6500", "6600", "6561", "6550", "6520"],
answer: "6560"
},
{
id: 7,
question: "Evaluate 1³ + 2³ + ... + 20³",
options: ["42025", "44100", "40000", "40425", "42000", "44125"],
answer: "44100"
},
{
id: 8,
question: "If z = cosθ + isinθ and θ = 2π/7, evaluate z⁷",
options: ["1", "-1", "i", "-i", "7", "0"],
answer: "1"
},
{
id: 9,
question: "Find coefficient of x⁴ in (2x−3)⁷",
options: ["-15120", "15120", "-7560", "7560", "5040", "-5040"],
answer: "-15120"
},
{
id: 10,
question: "How many subsets does a set with 8 elements have?",
options: ["64", "128", "256", "512", "1024", "16"],
answer: "256"
},
{
id: 11,
question: "sin²45° + cos²45°",
options: ["0", "1/2", "1", "2", "√2", "√3"],
answer: "1"
},
{
id: 12,
question: "Modulus of 3 + 4i",
options: ["3", "4", "5", "6", "7", "8"],
answer: "5"
},
{
id: 13,
question: "Convert π/3 to degrees",
options: ["30°", "45°", "60°", "90°", "120°", "180°"],
answer: "60°"
},
{
id: 14,
question: "5th term of 2,6,18,54...",
options: ["108", "162", "216", "324", "486", "96"],
answer: "162"
},
{
id: 15,
question: "i^15",
options: ["1", "-1", "i", "-i", "15", "0"],
answer: "-i"
},
{
id: 16,
question: "Arc length 14π, angle 7π/6 → radius?",
options: ["10", "12", "14", "16", "18", "20"],
answer: "12"
},
{
id: 17,
question: "Solve tan²x = 3, 0 ≤ x < 2π",
options: ["π/3,2π/3,4π/3,5π/3","π/4,5π/4","π/6,11π/6","π/2,3π/2","π/3,4π/3","π/6,7π/6"],
answer: "π/3,2π/3,4π/3,5π/3"
},
{
id: 18,
question: "Σn from 1 to 100",
options: ["5000", "5050", "5100", "5150", "4950", "4900"],
answer: "5050"
},
{
id: 19,
question: "Σn² from 1 to 10",
options: ["365", "375", "385", "395", "405", "415"],
answer: "385"
},
{
id: 20,
question: "Common ratio of 3, 9, 27, 81",
options: ["2", "3", "4", "5", "6", "9"],
answer: "3"
},
{
id: 21,
question: "cos60°",
options: ["0", "1/2", "1", "√2/2", "√3/2", "2"],
answer: "1/2"
},
{
id: 22,
question: "(1+i)^8",
options: ["16", "-16", "8", "-8", "1", "0"],
answer: "16"
},
{
id: 23,
question: "Sum to infinity 8+4+2+1+...",
options: ["8", "12", "14", "16", "18", "20"],
answer: "16"
},
{
id: 24,
question: "Argument of i",
options: ["0", "π/6", "π/4", "π/2", "π", "2π"],
answer: "π/2"
},
{
id: 25,
question: "Proper subsets of 5 elements",
options: ["16", "31", "32", "30", "25", "15"],
answer: "31"
},
{
id: 26,
question: "Coefficient of x² in (x+1)^5",
options: ["5", "10", "15", "20", "25", "30"],
answer: "10"
},
{
id: 27,
question: "sin30°",
options: ["0", "1/2", "1", "√2/2", "√3/2", "2"],
answer: "1/2"
},
{
id: 28,
question: "sin²x + cos²x",
options: ["0", "1", "2", "x", "sinx", "cosx"],
answer: "1"
},
{
id: 29,
question: "10th term AP 3,7,11,15",
options: ["35", "37", "39", "41", "43", "45"],
answer: "39"
},
{
id: 30,
question: "i^24",
options: ["1", "-1", "i", "-i", "24", "0"],
answer: "1"
},
{
id: 31,
question: "nCr (5,2)",
options: ["5", "10", "15", "20", "25", "30"],
answer: "10"
},
{
id: 32,
question: "tan45°",
options: ["0", "1/2", "1", "√2", "√3", "2"],
answer: "1"
},
{
id: 33,
question: "Sum first 20 natural numbers",
options: ["190", "200", "210", "220", "230", "240"],
answer: "210"
},
{
id: 34,
question: "2π radians to degrees",
options: ["90°", "180°", "270°", "360°", "720°", "540°"],
answer: "360°"
},
{
id: 35,
question: "Modulus of 1−i",
options: ["1", "√2", "2", "√3", "3", "4"],
answer: "√2"
},
{
id: 36,
question: "GP 1+2+4+8+16",
options: ["15", "31", "32", "30", "63", "64"],
answer: "31"
},
{
id: 37,
question: "(2+i)(2−i)",
options: ["3", "4", "5", "6", "7", "8"],
answer: "5"
},
{
id: 38,
question: "sec60°",
options: ["1", "2", "1/2", "√2", "√3", "4"],
answer: "2"
},
{
id: 39,
question: "6th term (x+y)^10",
options: ["210x⁵y⁵", "252x⁵y⁵", "120x⁵y⁵", "300x⁵y⁵", "150x⁵y⁵", "400x⁵y⁵"],
answer: "252x⁵y⁵"
},
{
id: 40,
question: "Σ2n from 1 to 10",
options: ["100", "110", "120", "90", "80", "70"],
answer: "110"
},
{
id: 41,
question: "cot45°",
options: ["0", "1", "2", "√2", "√3", "4"],
answer: "1"
},
{
id: 42,
question: "i^100",
options: ["1", "-1", "i", "-i", "100", "0"],
answer: "1"
},
{
id: 43,
question: "subsets of 6 elements",
options: ["16", "32", "64", "128", "256", "512"],
answer: "64"
},
{
id: 44,
question: "x³ in (x+2)^5",
options: ["20", "40", "80", "160", "10", "5"],
answer: "40"
},
{
id: 45,
question: "cos0°",
options: ["0", "1", "-1", "1/2", "√2", "2"],
answer: "1"
},
{
id: 46,
question: "sin90°",
options: ["0", "1/2", "1", "√2", "√3", "2"],
answer: "1"
},
{
id: 47,
question: "tan60°",
options: ["1", "√2", "√3", "2", "3", "4"],
answer: "√3"
},
{
id: 48,
question: "7th term AP 5,8,11,14",
options: ["20", "21", "22", "23", "24", "25"],
answer: "23"
},
{
id: 49,
question: "(1-i)(1+i)",
options: ["0", "1", "2", "3", "4", "5"],
answer: "2"
},
{
id: 50,
question: "Sum first 50 natural numbers",
options: ["1250", "1275", "1300", "1325", "1350", "1375"],
answer: "1275"
},
{
id: 51,
question: "π/2 to degrees",
options: ["30°", "45°", "60°", "90°", "180°", "270°"],
answer: "90°"
},
{
id: 52,
question: "|5i|",
options: ["1", "2", "3", "4", "5", "25"],
answer: "5"
},
{
id: 53,
question: "common difference 2,5,8,11",
options: ["1", "2", "3", "4", "5", "6"],
answer: "3"
},
{
id: 54,
question: "i²",
options: ["1", "-1", "i", "-i", "2", "0"],
answer: "-1"
},
{
id: 55,
question: "sin60°",
options: ["1", "√2", "√3/2", "1/2", "2", "3"],
answer: "√3/2"
},
{
id: 56,
question: "3 + 1.5 + 0.75 + ...",
options: ["4", "5", "6", "7", "8", "9"],
answer: "6"
},
{
id: 57,
question: "coefficient of x in (x+1)^4",
options: ["1", "2", "3", "4", "5", "6"],
answer: "4"
},
{
id: 58,
question: "cos90°",
options: ["0", "1", "-1", "1/2", "√2", "2"],
answer: "0"
},
{
id: 59,
question: "(3+i)(3−i)",
options: ["8", "9", "10", "11", "12", "13"],
answer: "10"
},
{
id: 60,
question: "tan30°",
options: ["1/√3", "√3", "1", "0", "2", "3"],
answer: "1/√3"
},
{
id: 61,
question: "4th term GP 3,6,12,24",
options: ["12", "24", "36", "48", "60", "72"],
answer: "24"
},
{
id: 62,
question: "i^8",
options: ["1", "-1", "i", "-i", "8", "0"],
answer: "1"
},
{
id: 63,
question: "sum first 10 even numbers",
options: ["100", "110", "120", "90", "80", "70"],
answer: "110"
},
{
id: 64,
question: "sec45°",
options: ["1", "√2", "2", "√3", "3", "4"],
answer: "√2"
},
{
id: 65,
question: "subsets of 10 elements",
options: ["256", "512", "1024", "2048", "4096", "100"],
answer: "1024"
},
{
id: 66,
question: "cos120°",
options: ["1/2", "-1/2", "√3/2", "-√3/2", "1", "-1"],
answer: "-1/2"
},
{
id: 67,
question: "(2+i)^2",
options: ["3+4i", "4+4i", "5+4i", "6+4i", "7+4i", "8+4i"],
answer: "3+4i"
},
{
id: 68,
question: "x² in (x−1)^4",
options: ["4", "6", "8", "10", "12", "14"],
answer: "6"
},
{
id: 69,
question: "sin45°",
options: ["1/2", "√2/2", "√3/2", "1", "0", "2"],
answer: "√2/2"
},
{
id: 70,
question: "sum first 100 odd numbers",
options: ["1000", "5000", "10000", "5050", "9999", "10100"],
answer: "10000"
}
];


export default function Exam() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [time, setTime] = useState(40 * 60);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (time <= 0) return setSubmitted(true);
    const t = setInterval(() => setTime((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [time]);

  const formatTime = () => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const selectAnswer = (val) => {
    if (submitted) return;
    setAnswers((p) => ({ ...p, [current]: val }));
  };

  const score = questions.reduce(
    (a, q, i) => a + (answers[i] === q.answer ? 1 : 0),
    0
  );

  const isAnswered = (i) => answers[i] !== undefined;

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* SIDEBAR */}
      <div className="w-56 p-4 bg-zinc-900">
        <h2 className="text-2xl font-bold text-center mb-4">
          Questions
        </h2>

        <div className="grid grid-cols-3 gap-2">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrent(i)}
              className={`p-3 text-lg font-bold rounded ${
                isAnswered(i) ? "bg-green-600" : "bg-zinc-700"
              } ${current === i ? "border-2 border-white" : ""}`}
            >
              {q.id}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        {/* TOP BAR */}
        <div className="flex justify-between mb-8">
          <h1 className="text-4xl font-bold">CBT EXAM</h1>

          <div className="bg-red-600 px-5 py-3 text-2xl font-bold rounded">
            {formatTime()}
          </div>
        </div>

        {/* QUESTION */}
        <div className="bg-zinc-800 p-8 rounded">
          <h2 className="text-3xl font-bold mb-8">
            {questions[current].question}
          </h2>

          {questions[current].options.map((opt, i) => {
            const correct = opt === questions[current].answer;
            const selected = answers[current] === opt;

            return (
              <button
                key={i}
                onClick={() => selectAnswer(opt)}
                className={`block w-full text-left p-5 mb-4 rounded text-2xl ${
                  submitted
                    ? correct
                      ? "bg-green-600"
                      : selected
                      ? "bg-red-600"
                      : "bg-zinc-700"
                    : selected
                    ? "bg-green-600"
                    : "bg-zinc-700"
                }`}
              >
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            );
          })}
        </div>

        {/* CONTROLS */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrent((p) => Math.max(p - 1, 0))}
            className="bg-gray-600 px-7 py-4 text-xl rounded"
          >
            Prev
          </button>

          {current === questions.length - 1 ? (
            <button
              onClick={() => setSubmitted(true)}
              className="bg-green-600 px-7 py-4 text-xl rounded"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() =>
                setCurrent((p) =>
                  Math.min(p + 1, questions.length - 1)
                )
              }
              className="bg-blue-600 px-7 py-4 text-xl rounded"
            >
              Next
            </button>
          )}
        </div>

        {/* SCORE */}
        {submitted && (
          <div className="mt-10 text-center text-3xl font-bold">
            Score: {score} / {questions.length}
          </div>
        )}
      </div>
    </div>
  );
}
