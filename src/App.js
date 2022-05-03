import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showItem, setShowItem] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [found, setFound] = useState("");
  const [events, setEvents] = useState([
    { id: "1", day: "2001.11.11.", fName: "Muhammadjon" },
    { id: "2", day: "2002.12.12.", fName: "Alijon" },
    { id: "3", day: "2000.10.10.", fName: "Abu Bakr" },
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

  const addEvent = (eventa) => {
    setEvents((events) => {
      return [...events, eventa];
    });
  };

  const closeBtn = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Happy birthday 🥳</h1> <br />
      <div>
        <button onClick={showItemBtn}>Show item</button>
        <button onClick={hideItemBtn}>Hide item</button>
      </div>
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
      {/* {events.length === 0 && <h4>No info, add a info</h4>} */}
      {!showItem && (
        <>
          <h4>{found} 404</h4>
        </>
      )}
      <button onClick={() => setShowModal(true)} className="showModal">
        Show Modal
      </button>
      {showModal && <Modal addEvent={addEvent} closeBtn={closeBtn} />}
    </div>
  );
}

export default App;
