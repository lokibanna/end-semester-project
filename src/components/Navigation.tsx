
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    marginBottom: "24px",
    borderBottom: "1px solid #eee",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  };

  const linksStyle = {
    display: "flex",
    gap: "24px",
  };

  const linkStyle = {
    color: "#666",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s ease",
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
          onMouseOver={(e) => e.currentTarget.style.color = "#33C3F0"}
          onMouseOut={(e) => e.currentTarget.style.color = location.pathname === "/" ? "#33C3F0" : "#666"}
        >
          Home
        </Link>
        <Link 
          to="/dashboard" 
          style={location.pathname === "/dashboard" ? activeLinkStyle : linkStyle}
          onMouseOver={(e) => e.currentTarget.style.color = "#33C3F0"}
          onMouseOut={(e) => e.currentTarget.style.color = location.pathname === "/dashboard" ? "#33C3F0" : "#666"}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
