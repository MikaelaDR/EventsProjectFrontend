import React, { useState, useEffect } from "react";
import "../App.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function AddEvent() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    location: "",
    userId: "", // We'll set this when submitting
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the user ID from localStorage (assuming it'
    if (!user || !user.id) {
      alert("You must be logged in to create an event.");
      return;
    }
    

    // Prepare the data for submission
    const dataToSubmit = {
      ...eventData,
      userId: user.id,
      startTime: new Date(eventData.startTime).toISOString(),
      endTime: new Date(eventData.endTime).toISOString(),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/events",
        dataToSubmit
      );
      console.log("Event added successfully:", response.data);
      setShow(false); // Hide the modal
      setEventData({
        // Reset the form
        title: "",
        description: "",
        startTime: "",
        endTime: "",
        location: "",
        userId: "",
      });
      // You might want to refresh the events list or show a success message here
    } catch (error) {
      console.error("Error adding event:", error);
      alert("Failed to add event. Please try again.");
    }
  };

  return (
    <div>
      <div style={styles.button1} onClick={() => setShow(true)}>
        Add New Event +
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        centered
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title as="h1">Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            > 
              <input type="hidden" value={eventData.id}/>
              <inout type="hidden" value=""/>
              <input
                style={styles.inputs}
                name="title"
                value={eventData.title}
                onChange={handleInputChange}
                placeholder="Event Name"
              />
              <input
                style={styles.inputs}
                name="location"
                value={eventData.location}
                onChange={handleInputChange}
                placeholder="Event Location"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontSize: "2vh" }}>Start Time:</p>
              <input
                style={styles.inputs}
                type="datetime-local"
                name="startTime"
                value={eventData.startTime}
                onChange={handleInputChange}
              />
              <div> {eventData.startTime}</div>
              <p style={{ fontSize: "2vh" }}>End Time:</p>
              <input
                style={styles.inputs}
                type="datetime-local"
                name="endTime"
                value={eventData.endTime}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <textarea
                style={styles.inputs}
                name="description"
                value={eventData.description}
                onChange={handleInputChange}
                placeholder="Description"
              />
            </div>
            <div style={styles.button1div}>
              <button type="submit" style={styles.button2}>
                Add Event
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddEvent;

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
