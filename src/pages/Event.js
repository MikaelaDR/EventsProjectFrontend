import React, {useState, useEffect, StyleSheet} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../App.css';
import AddEvent from '../modals/AddEvent';




function Event(){
    

    return(
        <div style={styles.main}>
            <Header/>
            {/* Section 1 */}
            
            <div>
                <div style={styles.section1}>
                    <h1 style={styles.title}>EVENTS</h1>
                </div>
                <AddEvent/>
                <div style={styles.dividerYellow}/>
            </div>

            

            {/* Section 2 */}
            <div style={styles.section2}>
                <button class="accordion">Section 1</button>
                <div class="panel">
                    <p>Lorem ipsum...</p>
                </div>

                <button class="accordion">Section 2</button>
                <div class="panel">
                    <p>Lorem ipsum...</p>
                </div>
                
                

            </div>

           <Footer/>
        </div> 
    )
}

export default Event

let styles = {
    main:{
        display: 'flex',
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


    img1:{
        width:'60%',
        marginBottom: '2vh'
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
        width:'40%',
        margin:'5vh',

    },

    imgs2:{
        height: '30vh',
        width: '45vh',
        padding: '5vh',
        paddingBottom: '0vh',
        borderRadius:'7vh',
        
    },
}