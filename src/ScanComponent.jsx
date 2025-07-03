import React, { useState, useEffect } from "react";
import api from "./api";

function ScanComponent() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!name) return;

    setStatus("loading");
    try {
      const res = await api.post("/guests/attend", {
        invitation_id: name,
      });

      console.log("✅ Attendance submitted:", res.data);
      setMessage(`✅ ${res.data.data.guest_name || "Tamu"} telah hadir`);
      setStatus("success");

      // Clear input
      setName("");
    } catch (err) {
      console.error("❌ Gagal mengirim:", err);
      setMessage("❌ Gagal kirim atau ID tidak ditemukan");
      setStatus("error");
    }
  };

  // Auto-submit saat input panjangnya 6 karakter
  useEffect(() => {
    if (name.length === 6) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h2>Scan Guest Invitation ID</h2>
      <input
        type="text"
        placeholder="Enter ID"
        value={name}
        onChange={(e) => setName(e.target.value.toUpperCase())}
        required
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button type="submit">Kirim Kehadiran</button>
      {status === "loading" && <p>⏳ Mengirim...</p>}
      {status === "success" && <p style={{ color: "green" }}>{message}</p>}
      {status === "error" && <p style={{ color: "red" }}>{message}</p>}
    </form>
  );
}

export default ScanComponent;
