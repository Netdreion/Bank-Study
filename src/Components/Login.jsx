//import React from "react";

const Login = ({
  show,
  handleLogOut,
  handleLogin,
  setLoginForm,
  userName,
  password,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginForm((prevUser) => ({
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
      <button onClick={handleLogin}> {!show ? " Login" : "Logout"}</button>
    </div>
  );
};

export default Login;
