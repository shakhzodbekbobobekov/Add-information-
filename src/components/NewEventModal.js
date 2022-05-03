import "./NewEventModal.css";
import { useState } from "react";

function NewEventModal() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const hanleForm = (e) => {
    e.preventDefault();
    if (name.length > 0 && date.length > 0) {
      console.log({ name, date });
      setError("");
    } else {
      setError("PS: Add info ✍");
    }
    setName("");
    setDate("");
  };

  return (
    <form onSubmit={hanleForm} className="new-event-form">
      <label>
        <span>Name:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button className="eventBtns">Add</button>
      {error && <p> {error} </p>}
    </form>
  );
}

export default NewEventModal;
