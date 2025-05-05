
import React from "react";
import { useNavigate } from "react-router-dom";
import { PiggyBank, PieChart, TrendingUp } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const containerStyle = {
    fontFamily: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };

  const heroStyle = {
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    borderRadius: "12px",
    padding: "40px 20px",
    marginBottom: "40px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  };

  const subheadingStyle = {
    fontSize: "1.25rem",
    color: "#666",
    marginBottom: "32px",
    maxWidth: "800px",
  };

  const buttonStyle = {
    background: "#33C3F0",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "12px 24px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  };

  const featuresStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "0 20px",
  };

  const featureCardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "24px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const iconContainerStyle = {
    backgroundColor: "#f0f9ff",
    borderRadius: "50%",
    width: "64px",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  };

  const featureTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "12px",
  };

  const featureDescStyle = {
    color: "#666",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <section style={heroStyle}>
        <h1 style={headingStyle}>Money Mind</h1>
        <p style={subheadingStyle}>
          Take control of your personal finances with our simple, intuitive
          tracking tool. Monitor your spending, manage your budget, and meet your
          financial goals.
        </p>
        <button 
          style={buttonStyle} 
          onClick={() => navigate("/dashboard")}
          onMouseOver={(e) => e.currentTarget.style.background = "#28A7D3"}
          onMouseOut={(e) => e.currentTarget.style.background = "#33C3F0"}
        >
          Get Started
        </button>
      </section>

      <section style={featuresStyle}>
        <div style={featureCardStyle}>
          <div style={iconContainerStyle}>
            <PiggyBank size={32} color="#33C3F0" />
          </div>
          <h2 style={featureTitleStyle}>Easy Tracking</h2>
          <p style={featureDescStyle}>
            Quickly add your income and expenses with our simple interface.
            Keep track of every dollar coming in and going out.
          </p>
        </div>

        <div style={featureCardStyle}>
          <div style={iconContainerStyle}>
            <TrendingUp size={32} color="#33C3F0" />
          </div>
          <h2 style={featureTitleStyle}>Financial Insights</h2>
          <p style={featureDescStyle}>
            See your financial health at a glance with our intuitive dashboard.
            Know exactly where your money is going.
          </p>
        </div>

        <div style={featureCardStyle}>
          <div style={iconContainerStyle}>
            <PieChart size={32} color="#33C3F0" />
          </div>
          <h2 style={featureTitleStyle}>Smart Budgeting</h2>
          <p style={featureDescStyle}>
            Set budgets and track your progress. Get insights to help you save
            more and spend wisely.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
