import React, { useState } from "react";

const TransactionFilters = () => {
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

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
    </div>
  );
};

export default TransactionFilters;
