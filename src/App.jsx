import { useState } from "react";
import Login from "./components/Login";

import "./App.css";
import TransactionFilters from "./components/TransactionFilters";

function App() {
  const userSetup = {
    userName: "oz",
    password: "1234",
  };
  Object.freeze(userSetup);

  const [mount, setMount] = useState(false);

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const handleLogin = () => {
    if (
      user.userName === userSetup.userName &&
      user.password === userSetup.password
    ) {
      setMount(true);
      alert("login succesfull");
    } else {
      alert("enter a valid username & password");
      setMount(false);
    }
  };
  return (
    <>
      <Login
        setUser={setUser}
        password={user.password}
        userName={user.userName}
        user={user}
        handleLogin={handleLogin}
        userSetup={userSetup}
      />
      {mount && <TransactionFilters />}
    </>
  );
}

export default App;
