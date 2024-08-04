import React, {useState, useEffect, StyleSheet} from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';


function Home(){


    return(
        <div style={styles.main}>
            <Header/>
            {/* Section 1 */}
            
            <div style={styles.section1} >
                <div style={styles.section1}>
                    <h1 style={styles.title}>Welcome to Humber Events</h1>
                    <h3 style={styles.subtitle}>Where Connections Happen.</h3>
                </div>
                <img style={styles.img1} src="./images/groupOutdoors.jpg" alt="Students outdoors on campus talking" />
                <div style ={styles.button1div}><a href="events" style={styles.button1}>Connect</a></div>
            </div>

            <div style={styles.dividerYellow}/>

            {/* Section 1 */}
            <div style={styles.section2}>
                <div>
                    <img style={styles.imgs2} src="./images/paint night.jpg" alt="Students painting at paint night event" />
                    <h2>Bond</h2>
                </div>
                <div>
                    <img style={styles.imgs2} src="./images/studentDance.jpg" alt="Students painting at paint night event" />
                    <h2>Engage</h2>
                </div>
                <div>
                    <img style={styles.imgs2} src="./images/studentParty1.png" alt="Students painting at paint night event" />
                    <h2>Socialize</h2>
                </div>
                

            </div>
            <div style ={styles.button1div}><a href="events" style={styles.button1}>Upcoming Events</a></div>
            <div style={styles.dividerWhite}/>

            <Footer/>
        </div>
    )
}

export default Home

let styles = {
    main:{
        display: 'flex',
        alignItems:'center',
        alignContent:'center',
        
        flexDirection:'column',
        backgroundColor: '#14234B',
        width:'100%',
        color: 'white'
    },

    section1:{
        marginTop: '10vh',
        textAlign: 'center',
    },

    title:{
        textDecoration:'none',
        margin:0,
        fontSize:'10vh',
        textShadow: '0.25vh 0.25vh 0.25vh #777B89',
        
    },

    subtitle:{
        margin:0,
        fontSize:'5vh',
        paddingBottom:'4vh'
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
        fontWeight: '700'

    },

    button1div:{
        marginTop: '2vh',
        marginBottom: '2vh',
        display: 'flex',
        justifyContent: 'center'
    },

    dividerYellow:{
        borderTop: '0.5vh solid #D4A82A',
        borderRadius: '10vh',
        width: '85%',
        marginTop: '5vh',
        marginBottom: '10vh'
    },

    dividerWhite:{
        borderTop: '0.5vh solid white',
        borderRadius: '10vh',
        width: '85%',
        marginTop: '5vh',
        marginBottom: '0.5vh'
    },

    section2:{
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        textAlign: 'center',
        fontSize: '3vh', 
        justifyContent:'center'

    },

    imgs2:{
        height: '30vh',
        width: '45vh',
        padding: '5vh',
        paddingBottom: '0vh',
        borderRadius:'7vh',
        
    },
}