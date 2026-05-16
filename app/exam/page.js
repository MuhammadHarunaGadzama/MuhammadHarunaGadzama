"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ExamPage() {
  const router = useRouter();

  // =========================
  // EXAM SETTINGS
  // =========================
  const EXAM_DURATION = 60 * 60; // 1 hour
  const MAX_WARNINGS = 3;

  // =========================
  // TIMER + STATES
  // =========================
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [warnings, setWarnings] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  // =========================
  // QUESTIONS
  // =========================
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
options: [
"30°,150°,90°",
"45°,135°",
"90°,270°",
"0°,180°",
"60°,120°",
"30°,60°"
],
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
question: "Find the coefficient of x⁴ in (2x−3)⁷",
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
question: "Find sin²45° + cos²45°",
options: ["0", "1/2", "1", "2", "√2", "√3"],
answer: "1"
},

{
id: 12,
question: "Find the modulus of 3 + 4i",
options: ["3", "4", "5", "6", "7", "8"],
answer: "5"
},

{
id: 13,
question: "Convert π/3 radians to degrees",
options: ["30°", "45°", "60°", "90°", "120°", "180°"],
answer: "60°"
},

{
id: 14,
question: "Find the 5th term of the sequence 2, 6, 18, 54...",
options: ["108", "162", "216", "324", "486", "96"],
answer: "162"
},

{
id: 15,
question: "Evaluate i^15",
options: ["1", "-1", "i", "-i", "15", "0"],
answer: "-i"
},

{
id: 16,
question: "Find the radius if arc length = 14π and angle = 7π/6",
options: ["10", "12", "14", "16", "18", "20"],
answer: "12"
},

{
id: 17,
question: "Solve tan²x = 3 for 0 ≤ x < 2π",
options: [
"π/3,2π/3,4π/3,5π/3",
"π/4,5π/4",
"π/6,11π/6",
"π/2,3π/2",
"π/3,4π/3",
"π/6,7π/6"
],
answer: "π/3,2π/3,4π/3,5π/3"
},

{
id: 18,
question: "Find Σn from n=1 to 100",
options: ["5000", "5050", "5100", "5150", "4950", "4900"],
answer: "5050"
},

{
id: 19,
question: "Find Σn² from n=1 to 10",
options: ["365", "375", "385", "395", "405", "415"],
answer: "385"
},

{
id: 20,
question: "Find the common ratio of 3, 9, 27, 81",
options: ["2", "3", "4", "5", "6", "9"],
answer: "3"
},

{
id: 21,
question: "Find cos60°",
options: ["0", "1/2", "1", "√2/2", "√3/2", "2"],
answer: "1/2"
},

{
id: 22,
question: "Evaluate (1+i)^8",
options: ["16", "-16", "8", "-8", "1", "0"],
answer: "16"
},

{
id: 23,
question: "Find the sum to infinity of 8 + 4 + 2 + 1 + ...",
options: ["8", "12", "14", "16", "18", "20"],
answer: "16"
},

{
id: 24,
question: "Find the argument of i",
options: ["0", "π/6", "π/4", "π/2", "π", "2π"],
answer: "π/2"
},

{
id: 25,
question: "How many proper subsets does a set of 5 elements have?",
options: ["16", "31", "32", "30", "25", "15"],
answer: "31"
},

{
id: 26,
question: "Find the coefficient of x² in (x+1)^5",
options: ["5", "10", "15", "20", "25", "30"],
answer: "10"
},

{
id: 27,
question: "Find sin30°",
options: ["0", "1/2", "1", "√2/2", "√3/2", "2"],
answer: "1/2"
},

{
id: 28,
question: "Find cos²x + sin²x",
options: ["0", "1", "2", "x", "sinx", "cosx"],
answer: "1"
},

{
id: 29,
question: "Find the 10th term of AP: 3,7,11,15...",
options: ["35", "37", "39", "41", "43", "45"],
answer: "39"
},

{
id: 30,
question: "Evaluate i^24",
options: ["1", "-1", "i", "-i", "24", "0"],
answer: "1"
},

{
id: 31,
question: "Find n(C)r when n=5 and r=2",
options: ["5", "10", "15", "20", "25", "30"],
answer: "10"
},

{
id: 32,
question: "Find tan45°",
options: ["0", "1/2", "1", "√2", "√3", "2"],
answer: "1"
},

{
id: 33,
question: "Find the sum of first 20 natural numbers",
options: ["190", "200", "210", "220", "230", "240"],
answer: "210"
},

{
id: 34,
question: "Convert 2π radians to degrees",
options: ["90°", "180°", "270°", "360°", "720°", "540°"],
answer: "360°"
},

{
id: 35,
question: "Find the modulus of 1−i",
options: ["1", "√2", "2", "√3", "3", "4"],
answer: "√2"
},

{
id: 36,
question: "Find the sum of GP 1+2+4+8+16",
options: ["15", "31", "32", "30", "63", "64"],
answer: "31"
},

