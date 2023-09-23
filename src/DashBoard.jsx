import { useState } from "react";
import "./App.css";
import Login from "./Components/Login.jsx";
import Context from "./Components/Context.jsx";
import TransactionFilters from "./Components/TransactionFilters.jsx";
import TransactionHistory from "./Components/TransactionHistory.jsx";
import data from "./Components/Data.jsx";

const DashBoard = () => {
  const userSetup = {
    userName: "oz",
    password: "1234",
    acountNo: "*******73",
  };
  Object.freeze(userSetup);

  const [loggedIn, setLoggedIn] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  // state for the user login form
  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });
  const [output, setOutput] = useState([]);

  // when clicked the button compare
  // the userSetup object to the loginForm state object for password and userName
  const handleLogin = () => {
    if (
      loginForm.userName === userSetup.userName &&
      loginForm.password === userSetup.password
    ) {
      setLoggedIn(true);
      alert("login succesfull");
    } else {
      alert("enter a valid username & password");
      setLoggedIn(false);
    }
  };

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
    <>
      <Login
        setLoginForm={setLoginForm}
        password={loginForm.password}
        userName={loginForm.userName}
        handleLogin={handleLogin}
        // loginForm={loginForm}
        // userSetup={userSetup}
      />
      {loggedIn && (
        <Context
          accountBalance={accountBalance}
          name={userSetup.userName}
          acountNo={userSetup.acountNo}
        />
      )}
      {loggedIn && (
        <button onClick={() => setShowFilter(true)}> TransactionFilters</button>
      )}
      {showFilter && (
        <div>
          <TransactionFilters
            date={date}
            filter={filter}
            output={output}
            startDate={date.startDate}
            endDate={date.endDate}
            setOutput={setOutput}
            setDate={setDate}
          />
          <TransactionHistory />
        </div>
      )}
    </>
  );
};

export default DashBoard;
