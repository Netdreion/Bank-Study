import { useState } from "react";
import Login from "./components/Login";

import "./App.css";
import TransactionFilters from "./components/TransactionFilters";

function DashBoard() {
  const userSetup = {
    userName: "oz",
    password: "1234",
  };
  Object.freeze(userSetup);

  const [loggedIn, setLoggedIn] = useState(false);

  // state for the user login form
  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });

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
      {loggedIn && <TransactionFilters />}
    </>
  );
}

export default DashBoard;
