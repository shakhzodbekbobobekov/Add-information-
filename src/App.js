import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showItem, setShowItem] = useState(true);
  const [found, setFound] = useState("");
  const [events, setEvents] = useState([
    { id: "1", day: "11.11.2001", fName: "Muhammadjon" },
    { id: "2", day: "12.12.2002", fName: "Alijon" },
    { id: "3", day: "10.10.2000", fName: "Abu Bakr" },
  ]);

  const removeBtn = (id) => {
    setEvents(
      events.filter((event) => {
        return event.id !== id;
      })
    );
  };

  const showItemBtn = () => {
    setShowItem(true);
  };

  const hideItemBtn = () => {
    setShowItem(false);
    setFound("Not Found");
  };
  return (
    <div>
      <h1>Happy birthday 🥳</h1> <br />
      <button onClick={showItemBtn}>Show item</button>
      <button onClick={hideItemBtn}>Hide item</button>
      {showItem && (
        <>
          {events.map((event) => {
            return (
              <div className="container" key={event.id}>
                <h1>{event.fName}</h1>
                <p>{event.day}</p>
                <button onClick={() => removeBtn(event.id)}>Remove</button>
              </div>
            );
          })}
        </>
      )}
      {events.length === 0 && <h4>No info, add a info</h4>}
      {!showItem && (
        <>
          <h4>{found} 404</h4>
        </>
      )}
      <Modal />
    </div>
  );
}

export default App;
