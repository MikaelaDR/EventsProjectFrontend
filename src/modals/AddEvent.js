import React, {useState} from "react";
import "../App.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddEvent(){
    const [show, setShow] = useState(false);

    return(
        <div>
            {/* Button */}
            
            <div style={styles.button1} 
                onClick={() => setShow(true)}
                >
                    Add New Event +
            </div>
            
            {/* Modal */}
            <Modal
                show={show}
                onHide={() => setShow(false)}
                size='xl'
                centered='True'
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
            <Modal.Header closeButton>
            <Modal.Title as='h1'>
                Add Event
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                        <input style={styles.inputs} placeholder="Event Name"/>
                        <input style={styles.inputs} placeholder="Event Location"/>
                        <input style={styles.inputs} type='date' placeholder="Date"/>
                    </div>
                    <div style={{display:'flex', flexDirection:'row' }}>
                        <p style={{fontSize:'2vh'}}>Start Time:</p><input style={styles.inputs} type='time' placeholder="Start Time"/>
                        <p style={{fontSize:'2vh'}}>End Time:</p><input style={styles.inputs} type='time' placeholder="End Time"/>
                    </div>
                    <div>
                        <textarea style={styles.inputs} type='' placeholder="Description"/>
                    </div>
                    <div>
                        <input style={styles.inputs} type="file" placeholder="Image"/>
                    </div>
                    <div style ={styles.button1div}><a href="Add" style={styles.button2}>Add</a></div>
                </form>
            </Modal.Body>
        </Modal>

        </div>

    )
}

export default AddEvent;

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

    