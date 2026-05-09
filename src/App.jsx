import { useState, useEffect } from "react";

export default function App() {
  const questions = [
    { q: "What is H2O?", options: ["Water", "Oxygen", "Salt", "Hydrogen"], a: "Water" },
    { q: "What is CO2?", options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"], a: "Carbon dioxide" },
    { q: "Formula of salt?", options: ["NaCl", "H2O", "CO2", "O2"], a: "NaCl" },
    { q: "Planet we live on?", options: ["Mars", "Earth", "Venus", "Jupiter"], a: "Earth" },
    { q: "Largest planet?", options: ["Earth", "Jupiter", "Mars", "Saturn"], a: "Jupiter" },

    { q: "Smallest planet?", options: ["Mercury", "Venus", "Earth", "Mars"], a: "Mercury" },
    { q: "Gas for breathing?", options: ["CO2", "Oxygen", "Hydrogen", "Nitrogen"], a: "Oxygen" },
    { q: "Force unit?", options: ["Newton", "Volt", "Ampere", "Ohm"], a: "Newton" },
    { q: "Speed formula?", options: ["Distance/time", "Force×mass", "Mass/time", "Work/time"], a: "Distance/time" },
    { q: "Work formula?", options: ["Force×distance", "Mass×acceleration", "Pressure×area", "Voltage×current"], a: "Force×distance" },

    { q: "Boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], a: "100°C" },
    { q: "Freezing point of water?", options: ["0°C", "10°C", "-10°C", "5°C"], a: "0°C" },
    { q: "Gas to liquid?", options: ["Evaporation", "Condensation", "Melting", "Freezing"], a: "Condensation" },
    { q: "Liquid to gas?", options: ["Evaporation", "Condensation", "Melting", "Sublimation"], a: "Evaporation" },
    { q: "Solid to liquid?", options: ["Melting", "Freezing", "Boiling", "Condensation"], a: "Melting" },

    { q: "What is atom?", options: ["Smallest particle", "Cell", "Tissue", "Organ"], a: "Smallest particle" },
    { q: "Proton charge?", options: ["Positive", "Negative", "Neutral", "Zero"], a: "Positive" },
    { q: "Electron charge?", options: ["Positive", "Negative", "Neutral", "Zero"], a: "Negative" },
    { q: "Neutron charge?", options: ["Positive", "Negative", "Neutral", "Zero"], a: "Neutral" },
    { q: "First element?", options: ["Hydrogen", "Oxygen", "Carbon", "Helium"], a: "Hydrogen" },

    { q: "Cell is?", options: ["Basic unit of life", "Atom", "Organ", "Tissue"], a: "Basic unit of life" },
    { q: "Tissue is?", options: ["Group of cells", "Group of organs", "Atom", "Molecule"], a: "Group of cells" },
    { q: "Organ is?", options: ["Group of tissues", "Group of atoms", "Cell", "Element"], a: "Group of tissues" },
    { q: "Photosynthesis is?", options: ["Food making in plants", "Breathing", "Digestion", "Movement"], a: "Food making in plants" },
    { q: "Chlorophyll is found in?", options: ["Leaves", "Roots", "Stem", "Flower"], a: "Leaves" },

    { q: "Planet rotation causes?", options: ["Day and night", "Seasons", "Rain", "Wind"], a: "Day and night" },
    { q: "Revolution causes?", options: ["Seasons", "Day", "Night", "Wind"], a: "Seasons" },
    { q: "Magnet has?", options: ["Two poles", "One pole", "Three poles", "No poles"], a: "Two poles" },
    { q: "Electric current unit?", options: ["Ampere", "Volt", "Ohm", "Watt"], a: "Ampere" },
    { q: "Voltage unit?", options: ["Volt", "Ampere", "Ohm", "Newton"], a: "Volt" },

    { q: "Resistance unit?", options: ["Ohm", "Volt", "Ampere", "Watt"], a: "Ohm" },
    { q: "Sound travels in?", options: ["Waves", "Vacuum", "Particles only", "Light"], a: "Waves" },
    { q: "Light travels in?", options: ["Straight line", "Curves", "Waves only", "Particles"], a: "Straight line" },
    { q: "Speed of light?", options: ["3×10^8 m/s", "3×10^6 m/s", "300 m/s", "3×10^4 m/s"], a: "3×10^8 m/s" },
    { q: "Producer example?", options: ["Plants", "Animals", "Humans", "Fish"], a: "Plants" },

    { q: "Consumer example?", options: ["Animals", "Plants", "Bacteria", "Fungi"], a: "Animals" },
    { q: "Decomposer example?", options: ["Bacteria", "Lion", "Tree", "Fish"], a: "Bacteria" },
    { q: "Habitat means?", options: ["Place organism lives", "Food chain", "DNA", "Energy"], a: "Place organism lives" },
    { q: "Adaptation means?", options: ["Survival feature", "Death", "Movement", "Growth"], a: "Survival feature" },
    { q: "Extinct means?", options: ["No longer exists", "Living", "Growing", "Moving"], a: "No longer exists" }
  ];

  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [time, setTime] = useState(3600); // 60 minutes CBT exam

  // TIMER
  useEffect(() => {
    if (!loggedIn) return;

    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [loggedIn]);

  // AUTO SUBMIT
  useEffect(() => {
    if (time <= 0) {
      setIndex(questions.length);
    }
  }, [time]);

  const login = () => {
    if (name.trim() !== "") setLoggedIn(true);
  };

  const answer = (option) => {
    if (option === questions[index].a) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };

  // LOGIN PAGE
  if (!loggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h1>MHG CBT EXAM SYSTEM</h1>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={login}>Start Exam</button>
      </div>
    );
  }

  // RESULT PAGE
  if (index >= questions.length) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Exam Completed 🎉</h1>
        <p>Name: {name}</p>
        <p>Score: {score} / {questions.length}</p>
      </div>
    );
  }

  // CBT SCREEN
  return (
    <div style={{ padding: 20 }}>
      <h2>CBT EXAM MODE</h2>
      <p>Candidate: {name}</p>

      <h3>
        Time Left: {Math.floor(time / 60)}:
        {String(time % 60).padStart(2, "0")}
      </h3>

      <hr />

      <h3>Q{index + 1}: {questions[index].q}</h3>

      {questions[index].options.map((opt, i) => (
        <button
          key={i}
          onClick={() => answer(opt)}
          style={{ display: "block", margin: 10, padding: 10 }}
        >
          {opt}
        </button>
      ))}

      <p>Score: {score}</p>
    </div>
  );
}
