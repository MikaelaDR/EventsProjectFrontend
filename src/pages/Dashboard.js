import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header";
import '../App.css';



function Dashboard(){
   

    return(
        
        <div style={styles.main}>
            <Header/>
            <div style={styles.mainContainer}>
                <div style={styles.mainSub}>
                    <div style={styles.section1}>
                        {/* Logo */}
                        <div>
                            <a href="/" ><img style={styles.logo} src="./images/logos/humberLogoColor.png" alt="Humber Events Logo" /></a>
                        </div>
                        {/* Title */}
                        <div style={styles.titleContainer}>
                            <h1 style={styles.title}>[username]'s Events</h1>
                        </div>
                    </div>
                    {/* Image */}
                    <div style={styles.section2}>
                        <p style={{fontSize:'4vh', alignContent:'center'}}>You haven't registered for any events. </p>
                        <div><a href="/events" style ={styles.loginLink}> Browse Events</a></div>
                    </div>
                

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard

let styles = {
    main:{
        display: 'flex',
        alignItems:'center',
        alignContent:'center',
        flexDirection:'column',
        //backgroundColor: '#D5AA30',
        width:'100%',
        color: 'white'
    },
    mainContainer:{
        backgroundColor: '#14234B',
        display:'flex',
        justifyContent:'center',
        width:'100%'

    },
    
    mainSub:{
        
        minHeight: '70vh',
        margin:'20vh',
        display:'flex',
        flexDirection:'row',
        width:'80%',
        border: 'white 2vh solid',
        borderRadius:'5vh',
        wrap:'flex-wrap',
        backgroundColor: '#777B89'
    },

    section1:{
        display: 'flex',
        justifyContent:'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        margin:'2vh',
        flex:1
        
    },

    section2:{
        borderLeft: 'white 2vh solid',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        padding:'2vh',
        backgroundColor: '#D5AA30',
        height:'auto',
        // width:'100%',
        flex:3
    },

    logo:{
        alignItems:'center',
        width:'15vh',
        borderRadius:'10vh',
        width:'30vh'
    },

    titleContainer:{
        width: '60%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

    title:{
        color: 'white',
        fontSize: '5vh',
        textAlign: 'center',
        flexWrap:'wrap'
    },

    img:{
        opacity: '43%',
        height:'100%',
        margin:'1vh',
        height:'auto',

    }, 

    emailInput:{
        textDecoration:'none',
        width: '96%',
        borderRadius:'0.7vh',
        textAlign: 'center',
        color:'#D5AA30',
        padding:'0.5vh',
        fontSize:'3vh',
        marginBottom:'1vh',
        marginRight:'1vh',
        marginLeft:'1vh',
    },

    input:{
        textDecoration:'none',
        width: '50%',
        borderRadius:'0.7vh',
        textAlign: 'center',
        color:'#D5AA30',
        padding:'0.5vh',
        fontSize:'3vh',
        marginBottom:'1vh',
        marginRight:'1vh',
        marginLeft:'1vh',
    },

    selectInput:{
        fontSize:'3vh',
        width:'4vh'
    },

    rowMe:{
        display: 'flex',
        flexDirection:'row',
    },
    button1:{
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
        marginTop: '2vh',
        marginBottom: '2vh',
        display: 'flex',
        justifyContent: 'center'
    },

    loginLink:{
        paddingLeft:'1vh',
        fontSize:'2vh',
        color:'white'
    },

    text:{
        fontSize:'2vh',
        fontWeight:'600'
    },

    loginDiv:{
        
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }


}
