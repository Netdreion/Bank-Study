import { useState } from "react";
import Login from "./components/Login";

import "./App.css";
import TransactionFilters from "./components/TransactionFilters";

function App() {
  return (
    <>
      <Login />
      <TransactionFilters />
    </>
  );
}

export default App;
