import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteEvent({ eventID, onDeleteSuccess }) {
  const [show, setShow] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/events/${id}`);
      setShow(false);
      window.location.reload();
      onDeleteSuccess(id); 
      
    } catch (err) {
      console.error("Error deleting event:", err);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
      <div
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          setShow(true);
        }}
        className="me-2"
      >
        <FontAwesomeIcon
          icon={faTrash}
          size="3x"
          style={{ color: "white", height: "4vh", paddingRight: "2vh" }}
        />
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="sm"
        centered
        dialogClassName="modal-90w"
        aria-labelledby="delete-event-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title as="h3">
            Are you sure you want to delete this event?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={styles.button1div}>
            <button
              style={styles.button2}
              onClick={() => handleDelete(eventID)}
            >
              Yes, delete event
            </button>
          </div>
          <div style={styles.button1div}>
            <button style={styles.button2} onClick={() => setShow(false)}>
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DeleteEvent;

let styles = {
  modal: {
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "fixed",
  },

  overlay: {
    background: "rgba(49,49,49,0.9)",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "fixed",
    display: "flex",
    justifyContent: "center",
  },

  modalContent: {
    margin: "20vh",
    position: "absolute",
    width: "40%",
    display: "flex",
    border: "white 0.2vh solid",
    borderRadius: "5vh",
    wrap: "flex-wrap",
    padding: "5vh",
    backgroundColor: "#D5AA30",
  },
  inputs: {
    textDecoration: "none",
    width: "98%",
    borderRadius: "0.7vh",
    textAlign: "center",
    color: "#14234B",
    padding: "0.5vh",
    margin: "2vh",
    fontSize: "2vh",
    marginBottom: "2vh",
    borderBottom: "solid 0.3vh #14234B",
  },
  button1: {
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#D4A82A",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    paddingRight: "5vh",
    paddingLeft: "5vh",
    borderRadius: "1vh",
    fontSize: "3vh",
    fontWeight: "700",
    alignContent: "center",
  },

  button1div: {
    cursor: "pointer",
    marginTop: "2vh",
    marginBottom: "2vh",
    display: "flex",
    justifyContent: "center",
  },

  button2: {
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
    backgroundColor: "#D4A82A",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    paddingRight: "3vh",
    paddingLeft: "3vh",
    borderRadius: "1vh",
    fontSize: "2vh",
    fontWeight: "700",
    alignContent: "center",
  },

  img1: {
    width: "60%",
    marginBottom: "2vh",
  },
};
