import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../App.css";
import AddEvent from "../modals/AddEvent";
import UpdateEvent from "../modals/UpdateEvent";
import DeleteEvent from "../modals/DeleteEvent";
import AddUserToEvent from "../modals/AddUserToEvent";
import Accordion from "react-bootstrap/Accordion";
import Pagination from "react-bootstrap/Pagination";

import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

function Event() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [clubNames, setClubNames] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(3);
  const currentPageUrl = "http://localhost:3000/events"

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
      .then((data) => {
        setEvents(data);
        fetchClubNames(data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  };

  const fetchClubNames = (eventsData) => {
    const uniqueUserIds = [
      ...new Set(eventsData.map((event) => event.userId).filter(Boolean)),
    ];

    Promise.all(
      uniqueUserIds.map((userId) =>
        fetch(`http://localhost:8080/api/users/${userId}`)
          .then((response) => response.json())
          .then((userData) => ({ [userId]: userData.username }))
      )
    )
      .then((results) => {
        const newClubNames = Object.assign({}, ...results);
        setClubNames(newClubNames);
      })
      .catch((error) => console.error("Error fetching club names:", error));
  };

  function FormatTime(props) {
    const [year, month, day, hour, minute] = props.timeInfo;
    const date = new Date(year, month - 1, day, hour, minute);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let meridiem = hours >= 12 ? "PM" : "AM";

    if (hours > 12) {
      hours = hours - 12;
    }
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${meridiem}`;
  }

  const formatDate = (dateArray) => {
    const [year, month, day] = dateArray;
    const date = new Date(year, month - 1, day);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  function AllCollapseExample() {
    // Get current events
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
    let join = "Join us for "
    let at = " at "
    let on = " on "
    let signUp= ". Sign up at Humber Events: "
    return (
      <>
        {currentEvents.length === 0 ? (
          <div>
            <p style={{ fontSize: "4vh", alignContent: "center" }}>
              There are no upcoming events.
            </p>
          </div>
        ) : (
          currentEvents.map((event) => (
            <Accordion key={event.id}>
              <Accordion.Item eventKey={event.id}>
                <Accordion.Header>
                  <div style={styles.accHeaderContainer}>
                    <div style={styles.accHeaderContent}>
                      <div style={{flex:1}}>
                        <p style={styles.accHeaderText}>{event.title}</p>
                      </div>
                      <div style={{flex:1}}>
                        <p style={styles.accHeaderDate}>
                          {formatDate(event.startTime)}
                        </p>
                      </div>
                    </div>
                    {user &&
                      (userRole === "admin" || user.id === event.userId) && (
                        <div style={styles.accHeaderButtons}>
                          <UpdateEvent eventID={event.id} />
                          <DeleteEvent eventID={event.id} />
                        </div>
                      )}
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                    <div style={{ padding: "5px" }}>
                    <EmailShareButton url={join + event.title +at+ event.location +on+ formatDate(event.startTime) + signUp+ currentPageUrl }>
                      <EmailIcon round={true} size={55} />
                    </EmailShareButton>
                  </div>

                  <div style={{ padding: "5px" }}>
                    <WhatsappShareButton 
                    url={join + event.title +at+ event.location +on+ formatDate(event.startTime) + signUp+ currentPageUrl }
                    hashtag="#HumberEvents #ConnectToday"
                    >
                      <WhatsappIcon round={true} size={55} />
                    </WhatsappShareButton>
                  </div>

                  <div style={{ padding: "5px" }}>
                    <FacebookShareButton url={join + event.title +at+ event.location +on+ formatDate(event.startTime) + signUp+ currentPageUrl }>
                      <FacebookIcon round={true} size={55} />
                    </FacebookShareButton>
                  </div>
            </div>
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
                            {event.userId
                              ? clubNames[event.userId] || "Loading..."
                              : "N/A"}
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
                        <div style={styles.accRow}>
                          <p style={styles.accBodTitle}>Registrations:</p>
                          <span style={{ marginLeft: "1vh" }}>
                            {event.registrationIds
                              ? event.registrationIds.length
                              : 0}
                          </span>
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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

      <div style={styles.paginationContainer}>
        <Pagination>
          {[...Array(Math.ceil(events.length / eventsPerPage))].map(
            (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            )
          )}
        </Pagination>
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
    marginBottom: "20vh",
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
    flex:1
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
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5vh",
  },
};

export default Event;
