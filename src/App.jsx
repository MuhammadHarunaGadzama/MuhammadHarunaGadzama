import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-xl w-80">
        <h2 className="text-xl font-bold mb-3">Login</h2>
        <input
          className="w-full p-2 bg-slate-700 rounded"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="mt-3 w-full bg-cyan-500 p-2 rounded"
          onClick={() => name && onLogin(name)}
        >
          Enter
        </button>
      </div>
    </div>
  );
}

function Quiz() {
  const questions = [
    { q: "What is H2O?", a: "Water" },
    { q: "What planet do we live on?", a: "Earth" }
  ];

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);

  const check = () => {
    if (input.toLowerCase() === questions[index].a.toLowerCase()) {
      setScore(score + 1);
    }
    setInput("");
    setIndex(index + 1);
  };

  if (index >= questions.length) {
    return <div className="p-4">Score: {score}/{questions.length}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="font-bold">{questions[index].q}</h2>
      <input
        className="mt-2 p-2 bg-slate-800"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={check} className="ml-2 bg-green-500 px-3 py-1 rounded">
        Submit
      </button>
    </div>
  );
}

function VoiceAI() {
  const [text, setText] = useState("");

  const speak = () => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const listen = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.onresult = (e) => setText(e.results[0][0].transcript);
    recog.start();
  };

  return (
    <div className="p-4">
      <h2 className="font-bold">Voice AI</h2>
      <button onClick={listen} className="bg-blue-500 px-3 py-1 rounded">
        🎤 Speak
      </button>
      <button onClick={speak} className="ml-2 bg-purple-500 px-3 py-1 rounded">
        🔊 Play
      </button>
      <p className="mt-2">{text}</p>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [dark, setDark] = useState(true);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className={dark ? "bg-slate-950 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <div className="p-3 flex justify-between bg-slate-800">
        <h1 className="font-bold">MHG Science AI</h1>
        <button onClick={() => setDark(!dark)}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="p-4">
        <h2>Welcome {user}</h2>

        <div className="grid gap-4 mt-4">
          <div className="bg-slate-800 p-3 rounded">
            <h3 className="font-bold">AI Tutor (simple)</h3>
            <p>Ask science questions via upgrade later</p>
          </div>

          <div className="bg-slate-800 p-3 rounded">
            <Quiz />
          </div>

          <div className="bg-slate-800 p-3 rounded">
            <VoiceAI />
          </div>
        </div>
      </div>
    </div>
  );
}
