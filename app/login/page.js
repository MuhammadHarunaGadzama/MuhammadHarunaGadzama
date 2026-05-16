"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [id, setId] = useState("");
  const router = useRouter();

  const allowedIDs = ["CBT001", "CBT002", "CBT003"];

  const handleLogin = () => {
    if (allowedIDs.includes(id)) {
      localStorage.setItem("studentID", id);
      router.push("/exam");
    } else {
      alert("Invalid ID");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Login</h1>

      <input
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{ padding: "10px", marginTop: "10px" }}
      />

      <br />

      <button onClick={handleLogin} style={{ marginTop: "20px", padding: "10px" }}>
        Login
      </button>
    </div>
  );
}
