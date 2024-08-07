import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Event from "./pages/Event";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext"; // Add this import

function App() {
  return (
    <UserProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="/events" element={<Event />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
