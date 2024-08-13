/**
 * NOTE:
 * - Get backend error message if login is unsuccessful?
 */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserContext"; // Make sure this path is correct

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const successMessage = localStorage.getItem("registrationSuccess");
    if (successMessage) {
      alert(successMessage);
      localStorage.removeItem("registrationSuccess");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!username && !password) {
      setErrorMessage("You must enter your username and password.");
      return;
    } else if (!password) {
      setErrorMessage("You must enter your password.");
      return;
    } else if (!username) {
      setErrorMessage("You must enter your username.");
      return;
    }

    try {
      // Send a POST request to the authenticate endpoint
      const response = await axios.post(
        "http://localhost:8080/api/users/authenticate",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // If authentication is successful, store user data and navigate
      const userData = response.data;
      const userDataWithoutPassword = {
        ...userData,
        password: undefined, // Remove password from the stored user data
      };
      localStorage.setItem("user", JSON.stringify(userDataWithoutPassword));
      login(userDataWithoutPassword); // Use the login function from UserContext
      navigate("/");

    } catch (error) {
      console.error("Full error:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      if (error.response && error.response.status === 401) {
        // Authentication failed
        setErrorMessage("Invalid username or password.");
      } else if (error.response) {
        setErrorMessage(
          error.response.data.message || "An error occurred. Please try again."
        );
      } else if (error.request) {
        setErrorMessage("No response from server. Please try again later.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div style={styles.main}>
      <div style={styles.mainContainer}>
        <div style={styles.mainSub}>
          <div style={styles.section1}>
            <div style={styles.titleContainer}>
              <h1 style={styles.title}>Login</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                <input
                  style={styles.inputs}
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  style={styles.inputs}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && (
                <div style={styles.errorMessage}>{errorMessage}</div>
              )}
              <div style={styles.button1div}>
                <button type="submit" style={styles.button1}>
                  Login
                </button>
              </div>
              <div style={styles.loginDiv}>
                <p style={styles.text}>Don't have an account? </p>
                <a href="/Registration" style={styles.loginLink}>
                  {" "}
                  Register Here
                </a>
              </div>
            </form>
          </div>

          <div style={styles.section2}>
            <div style={styles.img}>
              <a href="/">
                <img src="./images/loginPic.png" alt="Humber Events Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

let styles = {
  main: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: "#14234B",
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
    margin: "20vh",
    display: "flex",
    flexDirection: "row",

    border: "white 2vh solid",
    borderRadius: "5vh",
    // height:'80%',
    wrap: "flex-wrap",
  },

  section1: {
    backgroundColor: "#D5AA30",

    display: "flex",
    flexDirection: "column",
    paddingRight: "3vh",
    paddingLeft: "3vh",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius:'5vh',
  },

  section2: {
    backgroundColor: "#D5AA30",
  },

  logo: {
    alignItems: "center",
    width: "15vh",
  },

  titleContainer: {
    width: "60%",
  },

  title: {
    color: "#14234B",
    fontSize: "6vh",
    textAlign: "center",
  },

  img: {
    // opacity: '43%',
    margin: "1vh",
    height: "auto",
  },

  inputs: {
    textDecoration: "none",
    width: "98%",
    borderRadius: "0.7vh",
    textAlign: "center",
    color: "#14234B",
    padding: "0.5vh",
    fontSize: "3vh",
    marginBottom: "2vh",
  },

  rowMe: {
    display: "flex",
    flexDirection: "row",
  },
  button1: {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#14234B",
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