{
id: 37,
question: "Evaluate (2+i)(2−i)",
options: ["3", "4", "5", "6", "7", "8"],
answer: "5"
},

{
id: 38,
question: "Find the value of sec60°",
options: ["1", "2", "1/2", "√2", "√3", "4"],
answer: "2"
},

{
id: 39,
question: "Find the 6th term in expansion of (x+y)^10",
options: ["210x⁵y⁵", "252x⁵y⁵", "120x⁵y⁵", "300x⁵y⁵", "150x⁵y⁵", "400x⁵y⁵"],
answer: "252x⁵y⁵"
},

{
id: 40,
question: "Find Σ2n from n=1 to 10",
options: ["100", "110", "120", "90", "80", "70"],
answer: "110"
},

// CONTINUE TO 70

{
id: 41,
question: "Find cot45°",
options: ["0", "1", "2", "√2", "√3", "4"],
answer: "1"
},

{
id: 42,
question: "Evaluate i^100",
options: ["1", "-1", "i", "-i", "100", "0"],
answer: "1"
},

{
id: 43,
question: "Find the number of subsets of a set with 6 elements",
options: ["16", "32", "64", "128", "256", "512"],
answer: "64"
},

{
id: 44,
question: "Find the coefficient of x³ in (x+2)^5",
options: ["20", "40", "80", "160", "10", "5"],
answer: "40"
},

{
id: 45,
question: "Find cos0°",
options: ["0", "1", "-1", "1/2", "√2", "2"],
answer: "1"
},

{
id: 46,
question: "Find sin90°",
options: ["0", "1/2", "1", "√2", "√3", "2"],
answer: "1"
},

{
id: 47,
question: "Find tan60°",
options: ["1", "√2", "√3", "2", "3", "4"],
answer: "√3"
},

{
id: 48,
question: "Find the 7th term of AP 5,8,11,14...",
options: ["20", "21", "22", "23", "24", "25"],
answer: "23"
},

{
id: 49,
question: "Evaluate (1-i)(1+i)",
options: ["0", "1", "2", "3", "4", "5"],
answer: "2"
},

{
id: 50,
question: "Find the sum of first 50 natural numbers",
options: ["1250", "1275", "1300", "1325", "1350", "1375"],
answer: "1275"
},

{
id: 51,
question: "Convert π/2 radians to degrees",
options: ["30°", "45°", "60°", "90°", "180°", "270°"],
answer: "90°"
},

{
id: 52,
question: "Find |5i|",
options: ["1", "2", "3", "4", "5", "25"],
answer: "5"
},

{
id: 53,
question: "Find the common difference of 2,5,8,11",
options: ["1", "2", "3", "4", "5", "6"],
answer: "3"
},

{
id: 54,
question: "Evaluate i²",
options: ["1", "-1", "i", "-i", "2", "0"],
answer: "-1"
},

{
id: 55,
question: "Find sin60°",
options: ["1", "√2", "√3/2", "1/2", "2", "3"],
answer: "√3/2"
},

{
id: 56,
question: "Find the sum to infinity of 3 + 1.5 + 0.75 + ...",
options: ["4", "5", "6", "7", "8", "9"],
answer: "6"
},

{
id: 57,
question: "Find the coefficient of x in (x+1)^4",
options: ["1", "2", "3", "4", "5", "6"],
answer: "4"
},

{
id: 58,
question: "Find cos90°",
options: ["0", "1", "-1", "1/2", "√2", "2"],
answer: "0"
},

{
id: 59,
question: "Evaluate (3+i)(3−i)",
options: ["8", "9", "10", "11", "12", "13"],
answer: "10"
},

{
id: 60,
question: "Find tan30°",
options: ["1/√3", "√3", "1", "0", "2", "3"],
answer: "1/√3"
},

{
id: 61,
question: "Find the 4th term of GP 3,6,12,24...",
options: ["12", "24", "36", "48", "60", "72"],
answer: "24"
},

{
id: 62,
question: "Evaluate i^8",
options: ["1", "-1", "i", "-i", "8", "0"],
answer: "1"
},

{
id: 63,
question: "Find the sum of first 10 even numbers",
options: ["100", "110", "120", "90", "80", "70"],
answer: "110"
},

{
id: 64,
question: "Find sec45°",
options: ["1", "√2", "2", "√3", "3", "4"],
answer: "√2"
},

{
id: 65,
question: "Find the number of subsets of a set with 10 elements",
options: ["256", "512", "1024", "2048", "4096", "100"],
answer: "1024"
},

{
id: 66,
question: "Find cos120°",
options: ["1/2", "-1/2", "√3/2", "-√3/2", "1", "-1"],
answer: "-1/2"
},

{
id: 67,
question: "Evaluate (2+i)^2",
options: ["3+4i", "4+4i", "5+4i", "6+4i", "7+4i", "8+4i"],
answer: "3+4i"
},

{
id: 68,
question: "Find the coefficient of x² in (x−1)^4",
options: ["4", "6", "8", "10", "12", "14"],
answer: "6"
},

