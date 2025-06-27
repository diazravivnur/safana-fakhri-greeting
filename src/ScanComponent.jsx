import React, { useState, useEffect } from "react";
import { database, ref, set } from "./firebase";

function ScanComponent() {
  const [name, setName] = useState("");
  const [vip, setVip] = useState(false);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    const dataRef = ref(database, "/");

    set(dataRef, { name, vip })
      .then(() => {
        console.log("Data submitted:", { name, vip });
        // ✅ Clear the form after successful submission
        setName("");
        setVip(false);
      })
      .catch((err) => {
        console.error("Coba ulang", err);
      });
  };

  // 🧠 Auto-submit when name reaches 6 characters
  useEffect(() => {
    if (name.length === 6) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]); // Only rerun when `name` changes

  const toggleVip = () => {
    setVip((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h2>Update Guest Info</h2>
      <input
        type="text"
        placeholder="Enter ID"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button type="submit">Update Firebase</button>
    </form>
  );
}

export default ScanComponent;
