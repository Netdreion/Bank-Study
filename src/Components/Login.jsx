import { useState } from "react";

const Login = ({
  userSetup,
  handleLogin,
  user,
  setUser,
  userName,
  password,
}) => {
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
        value={userName}
        placeholder="user-name"
        onChange={handleChange}
      ></input>
      <input
        name="password"
        value={password}
        placeholder="password"
        onChange={handleChange}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
