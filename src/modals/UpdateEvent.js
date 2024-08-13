import React, { useState, useEffect } from "react";
import "../App.css";
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function UpdateEvent(props) {
    const [show, setShow] = useState(false);
    const [event, setEvent] = useState({
        title: '',
        location: '',
        startTime: '',
        endTime: '',
        description: ''
    });
    const eventID = props.eventID;

    useEffect(() => {
        fetch('http://localhost:8080/api/events/' + eventID)
            .then(response => response.json())
            .then(data => {
                setEvent({
                    title: data.title,
                    location: data.location,
                    startTime: formatDateTimeForInput(data.startTime),
                    endTime: formatDateTimeForInput(data.endTime),
                    description: data.description
                });
            })
            .catch(error => console.error('Error fetching event:', error));
    }, [eventID]);

    const formatDateTimeForInput = (dateTimeArray) => {
        if (!dateTimeArray) return '';
        const [year, month, day, hour, minute] = dateTimeArray;
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEvent(prevEvent => ({
            ...prevEvent,
            [name]: value
        }));
    };

    const handleUpdate = (e) => {
      e.preventDefault();
      const updatedEvent = {
        ...event,
        startTime: new Date(event.startTime).toISOString(),
        endTime: new Date(event.endTime).toISOString(),
      };

      console.log("Sending update request with data:", updatedEvent);

      axios
        .put("http://localhost:8080/api/events/" + eventID, updatedEvent, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          console.log("Update successful:", result);
          setShow(false);
          if (props.onUpdate) props.onUpdate();
        })
        .catch((err) => {
          console.error(
            "Update failed:",
            err.response ? err.response.data : err
          );
          alert(
            "Failed to update event: " +
              (err.response ? err.response.data.message : err.message)
          );
        });
    };

    return (
        <div>
            <div onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faPenToSquare} size='3x' style={{color: "white", height:'4vh', paddingRight:'2vh'}} />
            </div>
            
            <Modal
                show={show}
                onHide={() => setShow(false)}
                size='xl'
                centered
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title as='h1'>Update Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdate}>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                            <input style={styles.inputs} name="title" placeholder="Event Name" value={event.title} onChange={handleInputChange}/>
                            <input style={styles.inputs} name="location" placeholder="Event Location" value={event.location} onChange={handleInputChange}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'row' }}>
                            <p style={{fontSize:'2vh'}}>Start Time:</p>
                            <input style={styles.inputs} name="startTime" type='datetime-local' value={event.startTime} onChange={handleInputChange}/>
                            <p style={{fontSize:'2vh'}}>End Time:</p>
                            <input style={styles.inputs} name="endTime" type='datetime-local' value={event.endTime} onChange={handleInputChange}/>
                        </div>
                        <div>
                            <textarea style={styles.inputs} name="description" placeholder="Description" value={event.description} onChange={handleInputChange}/>
                        </div>
                        <div style={styles.button1div}>
                            <button type="submit" style={styles.button2}>Update</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default UpdateEvent;

let styles = {
    modal:{
        width:'100vw',
        height:'100vh', 
        top:0,
        left:0,
        right:0,
        bottom:0,
        position: 'fixed',
        
    },

    overlay:{
        background: 'rgba(49,49,49,0.9)',
        width:'100vw',
        height:'100vh', 
        top:0,
        left:0,
        right:0,
        bottom:0,
        position: 'fixed',
        display:'flex',
        justifyContent:'center',
    },

    modalContent:{
        
        margin: '20vh',
        position:'absolute',
        width:'40%',
        display:'flex',
        border: 'white 0.2vh solid',
        borderRadius:'5vh',
        wrap:'flex-wrap',
        padding: '5vh',
        backgroundColor:'#D5AA30',
        

    },
    inputs:{
        textDecoration:'none',
        width: '98%',
        borderRadius:'0.7vh',
        textAlign: 'center',
        color:'#14234B',
        padding:'0.5vh',
        margin:'2vh',
        fontSize:'2vh',
        marginBottom:'2vh',
        borderBottom:'solid 0.3vh #14234B'
    },
    button1:{
        cursor:'pointer',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#D4A82A',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        paddingRight:'5vh',
        paddingLeft: '5vh',
        borderRadius: '1vh',
        fontSize: '3vh',
        fontWeight: '700',
        alignContent:'center'

    },

    button1div:{
        cursor:'pointer',
        marginTop: '2vh',
        marginBottom: '2vh',
        display: 'flex',
        justifyContent: 'center'
    },

    button2:{
        cursor:'pointer',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#D4A82A',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        paddingRight:'3vh',
        paddingLeft: '3vh',
        borderRadius: '1vh',
        fontSize: '2vh',
        fontWeight: '700',
        alignContent:'center'

    },

    img1:{
        width:'60%',
        marginBottom: '2vh'
    },

}

    