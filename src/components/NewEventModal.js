import "./NewEventModal.css";
import { useState } from "react";

function NewEventModal({ addEvent }) {
  const [fName, setFname] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");

  const hanleForm = (e) => {
    e.preventDefault();
    if (fName.length > 0 && day.length > 0) {
      addEvent({ id: Math.random(), day, fName });
      setError("");
    } else {
      setError("PS: Add info ✍");
    }
    setFname("");
    setDay("");
  };

  return (
    <form onSubmit={hanleForm} className="new-event-form">
      <label>
        <span>Name:</span>
        <input
          type="text"
          value={fName}
          onChange={(e) => setFname(e.target.value)}
          placeholder="Shaxzodbek Bobobekov"
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </label>
      <button className="eventBtns">Add</button>
      {error && <p> {error} </p>}
    </form>
  );
}

export default NewEventModal;
