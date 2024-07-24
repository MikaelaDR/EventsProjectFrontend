import React, {useState, useEffect, StyleSheet} from 'react';
import Footer from './Footer';
import Header from './Header';

function Home(){


    return(
        <div style={styles.main}>
            <Header/>
            {/* Section 1 */}
            <div>
            <h1 style={styles.title}>Welcome to Humber Events</h1>
            <h3 style={styles.subtitle}>Where Connections Happen.</h3>
            </div>
            <div >
                <img style={styles.img1} src="./images/groupOutdoors.jpg" alt="Students outdoors on campus talking" />
                <div style ={styles.button1div}><a href="Events" style={styles.button1}>Connect</a></div>
            </div>

            <div style={styles.dividerYellow}/>

            {/* Section 1 */}
            <div style={styles.section2}>
                <div>
                    <img style={styles.img1} src="./images/paint night.jpg" alt="Students painting at paint night event" />
                    <h2>Bond</h2>
                </div>
                <div>
                    <img style={styles.img1} src="./images/studentDance.jpg" alt="Students painting at paint night event" />
                    <h2>Engage</h2>
                </div>
                <div>
                    <img style={styles.img1} src="./images/studentParty1.png" alt="Students painting at paint night event" />
                    <h2>Socialize</h2>
                </div>
                

            </div>
            <div style ={styles.button1div}><a href="Events" style={styles.button1}>Upcoming Events</a></div>
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

    title:{
        fontSize:'5vh',
        textShadow: '0.25vh 0.25vh 0.25vh #777B89'
    },

    subtitle:{
        fontSize:'3vh'
    },

    img1:{
        width:'70%',
        marginBottom: '2vh'
    },

    button1:{
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#D4A82A',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        paddingRight:'2vh',
        paddingLeft: '2vh',
        borderRadius: '10vh'

    },

    button1div:{
        marginTop: '2vh',
        marginBottom: '2vh'
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

    }
}