//style
import "./Modal.css";

import NewEventModal from "./NewEventModal";

function Modal({ addEvent, closeBtn }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <NewEventModal addEvent={addEvent} />
        <button onClick={closeBtn} className="eventBtns">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
