"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [id, setId] = useState("");
  const router = useRouter();

  // ================= STUDENT IDS =================
  const studentIDs = [
    "NUR/25U/45002",
    "NUR/25U/45013",
    "NUR/25U/45024",
    "NUR/25U/45035",
    "NUR/25U/45046",
    "NUR/25U/45057",
    "NUR/25U/45068",
    "NUR/25U/45079",
    "NUR/25U/450810",
    "NUR/25U/450911",
    "NUR/25U/451012",
    "NUR/25U/451113",
    "NUR/25U/451214",
    "NUR/25U/451315",
    "NUR/25U/451416",
    "NUR/25U/451517",
    "NUR/25U/451618",
    "NUR/25U/451719",
    "NUR/25U/451820",
    "NUR/25U/451921",
    "NUR/25U/452022",
    "NUR/25U/452123",
    "NUR/25U/452224",
    "NUR/25U/452325",
    "NUR/25U/452426",
    "NUR/25U/452527",
    "NUR/25U/452628",
    "NUR/25U/452729",
    "NUR/25U/452830",
    "NUR/25U/452931",
    "NUR/25U/453032",
    "NUR/25U/453133",
    "NUR/25U/453234",
    "NUR/25U/453335",
    "NUR/25U/453436",
    "NUR/25U/453537",
    "NUR/25U/453638",
    "NUR/25U/453739",
    "NUR/25U/453840",
    "NUR/25U/453941",
    "NUR/25U/454042",
    "NUR/25U/454143",
    "NUR/25U/454244",
    "NUR/25U/454345",
    "NUR/25U/454446",
    "NUR/25U/454547",
    "NUR/25U/454648",
    "NUR/25U/454749",
    "NUR/25U/454850",
    "NUR/25U/454951",
    "NUR/25U/455052",
    "NUR/25U/455153",
    "NUR/25U/455254",
    "NUR/25U/455355",
    "NUR/25U/455456",
    "NUR/25U/455557",
    "NUR/25U/455658",
    "NUR/25U/455759",
    "NUR/25U/455860",
    "NUR/25U/455961",
    "NUR/25U/456062",
    "NUR/25U/456163",
    "NUR/25U/456264",
    "NUR/25U/456365",
    "NUR/25U/456466",
    "NUR/25U/456567",
    "NUR/25U/456668",
    "NUR/25U/456769",
    "NUR/25U/456870",
    "NUR/25U/456971",
    "NUR/25U/457072",
    "NUR/25U/457173",
    "NUR/25U/457375",
    "NUR/25U/457476",
    "NUR/25U/457577",
    "NUR/25U/457678",
    "NUR/25U/457779",
    "NUR/25U/457880",
    "NUR/25U/458081",
    "NUR/25U/458182",
    "NUR/25U/458283",
    "NUR/25U/458384",
    "NUR/25U/458485",
    "NUR/25U/458586",
    "NUR/25U/458687",
    "NUR/25U/458788",
    "NUR/25U/458889",
    "NUR/25U/458990",
    "NUR/25U/459191",
    "NUR/25U/459292",
    "NUR/25U/459393",
    "NUR/25U/459594",
    "NUR/25U/459695",
    "NUR/25U/459796",
    "NUR/25U/459897",
    "NUR/25U/459998",
    "NUR/25U/460099",
    "NUR/25U/4601100",
    "NUR/25U/4602101",
    "NUR/25U/4603102",
    "NUR/25U/4604103",
    "NUR/25U/4605104",
    "NUR/25U/4606105",
    "NUR/25U/4607106",
    "NUR/25U/4608107",
    "NUR/25U/4609108",
    "NUR/25U/4611109",
    "NUR/25U/4612110",
    "NUR/25U/4614111",
    "NUR/25U/4615112",
    "NUR/25U/4616113",
    "NUR/25U/4617114",
    "NUR/25U/4618115",
    "NUR/25U/4619116",
    "NUR/25U/4620117",
    "NUR/25U/4621118",
    "NUR/25U/4622119",
    "NUR/25U/4623120",
    "NUR/25U/4624121",
    "NUR/25U/4625122",
    "NUR/25U/4626123",
    "NUR/25U/4628124",
    "NUR/25U/4629125",
    "NUR/25U/4630126",
    "NUR/25U/4631127",
    "NUR/25U/4632128",
    "NUR/25U/4633129",
    "NUR/25U/4634130",
    "NUR/25U/4635131",
    "NUR/25U/4636132",
    "NUR/25U/4637133",
    "NUR/25U/4638134",
    "NUR/25U/4640135",
    "NUR/25U/4641136",
    "NUR/25U/4642137",
    "NUR/25U/4643138",
    "NUR/25U/4644139",
    "NUR/25U/4645140",
    "NUR/25U/4646141"
  ];

  const ADMIN_KEY = "MAMBO";

  const handleLogin = () => {
    const cleanID = id.trim().toUpperCase();
    const validIDs = studentIDs.map((i) => i.toUpperCase());

    // ================= ADMIN LOGIN =================
    if (cleanID === ADMIN_KEY) {
      localStorage.setItem("role", "admin");
      router.push("/admin");
      return;
    }

    // ================= STUDENT LOGIN =================
    if (validIDs.includes(cleanID)) {
      localStorage.setItem("role", "student");
      localStorage.setItem("studentID", cleanID);
      router.push("/exam");
      return;
    }

    alert("Invalid ID or Admin Key");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>CBT LOGIN SYSTEM</h1>

      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Student ID or MAMBO"
        style={{
          padding: "12px",
          width: "300px",
          marginTop: "20px",
        }}
      />

      <br />

      <button
        onClick={handleLogin}
        style={{
          marginTop: "20px",
          padding: "10px 30px",
          cursor: "pointer",
        }}
      >
        LOGIN
      </button>

      <p style={{ marginTop: "20px", fontSize: "12px" }}>
        Admin Key: <b>MAMBO</b>
      </p>
    </div>
  );
}