{
id: 69,
question: "Find sin45°",
options: ["1/2", "√2/2", "√3/2", "1", "0", "2"],
answer: "√2/2"
},

{
id: 70,
question: "Find the sum of first 100 odd numbers",
options: ["1000", "5000", "10000", "5050", "9999", "10100"],
answer: "10000"
}
];
  // =========================
  // FULLSCREEN MODE
  // =========================
  const enterFullScreen = () => {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  };

  const exitHandler = () => {
    if (!document.fullscreenElement) {
      handleViolation("Exited full screen");
    }
  };

  // =========================
  // TAB SWITCH DETECTION
  // =========================
  const handleVisibilityChange = () => {
    if (document.hidden) {
      handleViolation("Tab switching detected");
    }
  };

  // =========================
  // VIOLATION SYSTEM
  // =========================
  const handleViolation = (reason) => {
    alert(`Warning: ${reason}`);

    setWarnings((prev) => {
      const newWarnings = prev + 1;

      if (newWarnings >= MAX_WARNINGS) {
        alert("Too many violations. Exam submitted.");
        submitExam();
      }

      return newWarnings;
    });
  };

  // =========================
  // TIMER
  // =========================
  useEffect(() => {
    if (timeLeft <= 0) {
      submitExam();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // =========================
  // LOCK MODE INIT
  // =========================
  useEffect(() => {
    enterFullScreen();

    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("fullscreenchange", exitHandler);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // =========================
  // FORMAT TIME
  // =========================
  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;

    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // =========================
  // SCORING
  // =========================
  const calculateScore = () => {
    let score = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.ans) {
        score++;
      }
    });

    return {
      score,
      total: questions.length,
    };
  };

  // =========================
  // SUBMIT EXAM
  // =========================
  const submitExam = () => {
    const result = calculateScore();

    localStorage.setItem("score", result.score);
    localStorage.setItem("total", result.total);

    router.push("/result");
  };

  // =========================
  // NAVIGATION
  // =========================
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      {/* TIMER */}
      <div
        style={{
          position: "fixed",
          top: 10,
          right: 10,
          background: "black",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          zIndex: 999,
        }}
      >
        ⏱ {formatTime(timeLeft)}
      </div>

      {/* WARNINGS */}
      <div
        style={{
          position: "fixed",
          top: 10,
          left: 10,
          background: "red",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          zIndex: 999,
        }}
      >
        ⚠ Warnings: {warnings}/{MAX_WARNINGS}
      </div>

      <h1>CBT EXAM SYSTEM</h1>

      <p style={{ color: "red" }}>
        Do not switch tabs or exit fullscreen mode.
      </p>

      {/* QUESTION PALETTE */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        {questions.map((_, index) => {
          const answered = answers[index];

          return (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                color: "white",
                background:
                  currentQuestion === index
                    ? "blue"
                    : answered
                    ? "green"
                    : "gray",
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {/* CURRENT QUESTION */}
      <div style={{ marginTop: "30px" }}>
        <h2>
          Question {currentQuestion + 1} of {questions.length}
        </h2>

        <h3>{questions[currentQuestion].q}</h3>

        {/* OPTION A */}
        <label style={{ display: "block", marginTop: "15px" }}>
          <input
            type="radio"
            name={`q${currentQuestion}`}
            value="A"
            checked={answers[currentQuestion] === "A"}
            onChange={() =>
              setAnswers({
                ...answers,
                [currentQuestion]: "A",
              })
            }
          />
          A. {questions[currentQuestion].A}
        </label>

        {/* OPTION B */}
        <label style={{ display: "block", marginTop: "15px" }}>
          <input
            type="radio"
            name={`q${currentQuestion}`}
            value="B"
            checked={answers[currentQuestion] === "B"}
            onChange={() =>
              setAnswers({
                ...answers,
                [currentQuestion]: "B",
              })
            }
          />
          B. {questions[currentQuestion].B}
        </label>

        {/* OPTION C */}
        <label style={{ display: "block", marginTop: "15px" }}>
          <input
            type="radio"
            name={`q${currentQuestion}`}
            value="C"
            checked={answers[currentQuestion] === "C"}
            onChange={() =>
              setAnswers({
                ...answers,
                [currentQuestion]: "C",
              })
            }
          />
          C. {questions[currentQuestion].C}
        </label>
      </div>

      {/* NAVIGATION */}
      <div style={{ marginTop: "40px" }}>
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
          }}
        >
          Previous
        </button>

        {currentQuestion < questions.length - 1 && (
          <button
            onClick={nextQuestion}
            style={{
              padding: "10px 20px",
            }}
          >
            Next
          </button>
        )}

        {currentQuestion === questions.length - 1 && (
          <button
            onClick={submitExam}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              marginLeft: "10px",
              border: "none",
            }}
          >
            Submit Exam
          </button>
        )}
      </div>
    </div>
  );
    }
