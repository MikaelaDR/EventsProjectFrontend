import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../App.css";
import AddEvent from "../modals/AddEvent";
import UpdateEvent from "../modals/UpdateEvent";
import DeleteEvent from "../modals/DeleteEvent";
import AddUserToEvent from "../modals/AddUserToEvent";
import Accordion from "react-bootstrap/Accordion";
import 

function Event() {
  const [events, setEvents] = useState([]);

//Fetches Events data from backend when the page loads to display it to the frontend
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch("http://localhost:8080/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  };

  //Date + Time conversion functions ------------------------------------
  function ChangeToMonth (props){
    
    switch(props.monthNum){
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
        }
    }

    function Meridiem (props){
        if (props.hr > 12){
            return "PM"
        }else return "AM"
    }

    function ChangeTo12Hour(props){
        switch(props.hr) {
            case 13:
                return 1
            case 14:
                return 2
            case 15:
                return 3
            case 16:
                return 4
            case 17:
                return 5
            case 18:
                return 6
            case 19:
                return 7
            case 20:
                return 8
            case 21:
                return 9
            case 22:
                return 10
            case 23:
                return 11
            case 24:
                return 12
            }
    }
    


    
    //Events Accordion function --------------------------------------------------------------
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
                        <p style={styles.accHeaderDate}>{<ChangeToMonth monthNum= {event.startTime.at(1)} /> } {event.startTime.at(2)}, {event.startTime.at(0)} </p>
                      </div>
                    </div>
                    <div style={styles.accHeaderButtons}>
                      <UpdateEvent eventID={event.id} />
                      <DeleteEvent eventID={event.id} />
                    </div>
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
                            {<ChangeTo12Hour hr={event.startTime.at(3)}/>}:{event.startTime.at(4)} {<Meridiem hr= {event.startTime.at(3)}/>}
                          </span>
                        </div>
                        <div style={styles.accRow}>
                          <p style={styles.accBodTitle}>End Time:</p>
                          <span style={{ marginLeft: "1vh" }}>
                            {<ChangeTo12Hour hr={event.endTime.at(3)}/>}:{event.endTime.at(4)} {<Meridiem hr= {event.endTime.at(3)}/>}
                          </span>
                        </div>
                        <div style={styles.accRow}>
                          <p style={styles.accBodTitle}>Location:</p>
                          <span style={{ marginLeft: "1vh" }}>
                            {event.location}
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
        <div style={styles.addEventButtonContainer}>
          <AddEvent />
        </div>
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
