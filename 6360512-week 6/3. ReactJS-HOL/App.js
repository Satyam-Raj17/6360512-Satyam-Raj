import React from "react";

export default function App() {
  const name = "Steeve";
  const school = "DNV Public School";
  const total = 284;
  const score = 94.67;

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "brown" }}>Student Details:</h1>

      <p>
        <span style={{ color: "blue", fontWeight: "bold" }}>Name:</span>{" "}
        <span style={{ color: "purple" }}>{name}</span>
      </p>

      <p>
        <span style={{ color: "red", fontWeight: "bold" }}>School:</span>{" "}
        <span style={{ color: "#c2185b" }}>{school}</span>
      </p>

      <p>
        <span style={{ color: "darkred", fontWeight: "bold" }}>Total:</span>{" "}
        <span style={{ color: "#333" }}>{total}Marks</span>
      </p>

      <p>
        <span style={{ color: "green", fontWeight: "bold" }}>Score:</span>{" "}
        <span style={{ color: "#00bcd4" }}>{score}%</span>
      </p>
    </div>
  );
}
