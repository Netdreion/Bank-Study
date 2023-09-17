import React, { useState } from "react";
import data from "./Data";

const TransactionFilters = () => {
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });
  const [output, setOutput] = useState([]);

  const filter = () => {
    const filteredData = data.filter((datadate) => {
      return datadate.date >= date.startDate && datadate.date <= date.endDate;
    });
    setOutput(filteredData);
  };

  const accountBalance = output.reduce(
    (total, transaction) => (total += transaction.amount),
    0
  );

  return (
    <div className="container">
      <div className="select-container">
        <select
          value={date.startDate}
          onChange={(e) => setDate({ ...date, startDate: e.target.value })}
        >
          <option value="">Select Start Date</option>
          <option value={"2023-09-15"}>2023-09-15</option>
          <option value={"2023-09-16"}>2023-09-16</option>
          <option value={"2023-09-17"}>2023-09-17</option>
          <option value={"2023-09-18"}>2023-09-18</option>
          <option value={"2023-09-19"}>2023-09-19</option>
        </select>
        <select
          value={date.endDate}
          onChange={(e) => setDate({ ...date, endDate: e.target.value })}
        >
          <option value="">Select End Date</option>
          <option value={"2023-09-15"}>2023-09-15</option>
          <option value={"2023-09-16"}>2023-09-16</option>
          <option value={"2023-09-17"}>2023-09-17</option>
          <option value={"2023-09-18"}>2023-09-18</option>
          <option value={"2023-09-19"}>2023-09-19</option>
        </select>
        <div className="button-container">
          <button onClick={() => filter()}>Filter</button>
        </div>
        <div className="results">
          <div>Account Balance:{accountBalance}</div>
          <ul>
            {output.map((item, index) => (
              <div key={index}>
                <ul>
                  <li>{item.description}</li>
                  <li>{item.amount}</li>
                  <li>{item.date}</li>
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransactionFilters;
