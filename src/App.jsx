import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [time, setTime] = useState(1200);
  const [finished, setFinished] = useState(false);

  // =========================
  // 75 REAL CBT QUESTIONS (15 EACH TOPIC)
  // =========================
  const questions = [

    // ================= SET THEORY (1–15)
    { q: "If A = {1,2,3} and B = {3,4,5}, find A ∩ B", options: ["{3}", "{1,2}", "{4,5}", "{}"], a: "{3}" },
    { q: "If U = {1,2,3,4,5}, A = {1,3,5}, find A'", options: ["{2,4}", "{1,2}", "{3,4}", "{}"], a: "{2,4}" },
    { q: "A ∪ ∅ equals", options: ["A", "∅", "U", "1"], a: "A" },
    { q: "A ∩ ∅ equals", options: ["∅", "A", "U", "1"], a: "∅" },
    { q: "If A ⊂ B means", options: ["A is subset of B", "B is subset of A", "A = B", "A ∩ B = ∅"], a: "A is subset of B" },
    { q: "Power set of {a,b} has", options: ["4 elements", "2 elements", "3 elements", "1 element"], a: "4 elements" },
    { q: "Universal set contains", options: ["All elements", "None", "Subset", "Empty"], a: "All elements" },
    { q: "If A ∩ B = ∅, sets are", options: ["Disjoint", "Equal", "Subset", "Universal"], a: "Disjoint" },
    { q: "A Δ B means", options: ["Symmetric difference", "Union", "Intersection", "Complement"], a: "Symmetric difference" },
    { q: "Complement of A is", options: ["A'", "A", "U", "∅"], a: "A'" },
    { q: "n(A ∪ B) formula is", options: ["A+B-A∩B", "A+B", "A-B", "AB"], a: "A+B-A∩B" },
    { q: "Empty set symbol is", options: ["∅", "0", "1", "U"], a: "∅" },
    { q: "If A = B then A Δ B =", options: ["∅", "A", "B", "U"], a: "∅" },
    { q: "Subset symbol is", options: ["⊂", "=", "+", "-"], a: "⊂" },
    { q: "Intersection means", options: ["Common elements", "All elements", "No elements", "Universal"], a: "Common elements" },

    // ================= BINOMIAL (16–30)
    { q: "(x+1)^2 =", options: ["x²+2x+1", "x²+1", "2x", "x²-1"], a: "x²+2x+1" },
    { q: "(x+2)^2 =", options: ["x²+4x+4", "x²+2x+2", "x²+4", "2x²"], a: "x²+4x+4" },
    { q: "(x-1)^2 =", options: ["x²-2x+1", "x²+1", "x²-1", "2x²"], a: "x²-2x+1" },
    { q: Coefficient of x² in (1+x)^4", options: ["6", "4", "3", "2"], a: "6" },
    { q: Binomial theorem applies to", options: ["(a+b)^n", "a+b", "ab", "a-b only"], a: "(a+b)^n" },
    { q: Middle term of (a+b)^6", options: ["20a³b³", "6ab", "a²b²", "a⁶"], a: "20a³b³" },
    { q: (2x+3)^2 =", options: ["4x²+12x+9", "2x²+9", "6x²", "x²"], a: "4x²+12x+9" },
    { q: (a-b)^2 =", options: ["a²-2ab+b²", "a²+b²", "2ab", "a²"], a: "a²-2ab+b²" },
    { q: (x+1)^3 has how many terms", options: ["4", "3", "2", "5"], a: "4" },
    { q: General term formula is", options: ["C(n,r)aⁿ⁻ʳbʳ", "a+b", "ab", "n²"], a: "C(n,r)aⁿ⁻ʳbʳ" },
    { q: (x²+1)^3 =", options: ["x⁶+3x⁴+3x²+1", "x²+1", "x³", "1"], a: "x⁶+3x⁴+3x²+1" },
    { q: (1-x)^4 starts with", options: ["1-4x", "1+x", "x⁴", "4x"], a: "1-4x" },
    { q: Binomial expansion is based on", options: ["Pascal triangle", "Pythagoras", "Circle", "Matrix"], a: "Pascal triangle" },
    { q: (x+1)^2 expansion", options: ["x²+2x+1", "x²+1", "2x", "1"], a: "x²+2x+1" },
    { q: Highest power term in expansion is", options: ["xⁿ", "x", "1", "0"], a: "xⁿ" },

    // ================= QUADRATIC (31–45)
    { q: "Solve x² - 5x + 6 = 0", options: ["2&3", "1&6", "4&5", "0"], a: "2&3" },
    { q: "Discriminant of x²+4x+4", options: ["0", "4", "16", "1"], a: "0" },
    { q: "Quadratic formula is", options: ["-b±√(b²-4ac)/2a", "a+b", "x+y", "ab"], a: "-b±√(b²-4ac)/2a" },
    { q: "Nature of roots if D<0", options: ["Imaginary", "Real", "Equal", "Zero"], a: "Imaginary" },
    { q: "Sum of roots is", options: ["-b/a", "c/a", "b/a", "a/c"], a: "-b/a" },
    { q: "Product of roots is", options: ["c/a", "b/a", "a/c", "b/c"], a: "c/a" },
    { q: "x²-9 roots", options: ["3&-3", "9", "0", "1"], a: "3&-3" },
    { q: "x²-8x+12 roots", options: ["2&6", "3&4", "1&12", "5&7"], a: "2&6" },
    { q: "Equal roots condition", options: ["D=0", "D=1", "D<0", "D>0"], a: "D=0" },
    { q: "Parabola opens upward if", options: ["a>0", "a<0", "a=0", "b=0"], a: "a>0" },
    { q: "Vertex is", options: ["Turning point", "Root", "Origin", "Angle"], a: "Turning point" },
    { q: "Completing square is used for", options: ["Quadratic", "Set", "Trig", "Matrix"], a: "Quadratic" },
    { q: "Axis of symmetry formula", options: ["-b/2a", "b/a", "c/a", "a/b"], a: "-b/2a" },
    { q: "If roots equal, number of roots is", options: ["1", "2", "0", "3"], a: "1" },
    { q: "Quadratic graph is", options: ["Parabola", "Line", "Circle", "Curve"], a: "Parabola" },

    // ================= COMPLEX & TRIG (46–75)
    { q: "i² =", options: ["-1", "1", "0", "i"], a: "-1" },
    { q: "i³ =", options: ["-i", "i", "1", "-1"], a: "-i" },
    { q: "i⁴ =", options: ["1", "-1", "i", "0"], a: "1" },
    { q: "sin 90° =", options: ["1", "0", "-1", "2"], a: "1" },
    { q: "cos 0° =", options: ["1", "0", "-1", "2"], a: "1" },
    { q: "tan 45° =", options: ["1", "0", "2", "-1"], a: "1" },
    { q: "sin²θ+cos²θ =", options: ["1", "0", "2", "θ"], a: "1" },
    { q: "cos 60° =", options: ["1/2", "1", "0", "2"], a: "1/2" },
    { q: "tan 60° =", options: ["√3", "1", "0", "2"], a: "√3" },
    { q: "sin 30° =", options: ["1/2", "1", "0", "2"], a: "1/2" },
    { q: "cos 90° =", options: ["0", "1", "-1", "2"], a: "0" },
    { q: "tan 0° =", options: ["0", "1", "2", "-1"], a: "0" },
    { q: "Complex number modulus of 3+4i", options: ["5", "6", "7", "4"], a: "5" },
    { q: "|i| =", options: ["1", "0", "-1", "i"], a: "1" },
    { q: "Complex conjugate of a+bi", options: ["a-bi", "a+bi", "b-ai", "0"], a: "a-bi" }
  ];

  // TIMER
  useEffect(() => {
    if (!started || finished) return;

    const timer = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          setFinished(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, finished]);

  const startExam = () => {
    if (name.trim()) setStarted(true);
  };

  const next = () => {
    if (selected === questions[index].a) setScore(score + 1);

    setSelected("");

    if (index + 1 >= questions.length) setFinished(true);
    else setIndex(index + 1);
  };

  if (!started) {
    return (
      <div style={{ padding: 20 }}>
        <h1>CBT PRO MAX EXAM</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        <button onClick={startExam}>Start</button>
      </div>
    );
  }

  if (finished) {
    const percent = (score / questions.length) * 100;
    const pass = percent >= 60;

    return (
      <div style={{ padding: 20 }}>
        <h1>RESULT</h1>
        <h2>{name}</h2>
        <h2>Score: {score}/{questions.length}</h2>
        <h2>{percent.toFixed(1)}%</h2>

        {pass ? (
          <h3>✔ Passed (Corrections Unlocked)</h3>
        ) : (
          <h3>❌ Try Again (Need 60%)</h3>
        )}
      </div>
    );
  }

  const q = questions[index];

  return (
    <div style={{ padding: 20 }}>
      <h2>
        Time: {Math.floor(time / 60)}:
        {String(time % 60).padStart(2, "0")}
      </h2>

      <h3>Question {index + 1}/75</h3>
      <h2>{q.q}</h2>

      {q.options.map((o, i) => (
        <div key={i}>
          <input type="radio" checked={selected === o} onChange={() => setSelected(o)} />
          {o}
        </div>
      ))}

      <button onClick={next} disabled={!selected}>
        Next
      </button>
    </div>
  );
      }
