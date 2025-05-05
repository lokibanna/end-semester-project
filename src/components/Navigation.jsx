
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    marginBottom: "24px",
    borderBottom: "1px solid #eee",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
    backgroundColor: "white",
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  };

  const linksStyle = {
    display: "flex",
    gap: "30px",
  };

  const linkStyle = {
    color: "#666",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
    padding: "5px 10px",
    borderRadius: "4px",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "#33C3F0",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        Money Mind
      </Link>
      <div style={linksStyle}>
        <Link 
          to="/" 
          style={location.pathname === "/" ? activeLinkStyle : linkStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#33C3F0";
            e.currentTarget.style.backgroundColor = "#f8f9fa";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = location.pathname === "/" ? "#33C3F0" : "#666";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Home
        </Link>
        <Link 
          to="/dashboard" 
          style={location.pathname === "/dashboard" ? activeLinkStyle : linkStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#33C3F0";
            e.currentTarget.style.backgroundColor = "#f8f9fa";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = location.pathname === "/dashboard" ? "#33C3F0" : "#666";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
