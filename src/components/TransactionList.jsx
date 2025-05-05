
import React from "react";

const TransactionList = ({ transactions, onDelete }) => {
  const listContainerStyle = {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#333",
  };

  const emptyStateStyle = {
    textAlign: "center",
    color: "#888",
    padding: "20px 0",
  };

  const transactionItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #eee",
  };

  const transactionInfoStyle = {
    flex: 1,
  };

  const descriptionStyle = {
    fontSize: "1rem",
    fontWeight: "500",
    color: "#333",
    marginBottom: "4px",
  };

  const dateStyle = {
    fontSize: "0.75rem",
    color: "#888",
  };

  const amountStyle = {
    fontWeight: "bold",
    fontSize: "1rem",
    marginLeft: "16px",
  };

  const deleteButtonStyle = {
    backgroundColor: "transparent",
    color: "#e74c3c",
    border: "none",
    cursor: "pointer",
    marginLeft: "16px",
    fontSize: "0.875rem",
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div style={listContainerStyle}>
      <h2 style={titleStyle}>Transaction History</h2>
      
      {transactions.length === 0 ? (
        <div style={emptyStateStyle}>
          No transactions yet. Add a transaction to get started!
        </div>
      ) : (
        transactions.map((transaction) => (
          <div key={transaction.id} style={transactionItemStyle}>
            <div style={transactionInfoStyle}>
              <div style={descriptionStyle}>{transaction.description}</div>
              <div style={dateStyle}>{formatDate(transaction.date)}</div>
            </div>
            <div
              style={{
                ...amountStyle,
                color: transaction.type === "income" ? "#2ecc71" : "#e74c3c",
              }}
            >
              {transaction.type === "income" ? "+" : "-"}
              {formatCurrency(transaction.amount)}
            </div>
            <button
              style={deleteButtonStyle}
              onClick={() => onDelete(transaction.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;
