import React from "react";
import data from "./Data";

const TransactionHistory = () => {
  return (
    <div>
      <ul>
        {data.map((transaction) => {
          return (
            <li key={data.id}>
              <div>Date:{transaction.date}</div>
              <div>Description:{transaction.description}</div>
              <div>Amount:{transaction.amount}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionHistory;
