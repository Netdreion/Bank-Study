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

  const [show, setShow] = useState({
    loggedInShow: false,
    filterShow: false,
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
      />
      {show.loggedInShow && (
        <Context
          accountBalance={accountBalance}
          name={userSetup.userName}
          acountNo={userSetup.acountNo}
        />
      )}
      {show.loggedInShow && (
        <button onClick={() => setShow({ ...show, filterShow: true })}>
          {" "}
          TransactionFilters
        </button>
      )}
      {show.filterShow && (
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
