import React, {useState, useEffect, StyleSheet} from 'react';


function Footer(){


    return(
        <div style={styles.main}>
            {/* <div style={styles.alignRow}> */}
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
                    <a href="/" style={styles.links}>Home</a>
                    <a href="/Events" style={styles.links}>Events</a>
                    <a href="/Dashboard" style={styles.links}>My Dashboard</a>
                    <a href="/Login" style={styles.links}>Logout</a>
                    </div>
                </div>
                {/* Logos */}
                <div style={styles.logo}>
                    <a href="/" ><img style={styles.logo} src="./images/logos/LogoPhraseGrey.png" alt="Humber Events Logo" /></a>
                </div>

                {/* Icons */}
                <div style={styles.iconDiv}>
                    
                    <a target="_blank" href="https://x.com/humbercollege?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" ><img style={styles.icon} src="./images/icons/twitter_icon.png" alt="Twitter icon" /></a>
                    <a target="_blank" href="https://www.facebook.com/humbercollege/" ><img style={styles.icon} src="./images/icons/fb_icon.png" alt="Facebook icon" /></a>
                    <a target="_blank" href="https://www.instagram.com/humbercollege/" ><img style={styles.icon} src="./images/icons/insta_icon.png" alt="Instagram icon" /></a>
                    <a target="_blank" href="https://www.tiktok.com/@humbercollege?lang=en" ><img style={styles.icon} src="./images/icons/tiktok_icon.png" alt="Tiktok icon" /></a>
                </div>
            {/* </div> */}

        </div>
    )
}

export default Footer

let styles = {
    main:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: '#777B89',
        width:'100%',
        color: 'white',
        fontSize:'2vh'
    },

    links:{
        textDecoration: 'none',
        color: 'white'
    },

    logo:{
        flex:1,
        width: '40%'
    },

    alignRow:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginLeft: '2vh',
        marginRight: '1vh',
        flex:1,
    },

    alignColumn:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        textAlign: 'left',
        marginLeft: '2vh',
        marginRight: '1vh',
        flex:1

    },
    iconDiv:{
        flex:0.5,
        alignContent:'center',
        alinItems:'center',
        // backgroundColor:'red',
        
    },

    icon:{
        width:'10%',
        margin:'1.5vh',
        
        
    }
}