import { useState } from "react";
import TransactionHistory from "./components/TransactionHistory";
import "./App.css";
import TransactionFilters from "./components/TransactionFilters";

function App() {
  return (
    <>
      <TransactionFilters />
      <TransactionHistory />
    </>
  );
}

export default App;
