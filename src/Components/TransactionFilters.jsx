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
      // Assuming datadate is an object with a 'date' property, adjust this condition accordingly
      return (
        datadate.description >= date.startDate && datadate.date <= date.endDate
      );
    });
    setOutput(filteredData);
  };

  return (
    <div>
      <input
        placeholder="start-date"
        value={date.startDate}
        onChange={(e) => {
          setDate({ ...date, startDate: e.target.value });
        }}
      ></input>
      <input
        placeholder="end-date"
        value={date.endDate}
        onChange={(e) => setDate({ ...date, endDate: e.target.value })}
      ></input>
      <button onClick={() => filter()}>Filter</button>
      <div>
        {output.map((item, index) => (
          <div key={index}>
            <ul>
              <li>{item.date}</li>
              <li>{item.description}</li>
              <li>{item.amount}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionFilters;
