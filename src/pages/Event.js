import React, {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../App.css';
import AddEvent from '../modals/AddEvent';
import UpdateEvent from '../modals/UpdateEvent';
import DeleteEvent from '../modals/DeleteEvent'
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'




function Event(){

    //TRASH DELETE EVENT FUNCTION
    // const deleteConfirmation()=>{
        
    // }


    // ACCORDION FUNCTION, MAPPING EVENTS
    function AllCollapseExample() {
        const [events, setEvents] =useState([]);


        // FETCHES DATA - Saw this on the internet, don't know if it works
        useEffect(() => {
            fetch('http://localhost:8080/api/events')
              .then(response => response.json())
              .then(data => setEvents(data))
              .catch(error => console.error('Error fetching events:', error));
          }, []);

        //   Tests if ternary operator is working: pushes a fake event, which shows accordion
          events.push("event#1")
        
        return (
            <>
            {/* If events empty display message, else display accordion mapping all events */}
            {
                    events.length===0 ? (<div> <p style={{fontSize:'4vh', alignContent:'center'}}>There are no upcoming events.</p></div>): 

            (events.map(event=>(
                <Accordion>
                <Accordion.Item eventKey={event.id}>
                  <Accordion.Header>
                    <div style={{display:'flex', flexDirection: 'row', width:'100%'}}>
                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', width:'100%'}}> 
                            <div><p style={styles.accHeaderText}>{event.title} Title</p></div>
                            <div><p style={styles.accHeaderDate}>{event.date} Date</p></div>
                        </div>
                        <div style={{display:'flex', flexDirection: 'row', justifyContent:'flex-end', width:'100%'}}>
                            <UpdateEvent/>
                            <DeleteEvent/>
                        </div>
                    </div>
                    </Accordion.Header>
                  <Accordion.Body>
                    <div style={styles.accBod}>
                        <div style={styles.accRow}>
                        <div> <img style={styles.accImg} src="./images/logos/humberLogoBW.png" alt="Humber Events Logo" /> </div>
                            <div style={{ width:'90%' }}>
                                <div style={styles.accRow}><p style={styles.accBodTitle}>Start Time:</p> <span style={{marginLeft:'1vh'}}>{event.startTime}</span></div>
                                <div style={styles.accRow}><p style={styles.accBodTitle}>End Time:</p> <span style={{marginLeft:'1vh'}}>{event.endTime}</span></div>
                                <div style={styles.accRow}><p style={styles.accBodTitle}>Location:</p> <span style={{marginLeft:'1vh'}}>{event.location}</span></div>
                                <div><p style={styles.accBodTitle}>Description:</p></div>
                                <div><p style={styles.accDescription}>{event.description}</p></div>
                                {/* <div style={{display:'flex', justifyContent:'flex-end', marginTop:'2vh'}}>
                                    <div style={styles.accRow}><p style={styles.accBodTitle}>Capacity:</p> <span style={{marginLeft:'1vh'}}>#</span></div>
                                </div> */}
                            </div>
                        </div>
                        
                        <div>
                        <div style ={{display:'flex', justifyContent:'center'}}><a href="# if successful home /" style={styles.button2}>Sign me up!</a></div>
    
                        </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            )))

        }
            
            </>
        
          
        );
      }
    
    // RETURN OF EVENT FUNCTION
    return(
        <div style={styles.main}>
            <Header/>
            {/* Section 1 */}
            
            <div>
                <div style={styles.section1}>
                    <h1 style={styles.title}>EVENTS</h1>
                </div>
                <div style={{display:'flex', justifyContent:'flex-end', marginRight:'5vh'}}><AddEvent/></div>
                

                <div style={styles.dividerYellow}/>
            </div>

            
            <div style={{display:'flex', justifyContent:'center'}}>
            {/* Section 2 */}
            <div style={styles.section2}>
                <AllCollapseExample/>
                
              
                

            </div></div>

           <Footer/>
        </div> 
    )
}

export default Event

let styles = {
    main:{
        //display: 'flex',
        // alignItems:'center',
        
        flexDirection:'column',
        backgroundColor: '#14234B',
        width:'100%',
        color: 'white'
    },

    section1:{
        marginTop: '15vh',
        textAlign: 'center',
    },

    title:{
        textDecoration:'none',
        margin:0,
        fontSize:'7vh',
        textShadow: '0.25vh 0.25vh 0.25vh #777B89',
    },

    accBod:{
        fontSize:'2vh',
        display: 'flex',
        flexDirection:'column'
    },


    accImg:{
        width:'30vh',
        marginBottom: '2vh',
        borderRadius:'2vh',
        marginRight: '3vh'
    },

    accBodTitle:{
        fontWeight:'700'
    },

    accRow:{
        display:'flex',
        flexDirection:'row',

        // backgroundColor: 'red'
    },
    accCol:{
        display:'flex',
        flexDirection:'column',
    },

    accHeaderText:{
        color:'white',
        fontSize:'3vh',
        fontWeight: '700'
    },

    accHeaderDate:{
        color:'white',
        fontSize:'3vh',
    },


    button1:{
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#D4A82A',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        paddingRight:'3vh',
        paddingLeft: '3vh',
        borderRadius: '10vh',
        fontSize: '3vh',
        fontWeight: '700',
        

    },
    button2:{
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#D4A82A',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        paddingRight:'3vh',
        paddingLeft: '3vh',
        borderRadius: '10vh',
        fontSize: '2vh',
        fontWeight: '700',
        

    },

    button1div:{
        marginTop: '2vh',
        marginRight:'5vh',
        marginBottom: '2vh',
        display: 'flex',
        justifyContent: 'flex-end',
        // alignContent:'right',
        // alignItems:'right'
    },

    dividerYellow:{
        borderTop: '0.5vh solid #D4A82A',
        borderRadius: '10vh',
        width: '100%',
        marginTop: '5vh',
        marginBottom: '10vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

   

    section2:{
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        textAlign: 'center',
        fontSize: '3vh', 
        justifyContent:'center',
        width:'60%',
        marginBottom:'30vh',

    },

    imgs2:{
        height: '30vh',
        width: '45vh',
        padding: '5vh',
        paddingBottom: '0vh',
        borderRadius:'7vh',
        
    },

    aBodyMain:{
        display:'flex',
        justifyContent:'center'
    },

    aBodyCol:{
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'column',
    },

    aBodyRow:{
        display:'flex',
        flexDirection:'row',
    }
}