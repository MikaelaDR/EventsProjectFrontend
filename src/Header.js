import React, {useState, useEffect, StyleSheet} from 'react';
import { BiBorderRadius } from 'react-icons/bi';

function Header(){


    return(
        <div style={styles.main}>
            <div style={styles.menu}>
                <div style={styles.menuPart1}>
                    <div><a href="Home" ><img style={styles.logo} src="./images/logos/LogoPhraseYellow.png" alt="Humber Events Logo" /></a></div>
                    <div><a href="Events" style={styles.links}>Events</a></div>
                </div>
                <div style={styles.menuPart2}>
                    <a href="Login" style={styles.links}>Login</a>
                    <a href="Register" style={styles.registerButton}>Get Started</a>
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
        color: 'white'
    },

    menu:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width:'90%', 
        backgroundColor: '#D4A82A',
        borderRadius: '10vh',
        marginTop: '3vh'

    },

    logo:{
        width: '20%'
    },
    
    links:{
        color: 'white',
        textDecoration: 'none',
        fontSize:'4vh'
    },
    
    menuPart1:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        
    },

    menuPart2:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-end',

    },

    registerButton:{
        backgroundColor:'#E9DAAF',
        color: '#14234B',
        
        textDecoration: 'none',
        fontSize:'4vh'
    }
}