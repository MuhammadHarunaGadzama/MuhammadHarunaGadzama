"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setScore(Number(localStorage.getItem("score")) || 0);
    setTotal(Number(localStorage.getItem("total")) || 0);
  }, []);

  const percentage = total > 0 ? ((score / total) * 100).toFixed(2) : 0;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Exam Result</h1>

      <h2>
        Score: {score} / {total}
      </h2>

      <h3>{percentage}%</h3>

      {percentage >= 50 ? (
        <p style={{ color: "green" }}>PASS</p>
      ) : (
        <p style={{ color: "red" }}>FAIL</p>
      )}
    </div>
  );
}
