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
  // CLEAN 75 QUESTIONS (DEPLOYMENT SAFE)
  // =========================
  const questions = [

    // ================= SET THEORY (15)
    { q: "A ∪ ∅ equals?", options: ["A", "∅", "U", "1"], a: "A" },
    { q: "A ∩ ∅ equals?", options: ["∅", "A", "U", "1"], a: "∅" },
    { q: "If A ⊂ B means?", options: ["A is subset of B", "B is subset of A", "A = B", "A ∩ B = ∅"], a: "A is subset of B" },
    { q: "A ∩ B contains?", options: ["Common elements", "All elements", "No elements", "Universal"], a: "Common elements" },
    { q: "Complement of A is?", options: ["A'", "A", "U", "∅"], a: "A'" },
    { q: "Universal set contains?", options: ["All elements", "None", "Subset", "Empty"], a: "All elements" },
    { q: "If A ∩ B = ∅ sets are?", options: ["Disjoint", "Equal", "Subset", "Universal"], a: "Disjoint" },
    { q: "Power set of {a,b} has?", options: ["4", "2", "3", "1"], a: "4" },
    { q: "Empty set symbol?", options: ["∅", "0", "1", "U"], a: "∅" },
    { q: "Subset symbol?", options: ["⊂", "=", "+", "-"], a: "⊂" },
    { q: "A ∪ A equals?", options: ["A", "∅", "U", "1"], a: "A" },
    { q: "A ∩ A equals?", options: ["A", "∅", "U", "0"], a: "A" },
    { q: "Symmetric difference means?", options: ["Different elements", "Common elements", "Union", "Intersection"], a: "Different elements" },
    { q: "n(A ∪ B) formula?", options: ["A+B-A∩B", "A+B", "A-B", "AB"], a: "A+B-A∩B" },
    { q: "If A = B then A Δ B =", options: ["∅", "A", "B", "U"], a: "∅" },

    // ================= BINOMIAL (15)
    { q: "(x+1)^2 =", options: ["x²+2x+1", "x²+1", "2x", "x²-1"], a: "x²+2x+1" },
    { q: "(x+2)^2 =", options: ["x²+4x+4", "x²+2x+2", "x²+4", "2x²"], a: "x²+4x+4" },
    { q: "(x-1)^2 =", options: ["x²-2x+1", "x²+1", "x²-1", "2x²"], a: "x²-2x+1" },
    { q: "Coefficient of x² in (1+x)^4?", options: ["6", "4", "3", "2"], a: "6" },
    { q: "Binomial theorem applies to?", options: ["(a+b)^n", "a+b", "ab", "a-b"], a: "(a+b)^n" },
    { q: "(a-b)^2 =", options: ["a²-2ab+b²", "a²+b²", "2ab", "a²"], a: "a²-2ab+b²" },
    { q: "Middle term of (a+b)^6?", options: ["20a³b³", "6ab", "a²b²", "a⁶"], a: "20a³b³" },
    { q: "Expansion of (x+1)^3 has?", options: ["4 terms", "3 terms", "2 terms", "5 terms"], a: "4 terms" },
    { q: "General term formula is?", options: ["C(n,r)aⁿ⁻ʳbʳ", "a+b", "ab", "n²"], a: "C(n,r)aⁿ⁻ʳbʳ" },
    { q: "(2x+3)^2 =", options: ["4x²+12x+9", "2x²", "6x²", "x²"], a: "4x²+12x+9" },
    { q: "(1-x)^2 =", options: ["1-2x+x²", "1+x²", "2x", "x²"], a: "1-2x+x²" },
    { q: "Binomial expansion uses?", options: ["Pascal triangle", "Matrix", "Set", "Graph"], a: "Pascal triangle" },
    { q: "Highest power in expansion is?", options: ["n", "1", "0", "2"], a: "n" },
    { q: "(x²+1)^2 =", options: ["x⁴+2x²+1", "x²+1", "x²", "1"], a: "x⁴+2x²+1" },
    { q: "Number of terms in (a+b)^n?", options: ["n+1", "n", "2n", "1"], a: "n+1" },

    // ================= QUADRATIC (15)
    { q: "Solve x²-5x+6=0", options: ["2&3", "1&6", "4&5", "0"], a: "2&3" },
    { q: "Discriminant formula?", options: ["b²-4ac", "a+b", "c²", "x²"], a: "b²-4ac" },
    { q: "Quadratic formula?", options: ["-b±√(b²-4ac)/2a", "a+b", "x+y", "ab"], a: "-b±√(b²-4ac)/2a" },
    { q: "Nature if D<0?", options: ["Imaginary", "Real", "Equal", "Zero"], a: "Imaginary" },
    { q: "Sum of roots?", options: ["-b/a", "c/a", "b/a", "a/c"], a: "-b/a" },
    { q: "Product of roots?", options: ["c/a", "b/a", "a/c", "b/c"], a: "c/a" },
    { q: "x²-9 roots?", options: ["3&-3", "9", "0", "1"], a: "3&-3" },
    { q: "Equal roots condition?", options: ["D=0", "D=1", "D<0", "D>0"], a: "D=0" },
    { q: "Parabola opens upward if?", options: ["a>0", "a<0", "a=0", "b=0"], a: "a>0" },
    { q: "Vertex is?", options: ["Turning point", "Root", "Origin", "Angle"], a: "Turning point" },
    { q: "Axis of symmetry?", options: ["-b/2a", "b/a", "c/a", "a/b"], a: "-b/2a" },
    { q: "Graph shape?", options: ["Parabola", "Line", "Circle", "Curve"], a: "Parabola" },
    { q: "Completing square used for?", options: ["Quadratic", "Set", "Trig", "Matrix"], a: "Quadratic" },
    { q: "Roots equal means?", options: ["1 root", "2 roots", "0", "3"], a: "1 root" },
    { q: "x²+1 roots?", options: ["Imaginary", "Real", "Zero", "Equal"], a: "Imaginary" },

    // ================= COMPLEX + TRIG (15)
    { q: "i² =", options: ["-1", "1", "0", "i"], a: "-1" },
    { q: "sin 90° =", options: ["1", "0", "-1", "2"], a: "1" },
    { q: "cos 0° =", options: ["1", "0", "-1", "2"], a: "1" },
    { q: "tan 45° =", options: ["1", "0", "2", "-1"], a: "1" },
    { q: "sin²θ+cos²θ =", options: ["1", "0", "2", "θ"], a: "1" },
    { q: "cos 60° =", options: ["1/2", "1", "0", "2"], a: "1/2" },
    { q: "tan 60° =", options: ["√3", "1", "0", "2"], a: "√3" },
    { q: "sin 30° =", options: ["1/2", "1", "0", "2"], a: "1/2" },
    { q: "cos 90° =", options: ["0", "1", "-1", "2"], a: "0" },
    { q: "tan 0° =", options: ["0", "1", "2", "-1"], a: "0" },
    { q: "|3+4i| =", options: ["5", "6", "7", "4"], a: "5" },
    { q: "i³ =", options: ["-i", "i", "1", "-1"], a: "-i" },
    { q: "i⁴ =", options: ["1", "-1", "i", "0"], a: "1" },
    { q: "Complex conjugate of a+bi?", options: ["a-bi", "a+bi", "b-ai", "0"], a: "a-bi" },
    { q: "|i| =", options: ["1", "0", "-1", "i"], a: "1" }
  ];

  // TIMER
  useEffect(() => {
    if (!started || finished) return;
    const t = setInterval(() => {
      setTime((x) => {
        if (x <= 1) {
          setFinished(true);
          return 0;
        }
        return x - 1;
      });
    }, 1000);
    return () => clearInterval(t);
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
        <h1>CBT PRO MAX</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={startExam}>Start</button>
      </div>
    );
  }

  if (finished) {
    const percent = (score / questions.length) * 100;
    return (
      <div style={{ padding: 20 }}>
        <h1>RESULT</h1>
        <h2>{name}</h2>
        <h2>{score}/{questions.length}</h2>
        <h2>{percent.toFixed(1)}%</h2>
        <h3>{percent >= 60 ? "PASSED" : "TRY AGAIN"}</h3>
      </div>
    );
  }

  const q = questions[index];

  return (
    <div style={{ padding: 20 }}>
      <h2>
        Time: {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
      </h2>
      <h3>{q.q}</h3>

      {q.options.map((o, i) => (
        <div key={i}>
          <input
            type="radio"
            checked={selected === o}
            onChange={() => setSelected(o)}
          />
          {o}
        </div>
      ))}

      <button onClick={next} disabled={!selected}>Next</button>
    </div>
  );
                                }
