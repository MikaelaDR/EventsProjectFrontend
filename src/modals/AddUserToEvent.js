import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

function AddUserToEvent({ eventId, onSuccess }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("Current user in AddUserToEvent:", user);
  }, [user]);

  const handleAddUserToEvent = async () => {
    console.log("Attempting to add user to event. User:", user);

    if (!user) {
      setError("You must be logged in to join an event");
      console.error("User is not logged in or user data is not available");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `http://localhost:8080/api/events/${eventId}/join?userId=${user.id}`
      );
      console.log("User added to event successfully:", response.data);
      setShow(false);
      onSuccess();
    } catch (error) {
      console.error("Error adding user to event:", error);
      setError("Failed to join the event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!show) {
    return (
      <div style={styles.button1div}>
        <div style={styles.button1} onClick={() => setShow(true)}>
          Join Event
        </div>
      </div>
    );
  }

  return (
    <div style={styles.modal}>
      <div style={styles.overlay}>
        <div style={styles.modalContent}>
          <h2
            style={{ color: "#14234B", fontSize: "3vh", marginBottom: "2vh" }}
          >
            Join Event
          </h2>
          <p style={{ color: "#14234B", fontSize: "2vh", marginBottom: "2vh" }}>
            Are you sure you want to join this event?
          </p>
          {error && (
            <p style={{ color: "red", fontSize: "2vh", marginBottom: "2vh" }}>
              {error}
            </p>
          )}
          <div style={styles.button1div}>
            <button
              onClick={handleAddUserToEvent}
              disabled={isLoading}
              style={styles.button2}
            >
              {isLoading ? "Joining..." : "Confirm Join"}
            </button>
          </div>
          <div style={styles.button1div}>
            <button onClick={() => setShow(false)} style={styles.button2}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserToEvent;

const styles = {
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
    flexDirection: "column",
    alignItems: "center",
    border: "white 0.2vh solid",
    borderRadius: "5vh",
    padding: "5vh",
    backgroundColor: "#D5AA30",
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
};
