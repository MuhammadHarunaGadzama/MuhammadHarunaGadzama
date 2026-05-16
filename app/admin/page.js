"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      router.push("/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="bg-white p-10 rounded-2xl shadow-xl">

        <h1 className="text-4xl font-bold text-blue-700">
          Admin Dashboard
        </h1>

        <div className="mt-10 grid md:grid-cols-3 gap-5">

          <div className="bg-blue-100 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Total Questions
            </h2>

            <p className="text-3xl mt-3">
              50
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Exam Duration
            </h2>

            <p className="text-3xl mt-3">
              40 Minutes
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Admin Access
            </h2>

            <p className="text-3xl mt-3">
              Granted
            </p>
          </div>

        </div>

        <button
          onClick={() => {
            localStorage.clear();
            router.push("/");
          }}
          className="mt-10 bg-red-600 text-white px-6 py-3 rounded-xl"
        >
          Logout
        </button>

      </div>

    </div>
  );
    }
