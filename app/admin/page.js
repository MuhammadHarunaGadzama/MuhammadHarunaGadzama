export default function AdminPage() {
  const students = ["CBT001", "CBT002", "CBT003"];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      <h3>Registered Students</h3>

      {students.map((s) => (
        <div key={s} style={{ padding: "10px", border: "1px solid #ccc", marginTop: "10px" }}>
          {s}
        </div>
      ))}
    </div>
  );
}
