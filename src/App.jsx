import { useState } from "react";

export default function App() {
  const questions = [
    { q: "What is H2O?", a: "Water" },
    { q: "What is CO2?", a: "Carbon dioxide" },
    { q: "Formula of salt?", a: "NaCl" },
    { q: "Formula of glucose?", a: "C6H12O6" },
    { q: "Symbol of oxygen?", a: "O" },

    { q: "Symbol of hydrogen?", a: "H" },
    { q: "Symbol of sodium?", a: "Na" },
    { q: "Symbol of chlorine?", a: "Cl" },
    { q: "What is atom?", a: "Smallest particle of matter" },
    { q: "What is cell?", a: "Basic unit of life" },

    { q: "What is tissue?", a: "Group of cells" },
    { q: "What is organ?", a: "Group of tissues" },
    { q: "What is photosynthesis?", a: "Plants making food" },
    { q: "Where does photosynthesis occur?", a: "Leaves" },
    { q: "Pigment in plants?", a: "Chlorophyll" },

    { q: "What is bacteria?", a: "Microorganism" },
    { q: "What is virus?", a: "Non-living infectious agent" },
    { q: "What is fungi?", a: "Mushroom-like organism" },
    { q: "Planet we live on?", a: "Earth" },
    { q: "Closest star?", a: "Sun" },

    { q: "Largest planet?", a: "Jupiter" },
    { q: "Smallest planet?", a: "Mercury" },
    { q: "Earth satellite?", a: "Moon" },
    { q: "Force pulling objects?", a: "Gravity" },
    { q: "Unit of force?", a: "Newton" },

    { q: "Speed formula?", a: "Distance/time" },
    { q: "Work formula?", a: "Force × distance" },
    { q: "Boiling point of water?", a: "100°C" },
    { q: "Freezing point?", a: "0°C" },
    { q: "Gas to liquid?", a: "Condensation" },

    { q: "Liquid to gas?", a: "Evaporation" },
    { q: "Solid to liquid?", a: "Melting" },
    { q: "Instrument for temperature?", a: "Thermometer" },
    { q: "Instrument for mass?", a: "Balance" },
    { q: "Instrument for time?", a: "Clock" },

    { q: "Proton charge?", a: "Positive" },
    { q: "Electron charge?", a: "Negative" },
    { q: "Neutron charge?", a: "Neutral" },
    { q: "Proton location?", a: "Nucleus" },
    { q: "Electron location?", a: "Shells" },

    { q: "First element?", a: "Hydrogen" },
    { q: "Gas in balloons?", a: "Helium" },
    { q: "Blood pigment?", a: "Hemoglobin" },
    { q: "Heart function?", a: "Pumps blood" },
    { q: "Brain function?", a: "Controls body" },

    { q: "Lungs function?", a: "Breathing" },
    { q: "Kidney function?", a: "Filters blood" },
    { q: "Leaf function?", a: "Photosynthesis" },
    { q: "Root function?", a: "Absorbs water" },
    { q: "Stem function?", a: "Support and transport" },

    { q: "Acid example?", a: "HCl" },
    { q: "Base example?", a: "NaOH" },
    { q: "pH of water?", a: "7" },
    { q: "pH of acid?", a: "Less than 7" },
    { q: "pH of base?", a: "More than 7" },

    { q: "Gas for respiration?", a: "Oxygen" },
    { q: "Gas from respiration?", a: "Carbon dioxide" },
    { q: "Renewable energy?", a: "Solar energy" },
    { q: "Non-renewable energy?", a: "Coal" },
    { q: "Magnet poles?", a: "North and South" },

    { q: "Electric current unit?", a: "Ampere" },
    { q: "Voltage unit?", a: "Volt" },
    { q: "Resistance unit?", a: "Ohm" },
    { q: "Sound travels in?", a: "Waves" },
    { q: "Light travels in?", a: "Straight line" },

    { q: "Food chain starts with?", a: "Producer" },
    { q: "Producer example?", a: "Plants" },
    { q: "Consumer example?", a: "Animals" },
    { q: "Decomposer example?", a: "Bacteria" },
    { q: "Habitat means?", a: "Place organism lives" },

    { q: "Adaptation means?", a: "Survival feature" },
    { q: "Extinct means?", a: "No longer exists" },
    { q: "Species means?", a: "Similar organisms" },
    { q: "Genetics studies?", a: "Heredity" },
    { q: "Ecosystem means?", a: "Living + non-living environment" }
  ];

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    if (
      input.trim().toLowerCase() ===
      questions[index].a.toLowerCase()
    ) {
      setScore(score + 1);
    }
    setInput("");
    setIndex(index + 1);
  };

  if (index >= questions.length) {
    return (
      <div className="p-4">
        <h1>Quiz Finished 🎉</h1>
        <p>Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1>Science Quiz</h1>

      <p>{questions[index].q}</p>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Answer here"
      />

      <button onClick={checkAnswer}>
        Submit
      </button>

      <p>Score: {score}</p>
    </div>
  );
}
