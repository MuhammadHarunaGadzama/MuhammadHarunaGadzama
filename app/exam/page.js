"use client";

import { useEffect, useState } from "react";

export default function CBTExam() {

  // ================= QUESTIONS =================
  const questions = [
    { q: "1. If A={1,2} and B={2,3}, A∪B=?", A:"{1,2,3}", B:"{2}", C:"{1,3}", ans:"A" },
    { q: "2. A∩B for A={1,2,3}, B={2,4}=?", A:"{1}", B:"{2}", C:"{1,2,3,4}", ans:"B" },
    { q: "3. Empty set symbol?", A:"{}", B:"Ø", C:"U", ans:"B" },
    { q: "4. Number of subsets of {a,b}?", A:"2", B:"4", C:"6", ans:"B" },
    { q: "5. If A⊆B and B⊆A then?", A:"A=B", B:"A≠B", C:"A∩B", ans:"A" },

    { q: "6. (a+b)^2=?", A:"a²+b²", B:"a²+2ab+b²", C:"a²-ab+b²", ans:"B" },
    { q: "7. Coefficient of x in (1+x)^3?", A:"1", B:"2", C:"3", ans:"C" },
    { q: "8. Number of terms in (a+b)^5?", A:"5", B:"6", C:"7", ans:"B" },
    { q: "9. (x-y)^2=?", A:"x²-2xy+y²", B:"x²+y²", C:"x²+2xy+y²", ans:"A" },
    { q: "10. Sum of coefficients of (a+b)^4?", A:"8", B:"16", C:"4", ans:"B" },

    { q: "11. First step in induction?", A:"Assume", B:"Verify n=1", C:"Conclude", ans:"B" },
    { q: "12. Induction proves?", A:"Integers", B:"Fractions", C:"Decimals", ans:"A" },
    { q: "13. Assume P(k) means?", A:"True for k", B:"False", C:"Unknown", ans:"A" },
    { q: "14. Then prove?", A:"P(k-1)", B:"P(k+1)", C:"P(0)", ans:"B" },
    { q: "15. Base case starts at?", A:"0 or 1", B:"10", C:"100", ans:"A" },

    { q: "16. i²=?", A:"1", B:"-1", C:"0", ans:"B" },
    { q: "17. i⁴=?", A:"1", B:"-1", C:"i", ans:"A" },
    { q: "18. Complex number form?", A:"a+b", B:"a+bi", C:"ab", ans:"B" },
    { q: "19. Conjugate of 2+3i?", A:"2-3i", B:"-2+3i", C:"3-2i", ans:"A" },
    { q: "20. |i|=?", A:"0", B:"1", C:"2", ans:"B" },

    { q: "21. sin²θ+cos²θ=?", A:"0", B:"1", C:"2", ans:"B" },
    { q: "22. tanθ=?", A:"sin/cos", B:"cos/sin", C:"sin+cos", ans:"A" },
    { q: "23. sin90°=?", A:"0", B:"1", C:"-1", ans:"B" },
    { q: "24. cos180°=?", A:"1", B:"0", C:"-1", ans:"C" },
    { q: "25. tan45°=?", A:"1", B:"0", C:"2", ans:"A" },

    { q: "26. π radians=?", A:"90°", B:"180°", C:"360°", ans:"B" },
    { q: "27. 2π radians=?", A:"180°", B:"360°", C:"90°", ans:"B" },
    { q: "28. 90° in radians?", A:"π/2", B:"π", C:"2π", ans:"A" },
    { q: "29. π/4 in degrees?", A:"30°", B:"45°", C:"60°", ans:"B" },
    { q: "30. π/6 in degrees?", A:"30°", B:"45°", C:"60°", ans:"A" },

    { q: "31. nth term of AP?", A:"a+(n-1)d", B:"ar^n", C:"n²", ans:"A" },
    { q: "32. GP common ratio?", A:"d", B:"r", C:"n", ans:"B" },
    { q: "33. Sum of AP?", A:"n/2[2a+(n-1)d]", B:"n²", C:"ar", ans:"A" },
    { q: "34. Infinite GP converges when?", A:"|r|<1", B:"|r|>1", C:"r=1", ans:"A" },
    { q: "35. Series means?", A:"Sum", B:"Difference", C:"Product", ans:"A" },

    { q: "36. sin0°=?", A:"0", B:"1", C:"-1", ans:"A" },
    { q: "37. cos0°=?", A:"1", B:"0", C:"-1", ans:"A" },
    { q: "38. tan90°=?", A:"1", B:"∞", C:"0", ans:"B" },
    { q: "39. secθ=?", A:"1/cosθ", B:"1/sinθ", C:"sin/cos", ans:"A" },
    { q: "40. cosecθ=?", A:"1/cosθ", B:"1/sinθ", C:"cos/sin", ans:"B" },

    { q: "41. i³=?", A:"i", B:"-i", C:"1", ans:"B" },
    { q: "42. Real part of 3+2i?", A:"3", B:"2", C:"i", ans:"A" },
    { q: "43. Imaginary part of 3+2i?", A:"3", B:"2", C:"i", ans:"B" },
    { q: "44. Product of conjugates is?", A:"Imaginary", B:"Real", C:"Zero", ans:"B" },
    { q: "45. |3+4i|=?", A:"5", B:"7", C:"1", ans:"A" },

    { q: "46. Degree to radian formula?", A:"×π/180", B:"×180/π", C:"×360", ans:"A" },
    { q: "47. π/3 in degrees?", A:"30°", B:"45°", C:"60°", ans:"C" },
    { q: "48. π/2 in degrees?", A:"90°", B:"180°", C:"45°", ans:"A" },
    { q: "49. Sequence means?", A:"Ordered list", B:"Set", C:"Equation", ans:"A" },
    { q: "50. Common difference in AP?", A:"r", B:"d", C:"n", ans:"B" },
  ];

  // ================= STATES =================
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ================= 40 MINUTES =================
  const [timeLeft, setTimeLeft] = useState(2400);

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  // ================= AUTO LOGOUT ONLY WHEN MINIMIZED =================
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        alert("Exam closed because you minimized/switched tab.");
        window.location.reload();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // ================= TIME =================
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // ================= ANSWERS =================
  const handleAnswer = (option) => {
    setAnswers({
      ...answers,
      [current]: option,
    });
  };

  // ================= SCORE =================
  const score = questions.reduce((acc, q, index) => {
    return answers[index] === q.ans ? acc + 1 : acc;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      {/* HEADER */}
      <div className="bg-blue-700 text-white p-4 rounded-xl flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Mathematics CBT Examination
        </h1>

        <div className="bg-black px-5 py-2 rounded-lg text-xl font-bold">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
      </div>

      {/* MAIN */}
      <div className="grid md:grid-cols-4 gap-5 mt-5">

        {/* QUESTION AREA */}
        <div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-lg">

          {!submitted ? (
            <>
              <div className="flex justify-between mb-5">
                <h2 className="text-xl font-bold">
                  Question {current + 1} of {questions.length}
                </h2>

                <button
                  onClick={() => setSubmitted(true)}
                  className="bg-red-600 text-white px-5 py-2 rounded-lg"
                >
                  Submit Exam
                </button>
              </div>

              <p className="text-2xl font-semibold mb-8">
                {questions[current].q}
              </p>

              <div className="space-y-4">
                {["A", "B", "C"].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={`block w-full text-left p-4 rounded-xl border-2
                    ${
                      answers[current] === option
                        ? "bg-blue-700 text-white border-blue-700"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    <strong>{option}.</strong>{" "}
                    {questions[current][option]}
                  </button>
                ))}
              </div>

              {/* NEXT PREVIOUS */}
              <div className="flex justify-between mt-10">
                <button
                  disabled={current === 0}
                  onClick={() => setCurrent(current - 1)}
                  className="bg-gray-700 text-white px-6 py-3 rounded-xl disabled:opacity-50"
                >
                  Previous
                </button>

                <button
                  disabled={current === questions.length - 1}
                  onClick={() => setCurrent(current + 1)}
                  className="bg-blue-700 text-white px-6 py-3 rounded-xl disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <h1 className="text-5xl font-bold text-green-700">
                  Exam Submitted
                </h1>

                <p className="text-3xl mt-5">
                  Score: {score} / {questions.length}
                </p>

                <p className="text-xl mt-3">
                  Percentage: {((score / questions.length) * 100).toFixed(1)}%
                </p>
              </div>

              {/* CORRECTIONS */}
              <div className="mt-10 space-y-5">
                <h2 className="text-3xl font-bold">
                  Corrections
                </h2>

                {questions.map((q, index) => (
                  <div
                    key={index}
                    className="border p-5 rounded-xl"
                  >
                    <p className="font-bold mb-3">
                      {q.q}
                    </p>

                    <p>Your Answer: 
                      <span className="font-bold ml-2">
                        {answers[index] || "Not Answered"}
                      </span>
                    </p>

                    <p className="text-green-700 font-bold">
                      Correct Answer: {q.ans}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* NAVIGATION */}
        <div className="bg-white p-5 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-5">
            Question Navigation
          </h2>

          <div className="grid grid-cols-5 gap-3">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-12 rounded-lg font-bold
                ${
                  current === index
                    ? "bg-blue-700 text-white"
                    : answers[index]
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="font-bold">
              Total Questions: {questions.length}
            </p>

            <p className="mt-2 font-bold">
              Answered: {Object.keys(answers).length}
            </p>

            <p className="mt-2 font-bold">
              Remaining: {questions.length - Object.keys(answers).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
        }
