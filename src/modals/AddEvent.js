import React, {useState} from "react";
import "../App.css";
import { MdOpacity } from "react-icons/md";

function AddEvent(){
    const [modal, setModal] = useState(false);
    let display_var;
    

    const toggleModal =() =>{
        setModal(!modal)
    }

    if(modal) {
        display_var = ''
      } else {
        display_var ='none'
      }

    return(
        <div>
            {/* Button */}
            <div 
            style ={styles.button1div}>
                <a href="Events" 
                style={styles.button1} 
                onClick={toggleModal}
                >
                    Add New Event +
                </a>
            </div>

            

            {/* Modal: Add Event */}
                <div style={[styles.modal, {display: display_var}] }>
                <div style={styles.overlay} onClick={toggleModal}>
                    <div style={styles.modalContent}>

                        <div style={styles.section1}>
                        <img style={styles.img1} src="./images/logos/humberLogoYellow.png" alt="Humber Events Logo" />

                            <button onClick={toggleModal}>X</button>
                        
                        {/* Title */}
                        <div style={styles.titleContainer}>
                            <h1 style={styles.title}>Add Event</h1>
                        </div>
                        
                        {/* Form */}
                        <form>
                            <div>
                                <input style={styles.inputs} placeholder="Username"/>
                            </div>
                            <div>
                                <input style={styles.inputs} placeholder="Password"/>
                            </div>
                            <div>
                                <input style={styles.inputs} type="file" placeholder="Image"/>
                            </div>
                            <div style ={styles.button1div}><a href="Add" style={styles.button1}>Add</a></div>
                        </form>
                    </div>

                    </div>

                </div>
            </div>

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
        fontSize:'2vh',
        marginBottom:'2vh',
    },
    button1:{
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#14234B',
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
        marginTop: '2vh',
        marginBottom: '2vh',
        display: 'flex',
        justifyContent: 'center'
    },

    img1:{
        width:'60%',
        marginBottom: '2vh'
    },

}

    