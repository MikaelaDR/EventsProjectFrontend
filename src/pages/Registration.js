import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "../App.css";
import { useNavigate } from "react-router";
import Alert from 'react-bootstrap/Alert';

function Registration() {

  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessages(response.data);
      setError("")
      navigate('/login', {messages});
    } catch (error) {
      if (error.response) {
        setError("Error: " + (error.response.data || "An error occurred"));
      } else if (error.request) {
        setError("Error: No response received from server");
      } else {
        setError("Error: " + error.message);
      }
    }
  };

    //Error Handling outside of backend
    const errorHandler= ()=>{
        if (error== null){
            setShowLoginAlert(false)
        }
        else if (formData.email =="" || formData.first_name=="" || formData.last_name==""){
            setError('Error: Please fill in all fields.')
            setShowLoginAlert(true)
        }else setShowLoginAlert(true)
    }

    //Error Alert 
    const [messages, setMessages] =useState("")
    const[error, setError] = useState("")
    const [showLoginAlert, setShowLoginAlert] = useState(false)

  function LoginAlert(props) {
    return (
      <>
          <Alert variant ="danger" >
          <img
                style={{width:'2.5vh', marginRight:'2vh'}}
                src="./images/icons/x_icon.png"
                alt="Green checkmark"
            />
            <span>{props.errors}</span>
          </Alert>
      </>
    );
  }


  return (
    <div style={styles.main}>
      <div style={styles.mainContainer}>
        <div style={styles.mainSub}>
          <div style={styles.section1}>
            <div>
                {/* LOGO */}
              <a href="/">
                <img
                  style={styles.logo}
                  src="./images/logos/LogoPhraseBlue.png"
                  alt="Humber Events Logo"
                />
              </a>
            </div>
            <div style={styles.titleContainer}>
              <h1 style={styles.title}>Let's get you connected!</h1>
            </div>
            <form onSubmit={handleSubmit}>
            {
                showLoginAlert? (<div style={{width:'90%', display:'flex', justifyContent:'center'}}>
                <LoginAlert errors ={error}/>
              </div>):null
              }
              <div>
                <input
                  style={styles.emailInput}
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={styles.rowMe}>
                <input
                  style={styles.input}
                  name="first_name"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  style={styles.input}
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div style={styles.rowMe}>
                <input
                  style={styles.input}
                  name="username"
                  placeholder="Username/Club name"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <input
                  style={styles.input}
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={styles.rowMe}>
                <select
                  style={styles.selectInput}
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option>Choose Role</option>
                  <option value="student">Student</option>
                  <option value="club">Club</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              
              
              <div style={styles.button1div}>
                <button type="submit" onClick={errorHandler} style={styles.button1}>
                  Register
                </button>
              </div>
              <div style={styles.loginDiv}>
                <p style={styles.text}>Already have an account? </p>
                <a href="/Login" style={styles.loginLink}>
                  {" "}
                  Login Here
                </a>
              </div>
            </form>
          </div>
          <div style={styles.section2}>
            <div style={styles.img}>
              <img
                src="./images/studentBookClub.jpg"
                alt="Humber Events Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registration;

let styles = {
  main: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    width: "100%",
    color: "white",
  },
  mainContainer: {
    backgroundColor: "#D5AA30",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  mainSub: {
    margin: "8vh",
    display: "flex",
    flexDirection: "row",
    border: "white 2vh solid",
    borderRadius: "5vh",
    wrap: "flex-wrap",
  },
  section1: {
    backgroundColor: "#14234B",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  section2: {
    wrap: "flex-wrap",
    backgroundColor: "#D5AA30",
    height: "auto",
  },
  logo: {
    alignItems: "center",
    width: "15vh",
  },
  titleContainer: {
    width: "60%",
  },
  title: {
    color: "#FFBA00",
    fontSize: "6vh",
    textAlign: "center",
  },
  img: {
    opacity: "43%",
    height: "100%",
    margin: "1vh",
    height: "auto",
  },
  emailInput: {
    textDecoration: "none",
    width: "96%",
    borderRadius: "0.7vh",
    textAlign: "center",
    color: "#D5AA30",
    padding: "0.5vh",
    fontSize: "3vh",
    marginBottom: "1vh",
    marginRight: "1vh",
    marginLeft: "1vh",
  },
  input: {
    textDecoration: "none",
    width: "50%",
    borderRadius: "0.7vh",
    textAlign: "center",
    color: "#D5AA30",
    padding: "0.5vh",
    fontSize: "3vh",
    marginBottom: "1vh",
    marginRight: "1vh",
    marginLeft: "1vh",
  },
  selectInput: {
    fontSize: "3vh",
    width: "50%",
  },
  rowMe: {
    display: "flex",
    flexDirection: "row",
  },
  button1: {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#D4A82A",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    paddingRight: "5vh",
    paddingLeft: "5vh",
    borderRadius: "1vh",
    fontSize: "3vh",
    fontWeight: "700",
    alignContent: "center",
  },
  button1div: {
    marginTop: "2vh",
    marginBottom: "2vh",
    display: "flex",
    justifyContent: "center",
  },
  loginLink: {
    paddingLeft: "1vh",
    fontSize: "2vh",
    color: "white",
  },
  text: {
    fontSize: "2vh",
    fontWeight: "600",
  },
  loginDiv: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
};
