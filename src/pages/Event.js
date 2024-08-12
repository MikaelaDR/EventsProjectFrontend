import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../App.css";
import AddEvent from "../modals/AddEvent";
import UpdateEvent from "../modals/UpdateEvent";
import DeleteEvent from "../modals/DeleteEvent";
import AddUserToEvent from "../modals/AddUserToEvent";
import Accordion from "react-bootstrap/Accordion";

function Event() {
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } 
    fetchEvents();

    // Retrieve user role from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role) {
      setUserRole(user.role);
    }
  }, []);

  const fetchEvents = () => {
    fetch("http://localhost:8080/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  };

  function FormatTime(props) {
    const dateString = props.timeInfo
    const date = new Date(dateString)
    let hours = date.getHours();
    const minutes =date.getMinutes();
    let meridiem = hours > 12 ? "PM":"AM"

    if(hours > 12){
        hours = hours - 12
    }
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${meridiem}`;

    return formattedTime
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  function AllCollapseExample() {
    return (
      <>
        {events.length === 0 ? (
          <div>
            <p style={{ fontSize: "4vh", alignContent: "center" }}>
              There are no upcoming events.
            </p>
          </div>
        ) : (
          events.map((event) => (
            <Accordion key={event.id}>
              <Accordion.Item eventKey={event.id}>
                <Accordion.Header>
                  <div style={styles.accHeaderContainer}>
                    <div style={styles.accHeaderContent}>
                      <div>
                        <p style={styles.accHeaderText}>{event.title}</p>
                      </div>
                      <div>
                        <p style={styles.accHeaderDate}>
                          {formatDate(event.startTime)}
                        </p>
                      </div>
                    </div>
                    {user && (userRole === "admin" || user.id === event.userId) && (
                      <div style={styles.accHeaderButtons}>
                        <UpdateEvent eventID={event.id} />
                        <DeleteEvent eventID={event.id} />
                      </div>
                    )}
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div style={styles.accBod}>
                    <div style={styles.accRow}>
                      <div>
                        <img
                          style={styles.accImg}
                          src="./images/logos/humberLogoBW.png"
                          alt="Humber Events Logo"
                        />
                      </div>
                      <div style={{ width: "90%" }}>
                        <div style={styles.accRow}>
                          <p style={styles.accBodTitle}>Start Time:</p>
                          <span style={{ marginLeft: "1vh" }}>
                            <FormatTime timeInfo={event.startTime} />
                          </span>
                        </div>
                        <div style={styles.accRow}>
                          <p style={styles.accBodTitle}>End Time:</p>
                          <span style={{ marginLeft: "1vh" }}>
                            <FormatTime timeInfo={event.endTime} />
                          </span>
                        </div>
                        <div style={styles.accRow}>
                          <p style={styles.accBodTitle}>Location:</p>
                          <span style={{ marginLeft: "1vh" }}>
                            {event.location}
                          </span>
                        </div>
                        <div style={styles.accRow}>
                          <p style={styles.accBodTitle}>Club:</p>
                          <span style={{ marginLeft: "1vh" }}>
                            {event.userId}
                          </span>
                        </div>
                        <div>
                          <p style={styles.accBodTitle}>Description:</p>
                        </div>
                        <div>
                          <p style={styles.accDescription}>
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div style={styles.signUpButtonContainer}>
                      <AddUserToEvent
                        eventId={event.id}
                        onSuccess={fetchEvents}
                        buttonText="Sign me up!"
                        buttonStyle={styles.button2}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))
        )}
      </>
    );
  }

  return (
    <div style={styles.main}>
      <Header />
      <div>
        <div style={styles.section1}>
          <h1 style={styles.title}>EVENTS</h1>
        </div>
        {user && userRole !== "student" && (
          <div style={styles.addEventButtonContainer}>
            <AddEvent />
          </div>
        )}
        <div style={styles.dividerYellow} />
      </div>

      <div style={styles.section2Container}>
        <div style={styles.section2}>
          <AllCollapseExample />
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  main: {
    flexDirection: "column",
    backgroundColor: "#14234B",
    width: "100%",
    color: "white",
  },
  section1: {
    marginTop: "15vh",
    textAlign: "center",
  },
  title: {
    textDecoration: "none",
    margin: 0,
    fontSize: "7vh",
    textShadow: "0.25vh 0.25vh 0.25vh #777B89",
  },
  accBod: {
    fontSize: "2vh",
    display: "flex",
    flexDirection: "column",
  },
  accImg: {
    width: "30vh",
    marginBottom: "2vh",
    borderRadius: "2vh",
    marginRight: "3vh",
  },
  accBodTitle: {
    fontWeight: "700",
  },
  accRow: {
    display: "flex",
    flexDirection: "row",
  },
  accCol: {
    display: "flex",
    flexDirection: "column",
  },
  accHeaderText: {
    color: "white",
    fontSize: "3vh",
    fontWeight: "700",
  },
  accHeaderDate: {
    color: "white",
    fontSize: "3vh",
  },
  button1: {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#D4A82A",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    paddingRight: "3vh",
    paddingLeft: "3vh",
    borderRadius: "10vh",
    fontSize: "3vh",
    fontWeight: "700",
  },
  button2: {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#D4A82A",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    paddingRight: "3vh",
    paddingLeft: "3vh",
    borderRadius: "10vh",
    fontSize: "2vh",
    fontWeight: "700",
  },
  button1div: {
    marginTop: "2vh",
    marginRight: "5vh",
    marginBottom: "2vh",
    display: "flex",
    justifyContent: "flex-end",
  },
  dividerYellow: {
    borderTop: "0.5vh solid #D4A82A",
    borderRadius: "10vh",
    width: "100%",
    marginTop: "5vh",
    marginBottom: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  section2: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
    fontSize: "3vh",
    justifyContent: "center",
    width: "60%",
    marginBottom: "30vh",
  },
  imgs2: {
    height: "30vh",
    width: "45vh",
    padding: "5vh",
    paddingBottom: "0vh",
    borderRadius: "7vh",
  },
  aBodyMain: {
    display: "flex",
    justifyContent: "center",
  },
  aBodyCol: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  aBodyRow: {
    display: "flex",
    flexDirection: "row",
  },
  accHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  accHeaderContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  accHeaderButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  addEventButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "5vh",
  },
  section2Container: {
    display: "flex",
    justifyContent: "center",
  },
  signUpButtonContainer: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Event;
