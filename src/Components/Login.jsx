import { useState } from "react";

const Login = () => {
  const userSetup = {
    userName: "oz",
    password: "1234",
  };
  Object.freeze(userSetup);

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleLogin = () => {
    if (
      user.userName === userSetup.userName &&
      user.password === userSetup.password
    ) {
      alert("login succesfull");
    } else {
      alert("enter a valid username & password");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        name="userName"
        value={user.userName}
        placeholder="user-name"
        onChange={handleChange}
      ></input>
      <input
        name="password"
        value={user.password}
        placeholder="password"
        onChange={handleChange}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
