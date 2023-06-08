import "./styles.css";
import React, { useState } from "react";

const err = "Age must be grater or equal to 18";
export default function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setText(e.target.value);
    if (e.target.value < 18 && e.target.value !== "") {
      setError(true);
    }
  };
  return (
    <div className="App">
      <input value={text} onChange={handleChange} />
      {error ? err : null}
    </div>
  );
}
