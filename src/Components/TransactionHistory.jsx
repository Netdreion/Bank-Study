import React from "react";
import data from "./components/Data.jsx";

const TransactionHistory = () => {
  return (
    <div>
      {data.map((transaction) => {
        return <li key={id}>{transaction}</li>;
      })}
    </div>
  );
};

export default TransactionHistory;
