/**
 * NOTE:
 * - Get backend error message if login is unsuccessful? 
 */
import { useState } from "react"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [isLoggedIn] = useState(false)

    // Function on button press (error messages, login status, )
    const attempLogin=()=>{
        if (password=='' && username=='' ) {
            setErrorMessage('You must enter your password and username.')  
        }else if (password==''){
            setErrorMessage('You must enter your password.')  
        }else if (username=''){
            setErrorMessage('You must enter your username.')  
        }else{
            isLoggedIn = true
            navigate('/')
        }
    }


    return(
        
        <div style={styles.main}>
            <div style={styles.mainContainer}>
                <div style={styles.mainSub}>
                    <div style={styles.section1}>
                        
                        {/* Title */}
                        <div style={styles.titleContainer}>
                            <h1 style={styles.title}>Login</h1>
                        </div>
                        
                        {/* Form */}
                        <form>
                            <div>
                                <input style={styles.inputs} placeholder="Username"/>
                            </div>
                            <div>
                                <input style={styles.inputs} type="password" placeholder="Password"/>
                            </div>
                            <div style ={styles.button1div}><a href="# if successful home /" style={styles.button1}>Login</a></div>
                            <div style ={styles.loginDiv} >
                                <p style ={styles.text}>Don't have an account? </p> 
                                <a href="/Registration" style ={styles.loginLink}> Register Here</a>
                            </div>
                        </form>
                    </div>

                    <div style={styles.section2}>
                        <div style={styles.img}>
                            <a href="/" ><img src="./images/loginPic.png" alt="Humber Events Logo" /></a>
                        </div>
                    </div>
                

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login

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
    mainContainer:{
        backgroundColor: '#D5AA30',
        display:'flex',
        justifyContent:'center',
        width:'100%'

    },
    
    mainSub:{
        margin:'20vh',
        display:'flex',
        flexDirection:'row',
        
        border: 'white 2vh solid',
        borderRadius:'5vh',
        // height:'80%',
        wrap:'flex-wrap'
    },

    section1:{
        backgroundColor: '#D5AA30',

        display: 'flex',
        flexDirection: 'column',
        paddingRight:'3vh',
        paddingLeft:'3vh',
        justifyContent: 'center',
        alignItems:'center',
        // borderRadius:'5vh',
    },

    section2:{
        backgroundColor: '#D5AA30',
    },

    logo:{
        alignItems:'center',
        width:'15vh',
    },

    titleContainer:{
        width: '60%'
    },

    title:{
        color: '#14234B',
        fontSize: '6vh',
        textAlign: 'center',
    },

    img:{
        // opacity: '43%',
        margin:'1vh',
        height:'auto',

    }, 

    inputs:{
        textDecoration:'none',
        width: '98%',
        borderRadius:'0.7vh',
        textAlign: 'center',
        color:'#14234B',
        padding:'0.5vh',
        fontSize:'3vh',
        marginBottom:'2vh',
    },

    rowMe:{
        display: 'flex',
        flexDirection:'row',
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

