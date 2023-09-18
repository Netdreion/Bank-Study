import { useState } from "react";
import Login from "./components/Login";

import "./App.css";
import TransactionFilters from "./components/TransactionFilters";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Login />
      {login && <TransactionFilters />}
    </>
  );
}

export default App;
