import React, {useState, useEffect, StyleSheet} from 'react';
import { Link } from 'react-router-dom';

function Header(){

    return(
        <div style={styles.main}>
            <div style={styles.menu}>
                <div style={styles.menuContainer}>
                    <div style={styles.menuPart1}>
                        
                        <div><a href="/" ><img style={styles.logo} src="./images/logos/LogoCropped.png" alt="Humber Events Logo" /></a></div>
                        <div style={styles.menuPart2}>
                            <th><a href="/" style={styles.links}>Home</a></th>
                            <th><a href="/events" style={styles.links}>Events</a></th>
                            <th> <a href="/dashboard" style={styles.links}>My Dashboard</a></th>
                        </div>
                    </div>
                    
                    
                    <div style={styles.menuPart3}>
                        <div >
                            <th><a href="/login" style={styles.links}>Login</a></th>
                            <th><a href="/registration" style={styles.registerButton}>Get Started</a></th>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

let styles = {
    main:{
        display: 'flex',
        alignItems:'center',
        flexDirection:'column',
        backgroundColor: '#14234B',
        width:'100%',
        color: 'white',
    },

    menu:{
        position: 'fixed',
        display: 'flex',
        width:'90%', 
        justifyContent: 'center',
        backgroundColor: '#D4A82A',
        borderRadius: '10vh',
        marginTop: '3vh',
        

    },

    menuContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width:'98%',
        marginLeft:'2vh',
        marginRight:'4vh'
        
    },

    logo:{
        width: '20%',
        height: '100%'
    },
    
    links:{
        color: 'white',
        textDecoration: 'none',
        fontSize:'4vh',
        padding: '2vh'
    },
    
    menuPart1:{
        display: 'flex',
        alignItems:'center',

        justifyContent:'flex-start',
        
    },

    menuPart2:{
        display:'flex',
        justifyContent:'flex-start'

    },

    

    registerButton:{
        backgroundColor:'#E9DAAF',
        color: '#14234B',
        textDecoration: 'none',
        fontSize:'4vh',
        paddingRight:'1vh',
        paddingLeft:'1vh',
    }
}