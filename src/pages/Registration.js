import React from "react"
import Footer from "../components/Footer"

import '../App.css';



function Registration(){
   

    return(
        
        <div style={styles.main}>
            <div style={styles.mainContainer}>
                <div style={styles.mainSub}>
                    <div style={styles.section1}>
                        {/* Logo */}
                        <div>
                            <a href="Home" ><img style={styles.logo} src="./images/logos/LogoPhraseBlue.png" alt="Humber Events Logo" /></a>
                        </div>
                        {/* Title */}
                        <div style={styles.titleContainer}>
                            <h1 style={styles.title}>Let's get you connected!</h1>
                        </div>
                        
                        {/* Form */}
                        <form>
                            <div>
                                <input style={styles.emailInput} placeholder="Email"/>
                            </div>
                            <div style={styles.rowMe}>
                                <input style={styles.input} placeholder="First Name"/>
                                <input style={styles.input} placeholder="Last Name"/>
                            </div>
                            <div style={styles.rowMe}>
                                <input style={styles.input} placeholder="Username"/>
                                <input style={styles.input} placeholder="Password"/>
                            </div>
                            <div style={styles.rowMe}>
                                <input style={styles.input} placeholder="ID"/>
                                <select styles={styles.selectInput}>
                                    <option>Choose Role</option>
                                    <option value="student">Student</option>
                                    <option value="club">Club</option>
                                    <option value="admin">Admin</option>
                                </select>
                            
                            </div>
                            {/* Button */}
                            <div style ={styles.button1div}><a href="Login" style={styles.button1}>Register</a></div>
                            <div style ={styles.loginDiv} >
                                <p style ={styles.text}>Already have an account? </p> 
                                <a href="Login" style ={styles.loginLink}> Login Here</a>
                            </div>
                        </form>
                    </div>
                    {/* Image */}
                    <div style={styles.section2}>
                        <div style={styles.img}>
                            <img src="./images/studentBookClub.jpg" alt="Humber Events Logo" />
                        </div>
                    </div>
                

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Registration

let styles = {
    main:{
        display: 'flex',
        alignItems:'center',
        alignContent:'center',
        flexDirection:'column',
        // backgroundColor: '#D5AA30',
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
        margin:'8vh',
        display:'flex',
        flexDirection:'row',
        // width:'80%',
        border: 'white 2vh solid',
        borderRadius:'5vh',
        // height:'80%'
        wrap:'flex-wrap'
    },

    section1:{
        backgroundColor: '#14234B',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        
    },

    section2:{
        wrap:'flex-wrap',
        backgroundColor: '#D5AA30',
        height:'auto'
    },

    logo:{
        alignItems:'center',
        width:'15vh',
    },

    titleContainer:{
        width: '60%'
    },

    title:{
        color: '#FFBA00',
        fontSize: '6vh',
        textAlign: 'center',
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