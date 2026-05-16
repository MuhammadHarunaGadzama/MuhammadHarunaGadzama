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
    { q: "1. If A = {1,2} and B = {2,3}, A ∪ B = ?", A: "{1,2,3}", B: "{2}", C: "{1,3}", ans: "A" },
    { q: "2. A ∩ B for A={1,2,3}, B={2,4} is?", A: "{1}", B: "{2}", C: "{1,2,3,4}", ans: "B" },
    { q: "3. Empty set is denoted by?", A: "{}", B: "Ø", C: "Both", ans: "C" },
    { q: "4. If n(A)=3, n(B)=4 disjoint, n(A∪B)=?", A: "7", B: "12", C: "1", ans: "A" },
    { q: "5. Subset of every set is?", A: "Null set", B: "Universal set", C: "Empty set only", ans: "A" },
    { q: "6. Power set of {a} has?", A: "1", B: "2", C: "3", ans: "B" },
    { q: "7. If A⊆B and B⊆A then?", A: "A=B", B: "A≠B", C: "A empty", ans: "A" },
    { q: "8. Complement of universal set is?", A: "Universal", B: "Empty set", C: "None", ans: "B" },
    { q: "9. If A={1,2}, number of subsets?", A: "2", B: "3", C: "4", ans: "C" },
    { q: "10. Union means?", A: "Common elements", B: "All elements", C: "None", ans: "B" },
    { q: "11. Intersection means?", A: "Common elements", B: "All elements", C: "No elements", ans: "A" },
    { q: "12. A−B means?", A: "Common", B: "Elements in A not B", C: "All B", ans: "B" },
    { q: "13. Symmetric difference excludes?", A: "Common elements", B: "Union", C: "Empty set", ans: "A" },
    { q: "14. Universal set contains?", A: "Some elements", B: "All elements", C: "No elements", ans: "B" },
    { q: "15. If A∩B=∅ then sets are?", A: "Equal", B: "Disjoint", C: "Subset", ans: "B" },

    { q: "16. (a+b)^2 = ?", A: "a^2+b^2", B: "a^2+2ab+b^2", C: "a^2-ab+b^2", ans: "B" },
    { q: "17. Middle term of (a+b)^2?", A: "ab", B: "2ab", C: "a^2", ans: "B" },
    { q: "18. (a+b)^3 expands to?", A: "a^3+3a^2b+3ab^2+b^3", B: "a^3+b^3", C: "a^2+b^2", ans: "A" },
    { q: "19. Coefficient of x in (1+x)^3?", A: "1", B: "3", C: "6", ans: "B" },
    { q: "20. Binomial theorem applies to?", A: "1 term", B: "2 terms", C: "3 terms", ans: "B" },

    { q: "21. (x−y)^2 = ?", A: "x^2+y^2", B: "x^2-2xy+y^2", C: "x^2-xy+y^2", ans: "B" },
    { q: "22. Number of terms in (a+b)^n is?", A: "n", B: "n+1", C: "2n", ans: "B" },
    { q: "23. Binomial coefficient formula is?", A: "nCr", B: "nPr", C: "n!", ans: "A" },
    { q: "24. (a−b)^3 middle term?", A: "3a^2b", B: "−3a^2b+3ab^2", C: "3ab", ans: "B" },
    { q: "25. Pascal triangle used for?", A: "Integration", B: "Binomial expansion", C: "Differentiation", ans: "B" },

    { q: "26. (1+x)^2 coefficient of x^2?", A: "1", B: "2", C: "3", ans: "A" },
    { q: "27. General term in binomial expansion?", A: "Tr+1", B: "Tr", C: "Tn", ans: "A" },
    { q: "28. (a+b)^0 equals?", A: "0", B: "1", C: "a+b", ans: "B" },
    { q: "29. Sum of coefficients in (a+b)^n?", A: "2^n", B: "n^2", C: "n!", ans: "A" },
    { q: "30. Expansion valid for?", A: "Any expression", B: "Positive integers n", C: "Only fractions", ans: "B" },

    { q: "31. First step in induction is?", A: "Assume true", B: "Verify n=1", C: "Solve n+1", ans: "B" },
    { q: "32. Second step is?", A: "Induction hypothesis", B: "Conclusion", C: "Graph", ans: "A" },
    { q: "33. Goal is to prove?", A: "n only", B: "n+1", C: "All integers", ans: "C" },
    { q: "34. Induction used for?", A: "Graphs", B: "Proofs", C: "Division", ans: "B" },
    { q: "35. Base case is?", A: "n=0 or 1", B: "n=10", C: "n=100", ans: "A" },

    { q: "36. Assume P(k) means?", A: "False", B: "True for k", C: "Unknown", ans: "B" },
    { q: "37. Then prove?", A: "P(k+1)", B: "P(k-1)", C: "None", ans: "A" },
    { q: "38. If both steps hold then?", A: "False", B: "True for all n", C: "Undefined", ans: "B" },
    { q: "39. Induction applies to?", A: "Integers", B: "Reals", C: "Complex only", ans: "A" },
    { q: "40. Weak induction assumes?", A: "P(k)", B: "P(k+1)", C: "Both", ans: "A" },

    { q: "41. i² equals?", A: "1", B: "-1", C: "0", ans: "B" },
    { q: "42. Complex number form?", A: "a+b", B: "a+bi", C: "ab", ans: "B" },
    { q: "43. Real part of 3+2i?", A: "3", B: "2", C: "i", ans: "A" },
    { q: "44. Imaginary unit is?", A: "i", B: "j", C: "k", ans: "A" },
    { q: "45. Conjugate of a+bi?", A: "a-bi", B: "-a-bi", C: "bi-a", ans: "A" },

    { q: "46. Modulus formula?", A: "a+b", B: "√(a²+b²)", C: "a-b", ans: "B" },
    { q: "47. i³ equals?", A: "i", B: "-i", C: "1", ans: "B" },
    { q: "48. i⁴ equals?", A: "0", B: "1", C: "-1", ans: "B" },
    { q: "49. Complex numbers lie on?", A: "Line", B: "Plane", C: "Circle", ans: "B" },
    { q: "50. Arg(z) refers to?", A: "Magnitude", B: "Angle", C: "Sum", ans: "B" }
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
