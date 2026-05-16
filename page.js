"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [studentID, setStudentID] = useState("");
  const router = useRouter();

  const allowedIDs = ["CBT001", "CBT002", "CBT003"];

  const handleLogin = () => {
    if (allowedIDs.includes(studentID)) {
      localStorage.setItem("studentID", studentID);
      router.push("/exam");
    } else {
      alert("Invalid ID Number");
    }
  };

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      <div style={{
        background:"white",
        padding:"40px",
        borderRadius:"20px",
        width:"350px"
      }}>
        <h1 style={{
          marginBottom:"20px",
          textAlign:"center"
        }}>
          Student Login
        </h1>

        <input
          type="text"
          placeholder="Enter ID Number"
          value={studentID}
          onChange={(e)=>setStudentID(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            marginBottom:"20px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:"12px",
            background:"black",
            color:"white",
            border:"none",
            borderRadius:"10px"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
