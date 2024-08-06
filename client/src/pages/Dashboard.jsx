import React, { useEffect, useState } from 'react';
import "../styles/Dashboard.css";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from './Header.jsx';
import CardTab from './CardTab.jsx';
import MainContent from './MainContent.jsx';
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const [token, setToken] = useState(localStorage.getItem("auth") || "");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.name); // Assuming the JWT contains the name field
      } catch (error) {
        console.error("Invalid token:", error);
        setUsername("");
      }
    }
  }, [token]);

  return (
    <div className='dashboard-main'>
      <Header name={username} />
      <MainContent />
      <CardTab />
      <div className='logout-predict'>
        <Link to="/logout" className="logout-button">Logout</Link>
        <Link to="/predict" className="logout-button">Predict</Link>
      </div>
    </div>
  );
};

export default Dashboard;
