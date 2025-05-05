
import React from "react";

const Dashboard = ({ balance, income, expense }) => {
  const dashboardStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    marginBottom: "20px",
  };

  const cardStyle = {
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const balanceCardStyle = {
    ...cardStyle,
    backgroundColor: "#fff",
    borderLeft: "4px solid #33C3F0",
  };

  const incomeCardStyle = {
    ...cardStyle,
    backgroundColor: "#fff",
    borderLeft: "4px solid #2ecc71",
  };

  const expenseCardStyle = {
    ...cardStyle,
    backgroundColor: "#fff",
    borderLeft: "4px solid #e74c3c",
  };

  const labelStyle = {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#666",
    marginBottom: "8px",
  };

  const valueStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div style={dashboardStyle}>
      <div style={balanceCardStyle}>
        <div style={labelStyle}>Current Balance</div>
        <div style={{ ...valueStyle, color: balance >= 0 ? "#2ecc71" : "#e74c3c" }}>
          {formatCurrency(balance)}
        </div>
      </div>
      <div style={incomeCardStyle}>
        <div style={labelStyle}>Total Income</div>
        <div style={{ ...valueStyle, color: "#2ecc71" }}>
          {formatCurrency(income)}
        </div>
      </div>
      <div style={expenseCardStyle}>
        <div style={labelStyle}>Total Expenses</div>
        <div style={{ ...valueStyle, color: "#e74c3c" }}>
          {formatCurrency(expense)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
