import React, {useState, useEffect, StyleSheet} from 'react';

function Footer(){


    return(
        <div style={styles.main}>
            <div style={styles.alignRow}>
                {/* Humber Address */}
                <div style={styles.alignRow}>
                    <div style={styles.alignColumn}>
                        <h4>Humber College Events</h4>
                        <div>205 Humber College Blvd.,</div>
                        <div>Toronto, Ontario, </div>
                        <div>Canada M9W 5L7</div>
                    </div>

                    {/* Links */}
                    <div style={styles.alignColumn}>
                    <a href="Events" style={styles.links}>Home</a>
                    <a href="Events" style={styles.links}>Events</a>
                    <a href="Events" style={styles.links}>My Account</a>
                    <a href="Events" style={styles.links}>Logout</a>
                    </div>
                </div>
                {/* Logos */}
                <div>
                    <a href="Home" ><img style={styles.logo} src="./images/logos/LogoPhraseGrey.png" alt="Humber Events Logo" /></a>
                </div>

                {/* Icons */}
                <div>
                    <p>/[ICONS HERE/]</p>
                </div>
            </div>

        </div>
    )
}

export default Footer

let styles = {
    main:{
        display: 'row',
        flexDirection:'column',
        backgroundColor: '#777B89',
        width:'100%',
        color: 'white'
    },

    links:{
        textDecoration: 'none',
        color: 'white'
    },

    logo:{
        width: '40%'
    },

    alignRow:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft: '2vh',
        marginRight: '1vh',
    },

    alignColumn:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        textAlign: 'left',
        marginLeft: '2vh',
        marginRight: '1vh',

    }
}