const TransactionFilters = ({
  date,
  filter,
  accountBalance,
  output,
  setOutput,
  startDate,
  endDate,
  setDate,
  loggedInShow,
}) => {
  return (
    <div className="container">
      <div className="select-container">
        <select
          value={startDate}
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
          value={endDate}
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
