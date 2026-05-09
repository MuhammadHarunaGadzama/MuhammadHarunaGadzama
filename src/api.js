import { useEffect, useState } from "react";

export default function App() {

  // ================= TIMER (30 MINUTES) =================
  const [time, setTime] = useState(1800);

  useEffect(() => {
    const t = setInterval(() => setTime((x) => x - 1), 1000);
    return () => clearInterval(t);
  }, []);

  // ================= LOGIN =================
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // ================= QUESTIONS (10 PER SUBJECT = 50 TOTAL) =================
  const questions = [

    // ================= PHYSICS =================
    { q: "A body accelerates from 2 m/s to 12 m/s in 5 s. Find acceleration.", options: ["2", "3", "4", "5"], a: "2", subject: "Physics" },
    { q: "Force = mass × ?", options: ["velocity", "acceleration", "distance", "time"], a: "acceleration", subject: "Physics" },
    { q: "Work done formula is?", options: ["F × d", "m × a", "V × I", "P × t"], a: "F × d", subject: "Physics" },
    { q: "Momentum is?", options: ["mv", "ma", "F/d", "V/t"], a: "mv", subject: "Physics" },
    { q: "Unit of force is?", options: ["Newton", "Joule", "Watt", "Volt"], a: "Newton", subject: "Physics" },
    { q: "Centripetal force formula?", options: ["mv²/r", "ma", "mg", "F/t"], a: "mv²/r", subject: "Physics" },
    { q: "Velocity at highest point of projectile is?", options: ["0", "maximum", "constant", "infinite"], a: "0", subject: "Physics" },
    { q: "Acceleration due to gravity is?", options: ["9.8 m/s²", "10 m/s²", "5 m/s²", "1 m/s²"], a: "9.8 m/s²", subject: "Physics" },
    { q: "Energy conservation applies when?", options: ["no friction", "heat", "pressure", "mass"], a: "no friction", subject: "Physics" },
    { q: "Angular velocity unit is?", options: ["rad/s", "m/s", "kg", "N"], a: "rad/s", subject: "Physics" },

    // ================= CHEMISTRY =================
    { q: "Mole = mass ÷ ?", options: ["molar mass", "volume", "pressure", "energy"], a: "molar mass", subject: "Chemistry" },
    { q: "NaCl bond type?", options: ["ionic", "covalent", "metallic", "hydrogen"], a: "ionic", subject: "Chemistry" },
    { q: "Avogadro number is?", options: ["6.02×10²³", "3.00×10⁸", "9.8", "1.6×10⁻¹⁹"], a: "6.02×10²³", subject: "Chemistry" },
    { q: "pH of strong acid is?", options: ["low", "high", "neutral", "zero"], a: "low", subject: "Chemistry" },
    { q: "Gas law formula is?", options: ["PV=nRT", "F=ma", "E=mc²", "V=IR"], a: "PV=nRT", subject: "Chemistry" },
    { q: "Oxidation is?", options: ["loss of electrons", "gain of electrons", "loss of protons", "gain of neutrons"], a: "loss of electrons", subject: "Chemistry" },
    { q: "Reduction is?", options: ["gain of electrons", "loss of electrons", "gain of protons", "loss of neutrons"], a: "gain of electrons", subject: "Chemistry" },
    { q: "Periodic table is arranged by?", options: ["atomic number", "mass", "density", "charge"], a: "atomic number", subject: "Chemistry" },
    { q: "Catalyst increases?", options: ["rate", "mass", "volume", "temperature"], a: "rate", subject: "Chemistry" },
    { q: "STP gas volume is?", options: ["22.4 dm³", "11.2 dm³", "44.8 dm³", "1 dm³"], a: "22.4 dm³", subject: "Chemistry" },

    // ================= BIOLOGY =================
    { q: "Evolution is driven by?", options: ["natural selection", "gravity", "heat", "electricity"], a: "natural selection", subject: "Biology" },
    { q: "DNA carries?", options: ["genetic information", "energy", "oxygen", "heat"], a: "genetic information", subject: "Biology" },
    { q: "Mitosis produces?", options: ["2 identical cells", "4 cells", "no cells", "mutations"], a: "2 identical cells", subject: "Biology" },
    { q: "Meiosis produces?", options: ["gametes", "tissues", "organs", "enzymes"], a: "gametes", subject: "Biology" },
    { q: "Mutualism means?", options: ["both benefit", "one dies", "no effect", "parasitism"], a: "both benefit", subject: "Biology" },
    { q: "Photosynthesis occurs in?", options: ["chloroplast", "nucleus", "ribosome", "mitochondria"], a: "chloroplast", subject: "Biology" },
    { q: "Enzymes are?", options: ["proteins", "fats", "carbs", "minerals"], a: "proteins", subject: "Biology" },
    { q: "Homeostasis means?", options: ["balance", "growth", "death", "movement"], a: "balance", subject: "Biology" },
    { q: "Variation is caused by?", options: ["genes + environment", "only genes", "only environment", "heat"], a: "genes + environment", subject: "Biology" },
    { q: "Natural selection favors?", options: ["adapted organisms", "weak organisms", "random organisms", "dead organisms"], a: "adapted organisms", subject: "Biology" },

    // ================= MATHEMATICS =================
    { q: "Solve x²-5x+6=0", options: ["2 and 3", "1 and 6", "4 and 5", "3 and 5"], a: "2 and 3", subject: "Math" },
    { q: "(a+b)² =", options: ["a²+2ab+b²", "a²-b²", "2a+2b", "a²+b²"], a: "a²+2ab+b²", subject: "Math" },
    { q: "i² =", options: ["-1", "1", "0", "i"], a: "-1", subject: "Math" },
    { q: "Sum of roots =", options: ["-b/a", "c/a", "a/b", "b/c"], a: "-b/a", subject: "Math" },
    { q: "Set union means?", options: ["combine", "remove", "divide", "multiply"], a: "combine", subject: "Math" },
    { q: "Probability range is?", options: ["0 to 1", "1 to 10", "-1 to 1", "0 to 100"], a: "0 to 1", subject: "Math" },
    { q: "Indices law a^m × a^n =", options: ["a^(m+n)", "a^(m-n)", "a^(mn)", "a^0"], a: "a^(m+n)", subject: "Math" },
    { q: "Quadratic formula is?", options: ["-b±√b²-4ac/2a", "ax+b", "x²+y²", "a+b"], a: "-b±√b²-4ac/2a", subject: "Math" },
    { q: "Complex number i = ?", options: ["√-1", "1", "0", "-1"], a: "√-1", subject: "Math" },
    { q: "Factor theorem is used for?", options: ["finding roots", "addition", "multiplication", "division"], a: "finding roots", subject: "Math" },

    // ================= GST =================
    { q: "Independent clause is?", options: ["stands alone", "depends", "fragment", "phrase"], a: "stands alone", subject: "GST" },
    { q: "Morpheme is?", options: ["smallest meaning unit", "sentence", "sound", "paragraph"], a: "smallest meaning unit", subject: "GST" },
    { q: "Declarative sentence makes?", options: ["statement", "question", "command", "cry"], a: "statement", subject: "GST" },
    { q: "Interrogative sentence is?", options: ["question", "statement", "command", "phrase"], a: "question", subject: "GST" },
    { q: "Prefix is placed?", options: ["beginning", "end", "middle", "random"], a: "beginning", subject: "GST" },
    { q: "Simple sentence has?", options: ["1 clause", "2 clauses", "3 clauses", "none"], a: "1 clause", subject: "GST" },
    { q: "Compound sentence uses?", options: ["and/but", "noun", "verb", "prefix"], a: "and/but", subject: "GST" },
    { q: "Adjective modifies?", options: ["noun", "verb", "adverb", "sentence"], a: "noun", subject: "GST" },
    { q: "Adverb modifies?", options: ["verb", "noun", "pronoun", "article"], a: "verb", subject: "GST" },
    { q: "Clause contains?", options: ["subject + verb", "only verb", "only noun", "letters"], a: "subject + verb", subject: "GST" }
  ];

  // ================= STATE =================
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  // ================= LOGIN =================
  const login = () => {
    if (name.trim()) setLoggedIn(true);
  };

  // ================= ANSWER =================
  const answer = (opt) => {
    const q = questions[index];

    setAnswers([
      ...answers,
      { q: q.q, selected: opt, correct: q.a, subject: q.subject }
    ]);

    if (opt === q.a) setScore(score + 1);
    setIndex(index + 1);
  };

  // ================= TIMER END =================
  useEffect(() => {
    if (time <= 0) setIndex(questions.length);
  }, [time]);

  // ================= LOGIN SCREEN =================
  if (!loggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h1>CBT EXAM SYSTEM</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        <button onClick={login}>Start Exam</button>
      </div>
    );
  }

  // ================= RESULT =================
  if (index >= questions.length) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Exam Completed 🎉</h1>
        <h2>Score: {score} / {questions.length}</h2>

        <h2>Corrections</h2>
        {answers.map((a, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <p><b>{a.subject}</b></p>
            <p>{a.q}</p>
            <p style={{ color: a.selected === a.correct ? "green" : "red" }}>
              Your: {a.selected}
            </p>
            <p>Correct: {a.correct}</p>
          </div>
        ))}
      </div>
    );
  }

  // ================= CBT SCREEN =================
  const q = questions[index];

  return (
    <div style={{ padding: 20 }}>
      <h2>CBT EXAM</h2>
      <h3>Time: {Math.floor(time/60)}:{String(time%60).padStart(2,"0")}</h3>

      <hr />

      <h4>{q.subject}</h4>
      <h3>{q.q}</h3>

      {q.options.map((opt, i) => (
        <button key={i} onClick={() => answer(opt)} style={{ display: "block", margin: 8 }}>
          {opt}
        </button>
      ))}

      <p>Score: {score}</p>
    </div>
  );
      }
