
import React from "react";
import { useNavigate } from "react-router-dom";
import { PiggyBank, PieChart, TrendingUp } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
  };

  const heroStyle = {
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    borderRadius: "12px",
    padding: "60px 20px",
    marginBottom: "40px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  };

  const subheadingStyle = {
    fontSize: "1.25rem",
    color: "#555",
    marginBottom: "32px",
    maxWidth: "800px",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    background: "#33C3F0",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "14px 28px",
    fontSize: "1.1rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(51, 195, 240, 0.2)",
  };

  const featuresStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "0 20px",
  };

  const featureCardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease",
  };

  const iconContainerStyle = {
    backgroundColor: "#f0f9ff",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(51, 195, 240, 0.15)",
  };

  const featureTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  };

  const featureDescStyle = {
    color: "#666",
    lineHeight: "1.7",
    fontSize: "1.05rem",
  };

  return (
    <div style={containerStyle}>
      <section style={heroStyle}>
        <h1 style={headingStyle}>Money Mind</h1>
        <p style={subheadingStyle}>
          Take control of your personal finances with our simple, intuitive
          tracking tool. Monitor your spending, manage your budget, and meet your
          financial goals with ease.
        </p>
        <button 
          style={buttonStyle} 
          onClick={() => navigate("/dashboard")}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#28A7D3";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#33C3F0";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Get Started
        </button>
      </section>

      <section style={featuresStyle}>
        <div 
          style={featureCardStyle}
          onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={iconContainerStyle}>
            <PiggyBank size={40} color="#33C3F0" />
          </div>
          <h2 style={featureTitleStyle}>Easy Tracking</h2>
          <p style={featureDescStyle}>
            Quickly add your income and expenses with our simple interface.
            Keep track of every dollar coming in and going out.
          </p>
        </div>

        <div 
          style={featureCardStyle}
          onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={iconContainerStyle}>
            <TrendingUp size={40} color="#33C3F0" />
          </div>
          <h2 style={featureTitleStyle}>Financial Insights</h2>
          <p style={featureDescStyle}>
            See your financial health at a glance with our intuitive dashboard.
            Know exactly where your money is going.
          </p>
        </div>

        <div 
          style={featureCardStyle}
          onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div style={iconContainerStyle}>
            <PieChart size={40} color="#33C3F0" />
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
