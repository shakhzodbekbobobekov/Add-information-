//style
import "./Modal.css";

import NewEventModal from "./NewEventModal";

function Modal() {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <NewEventModal />
        <div className="salom">
          <button className="eventBtns">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
