
import React, { useState } from "react";
import { Transaction } from "@/types/transaction";

interface TransactionFormProps {
  onAdd: (transaction: Transaction) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("income");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!description || !amount) return;
    
    const newTransaction: Transaction = {
      id: 0, // This will be set by the parent component
      description,
      amount: parseFloat(amount),
      type,
      date: new Date(),
    };
    
    onAdd(newTransaction);
    
    // Reset form
    setDescription("");
    setAmount("");
    setType("income");
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const formTitleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#333",
  };

  const formGroupStyle = {
    marginBottom: "16px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box" as const,
  };

  const radioGroupStyle = {
    display: "flex",
    gap: "16px",
  };

  const radioLabelStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };

  const radioInputStyle = {
    marginRight: "6px",
  };

  const incomeRadioStyle = {
    color: "#2ecc71",
  };

  const expenseRadioStyle = {
    color: "#e74c3c",
  };

  const buttonStyle = {
    backgroundColor: "#33C3F0",
    color: "white",
    border: "none",
    padding: "12px 16px",
    fontSize: "1rem",
    fontWeight: "500",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  };

  return (
    <div style={formStyle}>
      <h2 style={formTitleStyle}>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="description">
            Description
          </label>
          <input
            type="text"
            id="description"
            style={inputStyle}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description..."
            required
          />
        </div>
        
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            style={inputStyle}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            step="0.01"
            min="0.01"
            required
          />
        </div>
        
        <div style={formGroupStyle}>
          <label style={labelStyle}>Type</label>
          <div style={radioGroupStyle}>
            <label style={{ ...radioLabelStyle, ...incomeRadioStyle }}>
              <input
                type="radio"
                name="type"
                value="income"
                style={radioInputStyle}
                checked={type === "income"}
                onChange={() => setType("income")}
              />
              Income
            </label>
            <label style={{ ...radioLabelStyle, ...expenseRadioStyle }}>
              <input
                type="radio"
                name="type"
                value="expense"
                style={radioInputStyle}
                checked={type === "expense"}
                onChange={() => setType("expense")}
              />
              Expense
            </label>
          </div>
        </div>
        
        <button type="submit" style={buttonStyle}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
