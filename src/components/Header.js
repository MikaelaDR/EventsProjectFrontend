import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div style={styles.main}>
      <div style={styles.menu}>
        <div style={styles.menuContainer}>
          <div style={styles.menuPart1}>
            <div>
              <Link to="/">
                <img
                  style={styles.logo}
                  src="./images/logos/LogoCropped.png"
                  alt="Humber Events Logo"
                />
              </Link>
            </div>
            <div style={styles.menuPart2}>
              <th>
                <Link to="/" style={styles.links}>
                  Home
                </Link>
              </th>
              <th>
                <Link to="/events" style={styles.links}>
                  Events
                </Link>
              </th>
              <th>
                <Link to="/dashboard" style={styles.links}>
                  My Dashboard
                </Link>
              </th>
            </div>
          </div>

          <div style={styles.menuPart3}>
            {user ? (
              <>
                <span style={styles.welcomeText}>
                  Welcome, {user.first_name}
                </span>
                <button onClick={handleLogout} style={styles.logoutButton}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <th>
                  <Link to="/login" style={styles.links}>
                    Login
                  </Link>
                </th>
                <th>
                  <Link to="/registration" style={styles.registerButton}>
                    Get Started
                  </Link>
                </th>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

let styles = {
  main: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#14234B",
    width: "100%",
    color: "white",
  },

  menu: {
    position: "fixed",
    display: "flex",
    width: "90%",
    justifyContent: "center",
    backgroundColor: "#D4A82A",
    borderRadius: "10vh",
    marginTop: "3vh",
  },

  menuContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "98%",
    marginLeft: "2vh",
    marginRight: "4vh",
  },

  logo: {
    width: "20%",
    height: "100%",
  },

  links: {
    color: "white",
    textDecoration: "none",
    fontSize: "4vh",
    padding: "2vh",
  },

  menuPart1: {
    display: "flex",
    alignItems: "center",

    justifyContent: "flex-start",
  },

  menuPart2: {
    display: "flex",
    justifyContent: "flex-start",
  },

  registerButton: {
    backgroundColor: "#E9DAAF",
    color: "#14234B",
    textDecoration: "none",
    fontSize: "4vh",
    paddingRight: "1vh",
    paddingLeft: "1vh",
  },

  welcomeText: {
    color: "white",
    fontSize: "3vh",
    marginRight: "2vh",
  },

  logoutButton: {
    backgroundColor: "#E9DAAF",
    color: "#14234B",
    border: "none",
    padding: "1vh 2vh",
    fontSize: "3vh",
    cursor: "pointer",
    borderRadius: "5px",
  },
};
