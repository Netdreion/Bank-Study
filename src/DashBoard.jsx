import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login.jsx";
import Context from "./Components/Context.jsx";
import TransactionFilters from "./Components/TransactionFilters.jsx";
import TransactionHistory from "./Components/TransactionHistory.jsx";
import data from "./Components/Data.jsx";
import Investing from "./Components/Investing";

const DashBoard = () => {
  const userSetup = {
    userName: "oz",
    password: "1234",
    acountNo: "*******73",
  };

  const [show, setShow] = useState({
    loggedInShow: false,
    filterShow: false,
    historyShow: false,
  });

  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });

  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
  });

  const [output, setOutput] = useState([]);

  //  if logged in then next click should be logout
  // if already logged out then try to login using the validation logic
  const handleLogin = () => {
    if (
      loginForm.userName === userSetup.userName &&
      loginForm.password === userSetup.password
    ) {
      setShow({ ...show, loggedInShow: true });
      alert("Login successful");
    } else {
      alert("Enter a valid username & password");
      setShow({ ...show, loggedInShow: false });
      setLoginForm({ ...loginForm, userName: "", password: "" });
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
    359
  );
  const resetState = () => {
    setShow({
      loggedInShow: false,
      filterShow: false,
      historyShow: false,
    });
    setLoginForm({ userName: "", password: "" });
    setDate({ startDate: "", endDate: "" });
    setOutput([]);
  };

  return (
    <div className="dashboard-container">
      <div className="login-container">
        <Login
          setLoginForm={setLoginForm}
          password={loginForm.password}
          userName={loginForm.userName}
          handleLogin={handleLogin}
          loggedInShow={show.loggedInShow}
          setShow={setShow}
          loginForm={loginForm}
          resetState={resetState}
        />
      </div>
      {show.loggedInShow && (
        <Context
          accountBalance={accountBalance}
          name={userSetup.userName}
          acountNo={userSetup.acountNo}
        />
      )}
      {show.loggedInShow && <Investing filterShow={show.filterShow} />}
      {show.loggedInShow && (
        <button
          className="filter-button"
          onClick={() => setShow({ ...show, filterShow: !show.filterShow })}
        >
          {show.filterShow
            ? "Close Transaction filter"
            : "View Transaction filter"}
        </button>
      )}
      {show.filterShow && (
        <div className="filter-container">
          <TransactionFilters
            date={date}
            filter={filter}
            output={output}
            startDate={date.startDate}
            endDate={date.endDate}
            setOutput={setOutput}
            setDate={setDate}
            loggedInShow={show.loggedInShow}
          />
          {show.loggedInShow && <Investing />}

          <button
            className="history-button"
            onClick={() => setShow({ ...show, historyShow: !show.historyShow })}
          >
            {show.historyShow
              ? "Close Transaction History"
              : "View Transaction History"}
          </button>

          {show.historyShow && (
            <TransactionHistory loggedInShow={show.loggedInShow} />
          )}
        </div>
      )}
    </div>
  );
};

export default DashBoard;
