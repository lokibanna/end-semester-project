
import React, { useState, useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import { Transaction } from "@/types/transaction";

const Index: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  // Load transactions from localStorage on initial render
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  // Calculate balance, income, and expense
  const income = transactions
    .filter(transaction => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter(transaction => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expense;

  const appContainerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center" as const,
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "24px",
  };

  return (
    <div style={appContainerStyle}>
      <h1 style={titleStyle}>Money Mind</h1>
      <div style={contentStyle}>
        <Dashboard balance={balance} income={income} expense={expense} />
        <TransactionForm onAdd={addTransaction} />
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      </div>
    </div>
  );
};

export default Index;
